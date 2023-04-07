<template>
	<div class="running-text-circle" ref="circleElement">
		<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
			<path :id="id" class="running-text-circle__circle" :d="pathOuterD" />

			<path class="running-text-circle__circle" :d="pathInnerD" />

			<text :dy="`-${textOffset}`">
				<textPath :href="`#${id}`" class="running-text-circle__text">
					{{ text }}
				</textPath>
			</text>
		</svg>
	</div>
</template>

<script lang="ts">
	import { defineComponent, computed, ref } from 'vue';

	export default defineComponent({
		components: {},

		props: {
			id: {
				type: String,
				required: true,
			},

			text: {
				type: String,
				required: true,
			},

			fontSize: {
				type: Number,
				required: true,
			},

			textOffset: {
				type: Number,
				required: true,
			},

			animationSpeed: {
				type: Number,
				required: true,
			},
		},

		setup(props) {
			const circleElement = ref<HTMLElement | null>(null);

			const circleElementWidth = computed(() =>
				circleElement.value ? circleElement.value.clientWidth : 0
			);

			const circleElementHeight = computed(() =>
				circleElement.value ? circleElement.value.clientHeight : 0
			);

			const fontSizeComputed = computed(() => `${props.fontSize}rem`);

			const animationSpeedFormatted = computed(() => `${props.animationSpeed}s`);

			const pathOuterD = computed(
				() =>
					`M ${Math.abs(circleElementWidth.value / 2 + 1)} ${circleElementHeight.value / 2} m -${
						circleElementWidth.value / 2
					} 0 a ${Math.abs(circleElementWidth.value / 2 - 2)} ${Math.abs(
						circleElementWidth.value / 2 - 2
					)} 0 1 0 ${Math.abs(circleElementWidth.value - 2)} 0 a ${Math.abs(
						circleElementWidth.value / 2 - 2
					)} ${Math.abs(circleElementWidth.value / 2 - 2)} 0 1 0 -${Math.abs(
						circleElementWidth.value - 2
					)} 0`
			);

			const pathInnerD = computed(
				() =>
					`M ${circleElementWidth.value / 2} ${circleElementHeight.value / 2} m -${
						((circleElementWidth.value / 2) * 70) / 100
					} 0 a ${((circleElementWidth.value / 2) * 70) / 100} ${
						((circleElementWidth.value / 2) * 70) / 100
					} 0 1 0 ${(((circleElementWidth.value / 2) * 70) / 100) * 2} 0 a ${
						((circleElementWidth.value / 2) * 70) / 100
					} ${((circleElementWidth.value / 2) * 70) / 100} 0 1 0 -${
						(((circleElementWidth.value / 2) * 70) / 100) * 2
					} 0`
			);

			return {
				circleElement,
				circleElementWidth,
				circleElementHeight,
				fontSizeComputed,
				animationSpeedFormatted,
				pathOuterD,
				pathInnerD,
			};
		},
	});
</script>

<style lang="scss">
	.running-text-circle {
		position: absolute;
		width: 100%;
		height: 100%;

		&__circle {
			fill: transparent;
			stroke: black;
			stroke-width: 1px;
		}

		&__text {
			font-size: v-bind(fontSizeComputed);
			color: white;
		}
	}
</style>
