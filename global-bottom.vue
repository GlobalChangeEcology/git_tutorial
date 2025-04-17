<!-- filepath: /Users/stevenhill/Projects/slidev_template/theme/components/Footer.vue -->
<template>
  <footer class="custom-footer">
    <div class="footer-left">
      <span>{{ author }}</span> | <span>{{ currentDate }}</span>
    </div>
    <div v-if="$nav.currentLayout !== 'cover'" class="footer-right">
      {{ $nav.currentPage }} / {{ $nav.total }}
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router'

// Access the frontmatter globally
const author = $slidev.themeConfigs.author || 'Unknown Author'

// Get the current date
const currentDate = new Date().toLocaleDateString()

// Get the current page number
const route = useRoute()
const pageNumber = route.meta?.slide || 1
</script>

<style scoped>
.custom-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  background-color: transparent; /* Transparent background */
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  color: var(--text-color, #000); /* Use the main text color */
}

.footer-left {
  margin-left: 20px;
}

.footer-right {
  margin-right: 20px;
}
</style>