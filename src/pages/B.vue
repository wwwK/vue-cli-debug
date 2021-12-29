<template>
  <test />
  <div class="uni-class-page-b">page b</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Test from '@/components/Test.vue'

onMounted(() => {
  // @ts-expect-error
  window?.kimo('uni-string-page-b')
})
</script>

<style lang="scss" scoped>
.uni-class-page-b {
  color: red;
}
</style>
