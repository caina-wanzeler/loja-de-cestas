<script setup>

const props = defineProps({
    text: String,
    link: String
})

</script>

<template>
    <a :href="props.link" target="_blank">
        <button>{{ props.text }}</button>
    </a>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
        display: inline-block;
    }
    button {
        border: none;
        width: 200px;
        height: 50px;

        font-weight: 700;
        font-size: 1rem;

        border-radius: 15px;
        transition: all 0.3s ease-in;
        background-color: rgb(240, 230, 230);
        box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.15);

        &:hover {
            background-color: rgb(255, 255, 255);
        }
    }
</style>