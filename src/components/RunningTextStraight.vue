<template>
	<div class="running-text-straight">
		<slot />
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted, nextTick, computed } from 'vue';
	import { gsap } from 'gsap';

	export default defineComponent({
		props: {
			parentElementWidth: {
				type: Number,
				required: true,
			},

			groupId: {
				type: String,
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
			const imageGroupWidth = ref(0);

			const imageGroupWidthFormatted = computed(() => `-${imageGroupWidth.value}px`);

			onMounted(() => {
				nextTick(() => {
					imageGroupWidth.value = document.getElementById(props.groupId).offsetWidth;
					gsap.defaults({ duration: props.animationSpeed, ease: 'none', repeat: -1 });
					gsap.set(`#${props.groupId}`, {
						x: (i) =>
							i * (imageGroupWidth.value + (props.parentElementWidth - imageGroupWidth.value) / 2),
					});

					let windowWrap = gsap.utils.wrap(0, props.parentElementWidth + imageGroupWidth.value);

					const gsapOptions = {
						x: `+=${props.parentElementWidth + imageGroupWidth.value}`,
						modifiers: {
							x: (x: string) => windowWrap(parseFloat(x)) + 'px',
						},
					};

					props.direction === 'left-to-right'
						? gsap.to(`#${props.groupId}`, gsapOptions)
						: gsap.from(`#${props.groupId}`, gsapOptions);
				});
			});

			return { imageGroupWidthFormatted };
		},
	});
</script>

<style lang="scss">
	.running-text-straight {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		left: v-bind(imageGroupWidthFormatted);
	}
</style>
