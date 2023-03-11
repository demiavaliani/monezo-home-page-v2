<template>
	<div class="running-text-circle" ref="circleElement">
		<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
			<path
				id="circle-path"
				class="running-text-circle__circle"
				:d="`M ${circleElementWidth / 2 + 1} ${circleElementHeight / 2} m -${
					circleElementWidth / 2
				}, 0 a ${circleElementWidth / 2 - 2},${circleElementWidth / 2 - 2} 0 1,0 ${
					circleElementWidth - 2
				},0 a ${circleElementWidth / 2 - 2},${circleElementWidth / 2 - 2} 0 1,0 -${
					circleElementWidth - 2
				},0`"
			/>

			<path
				class="running-text-circle__circle"
				:d="`M ${circleElementWidth / 2} ${circleElementHeight / 2} m -${
					((circleElementWidth / 2) * 70) / 100
				}, 0 a ${((circleElementWidth / 2) * 70) / 100},${
					((circleElementWidth / 2) * 70) / 100
				} 0 1,0 ${(((circleElementWidth / 2) * 70) / 100) * 2},0 a ${
					((circleElementWidth / 2) * 70) / 100
				},${((circleElementWidth / 2) * 70) / 100} 0 1,0 -${
					(((circleElementWidth / 2) * 70) / 100) * 2
				},0`"
			/>

			<text :dy="`-${textOffset}`">
				<textPath href="#circle-path" class="running-text-circle__text">
					{{ text }}
				</textPath>
			</text>
		</svg>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, computed, ref } from 'vue';
	import { gsap } from 'gsap';

	export default defineComponent({
		components: {},

		props: {
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
			const fontSizeComputed = computed(() => `${props.fontSize}rem`);

			const circleElementWidth = computed(() =>
				circleElement.value ? circleElement.value.clientWidth : 0
			);

			const circleElementHeight = computed(() =>
				circleElement.value ? circleElement.value.clientHeight : 0
			);

			onMounted(() => {
				if (circleElement.value) {
					gsap.to(circleElement.value, {
						rotation: 360,
						duration: props.animationSpeed,
						repeat: -1,
						ease: 'none',
					});
				}
			});

			return {
				circleElement,
				fontSizeComputed,
				circleElementWidth,
				circleElementHeight,
			};
		},
	});
</script>

<style lang="scss">
	.running-text-circle {
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
