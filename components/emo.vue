<template>
  <div class="grid">
    <img v-for="item in wxImagePath" :key="item.id" :src="item.value" alt="">
  </div>
</template>

<script setup lang="ts">
const wxImagePath = Array(113).fill(1).map((res, _i) => ({
  id: _i,
  value: `/assets/wx/${_i}.png`
}))

console.log('wxImagePath', wxImagePath);
</script>

<style scoped>
.grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
</style>
