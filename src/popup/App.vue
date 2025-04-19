<script setup lang="ts">
const url = chrome.runtime.getURL('src/views/index.html')
const openLink = () => {
  window.open(url, '_blank')
}
</script>

<template>
  <main class="w-96 rounded">
    <el-card>
      <template #header>
        <div class="text-center text-4xl text-amber-700">Popup Title</div>
      </template>
      <div class="text-center text-2xl text-gray-700">Popup Content</div>
      <div class="text-center text-lg text-gray-500">This is a popup example.</div>
      <div class="flex justify-center mt-4">
        <el-button type="primary" link @click="openLink">Open Home Page</el-button>
      </div>
    </el-card>
  </main>
</template>

<style scoped>

</style>