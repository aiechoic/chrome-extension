<script setup lang="ts">
import {useCounterStore} from "@/stores/counter.ts";
const counter = useCounterStore()
</script>

<template>
<div class="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
  <div class="text-4xl">
    Home Page
  </div>
  <div>Count: {{counter.count}}</div>
  <el-button type="primary" @click="counter.increment()">Increment</el-button>
  <RouterLink to="/about">Go to About</RouterLink>
</div>
</template>

<style scoped>

</style>