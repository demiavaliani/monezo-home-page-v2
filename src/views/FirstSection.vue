<template>
	<div class="first-section">
		<NavBar :first-page="true" :last-page="false" />

		<img
			src="../assets/images/monezo-nft-rotating-circle.png"
			class="first-section__circle-outer"
		/>
		<img
			src="../assets/images/monezo-nft-rotating-circle.png"
			class="first-section__circle-inner"
		/>

		<div class="first-section__body">
			<div class="first-section__body__title">
				<p class="first-section__body__title--first-line">
					One <br />
					Platform,
				</p>
				<p class="first-section__body__title--second-line">TWO WORLDS</p>
			</div>

			<div class="first-section__body__description">
				<p>
					Revolutionary platform that connects traditional real world assets & businesses revenue
					with NFT holders
				</p>
			</div>

			<div class="first-section__body__buttons">
				<Button
					class="first-section__body__buttons--first"
					:text="'Start Earnings'"
					:background="'filled'"
					:initial-width="25.4"
					:hover-width="28.2"
				/>

				<Button
					:text="'All-In-One App'"
					:background="'transparent'"
					:initial-width="25.8"
					:hover-width="28.6"
				/>
			</div>
		</div>

		<div class="first-section__circle-corner">
			<img
				src="../assets/images/monezo-nft-rotating-circle.png"
				class="first-section__circle-corner__image"
			/>
		</div>

		<div class="first-section__monkers">
			<img src="../assets/images/monker-corner-1.png" class="monker" />
			<img src="../assets/images/monker-corner-2.png" class="monker" />
			<img src="../assets/images/monker-corner-3.png" class="monker" />
		</div>

		<div class="first-section__footer">
			<div class="first-section__footer__text">
				<p>PARTNERS</p>
			</div>

			<div class="first-section__footer__running-text" ref="runningText">
				<RunningTextStraight
					:group-id="'images-group'"
					:parent-element-width="runningTextWidth"
					:group-width="imageGroupWidth"
					:initial-position="initialPosition"
					:gap="runningTextLogoGap"
					:animation-speed="20"
					:direction="'right-to-left'"
				>
					<div id="images-group" class="images" ref="imageGroup">
						<img src="@/assets/images/multibank-logo.png" />
						<img src="@/assets/images/megogo-logo.png" />
						<img src="@/assets/images/castles-logo.png" />
						<img src="@/assets/images/pion-logo.png" />
					</div>

					<div id="images-group" class="images">
						<img src="@/assets/images/multibank-logo.png" />
						<img src="@/assets/images/megogo-logo.png" />
						<img src="@/assets/images/castles-logo.png" />
						<img src="@/assets/images/pion-logo.png" />
					</div>
				</RunningTextStraight>
			</div>
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed, onMounted } from 'vue';
	import { gsap, Power1 } from 'gsap';
	import NavBar from '@/components/NavBar.vue';
	import Button from '@/components/Button.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import RunningTextCircle from '@/components/RunningTextCircle.vue';
	import { useResizeObserver } from '@vueuse/core';

	export default defineComponent({
		components: { NavBar, Button, RunningTextStraight, RunningTextCircle },

		setup() {
			const runningText = ref<HTMLDivElement | null>(null);
			const imageGroup = ref<HTMLDivElement | null>(null);
			const imageGroupWidth = ref(0);
			const initialPosition = ref(25);
			const wrapMaxAt = ref(0);
			const runningTextLogoGap = ref(25);

			const runningTextWidth = computed(() =>
				runningText.value ? runningText.value.offsetWidth : 0
			);

			const calculateMediaQuery = (width: number, height: number) => {
				return window.matchMedia(
					`screen and (max-width: ${width}px) and (max-height: ${height}px)`
				);
			};

			onMounted(() => {
				let tl = gsap.timeline({ repeat: -1 });

				gsap.utils.toArray<HTMLImageElement>('.monker').forEach((monker) => {
					tl.from(
						monker,
						{
							xPercent: 110,
							yPercent: 30,
							rotation: 30,
							opacity: 0,
							scale: 0.7,
							duration: 1,
							ease: Power1.easeInOut,
						},
						'>-1'
					);
					tl.from(monker, {
						duration: 4,
					});
					tl.to(monker, {
						xPercent: -75,
						yPercent: 60,
						rotation: -55,
						opacity: 0,
						scale: 0.6,
						duration: 1,
						ease: Power1.easeInOut,
					});
				});

				if (calculateMediaQuery(1920, 1200).matches) {
					initialPosition.value = 20;
					runningTextLogoGap.value = 20;
				}

				if (calculateMediaQuery(1680, 1050).matches) {
					initialPosition.value = 18;
					runningTextLogoGap.value = 18;
				}

				if (calculateMediaQuery(1512, 982).matches) {
					initialPosition.value = 15;
					runningTextLogoGap.value = 15;
				}
			});

			useResizeObserver(imageGroup, (entries) => {
				imageGroupWidth.value = entries[0].contentRect.width;
			});

			return {
				runningText,
				runningTextWidth,
				imageGroup,
				imageGroupWidth,
				initialPosition,
				wrapMaxAt,
				runningTextLogoGap,
			};
		},
	});
</script>

<style lang="scss">
	.first-section {
		--footer-height: 12.4rem;

		@media only screen and (max-width: 2304px) and (max-height: 1440px) {
			--footer-height: 15rem;
		}

		@media only screen and (max-width: 1600px) and (max-height: 900px) {
			--footer-height: 10rem;
		}

		@media only screen and (max-width: 1512px) {
			--footer-height: 10rem;
		}

		@keyframes rotate {
			to {
				rotate: 360deg;
			}
		}

		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		background: linear-gradient(90deg, #b1b0fa 0%, #fbc7d4 100%);
		overflow: hidden;

		&__circle-outer {
			position: absolute;
			top: -88rem;
			align-self: center;
			width: 113.1rem;
			animation: rotate 30s infinite linear;
			z-index: 1;

			@media only screen and (max-width: 2304px) and (max-height: 1440px) {
				top: -92rem;
				width: 123rem;
			}

			@media only screen and (max-width: 1680px) and (max-height: 1050px) {
				top: -85rem;
				width: 110rem;
			}

			@media only screen and (max-width: 1512px) {
				top: -70rem;
				width: 90rem;
			}

			@media only screen and (max-width: 1280px) and (max-height: 800px) {
				top: -50rem;
				width: 70rem;
			}
		}

		&__circle-inner {
			position: absolute;
			top: -74rem;
			align-self: center;
			width: 84.5rem;
			animation: rotate 30s infinite reverse linear;
			z-index: 1;

			@media only screen and (max-width: 2304px) and (max-height: 1440px) {
				top: -77rem;
				width: 91.9rem;
			}

			@media only screen and (max-width: 1680px) and (max-height: 1050px) {
				top: -72rem;
				width: 82.2rem;
			}

			@media only screen and (max-width: 1512px) {
				top: -59rem;
				width: 67.25rem;
			}

			@media only screen and (max-width: 1280px) and (max-height: 800px) {
				top: -41rem;
				width: 52.3rem;
			}
		}

		&__body {
			display: flex;
			flex-direction: column;
			gap: 3rem;
			padding: 0 0 0 6.2rem;

			&__title {
				font-weight: bold;

				&--first-line {
					font-size: 10rem;
					line-height: 12rem;
				}

				&--second-line {
					letter-spacing: -0.105em;
					font-size: 15rem;
					line-height: 18rem;
				}

				@media only screen and (max-width: 1946px) {
					&--first-line {
						font-size: 8rem;
					}

					&--second-line {
						font-size: 13rem;
					}
				}

				@media only screen and (max-width: 1800px) {
					&--first-line {
						font-size: 6rem;
					}

					&--second-line {
						font-size: 11rem;
					}
				}

				@media only screen and (max-width: 1512px) {
					&--first-line {
						font-size: 5rem;
						line-height: 8rem;
					}

					&--second-line {
						font-size: 8rem;
						line-height: 15rem;
					}
				}

				@media only screen and (max-width: 1280px) and (max-height: 800px) {
					&--first-line {
						font-size: 4rem;
						line-height: 6rem;
					}

					&--second-line {
						font-size: 7rem;
						line-height: 13rem;
					}
				}
			}

			&__description {
				font-size: 1.6rem;
				font-weight: bold;
				line-height: 2.3rem;

				@media only screen and (max-width: 1800px) {
					width: 90rem;
				}
			}

			&__buttons {
				display: flex;

				&--first {
					margin-right: 3rem;
				}
			}
		}

		&__circle-corner {
			position: absolute;
			bottom: var(--footer-height);
			right: 0rem;
			width: 84.5rem;
			height: 84.5rem;
			overflow: hidden;
			z-index: 1;

			&__image {
				position: absolute;
				bottom: -41rem;
				right: -35rem;
				width: 84.5rem;
				animation: rotate 30s infinite linear;

				@media only screen and (max-width: 2304px) and (max-height: 1440px) {
					width: 92.5rem;
				}

				@media only screen and (max-width: 1920px) and (max-height: 1200px) {
					width: 80.5rem;
				}

				@media only screen and (max-width: 1920px) and (max-height: 1080px) {
					width: 78.5rem;
				}

				@media only screen and (max-width: 1600px) and (max-height: 900px) {
					width: 74.5rem;
				}

				@media only screen and (max-width: 1512px) {
					width: 71rem;
				}

				@media only screen and (max-width: 1440px) and (max-height: 900px) {
					width: 74rem;
				}

				@media only screen and (max-width: 1366px) and (max-height: 768px) {
					width: 69rem;
				}

				@media only screen and (max-width: 1280px) and (max-height: 800px) {
					width: 68rem;
				}
			}
		}

		&__monkers {
			position: absolute;
			bottom: var(--footer-height);
			right: -11rem;
			width: 77.2rem;
			height: 100%;
			z-index: 1;

			@media only screen and (max-width: 2304px) and (max-height: 1440px) {
				right: 0;
			}

			@media only screen and (max-width: 1920px) and (max-height: 1200px) {
				right: -17rem;
			}

			@media only screen and (max-width: 1920px) and (max-height: 1080px) {
				right: -21rem;
			}

			@media only screen and (max-width: 1680px) and (max-height: 1050px) {
				right: -25rem;
			}

			@media only screen and (max-width: 1600px) and (max-height: 900px) {
				right: -30rem;
			}

			@media only screen and (max-width: 1512px) {
				right: -34rem;
			}

			@media only screen and (max-width: 1366px) and (max-height: 768px) {
				right: -38rem;
			}

			@media only screen and (max-width: 1440px) and (max-height: 900px) {
				right: -30rem;
			}

			@media only screen and (max-width: 1280px) and (max-height: 800px) {
				right: -38rem;
			}

			img {
				position: absolute;
				width: 77.2rem;
				bottom: 0;

				@media only screen and (max-width: 2304px) and (max-height: 1440px) {
					width: 90rem;
				}

				@media only screen and (max-width: 1920px) and (max-height: 1200px) {
					width: 70rem;
				}

				@media only screen and (max-width: 1920px) and (max-height: 1080px) {
					width: 65rem;
				}

				@media only screen and (max-width: 1680px) and (max-height: 1050px) {
					width: 60rem;
				}

				@media only screen and (max-width: 1600px) and (max-height: 900px) {
					width: 55rem;
				}

				@media only screen and (max-width: 1512px) {
					width: 50rem;
				}

				@media only screen and (max-width: 1440px) and (max-height: 900px) {
					width: 55rem;
				}

				@media only screen and (max-width: 1366px) and (max-height: 768px) {
					width: 45rem;
				}

				@media only screen and (max-width: 1280px) and (max-height: 800px) {
					width: 45rem;
				}
			}
		}

		&__footer {
			display: flex;
			width: 100vw;
			height: var(--footer-height);
			padding: 0 0 0 3rem;
			border-top: 2px solid $monezo-night-black;

			&__text {
				display: flex;
				align-items: center;
				width: 55%;
				border-right: 2px solid $monezo-night-black;

				p {
					letter-spacing: -0.105em;
					font-size: 7rem;
					font-weight: bold;
					line-height: 12.4rem;

					@media only screen and (max-width: 1280px) and (max-height: 800px) {
						font-size: 6rem;
					}
				}
			}

			&__running-text {
				position: relative;
				width: 100%;
				height: 100%;
				overflow: hidden;
				z-index: 1;

				.images {
					position: absolute;
					display: flex;
					// play with gap to adjust space between the groups
					gap: 25rem;

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						gap: 20rem;
					}

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						gap: 18rem;
					}

					@media only screen and (max-width: 1512px) and (max-height: 982px) {
						gap: 15rem;
					}
				}

				img {
					height: 4rem;

					&:first-child {
						width: 12.7rem;
					}

					&:nth-child(2) {
						width: 8.5rem;
					}

					&:nth-child(3) {
						width: 20.5rem;
					}

					&:nth-child(4) {
						width: 5.9rem;
					}
				}
			}
		}

		.pixelated-background {
			position: absolute;
			width: 100%;
			height: 100%;
			pointer-events: none;
			background: url('@/assets/images/pixelated-background.svg');
			mix-blend-mode: overlay;
			opacity: 1;
		}
	}
</style>

<!--
screen sizes covered
--- 2560 - 1700
--- 2560 - 1600
--- 2560 - 1440
--- 2304 - 1440
--- 1920 - 1200
--- 1920 - 1080
--- 1680 - 1050
--- 1600 - 900
--- 1440 - 900
--- 1366 - 768
-->
