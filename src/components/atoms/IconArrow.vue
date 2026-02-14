<script setup>

const props = defineProps({
    side: Number
})

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
        <path d="M9 18l6-6-6-6" />
    </svg>
</template>

<style scoped>
    svg {
        color: black;
        background-color: rgba(230, 200, 200, 0.597);
        opacity: 100%;
        border-radius: 100%;
    }
</style>