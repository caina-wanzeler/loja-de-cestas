<script setup>

const props = defineProps({
    text: String
})

</script>

<template>
    <button class="button-bascket">{{ props.text }}</button>
</template>

<style scoped>
    .button-bascket {
        width: 200px;
        height: 50px;

        border: none;
        border-radius: 20px;

        background-color: rgb(180, 19, 19);
        color: aliceblue;

        font-size: 1.3rem;

        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: rgb(255, 27, 27);
            transform: translateY(-15%);
        }
    }
</style>