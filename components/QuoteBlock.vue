<template>
    <blockquote
      class="quote-block"
      :style="{ backgroundColor: color, color: textColor }"
    >
      <p class="quote-text">{{ text }}</p>
      <footer v-if="author" class="quote-author">— {{ author }}</footer>
    </blockquote>
  </template>
  
  <script setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#004d4d', // Default petrol color
    },
    textColor: {
      type: String,
      default: '#f9f9f9', // Default light text color
    },
  })
  </script>
  
  <style scoped>
  .quote-block {
    padding: 1rem;
    margin: 1rem 0;
    font-style: italic;
    font-size: 1.2rem;
    border-radius: 8px; /* Rounded corners */
  }
  
  .quote-text {
    margin: 0;
  }
  
  .quote-author {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
  }
  </style>