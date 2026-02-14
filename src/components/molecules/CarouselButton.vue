<script setup>
import ButtonEmpty from '../atoms/ButtonEmpty.vue';
import IconArrow from '../atoms/IconArrow.vue';

const props = defineProps({
    side: Number,
})
</script>

<template>
    <ButtonEmpty :side="props.side">
        <IconArrow .icon
            :side="props.side"
        />
    </ButtonEmpty>
</template>

<style scoped>
    .icon {
        transition: all 0.3s ease-in-out;
        &:hover {
            color: aqua;
        }
    }
</style>