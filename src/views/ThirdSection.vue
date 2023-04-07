<template>
	<div class="third-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="navbar-running-text-wrapper" ref="navbarRunningTextWrapper">
				<RunningTextStraight
					:group-id="'navbar-running-text-group'"
					:parent-element-width="navbarRunningTextWrapperWidth"
					:group-width="navbarTextGroupWidth"
					:initial-position="5"
					:gap="5"
					:animation-speed="50"
					:direction="'right-to-left'"
					:font-size="5"
				>
					<div
						id="navbar-running-text-group"
						class="navbar-running-text-group"
						ref="navbarTextGroup"
					>
						<p class="running-text">Featuring collection</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">Featuring collection</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">Featuring collection</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">Featuring collection</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>
				</RunningTextStraight>
			</div>
		</NavBar>

		<div class="third-section__sides">
			<div class="third-section__sides__left-part" id="fade">
				<img class="monkers" src="@/assets/images/monker-column-1k.png" />
				<img class="monkers" src="@/assets/images/monker-column-10k.png" />
			</div>

			<div class="third-section__sides__right-part">
				<div class="left-wrapper">
					<div class="third-section__sides__right-part__top">
						<p class="title">REAL ESTATE<br />MONKER</p>

						<div class="description-wrapper">
							<p>
								This collection suits best conservative investors, which prefer stable and
								predictable Yield. Stake NFT and get as much as 12% APY Yield return paid daily.
							</p>
							<p>
								Real Estate Monker collection is fully backed by income from real estate business.
							</p>
						</div>

						<div class="numbers-description">
							<div class="numbers-description__left">
								<p class="text--large">$ 1000</p>
								<p class="text--small">Invest from</p>
							</div>

							<div class="numbers-description__right">
								<p class="text--large">12% APY</p>
								<p class="text--small">Paid daily</p>
							</div>
						</div>

						<Button
							:text="'View Collection'"
							:background="'filled'"
							:initial-width="26.2"
							:hover-width="29"
						/>
					</div>

					<div class="third-section__sides__right-part__bottom">
						<p>Check other →</p>
					</div>
				</div>

				<div class="third-section__sides__right-part__running-text" ref="rightRunningTextWrapper">
					<RunningTextVertical
						:group-id="'right-running-text-group'"
						:initial-position="5"
						:gap="5"
						:animation-speed="25"
						:direction="'bottom-to-top'"
						:parent-element-height="rightRunningTextWrapperHeight"
						:group-height="rightTextGroupHeight"
						:font-size="5"
					>
						<div
							id="right-running-text-group"
							class="third-section__sides__right-part__running-text__text-group"
							ref="rightTextGroup"
						>
							<p class="text">Real Estate Monker</p>
							<img src="../assets/images/real-estate-text-divider-icon.svg" />
						</div>

						<div
							id="right-running-text-group"
							class="third-section__sides__right-part__running-text__text-group"
						>
							<p class="text">Real Estate Monker</p>
							<img src="../assets/images/real-estate-text-divider-icon.svg" />
						</div>
					</RunningTextVertical>
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
	import { gsap } from 'gsap';

	export default defineComponent({
		components: { NavBar, RunningTextStraight, RunningTextVertical, Button },
		setup() {
			const navbarRunningTextWrapper = ref<HTMLDivElement | null>(null);
			const navbarTextGroup = ref<HTMLDivElement | null>(null);
			const navbarTextGroupWidth = ref(0);

			const rightRunningTextWrapper = ref<HTMLDivElement | null>(null);
			const rightTextGroup = ref<HTMLDivElement | null>(null);
			const rightTextGroupHeight = ref(0);

			const navbarRunningTextWrapperWidth = computed(() =>
				navbarRunningTextWrapper.value ? navbarRunningTextWrapper.value.offsetWidth : 0
			);

			const rightRunningTextWrapperHeight = computed(() =>
				rightRunningTextWrapper.value ? rightRunningTextWrapper.value.offsetHeight : 0
			);

			useResizeObserver(navbarTextGroup, (entries) => {
				navbarTextGroupWidth.value = entries[0].contentRect.width;
			});

			useResizeObserver(rightTextGroup, (entries) => {
				rightTextGroupHeight.value = entries[0].contentRect.height;
			});

			onMounted(() => {
				const wrapper = document.querySelector('#fade');
				const monkers = gsap.utils.toArray('.monkers').reverse();

				const timeline = gsap.timeline({ paused: true });

				monkers.forEach((monker: HTMLElement, index) => {
					timeline.to(monker, {
						x: '-400',
						duration: 1,
						opacity: 0,
					});
					timeline.set(monker, {
						x: 0,
						zIndex: 1,
						opacity: 1,
					});
					timeline.addLabel(`label${index}`);
				});

				wrapper.addEventListener('click', () => {
					if (timeline.nextLabel()) {
						timeline.tweenTo(timeline.nextLabel());
					} else {
						timeline.progress(0).tweenTo(timeline.nextLabel());
					}
				});
			});

			return {
				navbarRunningTextWrapper,
				navbarRunningTextWrapperWidth,
				navbarTextGroup,
				navbarTextGroupWidth,
				rightRunningTextWrapper,
				rightTextGroup,
				rightTextGroupHeight,
				rightRunningTextWrapperHeight,
			};
		},
	});
</script>

<style lang="scss">
	.third-section {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		background: linear-gradient(90deg, #dd5e89 0%, #f7bb97 100%);

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

		&__sides {
			display: flex;
			height: 100%;

			&__left-part {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 40%;
				height: 100%;
				border: 1px solid $monezo-night-black;
				border-top: 0;
				border-bottom: 0;
				border-left: 0;

				img {
					position: absolute;
					width: 50rem;
					height: 60rem;
					z-index: 2;
				}
			}

			&__right-part {
				$wrapper: &;

				display: flex;
				width: 60%;
				height: 100%;
				border: 1px solid $monezo-night-black;
				border-top: 0;
				border-right: 0;
				border-bottom: 0;

				& .left-wrapper {
					width: 85%;
					height: 100%;

					#{$wrapper}__top {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-start;
						height: 90%;
						padding-left: 10rem;

						.title {
							margin-bottom: 5rem;
							font-size: 5rem;
							font-weight: bold;
							line-height: 6rem;
						}

						.description-wrapper {
							width: 45rem;
							margin-bottom: 6rem;

							p {
								font-size: 1.8rem;
								font-weight: 500;
								line-height: 2.86rem;

								&:first-child {
									margin-bottom: 3.8rem;
								}
							}
						}

						.numbers-description {
							display: flex;
							gap: 5rem;
							margin-bottom: 3rem;

							.text {
								&--large {
									font-size: 5rem;
									font-weight: bold;
									line-height: 6rem;
									white-space: nowrap;
								}

								&--small {
									font-size: 1.8rem;
									font-weight: 400;
									line-height: 2.7rem;
									white-space: nowrap;
								}
							}
						}
					}

					#{$wrapper}__bottom {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						height: 10%;
						padding-left: 10rem;
						border-top: 2px solid $monezo-night-black;

						p {
							font-size: 1.6rem;
							font-weight: bold;
							line-height: 1.9rem;
						}
					}
				}

				&__running-text {
					width: 15%;
					height: 100%;
					border: 2px solid $monezo-night-black;
					border-top: 0;
					border-right: 0;
					border-bottom: 0;
					overflow: hidden;

					&__text-group {
						position: absolute;
						display: flex;
						align-items: center;
						gap: 5rem;
						white-space: nowrap;
						writing-mode: vertical-lr;

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
