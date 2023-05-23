<template>
	<div class="ninth-section">
		<NavBar :first-page="false" :last-page="true">
			<div class="navbar-running-text-wrapper" ref="navbarRunningTextWrapper">
				<RunningTextStraight
					:group-id="'ninth-section-navbar-running-text-group'"
					:parent-element-width="navbarRunningTextWrapperWidth"
					:group-width="navbarTextGroupWidth"
					:initial-position="5"
					:gap="5"
					:animation-speed="30"
					:direction="'right-to-left'"
					:font-size="10"
				>
					<div
						id="ninth-section-navbar-running-text-group"
						class="navbar-running-text-group"
						ref="navbarTextGroup"
					>
						<p class="running-text">JOIN MONEZO PLATFORM</p>
						<img
							class="navbar-divider-icon"
							src="../assets/images/featuring-collection-text-divider-icon.svg"
						/>
					</div>

					<div id="ninth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">JOIN MONEZO PLATFORM</p>
						<img
							class="navbar-divider-icon"
							src="../assets/images/featuring-collection-text-divider-icon.svg"
						/>
					</div>

					<div id="ninth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">JOIN MONEZO PLATFORM</p>
						<img
							class="navbar-divider-icon"
							src="../assets/images/featuring-collection-text-divider-icon.svg"
						/>
					</div>

					<div id="ninth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">JOIN MONEZO PLATFORM</p>
						<img
							class="navbar-divider-icon"
							src="../assets/images/featuring-collection-text-divider-icon.svg"
						/>
					</div>
				</RunningTextStraight>
			</div>
		</NavBar>

		<div class="ninth-section__body">
			<p class="ninth-section__description">Stake your NFT and track your earnings</p>
			<MonezoButton
				text="Access Dashboard"
				background="filled"
				:initial-width="30"
				:hover-width="33"
			/>
		</div>

		<div class="ninth-section__footer">
			<div class="top">
				<div class="top__left">
					<p class="title">Monezo</p>
					<p class="body--large">The only platform you need for your strong financial future</p>
				</div>

				<div class="top__middle">
					<div>
						<p class="title">Contact Us</p>
						<p class="header">General Inquiries:</p>
						<p class="body--small"><a href="mailto:info@monezo.xyz">Info@monezo.xyz</a></p>
						<p class="header">Help & Support</p>
						<p class="body--small">Investors & Partners Relationships</p>
						<p class="body--small">Press Inquiries</p>
					</div>
				</div>

				<div class="top__right">
					<div>
						<p class="header">Fortune favours the brave</p>
						<p class="body--small">
							Stay up to date on the projects and ideas that are shaping finance
						</p>
						<div class="subscribe">
							<input type="email" placeholder="Submit your e-mail" />
							<button type="button">
								<p class="subscribe-button">Brave Enough</p>
							</button>
						</div>
						<p class="body--small">
							No spam, notifications only about new products and company updates
						</p>
					</div>
				</div>
			</div>

			<div class="bottom">
				<div class="bottom__left">
					<p>Copyright ©2022 Monezo. All rights reserved.</p>
				</div>

				<div class="bottom__right">
					<p>Marketplace</p>
					<p>Incubator</p>
					<p>Institutional</p>
					<p>How it Works</p>
					<p>About Us</p>
					<p>Academy</p>
					<p>Blog</p>
				</div>
			</div>
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import { useResizeObserver } from '@vueuse/core';
	import MonezoButton from '@/components/MonezoButton.vue';

	export default defineComponent({
		components: { NavBar, RunningTextStraight, MonezoButton },
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
	.ninth-section {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		background: linear-gradient(90deg, #2bc0e4 0%, #eaecc6 100%);

		&__body {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-grow: 1;
			gap: 5rem;
			padding-top: 35rem;

			@media only screen and (max-width: 1920px) and (max-height: 1200px) {
				padding-top: 20rem;
			}

			@media only screen and (max-width: 1920px) and (max-height: 1080px) {
				padding-top: 15rem;
			}

			@media only screen and (max-width: 1600px) and (max-height: 900px) {
				padding-top: 10rem;
			}

			@media only screen and (max-width: 1512px) and (max-height: 834px) {
				padding-top: 7rem;
			}
		}

		&__description {
			font-size: 1.8rem;
			font-weight: 500;
			line-height: 2.9rem;
		}

		&__footer {
			display: flex;
			flex-direction: column;
			height: 42rem;
			background: $monezo-night-black;
			color: white;

			@media only screen and (max-width: 1600px) and (max-height: 900px) {
				height: 35rem;
			}

			@media only screen and (max-width: 1366px) and (max-height: 768px) {
				height: 30rem;
			}

			@media only screen and (max-width: 1280px) and (max-height: 800px) {
				height: 30rem;
			}

			a {
				color: white;

				&:hover {
					color: $monezo-url-hover-color;
				}
			}

			.top {
				display: grid;
				grid-template-columns: 1fr 1fr 2fr;
				height: 85%;
				border: solid #403f3f;
				border-width: 2px 0;

				&__left,
				&__middle,
				&__right {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				&__left {
					gap: 2.8rem;
					padding: 0 18rem;

					@media only screen and (max-width: 2304px) and (max-height: 1440px) {
						padding: 0 15rem;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						padding: 0 10rem;
					}

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						padding: 0 8rem;
					}

					@media only screen and (max-width: 1600px) and (max-height: 900px) {
						padding: 0 7rem;
					}

					@media only screen and (max-width: 1512px) and (max-height: 834px) {
						padding: 0 6rem;
					}

					@media only screen and (max-width: 1440px) and (max-height: 900px) {
						padding: 0 5rem;
					}
				}

				&__middle {
					align-items: center;
					border: solid #403f3f;
					border-width: 0 2px;

					p:nth-child(1) {
						margin-bottom: 2.8rem;
					}

					p:nth-child(2),
					p:nth-child(4),
					p:nth-child(5) {
						margin-bottom: 1.2rem;
					}

					p:nth-child(3) {
						margin-bottom: 3.5rem;
					}

					p:nth-child(5),
					p:nth-child(6) {
						cursor: pointer;
					}

					@media only screen and (max-width: 1366px) and (max-height: 768px) {
						p:nth-child(2),
						p:nth-child(4),
						p:nth-child(5) {
							margin-bottom: 1rem;
						}

						p:nth-child(3) {
							margin-bottom: 2.2rem;
						}
					}

					@media only screen and (max-width: 1280px) and (max-height: 800px) {
						p:nth-child(2),
						p:nth-child(4),
						p:nth-child(5) {
							margin-bottom: 1rem;
						}

						p:nth-child(3) {
							margin-bottom: 2.2rem;
						}
					}
				}

				&__right {
					display: flex;
					flex-direction: column;
					align-items: center;

					p:nth-child(1) {
						margin-bottom: 2.1rem;
					}

					p:nth-child(2) {
						margin-bottom: 2.8rem;
					}

					.subscribe {
						margin-bottom: 1.7rem;

						input {
							width: 40rem;
							height: 3.8rem;
							margin-right: 1.8rem;
							padding-left: 1.5rem;
							border: 0;
							border-radius: 0.5rem;
							font-family: 'Termina';
							font-size: 1.2rem;
							font-weight: normal;
							line-height: 1.4rem;

							&:focus-visible {
								outline: 0;
							}
						}

						button {
							position: relative;
							width: 17.2rem;
							height: 3.7rem;
							border: 0;
							border-radius: 0.5rem;
							background: linear-gradient(90deg, #9796f0 0%, #fbc7d4 100%);
							color: white;
							font-family: 'Termina';
							font-size: 1.4rem;
							font-weight: bold;
							line-height: 1.7rem;
							z-index: 1;
							overflow: hidden;
							cursor: pointer;

							p.subscribe-button {
								position: relative;
								margin-bottom: 0;
								z-index: 2;
							}

							&::before {
								position: absolute;
								top: 0;
								left: 0;
								content: '';
								width: 100%;
								height: 100%;
								background-color: #00a2fd;
								opacity: 0;
								transition: opacity 0.3s ease-in-out;
							}

							&:hover::before {
								opacity: 1;
							}

							&:focus-visible {
								outline: 0;
							}
						}
					}
				}

				.title {
					font-size: 3.2rem;
					font-weight: 600;
					line-height: 3.8rem;
				}

				.header {
					font-size: 2rem;
					font-weight: 600;
					line-height: 2.4rem;
				}

				.body {
					&--large {
						font-size: 1.8rem;
						font-weight: 500;
						line-height: 2.9rem;
					}

					&--small {
						font-size: 1.4rem;
						font-weight: normal;
						line-height: 1.7rem;
					}
				}

				@media only screen and (max-width: 1366px) and (max-height: 768px) {
					.title {
						font-size: 3rem;
					}

					.header {
						font-size: 1.8rem;
					}

					.body {
						&--large {
							font-size: 1.6rem;
						}
					}
				}
			}

			.bottom {
				display: flex;
				align-items: center;
				flex-grow: 1;
				padding: 0 12rem;

				@media only screen and (max-width: 1920px) and (max-height: 1200px) {
					padding: 0 8rem;
				}

				@media only screen and (max-width: 1680px) and (max-height: 1050px) {
					padding: 0 6rem;
				}

				@media only screen and (max-width: 1512px) and (max-height: 834px) {
					padding: 0 6rem;
				}

				@media only screen and (max-width: 1440px) and (max-height: 900px) {
					padding: 0 5rem;
				}

				&__left {
					flex-grow: 1;
					font-size: 1.2rem;
					font-weight: normal;
					line-height: 1.4rem;
				}

				&__right {
					display: flex;
					gap: 4.5rem;
					font-size: 1.4rem;
					font-weight: normal;
					line-height: 1.7rem;

					@media only screen and (max-width: 1280px) and (max-height: 800px) {
						gap: 2rem;
					}

					p {
						cursor: pointer;
					}
				}
			}
		}

		.nav-bar {
			--min-height: 20rem;

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
						width: 9.5rem;
					}
				}
			}
		}
	}
</style>
