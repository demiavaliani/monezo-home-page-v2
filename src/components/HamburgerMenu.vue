<template>
	<div :class="['hamburger-menu', { 'hamburger-menu--open': store.isHamburgerMenuOpen }]">
		<div class="hamburger-menu__overlay" @click.self="onMisClick" />

		<div class="hamburger-menu__header">
			<p>MENU</p>
			<img @click="store.isHamburgerMenuOpen = false" src="../assets/images/x-icon.png" />
		</div>

		<div class="hamburger-menu__body">
			<div class="hamburger-menu__body-item" v-for="item in menuItems">
				<p class="number">{{ item.number }}</p>
				<p class="title">{{ item.title }}</p>
				<svg viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M22 12.5L0.250001 24.1913L0.250002 0.808657L22 12.5Z" />
				</svg>
			</div>
		</div>

		<div class="hamburger-menu__footer">
			<img src="../assets/images/monezo-logo.png" />
			<p>Monezo</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted } from 'vue';
	import { useGlobalStore } from '../stores/globalStore';

	export default defineComponent({
		setup(props, { emit }) {
			const store = useGlobalStore();

			const menuItems = [
				{ number: '01', title: 'MARKETPLACE' },
				{ number: '02', title: 'INCUBATOR' },
				{ number: '03', title: 'INSTITUTIONAL' },
				{ number: '04', title: 'HOW IT WORKS' },
				{ number: '05', title: 'ABOUT US' },
				{ number: '06', title: 'ACADEMY' },
				{ number: '07', title: 'BLOG' },
			];

			const onMisClick = () => {
				if (store.isHamburgerMenuOpen) {
					store.isHamburgerMenuOpen = false;
				}
			};

			return { store, menuItems, onMisClick };
		},
	});
</script>

<style lang="scss">
	.hamburger-menu {
		$parent: &;

		position: fixed;
		top: 0;
		left: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 35%;
		height: 100%;
		border: 2px solid $monezo-night-black;
		background-color: $monezo-venetian-red;
		transition: left 0.5s ease-in-out;
		z-index: 9999;

		&--open {
			left: 65%;

			#{$parent}__overlay {
				opacity: 0.5;
				pointer-events: all;
			}
		}

		&__overlay {
			position: absolute;
			right: 100%;
			width: 100vw;
			height: 100vh;
			background-color: black;
			opacity: 0;
			pointer-events: none;
			transition: opacity 0.5s linear;
		}

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 5rem 8rem 0 6rem;
			margin-bottom: 10rem;

			@media only screen and (max-width: 1366px) and (max-height: 768px) {
				margin-bottom: 7rem;
			}

			p {
				font-size: 1.4rem;
				font-weight: 600;
				line-height: 1.7rem;
				color: $monezo-night-black;
			}

			img {
				fill: red;
				pointer-events: all;
				cursor: pointer;
			}
		}

		&__body {
			&-item {
				position: relative;
				display: grid;
				grid-template-columns: 10% 2fr auto;
				grid-gap: 4.5rem;
				align-items: center;
				padding: 2rem 8rem 2rem 6rem;
				border: 1px solid $monezo-night-black;
				border-right-width: 0;
				border-left-width: 0;
				color: $monezo-night-black;
				z-index: 1;
				transition: color 0.3s ease-in-out;
				cursor: pointer;

				@media only screen and (max-width: 1512px) {
					padding-left: 5rem;
					padding-right: 6rem;
				}

				@media only screen and (max-width: 1280px) {
					padding-left: 4rem;
					padding-right: 5rem;
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

				&:first-child {
					border-top-width: 2px;
				}

				&:last-child {
					border-bottom-width: 2px;
				}

				.number,
				.title {
					font-size: 2.6rem;
					line-height: 3.1rem;

					@media only screen and (max-width: 1512px) {
						font-size: 2.4rem;
					}

					@media only screen and (max-width: 1440px) {
						font-size: 2.2rem;
					}

					@media only screen and (max-width: 1366px) {
						font-size: 2rem;
					}
				}

				.number {
					font-weight: 500;
				}

				.title {
					font-weight: bold;
				}

				svg {
					height: 2.5rem;
					fill: $monezo-night-black;
					transition: fill 0.3s ease-in-out;

					@media only screen and (max-width: 1440px) {
						height: 2.2rem;
					}

					@media only screen and (max-width: 1366px) {
						height: 2rem;
					}
				}
			}
		}

		&__footer {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			margin-top: auto;
			margin-bottom: auto;

			img {
				width: 5.8rem;
			}

			p {
				font-size: 2.2rem;
				font-weight: bold;
				line-height: 2.6rem;
			}
		}
	}
</style>
