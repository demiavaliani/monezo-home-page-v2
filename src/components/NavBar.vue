<template>
	<div :class="[navbarClassAddons, 'nav-bar']">
		<a class="nav-bar__logo" href="https://monezo.xyz/">
			<img src="@/assets/images/monezo-logo.png" />
			<p v-if="firstPage" class="regular">Monezo</p>
		</a>

		<slot />

		<div class="nav-bar__menu">
			<img src="@/assets/images/navbar-menu.svg" @click="store.isHamburgerMenuOpen = true" />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, computed } from 'vue';
	import { useGlobalStore } from '../stores/globalStore';

	export default defineComponent({
		components: {},

		props: {
			firstPage: {
				type: Boolean,
				required: true,
			},

			lastPage: {
				type: Boolean,
				required: true,
			},
		},

		setup(props) {
			const store = useGlobalStore();

			const navbarClassAddons = computed(() => {
				return {
					'nav-bar--first-page': props.firstPage,
					'nav-bar--last-page': props.lastPage,
				};
			});

			return { store, navbarClassAddons };
		},
	});
</script>

<style lang="scss">
	.nav-bar {
		$parent: &;
		--min-height: 10.7rem;

		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		width: 100%;
		min-height: var(--min-height);
		height: var(--min-height);
		padding: 0 3.9rem 0 2.5rem;
		border: 2px solid $monezo-night-black;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		z-index: 9998;

		&--first-page {
			padding: 0 6.2rem;
			border: 0;

			#{$parent}__logo,
			#{$parent}__menu {
				padding: 0;
				border: 0;
			}
		}

		&--last-page {
			min-height: 20rem;
			padding: 0;

			#{$parent}__logo {
				display: none;
			}

			#{$parent}__menu {
				display: none;
			}
		}

		&__logo {
			display: flex;
			align-items: center;
			padding-right: 2.5rem;
			border-right: 2px solid $monezo-night-black;

			& img {
				width: 5.8rem;
			}

			p {
				margin-left: 1.2rem;
				font-size: 2.2rem;
				font-weight: bold;
				line-height: 2.6rem;
				color: $monezo-black;
			}
		}

		&__menu {
			display: flex;
			align-items: center;
			padding-left: 3.9rem;
			border-left: 2px solid $monezo-night-black;

			img {
				width: 3rem;
				height: fit-content;
				cursor: pointer;
				pointer-events: all;
			}
		}
	}
</style>
