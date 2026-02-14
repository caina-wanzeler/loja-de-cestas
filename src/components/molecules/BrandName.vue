<script setup>
import IconBasket from '../atoms/IconBasket.vue';
import HeaderText from '../atoms/HeaderText.vue';


</script>

<template>
    <div class="brand-name">
        <IconBasket :side="42"/>
        <HeaderText
            text="Cestas da Lua" 
            :size="3.5"
        />
    </div>
</template>

<style scoped>
    .brand-name {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
</style>