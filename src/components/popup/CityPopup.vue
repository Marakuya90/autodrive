<script setup>
import { _axios } from '../../../services/HttpService.js'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { cities } from '@/components/popup/data.cities.js'
import store from '../../../store/store.js'
import { ref } from 'vue'

const data = {
  name: ref(),
  phone: ref(),
  email: ref()
}
let responseText
const sendForm = () => {
  let city = cities.filter(city => city.name = store.state.activeCity)
  responseText = document.querySelector('.response_block')
  _axios.post('', {
    ...data,
    city_id: city[0].id
  }).then((response) => responseText.innerHTML = response.data)
    .catch((response) => responseText.innerHTML = response.response.data)
  store.dispatch('actionSending', true)
}
const validateEmail = (value) => {
  if (!value) {
    return 'Обязательное поле'
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'Невалидный email'
  }
  return true
}
const validatePhone = (value) => {
  if (!value) {
    return 'Обязательное поле'
  }
  const regex = /^\+7\d{10}$/
  if (!regex.test(value)) {
    return 'Невалидный номер'
  }
  return true
}
const reqValue = (value) => {
  if (!value) {
    return 'Обязательное поле'
  }
  return true
}

</script>

<template>
  <div class="p-10 border rounded border-cyan-950">
    <Form novalidate class="flex flex-col items-end text-lg text-gray-400"
          @submit="sendForm"
          v-if="store.state.activeCity && !store.state.isSend">
      <label>Имя
        <Field class="custom_input" type="text" name="name" v-model="data.name" :rules="reqValue"></Field>
      </label>
      <ErrorMessage class="p-1 text-xs text-red-500" name="name"></ErrorMessage>
      <label>Телефон
        <Field class="custom_input" type="tel" name="phone" v-model="data.phone" :rules="validatePhone"></Field>
      </label>
      <ErrorMessage class="p-1 text-xs text-red-500" name="phone"></ErrorMessage>
      <label>Email
        <Field class="custom_input" type="email" name="email" v-model="data.email" :rules="validateEmail"></Field>
      </label>
      <ErrorMessage class="p-1 text-xs text-red-500" name="email"></ErrorMessage>
      <select
        class="custom_select"
        name="city_id" :value="store.state.activeCity"
        @change="(e) => store.commit('setActiveCity',e.target.value)">
        <option
          v-for="city in cities"
          :key=city.id
          :value=city.name>
          {{ city.name }}
        </option>
      </select>
      <button class="bg-gray-800 rounded-l p-3 self-center text-xs hover:bg-gray-700 hover:text-gray-50" type="submit">
        Отправить
      </button>
    </Form>
    <div class="response_block text-gray-50">
      <div class="content" v-if="store.state.isSend && responseText"></div>
    </div>
  </div>
</template>

<style scoped>
.custom_input {
  @apply border-none bg-gray-800 text-gray-50 text-xs mt-4 rounded;
  width: 170px;
  height: 28px;
}

.custom_select {
  width: 170px;
  height: 28px;
  @apply bg-gray-800 text-gray-50 mt-4 mb-4 text-xs italic hover:bg-gray-700
}
</style>