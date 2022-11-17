<template>
  <div class="slot-container">
    <div class="el-card__header">
      <p class="card__header__title">{{ title }}</p>
      <button v-if="showAsk">查看源码</button>
    </div>
    <div class="el-card__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    showAsk?: boolean;
  }>(),
  {
    title: '效果演示',
    showAsk: false
  }
);
</script>

<style scoped>
* {
  margin: 0;
}
.slot-container {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  position: relative;
}

.slot-container:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

.slot-container .el-card__header {
  padding: 8px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__header__title {
  font-size: 18px;
  font-weight: bold;
}


.el-card__body {
  padding: 20px;
}

button:hover {
  color: #42b883;
}
h3, p {
  margin: 0;
}
</style>
 