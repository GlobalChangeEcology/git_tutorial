<!-- filepath: /Users/stevenhill/Projects/slidev_template/layouts/two-cols.vue -->
<template>
    <div class="grid grid-cols-2 gap-4 w-full h-full slidev-layout default">
      <!-- Left Column -->
      <div class="left">
        <slot name="left" />
      </div>
      <!-- Right Column -->
      <div class="right">
        <slot name="right" />
      </div>
    </div>
    <ProgressBar />
  </template>
  
  <script setup>
  // No additional logic needed for this layout
  </script>
  
  <style scoped>
  .left {
    padding: 1rem;
  }
  
  .right {
    padding: 1rem;
  }
  </style>