<script setup>
import { computed, ref, watch } from 'vue';
import ButtonCloseShoppingCart from '../atoms/ButtonCloseShoppingCart.vue';

const props = defineProps({
    activateCart: {
        type: Boolean,
        default: false
    }
})

const activate = ref(props.activateCart)

const transformPercente = computed(() => {
    return activate.value ? "0%" : "100%";
})

const altenateActivate = () => {
    activate.value = !activate.value;
}

watch(() => props.activateCart, () => {
    altenateActivate();
}) 

</script>

<template>
    <div class="shopping-cart-container"
        :style="`transform: translateX(${transformPercente})`"
    >
        <ButtonCloseShoppingCart :side="42" v-on:on-clicked="altenateActivate" />
    </div>
</template>



<style scoped>
    .shopping-cart-container {
        width: 450px;

        background-color: aliceblue;

        z-index: 20;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;

        padding: 15px 20px;

        transition: all 0.3s ease-in-out;
    }
</style>