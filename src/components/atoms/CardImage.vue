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
        width: 300px;
        height: 200px;

        border-radius: 20px;
    }
</style>