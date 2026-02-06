<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import CardProduct from '../molecules/CardProduct.vue';
import basketImage from '@/images/background-presentation.jpg';
import SectionPresentation from '../atoms/SectionPresentation.vue';

const props = defineProps({
	title: String,
	description: String,
	speed: { 
		type: Number, 
		default: 0.01
	},
	baskets: String
});

const translateX = ref(0);
const currentSpeed = ref(props.speed);
const isHovered = ref(false);

const SLOW_SPEED_MULTIPLIER = 0.1

const carouselSpeedNormal = () => { return props.speed - currentSpeed.value } 
const carouselSpeedSlow = () => { return props.speed * SLOW_SPEED_MULTIPLIER - currentSpeed.value }

let animationFrame = null;

const doubledBaskets = computed(() => [...props.baskets, ...props.baskets]);

const animate = () => {
	translateX.value += currentSpeed.value;
	if (translateX.value >= 50) translateX.value = 0;
		
	if (isHovered.value)
		currentSpeed.value += carouselSpeedSlow()
		//currentSpeed.value *= 0.95;
	else
		currentSpeed.value += carouselSpeedNormal()

  	animationFrame = requestAnimationFrame(animate);
};

const handleMouseEnter = () => {
	isHovered.value = true;
};

const handleMouseLeave = () => {
	isHovered.value = false;
};

onMounted(() => {
  	animate();
});

onUnmounted(() => {
	cancelAnimationFrame(animationFrame);
});
</script>

<template>
	<section>
		<SectionPresentation 
			:title="props.title"
			:description="props.description"
		/>
		<div 
			class="carousel-window"
			@mouseenter="handleMouseEnter"
			@mouseleave="handleMouseLeave"
		>
			<div 
				class="carousel-track" 
				:style="{ transform: `translateX(-${translateX}%)` }"
			>
				<CardProduct class="carousel-item"
					v-for="(basket, index) in doubledBaskets"
					:key="index"
					:image="basketImage"
					:alternative="basket.alternative"
					:title="basket.title"
					:subtitle="basket.subtitle"
					:price="basket.price"
				/>
			</div>
		</div>
	</section>
    
</template>

<style scoped>
.carousel-window {
    width: 100%;
    overflow: hidden;
    padding: 40px 0;
}

.carousel-track {
    display: flex;
    gap: 40px;
    width: max-content; 
    
    /* A Mágica do CSS */
    /*animation: scroll var(--duration) linear infinite;*/
	will-change: transform;
}

/* --- A ANIMAÇÃO --- */
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.carousel-track:hover {
    animation-play-state: paused;
}
</style>