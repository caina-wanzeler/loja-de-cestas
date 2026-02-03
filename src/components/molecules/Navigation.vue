<script setup>

import Link from '../atoms/Link.vue';
import { navigationData } from '../../data/navigation-data';

</script>

<template>
    <div class="navigation">
        <Link v-for="item in navigationData"
                :key="item.index"
                :href="item.href"
                :text="item.text"
                :size="1.3"
        />
    </div>
</template>

<style scoped>
    .navigation {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
</style>