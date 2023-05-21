<template>
	<div class="sixth-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="navbar-running-text-wrapper" ref="navbarRunningTextWrapper">
				<RunningTextStraight
					:group-id="'sixth-section-navbar-running-text-group'"
					:parent-element-width="navbarRunningTextWrapperWidth"
					:group-width="navbarTextGroupWidth"
					:initial-position="5"
					:gap="5"
					:animation-speed="30"
					:direction="'right-to-left'"
					:font-size="5"
				>
					<div
						id="sixth-section-navbar-running-text-group"
						class="navbar-running-text-group"
						ref="navbarTextGroup"
					>
						<p class="running-text">MEET OUR EXECUTIVE LEADERSHIP TEAM</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="sixth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">MEET OUR EXECUTIVE LEADERSHIP TEAM</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="sixth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">MEET OUR EXECUTIVE LEADERSHIP TEAM</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="sixth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">MEET OUR EXECUTIVE LEADERSHIP TEAM</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>
				</RunningTextStraight>
			</div>
		</NavBar>

		<div class="sixth-section__sides">
			<div class="left">
				<div class="left__top">
					<p>
						Never doubt that a small group of thoughtful people can change the world. Indeed, it is
						the only thing that ever has.
					</p>
				</div>

				<div class="left__middle">
					<img src="@/assets/images/monezo-logo-colorful.png" />

					<div class="wrapper">
						<p id="left-middle-text">
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>

						<p id="left-middle-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						</p>

						<p id="left-middle-text">
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>

						<p id="left-middle-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						</p>

						<p id="left-middle-text">
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>

					<p class="left__job-position">Chief Business Officer</p>
				</div>

				<div class="left__bottom">
					<p>VALDEMARS BARETS</p>
				</div>
			</div>

			<div class="right">
				<img src="@/assets/images/monezo-executive-valdemars.png" id="executive-image" />
				<img src="@/assets/images/monezo-executive-aleksejs.png" id="executive-image" />
				<img src="@/assets/images/monezo-executive-maksims.png" id="executive-image" />
				<img src="@/assets/images/monezo-executive-sergejs.png" id="executive-image" />
				<img src="@/assets/images/monezo-executive-nick.png" id="executive-image" />
			</div>
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed, onMounted } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import { useResizeObserver } from '@vueuse/core';
	import { gsap, Power1 } from 'gsap';

	export default defineComponent({
		components: { NavBar, RunningTextStraight },
		setup() {
			const navbarRunningTextWrapper = ref<HTMLDivElement | null>(null);
			const navbarTextGroup = ref<HTMLDivElement | null>(null);
			const navbarTextGroupWidth = ref(0);

			const navbarRunningTextWrapperWidth = computed(() =>
				navbarRunningTextWrapper.value ? navbarRunningTextWrapper.value.offsetWidth : 0
			);

			useResizeObserver(navbarTextGroup, (entries) => {
				navbarTextGroupWidth.value = entries[0].contentRect.width;
			});

			onMounted(() => {
				const images = gsap.utils.toArray('#executive-image') as HTMLImageElement[];
				const tlImages = gsap.timeline({ repeat: -1 });

				images.forEach((image) => {
					tlImages.from(
						image,
						{
							xPercent: 100,
							scale: 0.7,
							duration: 2,
							ease: Power1.easeInOut,
						},
						'>-1'
					);
					tlImages.from(image, {
						duration: 2,
					});
					tlImages.to(image, {
						xPercent: -90,
						scale: 0.7,
						duration: 2,
						ease: Power1.easeInOut,
					});
				});

				console.log(tlImages);

				const descriptionText = gsap.utils.toArray('#left-middle-text') as HTMLElement[];
				const tlText = gsap.timeline({ repeat: -1 });

				descriptionText.forEach((text) => {
					tlText.from(
						text,
						{
							xPercent: -110,
							duration: 1,
							ease: Power1.easeInOut,
						},
						'>-1'
					);
					tlText.from(text, {
						duration: 4,
					});
					tlText.to(text, {
						xPercent: 100,

						duration: 1,
						opacity: 0,
						ease: Power1.easeInOut,
					});
				});

				console.log(tlText);
			});

			return {
				navbarRunningTextWrapper,
				navbarRunningTextWrapperWidth,
				navbarTextGroup,
				navbarTextGroupWidth,
			};
		},
	});
</script>

<style lang="scss">
	.sixth-section {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		background: linear-gradient(90deg, #2bc0e4 0%, #eaecc6 100%);

		&__sides {
			position: relative;
			display: flex;
			height: calc(100% - 10.7rem);

			.left {
				display: flex;
				flex-direction: column;
				width: 40%;
				border-right: 2px solid $monezo-night-black;
				overflow: hidden;

				&__top {
					width: 70%;
					padding: 1.5rem 0 1.5rem 2.5rem;

					p {
						font-size: 1.7rem;
						font-weight: 500;
						line-height: 2.87rem;
					}
				}

				&__middle {
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: center;
					flex-grow: 1;
					gap: 5rem;
					padding: 5rem 10% 0 2.5rem;
					border: solid $monezo-night-black;
					border-width: 2px 0;

					.wrapper {
						position: relative;

						& p {
							position: absolute;
						}
					}

					img {
						width: 30%;
					}

					p {
						font-size: 2rem;
						font-weight: 500;
						line-height: 3.5rem;
					}

					.left__job-position {
						position: absolute;
						bottom: 0;
						width: 50rem;
						margin-bottom: 1rem;
						font-size: 1.7rem;
						font-weight: 500;
						line-height: 2.9rem;
					}
				}

				&__bottom {
					padding: 1.5rem 0 1.5rem 2.5rem;

					p {
						font-size: 4rem;
						font-weight: bold;
						line-height: 6rem;

						@media only screen and (max-width: 1440px) and (max-height: 900px) {
							font-size: 3.5rem;
						}

						@media only screen and (max-width: 1366px) and (max-height: 768px) {
							line-height: 4rem;
						}

						@media only screen and (max-width: 1280px) and (max-height: 800px) {
							font-size: 3rem;
							line-height: 4rem;
						}
					}
				}
			}

			.right {
				position: absolute;
				right: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 60%;
				height: 100%;
				z-index: 1;
				overflow: hidden;

				img {
					position: absolute;
					height: 100%;
					transform-origin: bottom;
				}
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
