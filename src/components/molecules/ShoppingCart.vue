<script setup>
import { computed, ref, watch } from 'vue';
import ButtonCloseShoppingCart from '../atoms/ButtonCloseShoppingCart.vue';
import TitleCart from '../atoms/TitleCart.vue';

const props = defineProps({
    activateCart: {
        type: Boolean,
        default: false
    }
})

const radius = 10;
const radiusPx = radius + 'px'

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
        <div class="title-container">
            <ButtonCloseShoppingCart 
                :side="42" 
                :radius="radius"
                v-on:on-clicked="altenateActivate"
            />
            <TitleCart :radius="radius" />
        </div>
        
    </div>
</template>



<style scoped>
    .shopping-cart-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        width: 450px;

        background-color: aliceblue;

        z-index: 20;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;

        border-radius: v-bind(radiusPx) 0 0 v-bind(radiusPx);
        padding: 15px 20px;
        box-shadow: 1px 3px 6px 3px rgba(0, 0, 0, 0.1);

        transition: all 0.3s ease-in-out;

        .title-container {
            display: flex;
            justify-content: none;
            align-items: none;
            
            gap: 20px;
        }
    }
</style>