<template>
	<div class="running-text-straight">
		<p class="running-text-straight__text" ref="textElement">{{ text }}</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted, nextTick, computed } from 'vue';
	import { gsap } from 'gsap';

	export default defineComponent({
		props: {
			text: {
				type: String,
				required: true,
			},

			parentElementWidth: {
				type: Number,
				required: true,
			},

			animationSpeed: {
				type: Number,
				required: true,
			},

			fontSize: {
				type: Number,
				required: false,
			},
		},

		setup(props) {
			const textElement = ref<HTMLElement | null>(null);

			const fontSizeFormatted = computed(() => `${props.fontSize}rem`);

			onMounted(() => {
				nextTick(() => {
					if (textElement.value) {
						gsap.fromTo(
							textElement.value,
							{ x: `-${textElement.value.offsetWidth}` },
							{
								duration: props.animationSpeed,
								ease: 'none',
								x: `${props.parentElementWidth}`,
								repeat: -1,
							}
						);
					}
				});
			});

			return { textElement, fontSizeFormatted };
		},
	});
</script>

<style lang="scss">
	.running-text-straight {
		width: 100%;
		height: 100%;
		overflow: hidden;

		&__text {
			width: fit-content;
			white-space: nowrap;
			font-size: v-bind(fontSizeFormatted);
		}
	}
</style>
