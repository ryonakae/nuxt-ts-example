<template>
  <div>
    <h1>nuxt-ts</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    this.onMounted(1234)
  },

  methods: {
    onMounted(msg: string) {
      const message: string = msg
      console.log(message)
    }
  }
})
</script>

<style scoped>
h1 {
  font-size: 10px;

  &::after {
    width: 100px;
    height: 100px;
    content: '';
    background-color: red;

    @media (--ap) {
      font-size: 10px;
      background-color: #fff;
    }
  }
}
</style>
