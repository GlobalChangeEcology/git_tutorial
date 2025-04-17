<template>
  <div class="timeline-container">
    <div
      class="timeline"
      :style="{ '--scale-factor': scaleFactor, '--line-color': lineColor, '--dot-color': dotColor }"
    >
      <div
        v-for="(event, index) in events"
        :key="index"
        class="timeline-item"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">{{ event.title }}</h3>
          <p class="timeline-date">{{ event.date }}</p>
          <p class="timeline-description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    required: true,
    default: () => [],
  },
  lineColor: {
    type: String,
    default: '#007acc', // Default line color
  },
  dotColor: {
    type: String,
    default: '#007acc', // Default dot color
  },
})

// Dynamically calculate the scale factor based on the number of events
const scaleFactor = computed(() => {
  const maxEvents = 4 // Maximum number of events that fit comfortably
  return Math.min(1, maxEvents / props.events.length)
})
</script>

<style scoped>
/* Container to ensure the timeline fits within the slide */
.timeline-container {
  display: flex;
  flex-direction: column;
  height: 100%; /* Full height of the slide */
  padding: 1rem;
  box-sizing: border-box;
}

/* Timeline styles */
.timeline {
  position: relative;
  border-left: calc(4px * var(--scale-factor, 1)) solid var(--line-color, #007acc);
  padding-left: calc(1.5rem * var(--scale-factor, 1));
  height: 100%; /* Full height of the container */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute items evenly */
  transform: scale(var(--scale-factor, 1)); /* Scale the entire timeline */
  transform-origin: top left; /* Scale from the top-left corner */
}

.timeline-item {
  position: relative;
  flex: 1; /* Ensure items take equal space */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timeline-dot {
  position: absolute;
  top: 0;
  left: calc(-8px * var(--scale-factor, 1));
  width: calc(16px * var(--scale-factor, 1)); /* Scale dot size */
  height: calc(16px * var(--scale-factor, 1));
  background-color: var(--dot-color, #007acc); /* Use custom dot color */
  border-radius: 50%;
  border: calc(2px * var(--scale-factor, 1)) solid white;
}

.timeline-content {
  background-color: #f9f9f9;
  padding: calc(0.8rem * var(--scale-factor, 1)); /* Scale padding */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: calc(1rem * var(--scale-factor, 1)); /* Scale font size */
}

.timeline-title {
  margin: 0;
  font-size: calc(1.2rem * var(--scale-factor, 1)); /* Scale title font size */
  font-weight: bold;
  color: #333;
}

.timeline-date {
  margin: 0.2rem 0;
  font-size: calc(0.9rem * var(--scale-factor, 1)); /* Scale date font size */
  color: #666;
}

.timeline-description {
  margin: 0;
  font-size: calc(1rem * var(--scale-factor, 1)); /* Scale description font size */
  color: #444;
}
</style>