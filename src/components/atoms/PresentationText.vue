<script setup>

const props = defineProps({
    text: String,
    subtext: String
})

</script>

<template>
    <div class="presentation-text">
        <h2>{{ props.text }}</h2>
        <p>{{ props.subtext }}</p>
    </div>
</template>

<style scoped>
    .presentation-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;

        h2 {
            font-size: 1.7rem;
            color: rgb(170, 20, 20);
            text-align: center;
        }

        p {
            font-size: 1.3rem;
            color: rgb(90, 43, 0);
            text-align: center;
            font-weight: 500;
        }
    }
</style>