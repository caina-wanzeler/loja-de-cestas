<script setup>

const props = defineProps({
    type: String,
    radius: String
})

const emit = defineEmits(['onClicked']);

const handleClick = () => {
    emit('onClicked');
}

</script>

<template>
    <button class="change-cart" @click="handleClick">
        {{ props.type }}
    </button>
</template>



<style scoped>
    .change-cart {
        width: 100px;
        height: 40px;

        border: 1px solid rgb(211, 211, 211);
        border-radius: v-bind('props.radius');
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);

        background-color: rgb(255, 255, 255);
        transition: all 0.3s ease-in-out;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: rgb(231, 231, 231);
        }
    }
</style>