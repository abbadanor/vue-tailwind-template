<script setup>
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()
</script>

<template>
    <div class="absolute h-full w-full flex flex-col justify-center items-center">
        <h1 class="font-bold text-3xl mb-2">Vite⚡ + Vue👀 + Tailwind🌊 + Pinia🍍</h1>
        <button type="button"
            class="text-indigo-700 hover:text-white border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
            @click="counter.count++">count is {{ counter.count }}</button>
    </div>
</template>
