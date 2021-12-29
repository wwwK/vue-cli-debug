<template>
  <test />
  <div class="uni-class-page-c">page c</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Test from '@/components/Test.vue'

onMounted(() => {
  // @ts-expect-error
  window?.kimo('uni-string-page-c')
})
</script>

<style lang="scss" scoped>
.uni-class-page-c {
  color: red;
}
</style>
