<template>
  <h1>Vue.extend()</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      message: '' as string
    }
  },

  mounted() {
    this.message = 'Vue.extend()'
    this.onMounted(this.message)
  },

  methods: {
    onMounted(text: string): void {
      console.log(text)
    }
  }
})
</script>
