<template>
	<div class="second-section" id="snap-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="navbar-running-text-wrapper" ref="navbarRunningTextWrapper">
				<RunningTextStraight
					:group-id="'second-section-navbar-running-text-group'"
					:parent-element-width="navbarRunningTextWrapperWidth"
					:group-width="navbarTextGroupWidth"
					:initial-position="5"
					:gap="5"
					:animation-speed="70"
					:direction="'right-to-left'"
					:font-size="5"
				>
					<div
						id="second-section-navbar-running-text-group"
						class="navbar-text-wrapper"
						ref="navbarTextGroup"
					>
						<p class="running-text">Start your passive income Journey with Monezo NFT</p>
						<img src="../assets/images/start-your-journey-text-divider-icon.svg" />
					</div>

					<div id="second-section-navbar-running-text-group" class="navbar-text-wrapper">
						<p class="running-text">Start your passive income Journey with Monezo NFT</p>
						<img src="../assets/images/start-your-journey-text-divider-icon.svg" />
					</div>

					<div id="second-section-navbar-running-text-group" class="navbar-text-wrapper">
						<p class="running-text">Start your passive income Journey with Monezo NFT</p>
						<img src="../assets/images/start-your-journey-text-divider-icon.svg" />
					</div>
				</RunningTextStraight>
			</div>
		</NavBar>

		<div class="second-section__sides">
			<div class="second-section__sides__left-part">
				<div class="column__left" ref="runningMonkerWrapper">
					<RunningTextVertical
						:group-id="'monker-column-left-group'"
						:initial-position="5"
						:gap="5"
						:animation-speed="15"
						:direction="'top-to-bottom'"
						:parent-element-height="runningMonkerWrapperHeight"
						:group-height="runningMonkerGroupHeight"
					>
						<img
							id="monker-column-left-group"
							class="column__left__monker-group"
							ref="runningMonkerGroup"
							src="../assets/images/monker-real-estate-1k.png"
						/>
						<img
							id="monker-column-left-group"
							class="column__left__monker-group"
							src="../assets/images/monker-real-estate-100.png"
						/>
						<img
							id="monker-column-left-group"
							class="column__left__monker-group"
							src="../assets/images/monker-real-estate-1k.png"
						/>
					</RunningTextVertical>
				</div>

				<div class="column__right">
					<RunningTextVertical
						:group-id="'monker-column-right-group'"
						:initial-position="5"
						:gap="5"
						:animation-speed="15"
						:direction="'bottom-to-top'"
						:parent-element-height="runningMonkerWrapperHeight"
						:group-height="runningMonkerGroupHeight"
					>
						<img
							id="monker-column-right-group"
							class="column__left__monker-group"
							ref="runningMonkerGroup"
							src="../assets/images/monker-car-rental-5k.png"
						/>
						<img
							id="monker-column-right-group"
							class="column__left__monker-group"
							src="../assets/images/monker-car-rental-10k.png"
						/>
						<img
							id="monker-column-right-group"
							class="column__left__monker-group"
							src="../assets/images/monker-car-rental-5k.png"
						/>
					</RunningTextVertical>
				</div>
			</div>

			<div class="second-section__sides__right-part">
				<div class="second-section__sides__right-part__top">
					<img src="../assets/images/platform-rotating-circle.png" />
				</div>

				<div class="second-section__sides__right-part__middle">
					<p>
						With Monezo platform you get access to Monezo Yieldful NFT, which are backed by stable
						income from real world assets and business revenue.
					</p>
					<p>
						NFT holders can choose best options for everyone from different NFT collections with
						fixed, flexible or combined yield which depends on asset type and business.
					</p>
					<MonezoButton
						:text="'Get NFT'"
						:background="'filled'"
						:initial-width="18.2"
						:hover-width="21"
					/>
				</div>

				<div class="second-section__sides__right-part__bottom" ref="bottomRightRunningTextWrapper">
					<RunningTextStraight
						:group-id="'bottom-right-running-text-group'"
						:parent-element-width="bottomRightRunningTextWrapperWidth"
						:group-width="bottomRightTextGroupWidth"
						:initial-position="5"
						:gap="5"
						:animation-speed="20"
						:direction="'right-to-left'"
						:font-size="bottomRightFontSize"
					>
						<div
							id="bottom-right-running-text-group"
							class="bottom-right-text-wrapper"
							ref="bottomRightTextGroup"
						>
							<p class="running-text">More than an investment platform</p>
							<img src="../assets/images/platform-text-divider.svg" />
						</div>

						<div id="bottom-right-running-text-group" class="bottom-right-text-wrapper">
							<p class="running-text">More than an investment platform</p>
							<img src="../assets/images/platform-text-divider.svg" />
						</div>
					</RunningTextStraight>
				</div>
			</div>
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed, onMounted } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import RunningTextVertical from '@/components/RunningTextVertical.vue';
	import { useResizeObserver } from '@vueuse/core';
	import MonezoButton from '@/components/MonezoButton.vue';

	export default defineComponent({
		components: { NavBar, RunningTextStraight, MonezoButton, RunningTextVertical },
		setup() {
			const navbarRunningTextWrapper = ref<HTMLDivElement | null>(null);
			const navbarTextGroup = ref<HTMLDivElement | null>(null);
			const navbarTextGroupWidth = ref(0);

			const bottomRightRunningTextWrapper = ref<HTMLDListElement | null>(null);
			const bottomRightTextGroup = ref<HTMLDivElement | null>(null);
			const bottomRightTextGroupWidth = ref(0);
			const bottomRightFontSize = ref(5);

			const runningMonkerWrapper = ref<HTMLDListElement | null>(null);
			const runningMonkerGroup = ref<HTMLDivElement | null>(null);
			const runningMonkerGroupHeight = ref(0);

			const navbarRunningTextWrapperWidth = computed(() =>
				navbarRunningTextWrapper.value ? navbarRunningTextWrapper.value.offsetWidth : 0
			);

			const bottomRightRunningTextWrapperWidth = computed(() =>
				bottomRightRunningTextWrapper.value ? bottomRightRunningTextWrapper.value.offsetWidth : 0
			);

			const runningMonkerWrapperHeight = computed(() =>
				runningMonkerWrapper.value ? runningMonkerWrapper.value.offsetHeight : 0
			);

			useResizeObserver(navbarTextGroup, (entries) => {
				navbarTextGroupWidth.value = entries[0].contentRect.width;
			});

			useResizeObserver(bottomRightTextGroup, (entries) => {
				bottomRightTextGroupWidth.value = entries[0].contentRect.width;
			});

			useResizeObserver(runningMonkerGroup, (entries) => {
				runningMonkerGroupHeight.value = entries[0].contentRect.height;
			});

			const calculateMediaQuery = (width: number, height: number) => {
				return window.matchMedia(
					`screen and (max-width: ${width}px) and (max-height: ${height}px)`
				);
			};

			onMounted(() => {
				if (calculateMediaQuery(1680, 1050).matches) {
					bottomRightFontSize.value = 4;
				}

				if (calculateMediaQuery(1440, 900).matches) {
					bottomRightFontSize.value = 3.5;
				}

				if (calculateMediaQuery(1366, 768).matches) {
					bottomRightFontSize.value = 3;
				}

				if (calculateMediaQuery(1280, 800).matches) {
					bottomRightFontSize.value = 3;
				}
			});

			return {
				navbarRunningTextWrapper,
				navbarRunningTextWrapperWidth,
				navbarTextGroup,
				navbarTextGroupWidth,
				bottomRightRunningTextWrapper,
				bottomRightRunningTextWrapperWidth,
				bottomRightTextGroup,
				bottomRightTextGroupWidth,
				bottomRightFontSize,
				runningMonkerWrapper,
				runningMonkerWrapperHeight,
				runningMonkerGroup,
				runningMonkerGroupHeight,
			};
		},
	});
</script>

<style lang="scss">
	.second-section {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		border-top: 0;
		background: linear-gradient(90deg, #ddd6f3 0%, #faaca8 100%);

		&__sides {
			display: flex;
			height: 100%;

			&__left-part {
				display: flex;
				width: 60%;
				height: 100%;
				border-right: 2px solid $monezo-night-black;

				.column {
					&__left {
						width: 50%;
						height: 100%;
						overflow: hidden;

						&__monker-group {
							position: absolute;
							width: 70rem;
							z-index: 1;

							@media only screen and (max-width: 2304px) and (max-height: 1440px) {
								width: 62rem;
							}

							@media only screen and (max-width: 1920px) and (max-height: 1200px) {
								width: 50rem;
							}

							@media only screen and (max-width: 1680px) and (max-height: 1050px) {
								width: 42rem;
							}

							@media only screen and (max-width: 1512px) and (max-height: 982px) {
								width: 38rem;
							}

							@media only screen and (max-width: 1366px) and (max-height: 768px) {
								width: 34rem;
							}

							@media only screen and (max-width: 1280px) and (max-height: 800px) {
								width: 32rem;
							}
						}
					}

					&__right {
						width: 50%;
						height: 100%;
						overflow: hidden;
					}
				}
			}

			&__right-part {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 40%;
				height: 100%;

				&__top {
					position: relative;
					width: 100%;
					height: 30%;
					border-bottom: 2px solid $monezo-night-black;
					overflow: hidden;

					@keyframes rotate {
						to {
							rotate: 360deg;
						}
					}

					img {
						position: absolute;
						top: 8rem;
						right: -27rem;
						width: 110rem;
						animation: rotate 30s infinite linear;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						img {
							width: 100rem;
						}
					}

					@media only screen and (max-width: 1920px) and (max-height: 1080px) {
						height: 50%;
					}

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						img {
							top: 7rem;
							width: 90rem;
						}
					}

					@media only screen and (max-width: 1600px) and (max-height: 900px) {
						img {
							top: 5rem;
							width: 85rem;
						}
					}

					@media only screen and (max-width: 1366px) and (max-height: 768px) {
						img {
							right: -25rem;
							width: 75rem;
						}
					}

					@media only screen and (max-width: 1280px) and (max-height: 800px) {
						img {
							right: -18rem;
							width: 65rem;
						}
					}

					@media only screen and (max-width: 1280px) and (max-height: 720px) {
						img {
							top: 4rem;
						}
					}
				}

				&__middle {
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 9rem;
					width: 100%;
					height: auto;
					padding: 8.6rem 11rem 6.3rem 6.8rem;
					font-size: 2.8rem;
					font-weight: 500;
					line-height: 4.5rem;

					.button-wrapper {
						margin-top: 1rem;
					}

					@media only screen and (max-width: 2560px) and (max-height: 1440px) {
						gap: 7rem;
						font-size: 2.5rem;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						gap: 4rem;
						font-size: 2rem;
						line-height: 4rem;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1080px) {
						gap: 3rem;
						padding: 6rem 11rem 4rem 6.8rem;
						font-size: 1.8rem;
						line-height: 3.5rem;
					}

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						padding: 7rem 11rem 4.7rem 6.8rem;
						font-size: 1.8rem;
					}

					@media only screen and (max-width: 1600px) and (max-height: 900px) {
						padding: 4.5rem 9rem 3.2rem 6.8rem;
						font-size: 1.6rem;
						line-height: 3.2rem;
					}

					@media only screen and (max-width: 1512px) and (max-height: 982px) {
						gap: 2rem;
						padding: 3rem 7rem 2rem 5rem;
						font-size: 1.4rem;
					}

					@media only screen and (max-width: 1366px) and (max-height: 768px) {
						line-height: 3rem;
					}

					@media only screen and (max-width: 1280px) and (max-height: 800px) {
						padding: 3rem 6rem 2rem 5rem;
						font-size: 1.3rem;
					}

					@media only screen and (max-width: 1280px) and (max-height: 720px) {
						padding: 3rem 3rem 2rem 3rem;
						line-height: 2.6rem;
					}
				}

				&__bottom {
					width: 100%;
					height: 10.7rem;
					min-height: 10.7rem;
					border-top: 2px solid $monezo-night-black;
					overflow: hidden;

					.bottom-right-text-wrapper {
						position: absolute;
						display: flex;
						align-items: center;
						width: fit-content;
						gap: 5rem;
						white-space: nowrap;

						.running-text {
							font-weight: bold;
						}

						img {
							@media only screen and (max-width: 1680px) and (max-height: 1050px) {
								width: 4.2rem;
							}

							@media only screen and (max-width: 1440px) and (max-height: 900px) {
								width: 3.9rem;
							}

							@media only screen and (max-width: 1366px) and (max-height: 768px) {
								width: 3.5rem;
							}

							@media only screen and (max-width: 1280px) and (max-height: 800px) {
								width: 3.2rem;
							}
						}
					}
				}
			}
		}

		.navbar-running-text-wrapper {
			width: 100%;
			overflow: hidden;

			.navbar-text-wrapper {
				position: absolute;
				display: flex;
				gap: 5rem;
				white-space: nowrap;

				.running-text {
					font-weight: bold;
				}

				img {
					width: 4.134rem;
				}
			}
		}
	}
</style>
