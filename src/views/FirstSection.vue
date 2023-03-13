<template>
	<div class="first-section">
		<NavBar :first-page="true" :last-page="false" />

		<div class="first-section__body">
			<div class="first-section__body__title">
				<p class="first-section__body__title--first-line">
					One <br />
					Platform,
				</p>
				<p class="first-section__body__title--second-line">TWO WORLDS</p>
			</div>

			<div class="first-section__body__description">
				<p>
					Revolutionary platform that connects traditional real world assets & businesses revenue
					with NFT holders
				</p>
			</div>

			<div class="first-section__body__buttons">
				<Button
					class="first-section__body__buttons--first"
					:text="'Start Earnings'"
					:background="'filled'"
					:initial-width="25.4"
					:hover-width="28.2"
				/>

				<Button
					:text="'All-In-One App'"
					:background="'transparent'"
					:initial-width="25.8"
					:hover-width="28.6"
				/>
			</div>
		</div>

		<div class="first-section__footer">
			<div class="first-section__footer__text">
				<p>PARTNERS</p>
			</div>

			<div class="first-section__footer__running-text" ref="runningText">
				<RunningTextStraight
					:parent-element-width="runningTextWidth"
					:group-id="'images'"
					:animation-speed="15"
					:direction="'right-to-left'"
				>
					<div id="images" class="images">
						<img src="@/assets/images/multibank-logo.png" />
						<img src="@/assets/images/megogo-logo.png" />
						<img src="@/assets/images/castles-logo.png" />
						<img src="@/assets/images/pion-logo.png" />
					</div>

					<div id="images" class="images">
						<img src="@/assets/images/multibank-logo.png" />
						<img src="@/assets/images/megogo-logo.png" />
						<img src="@/assets/images/castles-logo.png" />
						<img src="@/assets/images/pion-logo.png" />
					</div>
				</RunningTextStraight>
			</div>
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed } from 'vue';
	import NavBar from '@/components/NavBar.vue';
	import Button from '@/components/Button.vue';
	import RunningTextStraight from '@/components/RunningTextStraight.vue';
	import RunningTextCircle from '@/components/RunningTextCircle.vue';

	export default defineComponent({
		components: { NavBar, Button, RunningTextStraight, RunningTextCircle },

		setup() {
			const runningText = ref<HTMLDivElement | null>(null);

			const runningTextWidth = computed(() =>
				runningText.value ? runningText.value.offsetWidth : 0
			);

			return { runningText, runningTextWidth };
		},
	});
</script>

<style lang="scss">
	.first-section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		border: 2px solid $monezo-night-black;
		background: linear-gradient(90deg, #b1b0fa 0%, #fbc7d4 100%);
		overflow: hidden;

		&__body {
			display: flex;
			flex-direction: column;
			gap: 3rem;
			padding: 0 0 0 6.2rem;

			&__title {
				font-weight: bold;

				&--first-line {
					font-size: 10rem;
					line-height: 12rem;
				}

				&--second-line {
					letter-spacing: -0.105em;
					font-size: 15rem;
					line-height: 18rem;
				}
			}

			&__description {
				font-size: 1.6rem;
				font-weight: bold;
				line-height: 2.3rem;
			}

			&__buttons {
				display: flex;

				&--first {
					margin-right: 3rem;
				}
			}
		}

		&__footer {
			display: flex;
			width: 100vw;
			height: 12.4rem;
			padding: 0 0 0 3rem;
			border-top: 2px solid $monezo-night-black;

			&__text {
				width: 55%;
				border-right: 2px solid $monezo-night-black;

				p {
					letter-spacing: -0.105em;
					font-size: 7rem;
					font-weight: bold;
					line-height: 12.4rem;
				}
			}

			&__running-text {
				width: 100%;
				height: 100%;
				overflow: hidden;

				.images {
					position: absolute;
					display: flex;
					// play with gap to adjust space between the groups
					gap: 12rem;
				}

				img {
					height: 4rem;

					&:first-child {
						width: 12.7rem;
					}

					&:nth-child(2) {
						width: 8.5rem;
					}

					&:nth-child(3) {
						width: 20.5rem;
					}

					&:nth-child(4) {
						width: 5.9rem;
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
