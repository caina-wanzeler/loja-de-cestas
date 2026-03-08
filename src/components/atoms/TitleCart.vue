<script setup>

const props = defineProps({
    radius: Number
})

const radiusPx = props.radius + 'px';

</script>

<template>
    <div class="title-cart-container">
        <h2>Minha Cesta</h2>
    </div>
</template>

<style scoped>
    .title-cart-container {
        background-color: rgb(233, 233, 233);

        width: fit-content;

        padding: 5px 12px;
        border-radius: v-bind(radiusPx);

        h2 {
            flex-wrap: wrap;
        }
    }
</style>