<script setup>
import { computed } from 'vue';


const props = defineProps({
    text: String,
    size: Number
})

const sizeRem = computed(() => props.size + "rem")
</script>

<template>
    <h1>{{ props.text }}</h1>
</template>

<style scoped>
    h1 {
        font-size: v-bind(sizeRem);
        font-family: 'Tangerine', cursive;

        color: rgb(146, 83, 35);

        transform: translateY(8%);
        vertical-align: middle;
    }
</style>