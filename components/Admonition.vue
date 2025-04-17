<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import '../styles/admonition.css'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
  rotate: {
    type: Number, // Rotation angle in degrees
    default: 0,
  },
})

const admontype = computed(() => {
  switch (props.type) {
    case 'important':
      return {
        title: props.title || 'Important',
        class: 'admonition important',
        icon: 'mdi-alert-circle',
      }
    case 'tip':
      return {
        title: props.title || 'Tip',
        class: 'admonition tip',
        icon: 'mdi-lightbulb-on-outline',
      }
    case 'warning':
      return {
        title: props.title || 'Warning',
        class: 'admonition warning',
        icon: 'mdi-alert',
      }
    case 'caution':
      return {
        title: props.title || 'Caution',
        class: 'admonition caution',
        icon: 'mdi-alert-octagon',
      }
    case 'info':
    default:
      return {
        title: props.title || 'Note',
        class: 'admonition info',
        icon: 'mdi-information-outline',
      }
  }
})
</script>

<template>
  <div
    :class="admontype.class"
    :style="{ width: width, transform: `rotate(${rotate}deg)` }"
  >
    <div class="admonition-header">
      <Icon :icon="admontype.icon" class="admonition-icon" />
      <strong>{{ admontype.title }}</strong>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.admonition {
  border-left: 4px solid;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  transition: transform 0.3s ease; /* Smooth rotation */
}
.admonition-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.admonition-body {
  font-size: 1rem;
}
.admonition-tip {
  border-color: #28a745;
}
.admonition-warning {
  border-color: #ffc107;
}
.admonition-caution {
  border-color: #dc3545;
}
.admonition-info {
  border-color: #17a2b8;
}
.admonition-icon {
  font-size: 1.5rem;
}
</style>

