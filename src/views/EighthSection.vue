<template>
	<div class="eighth-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="navbar-running-text-wrapper" ref="navbarRunningTextWrapper">
				<RunningTextStraight
					:group-id="'eighth-section-navbar-running-text-group'"
					:parent-element-width="navbarRunningTextWrapperWidth"
					:group-width="navbarTextGroupWidth"
					:initial-position="5"
					:gap="5"
					:animation-speed="30"
					:direction="'right-to-left'"
					:font-size="5"
				>
					<div
						id="eighth-section-navbar-running-text-group"
						class="navbar-running-text-group"
						ref="navbarTextGroup"
					>
						<p class="running-text">FREQUENTLY ASKED QUESTIONS</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="eighth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">FREQUENTLY ASKED QUESTIONS</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="eighth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">FREQUENTLY ASKED QUESTIONS</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="eighth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">FREQUENTLY ASKED QUESTIONS</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>
				</RunningTextStraight>
			</div>
		</NavBar>

		<div class="eighth-section__top">
			<img src="@/assets/images/monezo-logo-colorful.png" />

			<p class="title">MONEZO FAQ</p>

			<p class="description">
				Popular questions about Monezo
				<br />
				Monezo – helps to unleash your potential
			</p>
		</div>

		<div class="eighth-section__bottom" ref="questions">
			<div class="questions">
				<div class="question" id="question" v-for="{ question, answer } in questionsAndAnswers">
					<p>{{ question }}</p>

					<svg viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22 12.5L0.250001 24.1913L0.250002 0.808657L22 12.5Z" />
					</svg>
				</div>
			</div>

			<div class="answer">
				<p class="answer__text" v-for="{ answer } in questionsAndAnswers">
					{{ answer }}
				</p>
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
	import { gsap } from 'gsap';

	export default defineComponent({
		components: { NavBar, RunningTextStraight },
		setup() {
			const navbarRunningTextWrapper = ref<HTMLDivElement | null>(null);
			const navbarTextGroup = ref<HTMLDivElement | null>(null);
			const navbarTextGroupWidth = ref(0);
			const questionsAndAnswers = [
				{
					question: 'Has the Monezo Platform been audited?',
					answer:
						'Unique feature of Monezo platform is that it cannot be hacked same way as DeFi protocols,so customers deposit cannot be affected. Nevertheless, in upcoming future after integrating new features Monezo platform will be audited to ensure system safety and provide best user experience.',
				},
				{
					question: 'Is Monezo a blockchain?',
					answer:
						'No, it is not. In case of token issuance it will be built on top of the EVM-compatible blockchains, as it shares vision of Monezo.',
				},
				{
					question: 'Where can I find the updates of the Monezo Platform?',
					answer:
						'Follow along live on Twitter and Medium or connect with the community to stay connected with what’s going on in the Monezo Discord server and Telegram. Later you could sign up for Monezo Updates on the website and on mobile app',
				},
				{
					question: 'What is minimum and maximum amount I can invest on Monezo Platform?',
					answer:
						'You can start investing from as little amount as 100$ and the maximum amount depends on Monezo NFT collection type.',
				},
				{
					question: 'Why the price of Monezo NFT is independent of the crypto market?',
					answer:
						'Each NFT has a nominal value set by Monezo, therefore all the rewards are based on nominal value of NFT. At any time NFT holders can sell Monezo NFT on Monezo’s and third-parties platforms. In addition to that, prices of all NFT are protected with instantly liquidity buyout program, so the company guarantee that will use instant liquidity fund to purchase NFT using its nominal value with deduction of special fee. NFT are connected to income from real world assets and businesses. In this regard, Monezo NFT is an excellent solution for diversification and stable, predictable income.',
				},
				{
					question: 'Where can I buy Monezo NFT?',
					answer:
						'You will be able to choose all Monezo NFT collections on branded Monezo marketplace to enjoy best commission of only 0,5% and get access to exclusive collections and pre-mint events. Also you will be able instantly stake NFT and earn daily rewards. Monezo cannot be responsible for errors on third-parties markets, however you are not limited to purchase Monezo NFT on the leading marketplaces such as MagicEden, OpenSea, Rarible, Binance and CoinBase.',
				},
				{
					question: 'What should I check before purchase Monezo NFT on third-parties marketplaces?',
					answer:
						'Make sure that you use marketplaces authorized by Monezo and check that you are purchasing from official Monezo account. (Please check, that this account is verified, where this is applied.) Authorized marketplaces:MagicEden, OpenSea, Rarible, Binance and CoinBase.',
				},
				{
					question: 'Purchasing Monezo NFT do I get share in associated business?',
					answer:
						'Monezo NFT gives you ability to receive income generated from associated business, but ownership of NFT does not represent any ownership of share in businesses.',
				},
				{
					question:
						'Should I take care about management and legal issues related to real estate assets (or other businesses linked to NFT collections)?',
					answer:
						'No, because you are buying an NFT backed by the revenue on an asset or business instead of part of an asset or business',
				},
			];
			const bottomHeight = ref(510);
			const bottomHeightCSS = computed(() => `${bottomHeight.value}px`);

			const navbarRunningTextWrapperWidth = computed(() =>
				navbarRunningTextWrapper.value ? navbarRunningTextWrapper.value.offsetWidth : 0
			);

			useResizeObserver(navbarTextGroup, (entries) => {
				navbarTextGroupWidth.value = entries[0].contentRect.width;
			});

			const calculateMediaQuery = (width: number, height: number) => {
				return window.matchMedia(
					`screen and (max-width: ${width}px) and (max-height: ${height}px)`
				);
			};

			onMounted(() => {
				const questions = gsap.utils.toArray('#question') as HTMLElement[];
				let active = 0;
				const tl = gsap.timeline();

				const playNext = (index = 1) => {
					tl.to('.answer', {
						y: `-=${index * bottomHeight.value}`,
					});
				};

				const playPrevious = (index = 1) => {
					tl.to('.answer', {
						y: `+=${index * bottomHeight.value}`,
					});
				};

				questions.forEach((question, index) => {
					question.onclick = () => {
						if (index > active) {
							if (index - active > 1) {
								playNext(index - active);
							} else playNext();

							active = index;
						}

						if (index < active) {
							if (active - index > 1) {
								playPrevious(active - index);
							} else playPrevious();

							active = index;
						}
					};
				});

				if (calculateMediaQuery(2560, 1700).matches) {
					bottomHeight.value = 530;
				}

				if (calculateMediaQuery(1600, 900).matches) {
					bottomHeight.value = 404;
				}

				if (calculateMediaQuery(1366, 768).matches) {
					bottomHeight.value = 402;
				}
			});

			return {
				navbarRunningTextWrapper,
				navbarRunningTextWrapperWidth,
				navbarTextGroup,
				navbarTextGroupWidth,
				questionsAndAnswers,
				bottomHeightCSS,
			};
		},
	});
</script>

<style lang="scss">
	.eighth-section {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		border-top: 0;
		background: linear-gradient(90deg, #ee9ca7 0%, #ffdde1 100%);

		&__top {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex-grow: 1;
			padding: 5rem 10rem;
			border-bottom: 2px solid $monezo-night-black;

			.title {
				margin: 6rem 0 2rem;
				font-size: 5rem;
				font-weight: bold;
				line-height: 6rem;
			}

			.description {
				font-size: 1.8rem;
				font-weight: 500;
				line-height: 2.9rem;
			}

			img {
				width: 16rem;

				@media only screen and (max-width: 1366px) and (max-height: 768px) {
					width: 14rem;
				}

				@media only screen and (max-width: 1280px) and (max-height: 800px) {
					width: 14rem;
				}
			}

			@media only screen and (max-width: 1600px) and (max-height: 900px) {
				.title {
					margin: 5.7rem 0 2rem;
					font-size: 4rem;
				}

				.description {
					font-size: 1.5rem;
				}
			}

			@media only screen and (max-width: 1512px) and (max-height: 834px) {
				padding: 2.5rem 10rem;

				.title {
					margin: 3rem 0 1rem;
					font-size: 3.5rem;
				}

				.description {
					font-size: 1.3rem;
				}
			}

			@media only screen and (max-width: 1440px) and (max-height: 900px) {
				.title {
					font-size: 3.5rem;
				}

				.description {
					font-size: 1.3rem;
				}
			}

			@media only screen and (max-width: 1366px) and (max-height: 768px) {
				padding: 2rem 10rem;

				.title {
					margin: 1.5rem 0 0rem;
					font-size: 3rem;
				}

				.description {
					font-size: 1.3rem;
				}
			}

			@media only screen and (max-width: 1280px) and (max-height: 800px) {
				padding: 1rem 10rem;

				.title {
					margin: 1rem 0 0rem;
					font-size: 3rem;
				}

				.description {
					font-size: 1.3rem;
				}
			}
		}

		&__bottom {
			display: flex;
			max-height: v-bind(bottomHeightCSS);
			overflow-y: hidden;

			.questions {
				min-width: 60%;
				border-right: 2px solid $monezo-night-black;

				@media only screen and (max-width: 1680px) and (max-height: 1050px) {
					min-width: 67%;
				}

				@media only screen and (max-width: 1280px) and (max-height: 800px) {
					min-width: 66%;
				}

				.question {
					position: relative;
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 47rem;
					padding: 1.5rem 2.2rem 1.5rem 10.5rem;
					border-bottom: 2px solid $monezo-night-black;
					font-size: 1.8rem;
					font-weight: 500;
					line-height: 2.2rem;
					z-index: 1;
					transition: color 0.3s ease-in-out;

					@media only screen and (max-width: 2304px) and (max-height: 1440px) {
						gap: 30rem;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						gap: 5rem;
					}

					@media only screen and (max-width: 1600px) and (max-height: 900px) {
						gap: 3rem;
						padding-top: 0.8rem;
						padding-bottom: 0.8rem;
						font-size: 1.5rem;
					}

					@media only screen and (max-width: 1512px) and (max-height: 834px) {
						font-size: 1.3rem;
					}

					@media only screen and (max-width: 1440px) and (max-height: 900px) {
						font-size: 1.3rem;
					}

					svg {
						min-width: 2.2rem;
						height: 2.5rem;
						fill: $monezo-night-black;
						transition: fill 0.3s ease-in-out;
					}

					&:nth-of-type(9) {
						border-bottom: 0;
					}

					&::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 0;
						height: 100%;
						background-color: black;
						z-index: -1;
						transition: width 0.3s ease-in-out;
					}

					&:hover {
						color: white;

						svg {
							fill: white;
						}

						&::before {
							width: 100%;
						}
					}
				}
			}

			.answer {
				width: 100%;
				padding: 0 10rem;
				font-size: 1.8rem;
				font-weight: 500;
				line-height: 2.9rem;

				@media only screen and (max-width: 1680px) and (max-height: 1050px) {
					padding: 0 3rem;
				}

				@media only screen and (max-width: 1600px) and (max-height: 900px) {
					font-size: 1.5rem;
				}

				@media only screen and (max-width: 1512px) and (max-height: 834px) {
					padding: 0 3rem;
					font-size: 1.3rem;
				}

				@media only screen and (max-width: 1440px) and (max-height: 900px) {
					padding: 0 3rem;
					font-size: 1.3rem;
				}

				&__text {
					display: flex;
					align-items: center;
					height: 100%;
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
