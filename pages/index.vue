<template>
  <div>
    <h1>nuxt-ts</h1>
    <div />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import path from 'path'

export default Vue.extend({
  mounted() {
    this.onMounted(1234)
  },

  methods: {
    onMounted(msg: string) {
      if (msg === null) {
        const message: string = msg
        console.log(message)
      }
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
