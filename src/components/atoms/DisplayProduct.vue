<script setup>


const props = defineProps({
    quantity: {
        type: Number,
        default: 0
    }
})

</script>

<template>
    <div class="display">{{ props.quantity }}</div>
</template>

<style scoped>
    .display {
        width: 70px;
        height: 40px;

        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(211, 211, 211);
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);

        display: flex;
        align-items: center;
        justify-content: center;

        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: rgb(239, 239, 239);
        }
    }
</style>