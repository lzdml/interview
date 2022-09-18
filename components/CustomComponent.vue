<template>
  <div>你好, VitePress </div>
  <pre>{{ page }}</pre>
  <h2>{{ title }}</h2>



  <div></div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { page, title } = useData()
</script>

<style scoped></style>
