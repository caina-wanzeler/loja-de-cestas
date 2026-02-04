<script setup>
import Navigation from '../molecules/Navigation.vue';
import BrandName from '../molecules/BrandName.vue';
</script>

<template>
    <div class="header">
        <BrandName class="item" />
        <Navigation class="item" />
    </div>
</template>

<style scoped>
    .header {
        position: sticky;
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