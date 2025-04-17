<!-- filepath: /Users/stevenhill/Projects/slidev_template/components/CustomImage.vue -->
<template>
  <div
    class="custom-image"
    :style="containerStyle"
  >
    <img
      :src="src"
      :alt="alt"
      :style="imageStyle"
      class="image"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Define props for customization
const props = defineProps({
  src: {
    type: String,
    required: true, // The image source is required
  },
  alt: {
    type: String,
    default: '', // Optional alt text for accessibility
  },
  width: {
    type: String,
    default: '100%', // Default width of the image
  },
  height: {
    type: String,
    default: 'auto', // Default height of the image
  },
  objectFit: {
    type: String,
    default: 'cover', // How the image should fit (e.g., 'cover', 'contain', 'fill')
  },
  borderRadius: {
    type: String,
    default: '0', // Border radius for rounded corners
  },
  boxShadow: {
    type: String,
    default: 'none', // Optional box shadow
  },
  alignment: {
    type: String,
    default: 'center', // Alignment: 'left', 'center', or 'right'
  },
})

// Compute the container style
const containerStyle = computed(() => ({
  display: 'flex',
  justifyContent: props.alignment === 'left' ? 'flex-start' : props.alignment === 'right' ? 'flex-end' : 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}))

// Compute the image style
const imageStyle = computed(() => ({
  width: props.width,
  height: props.height,
  objectFit: props.objectFit,
  borderRadius: props.borderRadius,
  boxShadow: props.boxShadow,
}))
</script>

<style scoped>
.custom-image {
  overflow: hidden; /* Prevents overflow for rounded corners */
}
</style>