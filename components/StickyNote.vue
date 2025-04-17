<!-- Source: https://github.com/gureckis/slidev-theme-neversink/blob/main/components/StickyNote.vue -->

<script setup>
import { computed } from 'vue'
import '../styles/sticky-note.css';

const props = defineProps({
  color: {
    type: String,
    default: 'yellow-light',
  },
  textAlign: {
    type: String,
    default: 'left',
  },
  width: {
    type: String,
    default: '180px',
  },
  height: {
    type: String, // New height prop
    default: 'auto', // Default to auto height
  },
  title: {
    type: String,
    default: '',
  },
  rotate: {
    type: Number, // Rotation angle in degrees
    default: 0,
  },
  positionX: {
    type: String, // Horizontal position (e.g., '10px', '50%', 'right')
    default: '0px',
  },
  positionY: {
    type: String, // Vertical position (e.g., '10px', '50%', 'top')
    default: '0px',
  },
})

const colorscheme = computed(() => {
  return `custom-${props.color}-scheme`
})

const stickyClasses = computed(() => {
  return [colorscheme.value, 'sticky-note']
})

const stickyStyles = computed(() => ({
  '--sticky-color': 'var(--custom-sticky-bg-color)',
  '--border-color': 'var(--custom-sticky-border-color)',
  '--text-color': 'var(--custom-sticky-text-color)',
  '--text-align': props.textAlign,
  '--width': props.width,
  '--height': props.height, // Apply height dynamically
  transform: `rotate(${props.rotate}deg)`, // Apply rotation
  position: 'absolute', // Make the sticky note positionable
  left: props.positionX, // Horizontal position
  top: props.positionY, // Vertical position
}))
</script>

<template>
  <div :class="stickyClasses" :style="stickyStyles">
    <template v-if="props.title !== ''">
      <strong>{{ props.title }}</strong>
    </template>
    <slot></slot>
  </div>
</template>

<style scoped>
.sticky-note {
  width: var(--width);
  height: var(--height); /* Use dynamic height */
  background-color: var(--sticky-color, yellow);
  text-align: var(--text-align, left);
  max-width: 100%;
  padding: 1em;
  position: relative;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--text-color);
  border: 0.4px solid var(--border-color);
  transition: transform 0.3s ease; /* Smooth rotation */
}
.sticky-note strong {
  display: block;
  font-size: 0.8rem;
  font-family: monospace;
  letter-spacing: 0em;
  word-spacing: -0.3em;
}
</style>