<script>

import CityButton from '@/components/CityButton.vue'
import CityPopup from '@/components/popup/CityPopup.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: { CityPopup, CityButton },
  data() {
    return {}
  },
  computed: {
    ...mapState(['isPopup'])
  },
  methods: {
    ...mapMutations(['setPopup', 'setInitialState', 'resetStore'])
  }
}
</script>

<template>
  <div
    @click.self="resetStore(false)"
    class="min-h-screen flex justify-center items-center">
    <CityPopup v-if="isPopup"></CityPopup>
    <div v-else
         class='rounded-lg animation border border-cyan-950 transition-colors p-10'>
      <div class="flex gap-2.5">
        <CityButton
          text="Заказать в Москву"
          value="Москва"></CityButton>
        <CityButton
          value="Санкт-Петербург"
          text="Заказать в Санкт-Петербург"></CityButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes show {
  from {
    transform: scale(0.5) translateY(-30px);
    opacity: 0.4;
  }
  to {
    @apply border-transparent;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.animation {
  animation: show 0.4s ease-in-out;
}
</style>
