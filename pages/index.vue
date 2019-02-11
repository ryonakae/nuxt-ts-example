<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  message: string = 'hello world'

  @Emit()
  onMounted(text: string): void {
    console.log(text)
  }

  mounted() {
    this.onMounted(this.message)
    this.onMounted(true)
  }
}
</script>
