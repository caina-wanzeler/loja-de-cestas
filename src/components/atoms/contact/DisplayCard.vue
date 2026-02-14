<script setup>

const props = defineProps({
    title: String,
    subtitle: String,
    background: String,
    hoverColor: String
})

const normalColor = props.background
const hoverColor = props.hoverColor

</script>

<template>
    <section>
        <div class="icon-area">
            <slot name="icon"></slot>
        </div>
        
        <div class="info-area">
            <h3>{{ props.title }}</h3>
            <p>{{ props.subtitle }}</p>
        </div>
        

        <div class="action-area">
            <slot name="button"></slot>
        </div>
        
    </section>
</template>

<style scoped>
    section {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
        gap: 15px;

        width: 400px;
        height: 230px;
        padding: 20px 0;
        border-radius: 25px;

        .info-area {
            display: flex;
            flex-direction: column;
            gap: 12px;

            text-align: center;
            padding: 0 20px;
        }
        
        box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        background: v-bind(normalColor);

        &:hover {
            background: v-bind(hoverColor);
            scale: 1.02;
        }
    }
</style>