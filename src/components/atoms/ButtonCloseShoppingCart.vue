<script setup>

const props = defineProps({
    side: Number
})

const emit = defineEmits(['onClicked']);

const closeShoppingCart = () => {
    emit('onClicked');
}

</script>

<template>
    <button @click="closeShoppingCart">
        <svg 
            :width="props.side" 
            :height="props.side" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="icone-fechar"
        >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    </button>
</template>

<style scoped>
    button {
        background-color: rgb(224, 224, 224);
        border: none;
        border-radius: 5px;

        display: flex;
        align-items: center;

        transition: all 0.3s ease-in-out;

        &:hover {
            scale: 1.1;
            background-color: rgb(209, 209, 209);
        }
    }
</style>