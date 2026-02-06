<script setup>
import Carousel from './components/organisms/Carousel.vue';
import HomeFooter from './components/organisms/HomeFooter.vue';
import HomeHeader from './components/organisms/HomeHeader.vue';
import HomeMain from './components/organisms/HomeMain.vue';
import { baskets } from './data/baskets-data';
</script>

<template>
    <HomeHeader />
    <HomeMain />
    <Carousel
        title="🧺 Cestas Padrão"
        description="Nossas cestas disponíveis durante todo o ano para presentear em qualquer ocasião"
        :baskets="baskets"
    />
    <Carousel
        title="🎄 Cestas Natalinas"
        description="Para presentear quem você ama neste Natal"
        :baskets="baskets"
    />
    <Carousel
        title="💌 Cestas São Valentim"
        description="Demonstre seu amor com nossas cestas"
        :baskets="baskets"
    />
</template>

<style scoped>
</style>
