<template>
  <div class="poll-container">
    <h2 class="poll-question">{{ question }}</h2>
    <div class="poll-options">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="poll-option"
        @click="vote(index)"
      >
        <span class="poll-text">{{ option.text }}</span>
        <div class="poll-bar-container">
          <div class="poll-bar" :style="{ width: getPercentage(index) + '%' }"></div>
        </div>
        <span class="poll-percentage">{{ getPercentage(index) }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const votes = reactive(Array(props.options.length).fill(0))

const vote = (index) => {
  votes[index]++
}

const getPercentage = (index) => {
  const totalVotes = votes.reduce((sum, count) => sum + count, 0)
  return totalVotes > 0 ? Math.round((votes[index] / totalVotes) * 100) : 0
}
</script>

<style scoped>
.poll-container {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 600px;
  margin: 0 auto;
}

.poll-question {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.poll-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.poll-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  transition: background-color 0.3s;
}

.poll-option:hover {
  background-color: #f0f0f0;
}

.poll-text {
  flex: 1;
}

.poll-bar-container {
  flex-grow: 1;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.poll-bar {
  height: 100%;
  background-color: #007acc;
  transition: width 0.3s ease;
}

.poll-percentage {
  font-size: 0.9rem;
  color: #555;
}
</style>