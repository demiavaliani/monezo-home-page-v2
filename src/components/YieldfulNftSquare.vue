<template>
	<div class="yieldful-nft-square">
		<div class="yieldful-nft-square__circle-wrapper">
			<div class="circle" @mouseenter="$emit('circleHover', categoryDescription)">
				<p>
					{{ title }}
				</p>

				<div class="circle__animation">
					<img :src="getImageUrl(circleAnimationName)" />
				</div>
			</div>
		</div>

		<div class="yieldful-nft-square__double-border" v-if="doubleBorder">
			<div :class="['arrow', `arrow-${arrowSingle}`]">
				<img src="@/assets/images/arrow-icon.svg" />
			</div>

			<div class="content">
				<p>{{ doubleBorderTitle }}</p>
			</div>
		</div>

		<div
			class="yieldful-nft-square__double-border yieldful-nft-square__double-border--divided"
			v-else-if="doubleBorderDivided"
		>
			<div class="top">
				<img src="@/assets/images/arrow-icon.svg" :class="['arrow', `arrow-${arrowDoubleTop}`]" />
				<p>{{ doubleBorderDividedTextTop }}</p>
			</div>
			<div class="bottom">
				<img
					src="@/assets/images/arrow-icon.svg"
					:class="['arrow', `arrow-${arrowDoubleBottom}`]"
				/>
				<p>{{ doubleBorderDividedTextBottom }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed, onMounted } from 'vue';
	import { gsap, CSSPlugin } from 'gsap';

	export default defineComponent({
		components: {},

		props: {
			title: {
				type: String,
				required: true,
			},

			circleAnimationName: {
				type: String,
				required: true,
			},

			doubleBorder: {
				type: Boolean,
				required: true,
			},

			doubleBorderTitle: {
				type: String,
				required: false,
			},

			doubleBorderDivided: {
				type: Boolean,
				required: true,
			},

			doubleBorderDividedTextTop: {
				type: String,
				required: false,
			},

			doubleBorderDividedTextBottom: {
				type: String,
				required: false,
			},

			arrowSingle: {
				type: String,
				required: false,
				validator: (value: string) => ['', 'single--right', 'single--left'].includes(value),
			},

			arrowDoubleTop: {
				type: String,
				required: false,
				validator: (value: string) => ['', 'double--right', 'double--left'].includes(value),
			},

			arrowDoubleBottom: {
				type: String,
				required: false,
				validator: (value: string) => ['', 'double--right', 'double--left'].includes(value),
			},

			borderTop: {
				type: String,
				required: false,
				default: '2px solid #111111',
				validator: (value: string) => ['none', '2px solid #111111'].includes(value),
			},

			borderRight: {
				type: String,
				required: false,
				default: '2px solid #111111',
				validator: (value: string) => ['none', '2px solid #111111'].includes(value),
			},

			borderBottom: {
				type: String,
				required: false,
				default: '2px solid #111111',
				validator: (value: string) => ['none', '2px solid #111111'].includes(value),
			},

			borderLeft: {
				type: String,
				required: false,
				default: '2px solid #111111',
				validator: (value: string) => ['none', '2px solid #111111'].includes(value),
			},

			categoryDescription: {
				type: String,
				required: true,
			},
		},

		emits: ['circleHover'],

		setup(props) {
			const bodyWidth = ref(0);

			const squareWidth = computed(() => `${bodyWidth.value / 4 / 10}rem`);

			const getImageUrl = (name: string) => {
				return new URL(`../assets/images/fourth-section-${name}-animation.png`, import.meta.url)
					.href;
			};

			onMounted(() => {
				bodyWidth.value = document.getElementById('fourth-section-right-side').clientWidth;

				gsap.registerPlugin(CSSPlugin);

				const circleWrappers = gsap.utils.toArray('.yieldful-nft-square__circle-wrapper .circle');

				circleWrappers.forEach((elem: HTMLElement) => {
					const rotate = gsap.to(elem.lastChild, {
						rotation: 360,
						repeat: -1,
						duration: 9,
						ease: 'none',
						paused: true,
					});

					const grow = gsap.to(elem.lastChild, { width: '150%', height: '150%', paused: true });

					elem.addEventListener('mouseenter', () => {
						rotate.play();
						grow.play();
					});

					elem.addEventListener('mouseleave', () => {
						grow.reverse();
					});
				});
			});

			return { squareWidth, getImageUrl };
		},
	});
</script>

<style lang="scss">
	@use 'sass:math';

	.yieldful-nft-square {
		--square-height: 40.2rem;
		--double-border-font-size: 1.6rem;
		--circle-height: 33%;
		--circle-font-size: 2rem;
		--circle-padding: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		width: v-bind(squareWidth);
		height: var(--square-height);
		border-top: v-bind(borderTop);
		border-right: v-bind(borderRight);
		border-bottom: v-bind(borderBottom);
		border-left: v-bind(borderLeft);

		&__double-border {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			border-left: 2px solid $monezo-night-black;
			font-size: var(--double-border-font-size);
			font-weight: 600;
			text-align: center;
			writing-mode: vertical-rl;
			color: $monezo-night-black;

			.content {
				display: flex;
				align-items: center;
				width: 100%;
				padding: 0.7rem;
				transform: rotate(-180deg);
			}

			&--divided {
				.top,
				.bottom {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 50%;
					padding: 0.7rem;
					transform: rotate(-180deg);
				}

				.top {
					border-top: 2px solid $monezo-night-black;
				}
			}
		}

		&__circle-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;

			.circle {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				height: var(--circle-height);
				aspect-ratio: 1;
				padding: var(--circle-padding);
				border-radius: 50%;
				background-color: $monezo-night-black;
				color: white;
				font-size: var(--circle-font-size);
				font-weight: 600;
				text-transform: uppercase;
				z-index: 2;
				transform-style: preserve-3d;

				@keyframes rotate {
					to {
						rotate: 360deg;
					}
				}

				&__animation {
					position: absolute;
					width: 100%;
					height: 100%;
					transform: translateZ(-1px);

					img {
						width: 100%;
					}
				}
				p {
					pointer-events: none;
				}
			}
		}

		.arrow {
			position: absolute;

			&-single {
				&--right {
					right: -2.3rem;
				}

				&--left {
					left: -2.3rem;
					transform: rotate(180deg);
				}
			}

			&-double {
				&--right {
					left: -2.2rem;
					transform: rotate(180deg);
				}

				&--left {
					right: -2.2rem;
				}
			}
		}
	}
</style>
