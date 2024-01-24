<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'CityButton',
  props: {
    text: {
      type: String,
      required: true
    },
    value: {
      type: String
    }
  },
  computed: {...mapState(['activeCity','isPopup'])},
  methods: {
    ...mapMutations(['setPopup','setActiveCity']),
      ...mapActions(['actionActiveCity']),
  },
}

</script>

<template>
  <button class="p-5 text-xs text-cyan-200 rounded-lg border border-cyan-950 w-10/12 bg-gray-800 "
    @click="actionActiveCity(this.value)">{{text}}</button>
</template>

<style scoped>

</style>