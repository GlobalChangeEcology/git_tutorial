<template>
  <div
    class="slidev-layout cover"
    :style="{
      '--cover-background': coverBackground ? `url(${coverBackground})` : 'none',
    }"
  >
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>‚

<script setup>
const coverBackground = $slidev.configs.coverBackground || '' // Default to empty if not provided
</script>