<script setup>
import { computed } from 'vue';


const props = defineProps({
    side: Number
})

const sidePx = computed(() => props.side + "px")
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    :width="props.side" 
    :height="props.side" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <path d="m5 11 4-7"></path>
    <path d="m19 11-4-7"></path>
    <path d="M2 11h20"></path>
    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"></path>
    <path d="m9 11 1 9"></path>
    <path d="M4.5 15.5h15"></path>
    <path d="m15 11-1 9"></path>
  </svg>
</template>

<style scoped>
    svg {
        color: rgb(112, 73, 31);
    }
</style>