<script setup>

import icon from '@/images/icons/instagram.png'
import { computed } from 'vue';

const props = defineProps({
    side: Number
})

const sidePx = computed(() => props.side + 'px')

</script>

<template >
    <img :src="icon" alt="Instagram Icon">
</template>

<style scoped>
    img {
        color: white;
        width: v-bind(sidePx);
        height: v-bind(sidePx);
    }
</style>