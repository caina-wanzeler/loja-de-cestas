<script setup>

import icon from '@/images/icons/whatsapp.png'
import { computed } from 'vue';

const props = defineProps({
    side: Number
})

const sidePx = computed(() => props.side + 'px')

</script>

<template>
    <img :src="icon" alt="Whatsapp Icon">
</template>

<style scoped>
    img {
        width: v-bind(sidePx);
        height: v-bind(sidePx);
    }
</style>