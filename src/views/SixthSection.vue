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
						<p id="left-middle-text" class="valdemars">
							Our CBO Valdemars Barets has huge experience working for well-known companies in Dubai
							(Dubai Properties, Engel & Völkers Dubai). Valdemars holding senior positions in
							business development In the real estate sector. His strong points include establishing
							business processes and creating new products, as well asexperience in attracting new
							partners for business visibility. With experience and connections in the industry, my
							team and I are focused on delivering our first tight project in Dubai.
						</p>

						<p id="left-middle-text" class="aleksejs">
							Co-Founder, Aleksejs, with over 20 years of experience in high-ranking positions
							focused on construction companies. With experience in the crypto industry spanning
							over 6 years, he brings a unique blend of traditional sector knowledge and a
							comprehensive understanding of the digital asset landscape. Aleksejs' real sector
							connections and experience in the European market further enhance his ability to drive
							the project's success. With his extensive experience and connections, Aleksejs is
							committed to driving the project's growth and ensuring long-term success in the
							dynamic and competitive crypto industry.
						</p>

						<p id="left-middle-text" class="maksims">
							Crypto veteran with 6 years experience working with industry leaders. Binance Angel
							and community manager & representative for 3 years. Community leader for cumulative
							150k+ member in 4 WEB3.0 projects. Angel investor in 20+ WEB3.0 startups. CEO,
							Co-founder for revolutionary NFT platform.Crypto Blogger, guest speaker.
						</p>

						<p id="left-middle-text" class="sergejs">
							CTO Sergejs Hlusovs has extensive experience in technical process management gained
							through his work in prominent Latvian companies such as A/s Rigas Siltums and A/s
							Latvenergo. Since 2017, Sergejs has been actively involved in the crypto industry,
							increasing his involvement from 2019 onwards. He has made significant investments in
							various projects, including Moonbeam, Goldfinch, Exorde, Rigor, Silta Finance, and
							Nym. Sergejs, alongside a dedicated team, has successfully launched over 700 nodes,
							which allowed him to establish close relationships with multiple projects, providing
							invaluable support in testing their networks and developing blockchains such as Aptos,
							Exorde, Nym, Aleo, IronFish, StarkNet, and MoonBeam, among others. Additionally, he
							has served as a mainnet validator for projects like Nym, Ethereum, Gnosis, Polkadot,
							and Cosmos.
						</p>

						<p id="left-middle-text" class="nick">
							CMO of Monezo Nick Tretinko worked on several global projects at Webhelp in such
							positions as Quality Analyst & Team Lead in the Customer Care & Content Moderation
							field. In 2019, Nick shared his experience and vision to help grow the Binance
							community as a Binance Angel. Later he was involved in community development and other
							large projects such as Keep Network, Moonbeam, Biconomy, etc. Before founding the
							Monezo project with the team, Nick was responsible for the development of communities
							of various projects, both as a Community Manager and providing a full cycle of
							outsourcing for working with the media development of the GuildFi project.
						</p>
					</div>

					<p class="left__job-position" id="left__job-position">Chief Business Officer</p>
					<p class="left__job-position" id="left__job-position">Chief Financial Officer</p>
					<p class="left__job-position" id="left__job-position">Chief Executive Officer</p>
					<p class="left__job-position" id="left__job-position">Chief Technical Officer</p>
					<p class="left__job-position" id="left__job-position">Chief Marketing Officer</p>
				</div>

				<div class="left__bottom">
					<p id="executive-name">VALDEMARS BARETS</p>
					<p id="executive-name">ALEKSEJS BORODINOVS</p>
					<p id="executive-name">MAKSIMS KURAJEVS</p>
					<p id="executive-name">SERGEJS HLUSOVS</p>
					<p id="executive-name">NICK TRETINKO</p>
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

				const executiveName = gsap.utils.toArray('#executive-name') as HTMLElement[];
				const tlExecutiveText = gsap.timeline({ repeat: -1 });

				executiveName.forEach((text) => {
					tlExecutiveText.from(
						text,
						{
							xPercent: -110,
							duration: 1,
							ease: Power1.easeInOut,
						},
						'>-1'
					);
					tlExecutiveText.from(text, {
						duration: 4,
					});
					tlExecutiveText.to(text, {
						xPercent: 200,
						duration: 1,
						opacity: 0,
						ease: Power1.easeInOut,
					});
				});

				const jobPosition = gsap.utils.toArray('#left__job-position') as HTMLElement[];
				const tlJobPositionText = gsap.timeline({ repeat: -1 });

				jobPosition.forEach((text) => {
					tlJobPositionText.from(
						text,
						{
							xPercent: -110,
							duration: 1,
							ease: Power1.easeInOut,
						},
						'>-1'
					);
					tlJobPositionText.from(text, {
						duration: 4,
					});
					tlJobPositionText.to(text, {
						xPercent: 200,
						duration: 1,
						opacity: 0,
						ease: Power1.easeInOut,
					});
				});
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
		border-top: 0;
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

				@media only screen and (max-width: 1920px) and (max-height: 1200px) {
					width: 50%;
				}

				@media only screen and (max-width: 1920px) and (max-height: 945px) {
					width: 60%;
				}

				&__top {
					width: 70%;
					padding: 1.5rem 0 1.5rem 2.5rem;

					p {
						font-size: 1.7rem;
						font-weight: 500;
						line-height: 2.87rem;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						padding: 1rem 0 1rem 2.5rem;

						p {
							font-size: 1.5rem;
						}
					}
				}

				&__middle {
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					flex-grow: 1;
					gap: 5rem;
					padding: 5rem 5rem 0 2.5rem;
					border: solid $monezo-night-black;
					border-width: 2px 0;

					.wrapper {
						position: relative;

						& p {
							position: absolute;
						}
					}

					img {
						width: 18rem;

						@media only screen and (max-width: 1366px) and (max-height: 800px) {
							width: 13rem;
						}
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

					@media only screen and (max-width: 3440px) and (max-height: 1440px) {
						padding-top: 25rem;
						padding-right: 40rem;
					}

					@media only screen and (max-width: 2560px) and (max-height: 1700px) {
						padding-top: 25rem;
						padding-right: 20rem;
					}

					@media only screen and (max-width: 2560px) and (max-height: 1440px) {
						padding-top: 15rem;
						padding-right: 15rem;
					}

					@media only screen and (max-width: 2304px) and (max-height: 1440px) {
						padding-top: 10rem;
						padding-right: 10rem;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						padding-top: 5rem;
						padding-right: 7rem;

						p {
							font-size: 1.5rem;
						}
					}

					@media only screen and (max-width: 1920px) and (max-height: 945px) {
						gap: 3rem;
						padding-top: 3rem;
						padding-right: 7rem;

						p {
							font-size: 1.5rem;
						}
					}

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						gap: 3rem;
						padding-top: 3rem;
						padding-right: 7rem;

						p {
							font-size: 1.3rem;
						}
					}

					@media only screen and (max-width: 1600px) and (max-height: 900px) {
						gap: 3rem;
						padding-top: 3rem;
						padding-right: 7rem;

						p {
							font-size: 1.3rem;
						}
					}

					@media only screen and (max-width: 1366px) and (max-height: 800px) {
						gap: 1rem;
						padding-top: 1rem;
						padding-right: 7rem;

						p {
							font-size: 1.3rem;
						}
					}
				}

				&__bottom {
					position: relative;
					height: 8rem;
					padding: 1.5rem 0 1.5rem 2.5rem;

					p {
						position: absolute;
						font-size: 4rem;
						font-weight: bold;
						line-height: 6rem;
					}

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						padding: 1rem 0 1rem 2.5rem;

						p {
							font-size: 3.5rem;
						}
					}

					@media only screen and (max-width: 1366px) and (max-height: 768px) {
						p {
							line-height: 4rem;
						}
					}

					@media only screen and (max-width: 1280px) and (max-height: 800px) {
						p {
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

				@media only screen and (max-width: 1920px) and (max-height: 1200px) {
					width: 50%;
				}

				@media only screen and (max-width: 1920px) and (max-height: 945px) {
					width: 40%;
				}

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
