<template>
	<div class="second-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="running-text-wrapper" ref="runningTextWrapper">
				<RunningTextStraight
					:group-id="'running-text-group'"
					:parent-element-width="runningTextWrapperWidth"
					:group-width="textGroupWidth"
					:initial-position="initialPosition"
					:wrap-max-at="wrapMaxAt"
					:animation-speed="15"
					:direction="'right-to-left'"
					:font-size="5"
				>
					<div id="running-text-group" class="text-wrapper" ref="textGroup">
						<p class="running-text">Start your passive income Journey with Monezo NFT</p>
						<img src="../assets/images/start-your-journey-text-divider-icon.svg" />
					</div>

					<div id="running-text-group" class="text-wrapper">
						<p class="running-text">Start your passive income Journey with Monezo NFT</p>
						<img src="../assets/images/start-your-journey-text-divider-icon.svg" />
					</div>

					<div id="running-text-group" class="text-wrapper">
						<p class="running-text">Start your passive income Journey with Monezo NFT</p>
						<img src="../assets/images/start-your-journey-text-divider-icon.svg" />
					</div>
				</RunningTextStraight>
			</div>
		</NavBar>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed, onMounted } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import { useResizeObserver } from '@vueuse/core';

	export default defineComponent({
		components: { NavBar, RunningTextStraight },
		setup() {
			const runningTextWrapper = ref<HTMLDivElement | null>(null);
			const textGroup = ref<HTMLDivElement | null>(null);
			const textGroupWidth = ref(0);
			const initialPosition = ref(0);
			const wrapMaxAt = ref(0);

			const runningTextWrapperWidth = computed(() =>
				runningTextWrapper.value ? runningTextWrapper.value.offsetWidth : 0
			);

			const calculateMediaQuery = (width: number, height: number) => {
				return window.matchMedia(
					`screen and (max-width: ${width}px) and (max-height: ${height}px)`
				);
			};

			useResizeObserver(textGroup, (entries) => {
				textGroupWidth.value = entries[0].contentRect.width;
			});

			onMounted(() => {
				if (calculateMediaQuery(2560, 1700).matches) {
					initialPosition.value = 50;
					wrapMaxAt.value = 1280;
				}

				if (calculateMediaQuery(2304, 1440).matches) {
					wrapMaxAt.value = 1536;
				}

				if (calculateMediaQuery(1920, 1200).matches) {
					wrapMaxAt.value = 1920;
				}

				if (calculateMediaQuery(1680, 1050).matches) {
					wrapMaxAt.value = 2160;
				}

				if (calculateMediaQuery(1600, 900).matches) {
					wrapMaxAt.value = 2240;
				}

				if (calculateMediaQuery(1440, 900).matches) {
					wrapMaxAt.value = 2400;
				}

				if (calculateMediaQuery(1366, 768).matches) {
					wrapMaxAt.value = 2474;
				}

				if (calculateMediaQuery(1280, 800).matches) {
					wrapMaxAt.value = 2560;
				}
			});

			return {
				runningTextWrapper,
				runningTextWrapperWidth,
				textGroup,
				textGroupWidth,
				initialPosition,
				wrapMaxAt,
			};
		},
	});
</script>

<style lang="scss">
	.second-section {
		height: 100vh;

		.running-text-wrapper {
			width: 100%;
			overflow: hidden;

			.text-wrapper {
				position: absolute;
				display: flex;
				width: fit-content;
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
