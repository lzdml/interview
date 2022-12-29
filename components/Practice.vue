<template>
  <div>
    <ol type="A">
      <li v-for="(item) in list" :key="item.text" class="first-item">
        <div v-if="item.items.length">
          <h2>{{ item.text }}</h2>
          <ol>
            <li v-for="v in item.items" :key="v.text" class="second-item" @click="goDetail(v)">
              {{ v.text }}
            </li>
          </ol>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { useData, useRouter, withBase } from 'vitepress'
import practiceList from '../docs/.vitepress/sidebar/practice'

const data = useData()
console.log('data', data)

const router = useRouter()

const list = practiceList['/practice/']

const goDetail = (v) => {
  router.go(withBase(v.link))
}

</script>

<style scoped>
.first-item {
  list-style: none;
}

.second-item {
  cursor: pointer;
  text-decoration: #4AB883 dotted underline;
  transition: all 0.3s linear;
}

.second-item:hover {
  text-decoration-style: wavy;
}
</style>
