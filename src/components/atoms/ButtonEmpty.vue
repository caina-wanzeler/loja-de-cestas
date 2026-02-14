<script setup>
import { computed } from 'vue';

const props = defineProps({
    side: Number
})

const emit = defineEmits(['clicked'])

const onClick = () => {
    emit('clicked')
}

const sidePx = computed(() => props.side + 'px')
</script>

<template>
    <button @click="onClick">
        <slot></slot>
    </button>
</template>

<style scoped>
    button {
        border-radius: 100%;
        width: v-bind(sidePx);
        height: v-bind(sidePx);
        border: none;
    }
</style>