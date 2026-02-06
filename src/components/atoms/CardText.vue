<script setup>

const props = defineProps({
    title: String,
    subtitle: String,
    price: Number
})

</script>

<template>
    <div class="description">
        <h3>{{ props.title }}</h3>
        <p class="subtitle">{{ props.subtitle }}</p>
        <p class="price">R$ {{ props.price }}</p>
    </div>
</template>

<style scoped>
    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .price {
            font-size: 1.4rem;
            font-weight: 600;
        }
    }
</style>