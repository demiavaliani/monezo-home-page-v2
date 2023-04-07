<template>
	<div class="running-text-vertical">
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

			parentElementHeight: {
				type: Number,
				required: true,
			},

			groupHeight: {
				type: Number,
				required: true,
			},

			// ideally, should be same as gap between each element in the group
			initialPosition: {
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
				validator: (value: string) => ['top-to-bottom', 'bottom-to-top'].includes(value),
			},

			fontSize: {
				type: Number,
				required: false,
			},
		},

		setup(props) {
			const fontSizeFormatted = computed(() => `${props.fontSize}rem`);
			const groupHeightFormatted = computed(() => `-${props.groupHeight}px`);
			const groupCount = computed(() => document.querySelectorAll(`#${props.groupId}`));

			watch(
				() => props.groupHeight,
				() => {
					gsap.set(`#${props.groupId}`, {
						y: (i) => i * (props.groupHeight + props.initialPosition),
					});

					let windowWrap = gsap.utils.wrap(
						0,
						props.parentElementHeight +
							props.groupHeight +
							(props.groupHeight * (groupCount.value.length - 1) +
								50 * groupCount.value.length -
								props.parentElementHeight)
					);

					const gsapOptions = {
						y: `+=${
							props.parentElementHeight +
							props.groupHeight +
							(props.groupHeight * (groupCount.value.length - 1) +
								50 * groupCount.value.length -
								props.parentElementHeight)
						}`,
						modifiers: {
							y: (y: string) => {
								return windowWrap(parseFloat(y)) + 'px';
							},
						},
						duration: props.animationSpeed,
						ease: 'none',
						repeat: -1,
					};

					props.direction === 'top-to-bottom'
						? gsap.to(`#${props.groupId}`, gsapOptions)
						: gsap.from(`#${props.groupId}`, gsapOptions);
				}
			);

			return { groupHeightFormatted, fontSizeFormatted };
		},
	});
</script>

<style lang="scss">
	.running-text-vertical {
		position: relative;
		top: v-bind(groupHeightFormatted);
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: v-bind(fontSizeFormatted);
	}
</style>
