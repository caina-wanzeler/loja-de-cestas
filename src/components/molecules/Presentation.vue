<script setup>
import BasketIcon from '../atoms/BasketIcon.vue';
import Logo from '../atoms/Logo.vue';
import PresentationText from '../atoms/PresentationText.vue';


</script>

<template>
    <div class="presentation">
        <BasketIcon :side="42"/>
        <PresentationText
            text="Cestas da Lua" 
            :size="3.5"
        />
    </div>
</template>

<style scoped>
    .presentation {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
</style>