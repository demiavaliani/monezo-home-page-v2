<template>
	<div class="fourth-section" id="snap-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="navbar-running-text-wrapper" ref="navbarRunningTextWrapper">
				<RunningTextStraight
					:group-id="'fourth-section-navbar-running-text-group'"
					:parent-element-width="navbarRunningTextWrapperWidth"
					:group-width="navbarTextGroupWidth"
					:initial-position="5"
					:gap="5"
					:animation-speed="50"
					:direction="'right-to-left'"
					:font-size="5"
				>
					<div
						id="fourth-section-navbar-running-text-group"
						class="navbar-running-text-group"
						ref="navbarTextGroup"
					>
						<p class="running-text">THE NEW CREATIVE ECONOMY</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="fourth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">THE NEW CREATIVE ECONOMY</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="fourth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">THE NEW CREATIVE ECONOMY</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="fourth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">THE NEW CREATIVE ECONOMY</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>
				</RunningTextStraight>
			</div>
		</NavBar>

		<div class="fourth-section__sides">
			<div class="left-side">
				<div class="left-side__running-text" ref="leftRunningTextWrapper">
					<RunningTextVertical
						:group-id="'left-running-text-group'"
						:initial-position="5"
						:gap="5"
						:animation-speed="25"
						:direction="'bottom-to-top'"
						:parent-element-height="leftRunningTextWrapperHeight"
						:group-height="leftTextGroupHeight"
						:font-size="5"
					>
						<div
							id="left-running-text-group"
							class="left-side__running-text__text-group"
							ref="leftTextGroup"
						>
							<p class="text">HOW YIELDFUL NFT WORKS</p>
							<img src="../assets/images/yieldful-nft-text-divider-icon.svg" />
						</div>

						<div id="left-running-text-group" class="left-side__running-text__text-group">
							<p class="text">HOW YIELDFUL NFT WORKS</p>
							<img src="../assets/images/yieldful-nft-text-divider-icon.svg" />
						</div>
					</RunningTextVertical>
				</div>
			</div>

			<div class="right-side" id="fourth-section-right-side">
				<div class="right-side__intro">
					<p class="right-side__intro__title">HOW YIELDFUL NFT WORKS</p>

					<p class="right-side__intro__description">
						Project by project, Monezo changing the way new ideas come to life
					</p>

					<Button
						:text="'Start Now'"
						:background="'filled'"
						:initial-width="20.3"
						:hover-width="23.2"
						class="right-side__intro__button"
					></Button>
				</div>

				<div class="right-side__row-one">
					<YieldfulNftSquare
						v-for="item in dataRowOne"
						:key="item.title"
						:title="item.title"
						:circle-animation-name="item.circleAnimationName"
						:double-border="item.doubleBorder"
						:double-border-divided="item.doubleBorderDivided"
						:double-border-title="item.doubleBorderTitle"
						:double-border-divided-text-top="item.doubleBorderDividedTextTop"
						:double-border-divided-text-bottom="item.doubleBorderDividedTextBottom"
						:arrowSingle="item.arrowSingle"
						:arrowDoubleTop="item.arrowDoubleTop"
						:arrowDoubleBottom="item.arrowDoubleBottom"
						:border-top="item.borderTop"
						:border-right="item.borderRight"
						:border-left="item.borderLeft"
					/>
				</div>

				<div class="right-side__row-middle">
					<div class="right-side__row-middle__profit">
						<img src="@/assets/images/yieldful-nft-cube-arrow.svg" />
						<p>Profit</p>
					</div>

					<div class="right-side__row-middle__liquidity">
						<img src="@/assets/images/yieldful-nft-cube-arrow.svg" />
						<p>Liquidity Supply</p>
					</div>

					<div class="right-side__row-middle__description">
						<p>
							Monezo Escrow is a security system dedicated to ensuring liquidity funds safety. It
							acts as a bridge between businesses & NFT holders. Its primary purpose is to transfer
							liquidity to businesses and store revenue from business activities to distribute
							rewards to NFT holders.
						</p>
					</div>

					<div class="right-side__row-middle__launchpad">
						<img src="@/assets/images/yieldful-nft-cube-arrow.svg" />
						<p>Launchpad</p>
					</div>
				</div>

				<div class="right-side__row-two">
					<YieldfulNftSquare
						v-for="item in dataRowTwo"
						:key="item.title"
						:title="item.title"
						:circle-animation-name="item.circneAnimationName"
						:double-border="item.doubleBorder"
						:double-border-divided="item.doubleBorderDivided"
						:double-border-title="item.doubleBorderTitle"
						:double-border-divided-text-top="item.doubleBorderDividedTextTop"
						:double-border-divided-text-bottom="item.doubleBorderDividedTextBottom"
						:arrowSingle="item.arrowSingle"
						:arrowDoubleTop="item.arrowDoubleTop"
						:arrowDoubleBottom="item.arrowDoubleBottom"
						:border-right="item.borderRight"
						:border-bottom="item.borderBottom"
						:border-left="item.borderLeft"
					/>
				</div>
			</div>
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed, onMounted, nextTick } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import RunningTextVertical from '@/components/RunningTextVertical.vue';
	import { useResizeObserver } from '@vueuse/core';
	import Button from '@/components/Button.vue';
	import YieldfulNftSquare from '@/components/YieldfulNftSquare.vue';

	export default defineComponent({
		components: { NavBar, RunningTextStraight, RunningTextVertical, Button, YieldfulNftSquare },
		setup() {
			const dataRowOne = [
				{
					title: 'BUSINESS',
					circleAnimationName: 'business',
					doubleBorder: true,
					doubleBorderTitle: 'Business Research',
					doubleBorderDivided: false,
					doubleBorderDividedTextTop: '',
					doubleBorderDividedTextBottom: '',
					arrowSingle: 'single--right',
					arrowDoubleTop: '',
					arrowDoubleBottom: '',
					borderTop: 'none',
					borderLeft: 'none',
				},
				{
					title: 'INCUBATOR',
					circleAnimationName: 'incubator',
					doubleBorder: true,
					doubleBorderTitle: 'Audit',
					doubleBorderDivided: false,
					arrowSingle: 'single--right',
					borderTop: 'none',
					borderLeft: 'none',
				},
				{
					title: 'Score',
					circleAnimationName: 'score',
					doubleBorder: true,
					doubleBorderTitle: 'NFT Collection & Sale Model Develop',
					doubleBorderDivided: false,
					arrowSingle: 'single--right',
					borderTop: 'none',
					borderLeft: 'none',
				},
				{
					title: 'YIELDFUL NFT',
					circleAnimationName: 'yieldful-nft',
					doubleBorder: false,
					doubleBorderDivided: false,
					borderTop: 'none',
					borderRight: 'none',
					borderLeft: 'none',
				},
			];

			const dataRowTwo = [
				{
					title: 'ESCROW',
					circneAnimationName: 'escrow',
					doubleBorder: false,
					doubleBorderTitle: '',
					doubleBorderDivided: true,
					doubleBorderDividedTextTop: 'Money Transfer',
					doubleBorderDividedTextBottom: 'Profit',
					arrowSingle: '',
					arrowDoubleTop: 'double--left',
					arrowDoubleBottom: 'double--right',
					borderBottom: 'none',
					borderLeft: 'none',
				},
				{
					title: 'WALLET',
					circneAnimationName: 'wallet',
					doubleBorder: false,
					doubleBorderTitle: '',
					doubleBorderDivided: true,
					doubleBorderDividedTextTop: 'Stacking',
					doubleBorderDividedTextBottom: 'Profit',
					arrowSingle: '',
					arrowDoubleTop: 'double--left',
					arrowDoubleBottom: 'double--right',
					borderBottom: 'none',
					borderLeft: 'none',
				},
				{
					title: 'NFT INVESTORS',
					circneAnimationName: 'investors',
					doubleBorder: true,
					doubleBorderTitle: 'Sale',
					doubleBorderDivided: false,
					arrowSingle: 'single--left',
					borderBottom: 'none',
					borderLeft: 'none',
				},
				{
					title: 'MARKET PLACE',
					circneAnimationName: 'marketplace',
					doubleBorder: false,
					doubleBorderDivided: false,
					borderRight: 'none',
					borderBottom: 'none',
					borderLeft: 'none',
				},
			];

			const navbarRunningTextWrapper = ref<HTMLDivElement | null>(null);
			const navbarTextGroup = ref<HTMLDivElement | null>(null);
			const navbarTextGroupWidth = ref(0);

			const leftRunningTextWrapper = ref<HTMLDivElement | null>(null);
			const leftTextGroup = ref<HTMLDivElement | null>(null);
			const leftTextGroupHeight = ref(0);

			const navbarRunningTextWrapperWidth = computed(() =>
				navbarRunningTextWrapper.value ? navbarRunningTextWrapper.value.offsetWidth : 0
			);

			const leftRunningTextWrapperHeight = computed(() =>
				leftRunningTextWrapper.value ? leftRunningTextWrapper.value.offsetHeight : 0
			);

			useResizeObserver(navbarTextGroup, (entries) => {
				navbarTextGroupWidth.value = entries[0].contentRect.width;
			});

			useResizeObserver(leftTextGroup, (entries) => {
				leftTextGroupHeight.value = entries[0].contentRect.height;
			});

			const calculateMediaQuery = (width: number, height: number) => {
				return window.matchMedia(
					`screen and (max-width: ${width}px) and (max-height: ${height}px)`
				);
			};

			onMounted(() => {});

			return {
				navbarRunningTextWrapper,
				navbarRunningTextWrapperWidth,
				navbarTextGroup,
				navbarTextGroupWidth,
				leftRunningTextWrapper,
				leftRunningTextWrapperHeight,
				leftTextGroup,
				leftTextGroupHeight,
				dataRowOne,
				dataRowTwo,
			};
		},
	});
</script>

<style lang="scss">
	.fourth-section {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		background: linear-gradient(90deg, #ffcaac 0%, #84eece 100%);

		&__sides {
			display: flex;
			height: 100%;

			.left-side {
				flex-grow: 1;

				&__running-text {
					width: 100%;
					height: 100%;
					border: 2px solid $monezo-night-black;
					border-top: 0;
					border-bottom: 0;
					overflow: hidden;

					&__text-group {
						position: absolute;
						display: flex;
						align-items: center;
						gap: 5rem;
						white-space: nowrap;
						writing-mode: vertical-rl;
						transform: rotate(-180deg);
						p {
							font-size: 10rem;
							font-weight: bold;
						}

						img {
							width: 8.4rem;
							rotate: 90deg;
						}
					}
				}
			}

			.right-side {
				display: flex;
				flex-direction: column;
				width: 92%;

				&__intro {
					display: flex;
					flex-grow: 1;
					flex-direction: column;
					justify-content: center;
					padding-left: 8rem;
					border-bottom: 2px solid $monezo-night-black;

					&__title {
						font-size: 5rem;
						font-weight: bold;
						line-height: 6rem;
					}

					&__description {
						margin: 1.4rem 0 5rem;
						font-size: 1.8rem;
						font-weight: 500;
						line-height: 2.86rem;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						&__title {
							font-size: 4.5rem;
						}

						&__description {
							margin: 0 0 2rem;
							font-size: 1.5rem;
						}
					}

					@media only screen and (max-width: 1920px) and (max-height: 1080px) {
						&__title {
							font-size: 4rem;
						}
					}

					@media only screen and (max-width: 1600px) and (max-height: 900px) {
						&__title {
							font-size: 3rem;
						}

						&__description {
							margin: 0 0 1rem;
							font-size: 1.3rem;
						}

						&__button {
							margin-bottom: 1rem;
						}
					}

					@media only screen and (max-width: 1512px) and (max-height: 982px) {
						&__title {
							font-size: 3rem;
						}

						&__description {
							margin: 0 0 1rem;
							font-size: 1.3rem;
						}

						&__button {
							margin-bottom: 1rem;
						}
					}
				}

				&__row-middle {
					display: flex;
					flex-grow: 1;

					&__profit,
					&__liquidity,
					&__launchpad {
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
						width: 10rem;
						padding: 1rem 0;
						font-size: 1.6rem;
						font-weight: 600;
						line-height: 2.5px;

						p {
							transform: rotate(-180deg);
							writing-mode: vertical-rl;
						}

						@media only screen and (max-width: 2560px) and (max-height: 1700px) {
							font-size: 2rem;
						}

						@media only screen and (max-width: 1920px) and (max-height: 1200px) {
							font-size: 1.7rem;
						}

						@media only screen and (max-width: 1600px) and (max-height: 900px) {
							font-size: 1.4rem;
						}

						@media only screen and (max-width: 1366px) and (max-height: 768px) {
							font-size: 1.4rem;
						}
					}

					&__profit {
						img {
							position: absolute;
							bottom: -2.5rem;
							transform: rotate(90deg);
						}
					}

					&__liquidity {
						border-left: 2px solid $monezo-night-black;
						border-right: 2px solid $monezo-night-black;

						img {
							position: absolute;
							top: -2.5rem;
							transform: rotate(-90deg);
						}
					}

					&__launchpad {
						border-left: 2px solid $monezo-night-black;

						img {
							position: absolute;
							bottom: -2.5rem;
							transform: rotate(90deg);
						}

						p {
							transform: rotate(0);
						}
					}

					&__description {
						align-self: center;
						width: 60%;
						margin-left: auto;
						margin-right: auto;
						font-size: 2rem;
						line-height: 3rem;
						font-weight: 600;

						@media only screen and (max-width: 1920px) and (max-height: 1200px) {
							font-size: 1.7rem;
							line-height: 2.7rem;
						}

						@media only screen and (max-width: 1600px) and (max-height: 900px) {
							font-size: 1.4rem;
							line-height: 2.4rem;
						}

						@media only screen and (max-width: 1366px) and (max-height: 768px) {
							font-size: 1.3rem;
							line-height: 2.3rem;
						}
					}
				}

				&__row-one,
				&__row-two {
					display: flex;
				}
			}
		}
		.yieldful-nft-square {
			--square-height: 35rem;
			--circle-height: 52%;
			--double-border-font-size: 2rem;

			@media only screen and (max-width: 2560px) and (max-height: 1440px) {
				--square-height: 35rem;
				--circle-height: 50%;
			}

			@media only screen and (max-width: 2304px) and (max-height: 1440px) {
				--circle-font-size: 1.8rem;
				--circle-padding: 0.5rem;
			}

			@media only screen and (max-width: 1920px) and (max-height: 1200px) {
				--square-height: 33rem;
				--double-border-font-size: 1.6rem;
				--circle-font-size: 1.6rem;
			}

			@media only screen and (max-width: 1920px) and (max-height: 1080px) {
				--square-height: 27rem;
				--circle-font-size: 1.5rem;
			}

			@media only screen and (max-width: 1680px) and (max-height: 1050px) {
				--double-border-font-size: 1.5rem;
			}

			@media only screen and (max-width: 1600px) and (max-height: 900px) {
				--square-height: 24rem;
				--circle-font-size: 1.3rem;
			}

			@media only screen and (max-width: 1512px) and (max-height: 834px) {
				--square-height: 20rem;
				--circle-height: 60%;
				--double-border-font-size: 1.4rem;
			}

			@media only screen and (max-width: 1366px) and (max-height: 768px) {
				--square-height: 17rem;
				--double-border-font-size: 1.2rem;
				--circle-font-size: 1.1rem;
			}

			@media only screen and (max-width: 1280px) and (max-height: 800px) {
				--square-height: 17rem;
				--double-border-font-size: 1.2rem;
				--circle-font-size: 1rem;
			}
		}

		.nav-bar {
			@media only screen and (max-width: 1680px) and (max-height: 1050px) {
				--min-height: 9rem;
			}

			@media only screen and (max-width: 1512px) and (max-height: 834px) {
				--min-height: 8rem;
			}
		}

		.navbar-running-text-wrapper {
			width: 100%;
			overflow: hidden;

			.navbar-running-text-group {
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
