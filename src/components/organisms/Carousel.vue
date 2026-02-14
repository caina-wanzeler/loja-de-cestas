<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import CardProduct from '../molecules/CardProduct.vue';

import SectionPresentation from '../atoms/SectionPresentation.vue';
import CarouselButton from '../molecules/CarouselButton.vue';

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
const targetTranslate = ref(0);

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

const buttonMove = 5
const leftButtonClicked = () => {
	translateX.value -= buttonMove

	if (translateX.value < 0)
		translateX.value = 50
}

const rightButtonClicked = () => {
	translateX.value += buttonMove

	if (translateX.value >= 50)
		translateX.value = 0
}

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
		>
			<CarouselButton
				@clicked="leftButtonClicked"
				class="carousel-button btn-left" 
				:side="80"
			/>
			<CarouselButton
				@clicked="rightButtonClicked"
				class="carousel-button btn-right" 
				:side="80"
			/>
			<div 
				class="carousel-track" 
				:style="{ transform: `translateX(-${translateX}%)` }"
			>
				<CardProduct class="carousel-item"
					@mouseenter="handleMouseEnter"
					@mouseleave="handleMouseLeave"
					v-for="(basket, index) in doubledBaskets"
					:key="index"
					:image="basket.image"
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
    padding: 30px 0;
	position: relative;
}

.carousel-track {
    display: flex;
    gap: 40px;
    width: max-content; 
    
    /* A Mágica do CSS */
    /*animation: scroll var(--duration) linear infinite;*/
	will-change: transform;
}

.carousel-button {
	z-index: 1;

	position: absolute;
	top: 50%;
	transform-origin: center;
	transition: transform 0.3s ease-in-out;
}

.btn-left {
	left: 5%;
	transform: translateY(-50%) rotate(180deg);

	&:hover {
		transform: translateY(-50%) rotate(180deg) scale(1.2);
	}
}
.btn-right {
	right: 5%;
	transform: translateY(-50%);

	&:hover {
		transform: translateY(-50%) scale(1.2);
	}
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