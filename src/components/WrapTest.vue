<template>
  <div class="uni-class-kksk-wrap">i use test component</div>
  <test />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Test from './Test.vue'

onMounted(() => {
  // @ts-expect-error
  window?.kimo('uni-string-kksk-wrap')
})
</script>

<style lang="scss" scoped>
.uni-class-kksk-wrap {
  color: red;
}
</style>
