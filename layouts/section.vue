<template>
  <div
    class="slidev-layout section  w-full h-full grid"
    :style="{
      '--section-background': sectionBackground ? `url(${sectionBackground})` : 'none',
    }"
  >
    <div class="my-auto w-full">
      <slot />
    </div>
    <ProgressBar />
  </div>
</template>


<script setup>
const sectionBackground =  $slidev.configs.sectionBackground || '' // Default to empty if not provided
</script>

<style scoped>
.section {
  background-image: var(--section-background); /* Use the CSS variable */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>