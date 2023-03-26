<template>
	<div class="running-text-straight">
		<slot />
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted, computed, nextTick, watch } from 'vue';
	import { gsap } from 'gsap';

	export default defineComponent({
		props: {
			groupId: {
				type: String,
				required: true,
			},

			parentElementWidth: {
				type: Number,
				required: true,
			},

			imageGroupWidth: {
				type: Number,
				required: true,
			},

			// ideally, should be same as gap between each element in the group
			initialPosition: {
				type: Number,
				required: true,
			},

			wrapMaxAt: {
				type: Number,
				required: true,
			},

			animationSpeed: {
				type: Number,
				required: true,
			},

			direction: {
				type: String,
				required: true,
				validator: (value: string) => ['left-to-right', 'right-to-left'].includes(value),
			},

			fontSize: {
				type: Number,
				required: false,
			},
		},

		setup(props) {
			const fontSizeFormatted = computed(() => `${props.fontSize}rem`);
			const imageGroupWidthFormatted = computed(() => `-${props.imageGroupWidth}px`);

			watch(
				() => props.imageGroupWidth,
				() => {
					gsap.defaults({ duration: props.animationSpeed, ease: 'none', repeat: -1 });
					gsap.set(`#${props.groupId}`, {
						x: (i) => i * (props.imageGroupWidth + props.initialPosition),
					});

					let windowWrap = gsap.utils.wrap(
						0,
						props.parentElementWidth + props.imageGroupWidth + props.wrapMaxAt
					);

					const gsapOptions = {
						x: `+=${props.parentElementWidth + props.imageGroupWidth + props.wrapMaxAt}`,
						modifiers: {
							x: (x: string) => {
								return windowWrap(parseFloat(x)) + 'px';
							},
						},
					};

					props.direction === 'left-to-right'
						? gsap.to(`#${props.groupId}`, gsapOptions)
						: gsap.from(`#${props.groupId}`, gsapOptions);
				}
			);

			return { imageGroupWidthFormatted, fontSizeFormatted };
		},
	});
</script>

<style lang="scss">
	.running-text-straight {
		position: relative;
		left: v-bind(imageGroupWidthFormatted);
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		gap: 5rem;
		font-size: v-bind(fontSizeFormatted);
	}
</style>
