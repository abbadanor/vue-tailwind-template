<script setup>
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()
</script>

<template>
  <div class="grow h-full flex flex-col justify-center items-center">
    <h1 class="font-bold text-3xl mb-2">Vite⚡ + Vue👀 + Tailwind🌊 + Pinia🍍</h1>
    <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800" @click="counter.count++">count is {{ counter.count }}</button>
  </div>
</template>
