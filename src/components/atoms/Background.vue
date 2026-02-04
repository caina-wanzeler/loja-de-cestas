<script setup>
import backgroundPresentation from "@/images/background-presentation.jpg"

const transparencyImage = 0.75

</script>

<template>
    <div class="container-image">
        <slot></slot>
    </div>
</template>



<style scoped>
    .container-image {
        background-color: rgb(235, 217, 179);
    }
</style>