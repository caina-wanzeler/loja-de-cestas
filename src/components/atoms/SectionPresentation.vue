<script setup>

const props = defineProps({
    title: String,
    description: String
})

</script>

<template>
    <div class="presentation">
        <h2>{{ props.title }}</h2>
        <p>{{ props.description }}</p>
    </div>
</template>

<style scoped>
    .presentation {
        display: grid;
        gap: 20px;

        padding-top: 20px;
        padding-bottom: 10px;

        h2 {
            text-align: center;
            position: relative;
            display: inline-block;

            &::after {
                content: '';
                position: absolute;
                width: 100px;
                height: 4px;
                background-color: rgb(0, 0, 0);
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        p {
            text-align: center;
        }
    }
</style>