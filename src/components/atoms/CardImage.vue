<script setup>

const props = defineProps({
    image: String,
    alternative: String
})

</script>

<template>
    <img :src="props.image" :alt="props.alternative">
</template>

<style scoped>
    img {
        width: 100%;
        height: 280px;

        border-radius: 20px 20px 0 0;
    }
</style>