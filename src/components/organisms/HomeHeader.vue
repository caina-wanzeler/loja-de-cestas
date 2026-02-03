<script setup>
import Navigation from '../molecules/Navigation.vue';
import Presentation from '../molecules/Presentation.vue';
</script>

<template>
    <div class="header">
        <Presentation class="item" />
        <Navigation class="item" />
    </div>
</template>

<style scoped>
    .header {
        position: fixed;
        z-index: 1;
        box-shadow: 0 1px 12px 4px rgba(123, 123, 123, 0.2);

        background-color: white;
        width: 100%;

        display: grid;
        gap: 10px;

        .item {
            padding: 10px 0px;
        }
    }
</style>