<template>
  <test />
  <div class="uni-class-page-a">page a</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Test from '@/components/Test.vue'

onMounted(() => {
  // @ts-expect-error
  window?.kimo('uni-string-page-a')
})
</script>

<style lang="scss" scoped>
.uni-class-page-a {
  color: red;
}
</style>
