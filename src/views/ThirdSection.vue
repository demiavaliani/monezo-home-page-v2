<template>
	<div class="third-section">
		<NavBar :first-page="false" :last-page="false">
			<div class="navbar-running-text-wrapper" ref="navbarRunningTextWrapper">
				<RunningTextStraight
					:group-id="'navbar-running-text-group'"
					:parent-element-width="navbarRunningTextWrapperWidth"
					:group-width="navbarTextGroupWidth"
					:initial-position="50"
					:gap="50"
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

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed } from 'vue';
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
