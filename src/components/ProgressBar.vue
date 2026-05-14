<script setup>
defineProps({
  progress: { type: Number, default: 0 }
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 h-[2px] bg-gray-200/70 z-50">
    <div
      class="h-full bg-accent transition-all duration-500 ease-out"
      :style="{ width: progress + '%' }"
    />
  </div>
</template>
