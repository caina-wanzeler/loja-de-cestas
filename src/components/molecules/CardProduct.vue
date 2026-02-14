<script setup>
import CardImage from '../atoms/CardImage.vue';
import CardText from '../atoms/CardText.vue';

const props = defineProps({
    image: String,
    alternative: String,
    title: String,
    subtitle: String,
    price: Number
})

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
    </div>
    
</template>


<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;

        width: 350px;
        padding: 30px 10px;

        border-radius: 20px;
        background-color: rgb(245, 250, 255);

        transition: all 0.3s ease-in-out;
        box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);

        &:hover {
            scale: 1.07;
            box-shadow: 0 1px 12px 0px rgba(0, 0, 0, 0.15);
        }
    }
    
</style>