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
			<div class="third-section__sides__left-part"></div>

			<div class="third-section__sides__right-part">
				<div class="third-section__sides__right-part__top"></div>

				<div class="third-section__sides__right-part__bottom"></div>

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
	import { defineComponent, ref, computed } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import RunningTextVertical from '@/components/RunningTextVertical.vue';
	import { useResizeObserver } from '@vueuse/core';

	export default defineComponent({
		components: { NavBar, RunningTextStraight, RunningTextVertical },
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
				width: 40%;
				height: 100%;
				border: 1px solid $monezo-night-black;
				border-top: 0;
				border-bottom: 0;
				border-left: 0;
			}

			&__right-part {
				display: flex;
				width: 60%;
				height: 100%;
				border: 1px solid $monezo-night-black;
				border-top: 0;
				border-right: 0;
				border-bottom: 0;

				&__top {
					flex-grow: 1;
				}

				&__bottom {
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
