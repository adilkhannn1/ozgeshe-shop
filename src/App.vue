<script setup>
  import BottomAppNavbar from './components/BottomAppNavbar.vue';
  import TopAppNavbar from './components/TopAppNavbar.vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>

<template>
  <main class="w-[100%] h-[100%] min-h-[100vh] bg-[#343740]">
    <TopAppNavbar v-if="!route.meta.hideTopNav"/>
    <BottomAppNavbar />
    <router-view> </router-view>
  </main>
</template>

