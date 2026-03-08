<script setup>
import { ref } from 'vue';
import ButtonCartChange from '../atoms/ButtonCartChange.vue';
import CardImage from '../atoms/CardImage.vue';
import CardText from '../atoms/CardText.vue';
import DisplayProduct from '../atoms/DisplayProduct.vue';
import { useCartStore } from '@/data/cart-data';

const props = defineProps({
    id: Number,
    image: String,
    alternative: String,
    title: String,
    subtitle: String,
    price: Number
})

const cart = useCartStore();

cart.updateProduct(props.id, 0);

const radiusButton = 12;

const addQuantityProduct = () => {
    cart.addProduct(props.id, 1);
    console.log(cart.getQuantityProduct(props.id));
}

const remQuantityProduct = () => {
    if (cart.getQuantityProduct(props.id) != 0)
        cart.remProduct(props.id, 1);
}

</script>

<template>
    <div class="container">
        <CardImage
            :image="props.image"
            :alternative="props.alternative"
        />
        <CardText
            :title="props.title"
            :subtitle="props.subtitle"
            :price="props.price"
        />
        <div class="change-button-container">
            <ButtonCartChange 
                type="-" 
                :radius="`${radiusButton}px 0 0 ${radiusButton}px`"
                v-on:on-clicked="remQuantityProduct"
            />
            <DisplayProduct :quantity="`${cart.getQuantityProduct(props.id)}`" />
            <ButtonCartChange 
                type="+"
                :radius="`0 ${radiusButton}px ${radiusButton}px 0`"
                v-on:on-clicked="addQuantityProduct"
            />
        </div>
    </div>
    
</template>


<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;

        width: 350px;
        padding-bottom: 20px;

        border-radius: 20px;
        background-color: rgb(245, 250, 255);

        transition: all 0.3s ease-in-out;
        box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);

        &:hover {
            scale: 1.07;
            box-shadow: 0 1px 12px 0px rgba(0, 0, 0, 0.15);
        }
    }

    .change-button-container {
        display: flex;
    }
    
</style>