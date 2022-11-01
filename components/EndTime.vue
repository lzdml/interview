<template>
  <div class="line" :style="{
    color: isRandomColor ? randomBackground : 'var(--vp-c-divider-light)'
  }">
    <span>阅读时间:</span>
    <div class="params-item">
      <span>{{ time }}</span>
      <span>{{ mood }}</span>
    </div>

    <slot name="end" />
  </div>
</template>

<script setup lang="ts">import { computed } from 'vue';

defineProps({
  time: {
    type: String
  },
  mood: {
    type: String
  },
  isRandomColor: {
    type: Boolean,
    default: true
  }
})

const colors = [
  'var(--vp-custom-block-danger-text)',
  'var(--vp-custom-block-tip-text)',
]
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomBackground = computed(() => colors[random(0, 2)])
</script>

<style scoped>
.line {
  width: 100%;
  line-height: 20px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 18px;
  color: var(--vp-custom-block-tip-text);
  font-weight: bolder;
}

.line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 6px;
  height: 100%;
  background-color: var(--vp-c-divider-light);
}

.params-item {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 12px;
}

.params-item span:not(:first-child) {
  font-size: 14px;
  margin-left: 12px;
}
</style>
