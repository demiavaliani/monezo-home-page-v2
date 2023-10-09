<template>
	<div class="fifth-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="navbar-running-text-wrapper" ref="navbarRunningTextWrapper">
				<RunningTextStraight
					:group-id="'fifth-section-navbar-running-text-group'"
					:parent-element-width="navbarRunningTextWrapperWidth"
					:group-width="navbarTextGroupWidth"
					:initial-position="5"
					:gap="5"
					:animation-speed="30"
					:direction="'right-to-left'"
					:font-size="5"
				>
					<div
						id="fifth-section-navbar-running-text-group"
						class="navbar-running-text-group"
						ref="navbarTextGroup"
					>
						<p class="running-text">CONNECTING WORLDS</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="fifth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">CONNECTING WORLDS</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="fifth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">CONNECTING WORLDS</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>

					<div id="fifth-section-navbar-running-text-group" class="navbar-running-text-group">
						<p class="running-text">CONNECTING WORLDS</p>
						<img src="../assets/images/featuring-collection-text-divider-icon.svg" />
					</div>
				</RunningTextStraight>
			</div>
		</NavBar>

		<div class="fifth-section__sides">
			<div class="top">
				<img class="top__monezo-logo" src="../assets/images/monezo-logo-colorful.png" />

				<p class="top__title">MONEZO ECOSYSTEM</p>

				<div class="top__description">
					<p>
						Monezo is not only about high yields it is about complete ecosystem which will take care
						all about your finances
					</p>
				</div>
			</div>

			<div class="bottom">
				<div class="bottom__square" v-for="item in data">
					<p class="bottom__title">{{ item.title }}</p>

					<p class="bottom__description">{{ item.description }}</p>
				</div>
			</div>
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed, VueElement } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import { useResizeObserver } from '@vueuse/core';

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

			const data = [
				{
					title: 'Monezo Credit',
					description: 'Get access to loans and enjoy benefits for staking Monezo NFT ',
				},
				{ title: 'Yieldful NFT', description: 'NFT that generates you income ' },
				{
					title: 'Metaverse Support',
					description:
						'Get access to VIP events, proof your NFT ownership interact with other NFT holders in leading metaverse supported by Monezo ',
				},
				{
					title: 'Monezo Care',
					description: 'User-oriented care system provide excellent experience for users',
				},
				{
					title: 'Monezo Incubator',
					description:
						'Promising startups and large enterprises get access to fund-raise by pitching business plan or current business model. Investors can choose projects selected by Monezo by purchasing NFT and share revenue from business activities ',
				},
				{
					title: 'Monezo Academy',
					description:
						'Community-oriented program aimed to teach users about crypto and how finance works ',
				},
				{
					title: 'All-in-One App',
					description: 'Assists you in every step interacting with Monezo ecosystem ',
				},
				{
					title: 'Monezo Charity',
					description: 'Transformative Crypto-Giving to support People in Need ',
				},
			];

			return {
				navbarRunningTextWrapper,
				navbarRunningTextWrapperWidth,
				navbarTextGroup,
				navbarTextGroupWidth,
				data,
			};
		},
	});
</script>

<style lang="scss">
	.fifth-section {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		border-top: 0;
		background: linear-gradient(90deg, #ffcaac 0%, #84eece 100%);

		&__sides {
			display: flex;
			flex-direction: column;
			height: 100%;

			.top {
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex-grow: 1;
				padding: 10rem 17rem;

				@media only screen and (max-width: 1512px) and (max-height: 834px) {
					padding: 5rem 17rem;
				}

				&__monezo-logo {
					width: 16rem;
					z-index: 1;
				}

				&__title {
					margin: 6rem 0 2rem;
					font-size: 6rem;
					font-weight: bold;
					line-height: 8rem;

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						font-size: 5rem;
						line-height: 6rem;
					}

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						font-size: 4rem;
						line-height: 5rem;
					}

					@media only screen and (max-width: 1600px) and (max-height: 900px) {
						font-size: 3.5rem;
						line-height: 4.5rem;
					}
				}

				&__description {
					max-width: 62rem;
					font-size: 1.8rem;
					font-weight: 500;
					line-height: 2.9rem;

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						max-width: 50rem;
						font-size: 1.5rem;
						line-height: 2.5rem;
					}

					@media only screen and (max-width: 1600px) and (max-height: 900px) {
						max-width: 45rem;
						font-size: 1.3rem;
						line-height: 2.3rem;
					}
				}
			}

			.bottom {
				display: grid;
				grid-auto-flow: column;
				grid-auto-columns: calc(100% / 4);
				max-height: 45%;
				overflow-x: auto;
				border: solid $monezo-night-black;
				border-width: 2px 0 0;

				&__square {
					min-width: calc(100% / 4);
					padding: 7rem 6rem 5rem;
					text-align: center;
					border: solid $monezo-night-black;
					border-width: 0 1px;

					&:first-child {
						border-left: 0;
					}

					&:last-child {
						border-right: 0;
					}

					@media only screen and (max-width: 1710px) and (max-height: 953px) {
						padding: 3rem 5rem;
					}

					@media only screen and (max-width: 1366px) and (max-height: 768px) {
						padding: 3rem 2rem;
					}

					@media only screen and (max-width: 1280px) and (max-height: 800px) {
						padding: 3rem 2rem;
					}
				}

				&__title {
					font-size: 3rem;
					line-height: 5rem;
					font-weight: bold;

					@media only screen and (max-width: 1920px) and (max-height: 1200px) {
						margin-bottom: 1rem;
						font-size: 2.4rem;
						line-height: 3.8rem;
					}

					@media only screen and (max-width: 1710px) and (max-height: 953px) {
						font-size: 2.2rem;
						line-height: 3.5rem;
					}
				}

				&__description {
					font-size: 1.8rem;
					line-height: 2.9rem;
					font-weight: 500;

					@media only screen and (max-width: 1680px) and (max-height: 1050px) {
						font-size: 1.5rem;
						line-height: 2.5rem;
					}
					@media only screen and (max-width: 1710px) and (max-height: 953px) {
						font-size: 1.3rem;
						line-height: 2.3rem;
					}
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
