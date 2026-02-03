<script setup>
import { computed } from 'vue';


const props = defineProps({
    text: String,
    href: String,
    size: Number
})

const sizeRem = computed(() => props.size + "rem")

</script>

<template>
    <a :href="props.href">{{ props.text }}</a>
</template>

<style scoped>
    a {
        font-size: v-bind(sizeRem);
        text-decoration: none;

        color: rgb(186, 81, 172);
        transition: all 0.2s ease-in-out;

        &:hover {
            color: rgb(189, 37, 37);
            transform: translateY(-10%);
        }
    }
</style>