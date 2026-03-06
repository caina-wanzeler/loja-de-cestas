<script setup>

const props = defineProps({
    side: Number
})

const emit = defineEmits(["onClicked"]);

const basketClick = () => {
    emit('onClicked');
}

</script>

<template>
    <button @click="basketClick">
        <svg 
            :width="props.side" 
            :height="props.side" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
    </button>
  
</template>

<style scoped>
    button {
        border: none;
        background-color: inherit;
    }
    svg {
        color: rgb(214, 87, 28);

        transition: all 0.3s ease-in-out;

        &:hover {
            scale: 1.2;
            color: rgb(237, 25, 25);
        }
    }
</style>