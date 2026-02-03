<script setup>
import { computed } from 'vue';


const props = defineProps({
    side: Number
})

const sidePx = computed(() => props.side + "px")

</script>


<template>
    <img src="../../images/Logo.png" alt="Logo">
</template>


<style scoped>
    img {
        width: v-bind(sidePx);
        height: v-bind(sidePx);
    }
</style>