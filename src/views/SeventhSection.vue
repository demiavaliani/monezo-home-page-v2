<template>
	<div class="seventh-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="seventh-section__navbar">
				<div class="seventh-section__navbar-title">
					<p>STRATEGIC PLAN</p>
				</div>

				<div class="seventh-section__navbar-description">
					<div class="text-wrapper">
						<p>
							Our mission is to make Monezo the only platform you need for your strong financial
							future
						</p>
					</div>
				</div>
			</div>
		</NavBar>

		<img
			class="seventh-section__rotating-circle"
			src="@/assets/images/seventh-section-rotating-circle.png"
		/>

		<img
			id="seventh-section-monker-yellow"
			class="seventh-section__monker seventh-section__monker--yellow"
			src="@/assets/images/monker-yellow.png"
		/>
		<img
			id="seventh-section-monker-white"
			class="seventh-section__monker seventh-section__monker--white"
			src="@/assets/images/monker-corner-1.png"
		/>
		<img
			id="seventh-section-monker-suite"
			class="seventh-section__monker seventh-section__monker--suite"
			src="@/assets/images/monker-suite.png"
		/>

		<div class="seventh-section__stars">
			<img class="star star--l1" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--l2" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--l3" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--l4" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--l5" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--l6" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--l7" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--l8" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--r1" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--r2" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--r3" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--r4" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--r5" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--r6" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--r7" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
			<img class="star star--r8" src="@/assets/images/featuring-collection-text-divider-icon.svg" />
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import { gsap, Power1 } from 'gsap';

	export default defineComponent({
		components: { NavBar },

		setup() {
			onMounted(() => {
				gsap.from('#seventh-section-monker-yellow', {
					scale: 0.7,
					rotation: -150,
					duration: 0.5,
				});
				gsap.to('#seventh-section-monker-yellow', {
					scale: 1,
					opacity: 1,
					duration: 0.5,
					delay: 0.1,
				});

				gsap.from('#seventh-section-monker-white', {
					scale: 0.3,
					duration: 0.5,
				});
				gsap.to('#seventh-section-monker-white', {
					scale: 1,
					opacity: 1,
					duration: 0.5,
					delay: 0.1,
				});

				gsap.from('#seventh-section-monker-suite', {
					scale: 0.7,
					rotation: 150,
					duration: 0.5,
				});
				gsap.to('#seventh-section-monker-suite', {
					scale: 1,
					opacity: 1,
					duration: 0.5,
					delay: 0.1,
				});
			});

			return {};
		},
	});
</script>

<style lang="scss">
	.seventh-section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		background: linear-gradient(90deg, #83a4d4 0%, #b6fbff 100%);

		&__navbar {
			display: flex;
			width: 100%;

			&-title {
				display: flex;
				align-items: center;
				min-width: fit-content;
				padding: 0 2.4rem;
				border-right: 2px solid $monezo-night-black;
				font-size: 5rem;
				font-weight: bold;
				line-height: 6rem;
			}

			&-description {
				display: flex;
				align-items: center;
				flex-grow: 1;
				padding: 0 2.4rem;
				font-size: 1.8rem;
				font-weight: 500;
				line-height: 2.9rem;

				.text-wrapper {
					width: 26%;

					@media only screen and (max-width: 2560px) and (max-height: 1700px) {
						width: 40%;
					}

					@media only screen and (max-width: 2304px) and (max-height: 1440px) {
						width: 48%;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						width: 65%;
					}

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						width: 85%;
					}

					@media only screen and (max-width: 1512px) and (max-height: 834px) {
						width: 100%;
					}

					@media only screen and (max-width: 1440px) and (max-height: 900px) {
						width: 100%;
					}
				}
			}
		}

		@keyframes rotate {
			to {
				rotate: -360deg;
			}
		}

		&__rotating-circle {
			position: absolute;
			top: 20rem;
			width: 70%;
			z-index: 1;
			animation: rotate 30s infinite linear;

			@media only screen and (max-width: 2560px) and (max-height: 1700px) {
				top: 50rem;
			}

			@media only screen and (max-width: 2560px) and (max-height: 1440px) {
				top: 25rem;
			}

			@media only screen and (max-width: 2304px) and (max-height: 1440px) {
				top: 40rem;
			}

			@media only screen and (max-width: 1920px) and (max-height: 1080px) {
				top: 20rem;
			}

			@media only screen and (max-width: 1600px) and (max-height: 900px) {
				top: 17rem;
			}

			@media only screen and (max-width: 1440px) and (max-height: 900px) {
				top: 20rem;
			}
		}

		&__monker {
			position: absolute;
			bottom: 0;
			opacity: 0;

			&--yellow {
				height: 60rem;
				margin-right: 95rem;
				z-index: 1;
				transform-origin: bottom right;
			}

			&--white {
				z-index: 2;
				transform-origin: bottom;
			}

			&--suite {
				height: 60rem;
				margin-left: 95rem;
				z-index: 1;
				transform-origin: bottom left;
			}

			@media only screen and (max-width: 2304px) and (max-height: 1440px) {
				scale: 0.9 !important;

				&--yellow {
					margin-right: 90rem;
				}

				&--suite {
					margin-left: 90rem;
				}
			}

			@media only screen and (max-width: 1920px) and (max-height: 1200px) {
				scale: 0.7 !important;

				&--yellow {
					margin-right: 82rem;
				}

				&--suite {
					margin-left: 79rem;
				}
			}

			@media only screen and (max-width: 1680px) and (max-height: 1050px) {
				scale: 0.65 !important;

				&--yellow {
					margin-right: 80rem;
				}

				&--suite {
					margin-left: 76rem;
				}
			}

			@media only screen and (max-width: 1600px) and (max-height: 900px) {
				scale: 0.65 !important;
			}

			@media only screen and (max-width: 1512px) and (max-height: 834px) {
				scale: 0.6 !important;
			}

			@media only screen and (max-width: 1440px) and (max-height: 900px) {
				scale: 0.6 !important;
			}

			@media only screen and (max-width: 1366px) and (max-height: 768px) {
				scale: 0.53 !important;

				&--yellow {
					margin-right: 74rem;
				}

				&--suite {
					margin-left: 69rem;
				}
			}

			@media only screen and (max-width: 1280px) and (max-height: 800px) {
				scale: 0.53 !important;

				&--yellow {
					margin-right: 74rem;
				}

				&--suite {
					margin-left: 69rem;
				}
			}
		}

		&__stars {
			width: 100%;
			height: 100%;

			@keyframes blink {
				33% {
					scale: 0.5;
					opacity: 0.5;
				}

				66% {
					scale: 0;
					opacity: 0;
				}

				100% {
					scale: 1;
					opacity: 1;
				}
			}

			.star {
				position: absolute;
				width: 15rem;
				z-index: 1;
				animation: blink 1s infinite;

				&--l1 {
					top: 13rem;
					left: 12%;
					width: 10rem;
				}

				&--l2 {
					top: 15rem;
					left: 25%;
					animation-delay: 0.3s;
				}

				&--l3 {
					top: 30rem;
					left: 5%;
					animation-delay: 0.6s;
				}

				&--l4 {
					top: 30rem;
					left: 17%;
					animation-direction: reverse;
				}

				&--l5 {
					top: 60rem;
					left: 9%;
					width: 10rem;
					animation-delay: 0.3s;
					animation-direction: reverse;
				}

				&--l6 {
					top: 80rem;
					left: 2%;
					width: 10rem;
				}

				&--l7 {
					top: 100rem;
					left: 5%;
					width: 10rem;
					animation-delay: 0.6s;
				}

				&--l8 {
					bottom: 1rem;
					left: 1%;
					width: 10rem;
					animation-delay: 0.3s;
					animation-direction: reverse;
				}

				&--r1 {
					top: 13rem;
					right: 12%;
					width: 10rem;
					animation-delay: 0.3s;
				}

				&--r2 {
					top: 15rem;
					right: 25%;
				}

				&--r3 {
					top: 30rem;
					right: 5%;
					animation-delay: 0.3s;
					animation-direction: reverse;
				}

				&--r4 {
					top: 30rem;
					right: 17%;
					animation-delay: 0.6s;
				}

				&--r5 {
					top: 60rem;
					right: 9%;
					width: 10rem;
				}

				&--r6 {
					top: 80rem;
					right: 2%;
					width: 10rem;
					animation-delay: 0.3s;
					animation-direction: reverse;
				}

				&--r7 {
					top: 100rem;
					right: 5%;
					width: 10rem;
					animation-direction: reverse;
				}

				&--r8 {
					bottom: 1rem;
					right: 1%;
					width: 10rem;
					animation-delay: 0.6s;
				}

				@media only screen and (max-width: 2560px) and (max-height: 1700px) {
					&--l6 {
						top: 90rem;
					}

					&--l7 {
						top: 120rem;
						left: 7%;
					}

					&--l8 {
						bottom: 5rem;
						left: 3%;
					}

					&--r6 {
						top: 90rem;
					}

					&--r7 {
						top: 120rem;
						right: 7%;
					}

					&--r8 {
						bottom: 5rem;
						right: 3%;
					}
				}

				@media only screen and (max-width: 2560px) and (max-height: 1440px) {
					&--l6 {
						top: 85rem;
					}

					&--l7 {
						top: 105rem;
					}

					&--r6 {
						top: 85rem;
					}

					&--r7 {
						top: 105rem;
					}
				}

				@media only screen and (max-width: 1920px) and (max-height: 1200px) {
					&--l5 {
						top: 55rem;
					}

					&--l6 {
						top: 75rem;
					}

					&--l7 {
						top: 90rem;
					}

					&--r5 {
						top: 55rem;
					}

					&--r6 {
						top: 75rem;
					}

					&--r7 {
						top: 90rem;
					}
				}

				@media only screen and (max-width: 1920px) and (max-height: 1080px) {
					&--l6 {
						top: 70rem;
					}

					&--l7 {
						top: 85rem;
					}

					&--l8 {
						bottom: 0;
					}

					&--r6 {
						top: 70rem;
					}

					&--r7 {
						top: 85rem;
					}

					&--r8 {
						bottom: 0;
					}
				}

				@media only screen and (max-width: 1680px) and (max-height: 1050px) {
					width: 10rem;

					&--l1 {
						width: 7rem;
					}

					&--l3 {
						left: 3%;
					}

					&--l5 {
						top: 50rem;
						width: 7rem;
					}

					&--l6 {
						top: 65rem;
						width: 7rem;
					}

					&--l7 {
						top: 80rem;
						width: 7rem;
					}

					&--l8 {
						bottom: 2rem;
						width: 7rem;
					}

					&--r1 {
						width: 7rem;
					}

					&--r3 {
						right: 3%;
					}

					&--r5 {
						top: 50rem;
						width: 7rem;
					}

					&--r6 {
						top: 65rem;
						width: 7rem;
					}

					&--r7 {
						top: 80rem;
						width: 7rem;
					}

					&--r8 {
						bottom: 2rem;
						width: 7rem;
					}
				}

				@media only screen and (max-width: 1600px) and (max-height: 900px) {
					&--l4 {
						left: 15%;
					}

					&--l5 {
						top: 47rem;
					}

					&--l6 {
						top: 61rem;
					}

					&--l7 {
						top: 71rem;
						left: 8%;
					}

					&--r4 {
						right: 15%;
					}

					&--r5 {
						top: 47rem;
					}

					&--r6 {
						top: 61rem;
					}

					&--r7 {
						top: 71rem;
						right: 8%;
					}
				}

				@media only screen and (max-width: 1512px) and (max-height: 834px) {
					&--l6 {
						top: 57rem;
					}

					&--l7 {
						top: 65rem;
					}

					&--r6 {
						top: 57rem;
					}

					&--r7 {
						top: 65rem;
					}
				}

				@media only screen and (max-width: 1366px) and (max-height: 768px) {
					&--l3 {
						top: 25rem;
					}

					&--l4 {
						top: 27rem;
					}

					&--l5 {
						top: 40rem;
					}

					&--l6 {
						top: 50rem;
					}

					&--l7 {
						top: 58rem;
					}

					&--r3 {
						top: 25rem;
					}

					&--r4 {
						top: 27rem;
					}

					&--r5 {
						top: 40rem;
					}

					&--r6 {
						top: 50rem;
					}

					&--r7 {
						top: 58rem;
					}
				}

				@media only screen and (max-width: 1280px) and (max-height: 800px) {
					&--l3 {
						top: 25rem;
					}

					&--l4 {
						top: 27rem;
					}

					&--l5 {
						top: 40rem;
					}

					&--l6 {
						top: 50rem;
					}

					&--l7 {
						top: 58rem;
					}

					&--r3 {
						top: 25rem;
					}

					&--r4 {
						top: 27rem;
					}

					&--r5 {
						top: 40rem;
					}

					&--r6 {
						top: 50rem;
					}

					&--r7 {
						top: 58rem;
					}
				}
			}
		}
	}
</style>
