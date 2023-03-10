<template>
	<div class="running-text-straight">
		<p class="running-text-straight__text" ref="textElement">{{ text }}</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted } from 'vue';
	import { gsap } from 'gsap';
	import { useGsapHorizontalLoop } from '@/composables/gsapHorizontalLoop.js';

	export default defineComponent({
		props: {
			text: {
				type: String,
				required: true,
			},
		},

		setup(props) {
			const textElement = ref<HTMLElement | null>(null);
			const { horizontalLoop } = useGsapHorizontalLoop();

			onMounted(() => {
				const elements = gsap.utils.toArray(textElement.value);
				horizontalLoop(elements, {
					repeat: -1,
					speed: 3,
					paddingRight: 550,
				});
			});

			return { textElement };
		},
	});
</script>

<style lang="scss">
	.running-text-straight {
		width: 1000px;
		height: 100%;
		overflow: hidden;
		border: 1px solid black;

		&__text {
			display: inline-block;
			// width: 100px;
			// height: 50px;
			white-space: nowrap;
			font-size: 3rem;
			// background-color: red;
		}
	}
</style>
