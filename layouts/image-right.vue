<script setup lang="ts">
import { computed } from 'vue'

// Define props for the layout
const props = defineProps({
  image: {
    type: String,
    required: true, // Ensure the image is provided
  },
  class: {
    type: String,
    default: '', // Optional additional classes for the content section
  },
  backgroundSize: {
    type: String,
    default: 'cover', // Default background size for the image
  },
  imageSize: {
    type: String,
    default: '100%', // Default size of the image container (50% width)
  },
})

// Compute the style for the image container
const imageContainerStyle = computed(() => ({
  width: props.imageSize, // Dynamically set the width of the image container
  height: '100%', // Ensure the container takes the full height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

// Compute the style for the image itself
const imageStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: props.backgroundSize,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
}))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full slidev-layout default">
    <!-- Content Section -->
    <div class="content">
      <slot />
    </div>
    <!-- Image Section -->
    <div class="image-container" :style="imageContainerStyle">
      <div class="image" :style="imageStyle"></div>
    </div>
    <ProgressBar />
  </div>
</template>

