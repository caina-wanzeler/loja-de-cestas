<script setup>
import Navigation from '../molecules/Navigation.vue';
import BrandName from '../molecules/BrandName.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const headerRef = ref(null);
const headerHeight = ref(0);

const updateHeight = () => {
    if (headerRef.value) {
        headerHeight.value = headerRef.value.offsetHeight;
    }
};

onMounted(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
})

onUnmounted(() => {
    window.removeEventListener('resize', updateHeight);
})

const heightPx = () => headerHeight + 'px';

</script>

<template>
    <div class="header" ref="headerRef">
        <BrandName class="item" />
        <Navigation class="item" />
    </div>
    <div class="header-space" :style="{ height: headerHeight + 'px' }"></div>
</template>

<style scoped>
    .header {
        position: fixed;
        box-shadow: 0 1px 12px 4px rgba(123, 123, 123, 0.2);

        background-color: white;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        z-index: 10;

        .item {
            padding: 10px 40px;
        }
    }
</style>