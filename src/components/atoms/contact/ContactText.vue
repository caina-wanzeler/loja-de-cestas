<script setup>

const props = defineProps({
    title: String,
    subtitle: String
})

</script>


<template>
    <div>
        <h2>{{ props.title }}</h2>
        <p>{{ props.subtitle }}</p>
    </div>
    
</template>

<style scoped>
    div {
        margin-top: 10px;
        display: grid;
        gap: 10px;
        text-align: center;
        h2 {
            font-size: 1.7rem;
        }
        p {
            font-size: 1.05rem;
        }
    }
</style>