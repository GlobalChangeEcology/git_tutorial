<template>
  <div v-if="showProgressBar" class="progress-bar">
    <div
      class="progress-bar-fill"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Compute the progress percentage
const progress = computed(() => ($slidev.nav.currentPage / $slidev.nav.total) * 100)

// Check if the progress bar should be shown
const showProgressBar = computed(() => $slidev.themeConfigs.showProgressBar !== false)
</script>

<style scoped>
.progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  z-index: 1000;
}

.progress-bar-fill {
  height: 100%;
  background-color: #d3d3d3; /* Light grey */
  transition: width 0.3s ease;
}
</style>