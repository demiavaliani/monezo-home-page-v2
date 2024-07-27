<template>
	<div class="seventh-section-quarters">
		<div class="seventh-section-quarters__quarter" v-for="(quarter, index) in quarterData">
			<div class="sides">
				<div class="sides__left">
					<div class="title">
						<p>{{ quarter.quarterTitle }}</p>
					</div>

					<div
						:class="['goal', { 'goal--completed': index <= 3, 'goal--future': index >= 5 }]"
						v-for="goal in quarter.quarterGoals"
					>
						<p :class="{ 'goal__partially-completed': goal === 'Website Launch' }">{{ goal }}</p>
					</div>
				</div>

				<div :class="['sides__right', { 'sides__right--future': index >= 4 }]">
					<div class="circle">
						<p>
							{{ quarter.quarterTitle }}
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							{{ quarter.quarterTitle }}
						</p>
						<p>
							COMPLETED
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							SUCCESSFULLY
						</p>
						<p>
							{{ quarter.quarterTitle }}
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							{{ quarter.quarterTitle }}
						</p>
						<p>
							COMPLETED
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							SUCCESSFULLY
						</p>
						<p>
							{{ quarter.quarterTitle }}
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							{{ quarter.quarterTitle }}
						</p>
						<p>
							COMPLETED
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							SUCCESSFULLY
						</p>
						<p>
							{{ quarter.quarterTitle }}
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							{{ quarter.quarterTitle }}
						</p>
						<p>
							COMPLETED
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							SUCCESSFULLY
						</p>
						<p>
							{{ quarter.quarterTitle }}
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							{{ quarter.quarterTitle }}
						</p>
						<p>
							COMPLETED
							<img src="@/assets/images/featuring-collection-text-divider-icon.svg" />
							SUCCESSFULLY
						</p>
					</div>

					<div class="circle-border"></div>

					<img
						class="monker"
						v-if="index === 0"
						src="@/assets/images/monker-violet-flashlight.png"
					/>
					<img class="monker" v-if="index === 1" src="@/assets/images/monker-corner-2.png" />
					<img class="monker" v-if="index === 2" src="@/assets/images/monker-roadmap-2.png" />
					<img class="monker" v-if="index === 3" src="@/assets/images/monker-roadmap-3.png" />
					<img class="monker" v-if="index === 4" src="@/assets/images/monker-roadmap-4.png" />
					<img class="monker" v-if="index === 5" src="@/assets/images/monker-roadmap-5.png" />
					<img class="monker" v-if="index === 6" src="@/assets/images/monker-roadmap-6.png" />
					<img class="monker" v-if="index === 7" src="@/assets/images/monker-roadmap-7.png" />
					<img class="monker" v-if="index === 8" src="@/assets/images/monker-roadmap-8.png" />
					<img class="monker" v-if="index === 9" src="@/assets/images/monker-roadmap-9.png" />
				</div>
			</div>
		</div>

		<div class="pixelated-background"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		components: {},
		setup() {
			const quarterData = [
				{
					quarterTitle: '[Q1-Q2] 2022',
					quarterGoals: ['Idea Generation', 'Team Setting'],
				},
				{
					quarterTitle: '[Q3-Q4] 2022',
					quarterGoals: ['Market Research & Project Planning', 'Team Expansion'],
				},
				{
					quarterTitle: '[Q1-Q2] 2023',
					quarterGoals: ['Litepaper & Pitchdeck Draft', 'Concept Design', 'Website Draft'],
				},
				{
					quarterTitle: '[Q3-Q4] 2023',
					quarterGoals: [
						'Developing Partnerships',
						'Developing Market Strategy',
						'Community Creation',
						'Project Idea POC Design & Prototyping',
					],
				},
				{
					quarterTitle: '[Q1-Q2] 2024',
					quarterGoals: ['Ambassador & Community Program', 'Website Launch'],
				},
				{
					quarterTitle: '[Q3-Q4] 2024',
					quarterGoals: ['Public Sale & TGE', '1st CEX & DEX Listing', 'MVP Creation'],
				},
				{
					quarterTitle: '[Q1-Q2] 2025',
					quarterGoals: ['Platform Launch', 'Marketplace Launch'],
				},
				{
					quarterTitle: '[Q3-Q4] 2025',
					quarterGoals: [
						'Additional RWA pools',
						'Dashboard & Portfolio Multichain Deployments of NFT Collection',
					],
				},
				{
					quarterTitle: '[Q1-Q2] 2026',
					quarterGoals: [
						'Monezo Wallet',
						'Monezo Institutional Services',
						'Tracking & Analytics Tools',
					],
				},
				{
					quarterTitle: '[Q3-Q4] 2026',
					quarterGoals: ['All-in-One App'],
				},
			];

			return { quarterData };
		},
	});
</script>

<style lang="scss">
	.seventh-section-quarters {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-bottom: 2px solid $monezo-night-black;
		border-top: 0;
		background: linear-gradient(90deg, #83a4d4 0%, #b6fbff 100%);

		&__quarter {
			&:not(:nth-of-type(10)) {
				border-bottom: 2px solid $monezo-night-black;
			}

			.sides {
				display: flex;

				&__left {
					width: 60%;
					border-right: 2px solid $monezo-night-black;

					.title {
						padding: 2.1rem 3.5rem;
						font-size: 5rem;
						font-weight: bold;
						line-height: 6rem;
					}

					.goal {
						padding: 1.5rem 3.5rem;
						font-size: 1.8rem;
						font-weight: 600;
						line-height: 2.2rem;

						&--completed {
							text-decoration: line-through;
							text-decoration-thickness: 0.2rem;
						}

						&--future {
							p {
								opacity: 0.3;
							}
						}

						&__partially-completed {
							text-decoration: line-through;
							text-decoration-thickness: 0.2rem;
						}
					}

					.title,
					.goal {
						border: 2px solid $monezo-night-black;
						border-top: 0;
						border-right: 0;
						border-left: 0;
					}
				}

				&__right {
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-grow: 1;

					.circle {
						width: 60rem;
						height: 40rem;
						white-space: nowrap;
						font-size: 3.5rem;
						font-weight: bold;
						line-height: 4.2rem;
						clip-path: circle(19.7rem at center);

						p {
							display: flex;
						}

						img {
							width: 3.1rem;
							margin: 0 2rem;
						}
					}

					.circle-border {
						position: absolute;
						width: 39.6rem;
						height: 39.6rem;
						border: 2px solid $monezo-night-black;
						border-radius: 50%;
					}

					.monker {
						position: absolute;
						bottom: 0;
						height: 31.5rem;
						z-index: 1;
					}

					&--future {
						.circle-border {
							border-color: #647d9c;
						}

						p {
							opacity: 0.3;
						}
					}
				}
			}
		}
	}
</style>
