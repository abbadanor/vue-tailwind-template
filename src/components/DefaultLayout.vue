<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header></Header>
    <div class="grow relative mt-4 mx-8">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
