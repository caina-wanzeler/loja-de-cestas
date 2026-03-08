<script setup>

import Link from '../atoms/Link.vue';
import IconBasketShop from '../atoms/IconBasketShop.vue';
import ShoppingCart from './ShoppingCart.vue';
import { ref } from 'vue';

const activate = ref(false);

const activateShoppingCart = () => {
    activate.value = !activate.value;
}

const sizeLink = 1.3;

</script>

<template>
    <div class="navigation">
        <Link
            text="Inicio"
            :size="sizeLink"
        />
        <Link
            text="Cestas"
            :size="sizeLink"
        />
        <Link
            text="Sobre"
            :size="sizeLink"
        />
        <Link
            text="Contato"
            :size="sizeLink"
        />
        <IconBasketShop 
            side="28"
            v-on:on-clicked="activateShoppingCart"
        />
        <ShoppingCart 
            class="shopping-cart"
            :activate-cart="activate"
        />
    </div>
    
</template>

<style scoped>
    .navigation {
        display: flex;
        gap: 20px;
        position: relative;
    }
</style>