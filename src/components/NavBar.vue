<template>
	<div :class="[navbarClassAddons, 'nav-bar']">
		<a class="nav-bar__logo" href="https://monezo.xyz/">
			<img src="@/assets/images/monezo-logo.svg" />
			<p v-if="firstPage" class="regular">Monezo</p>
		</a>

		<slot />

		<div class="nav-bar__menu">
			<img src="@/assets/images/navbar-menu.svg" />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, computed } from 'vue';

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
			const navbarClassAddons = computed(() => {
				return {
					'nav-bar--first-page': props.firstPage,
					'nav-bar--last-page': props.lastPage,
				};
			});

			return { navbarClassAddons };
		},
	});
</script>

<style lang="scss">
	.nav-bar {
		$parent: &;

		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 10.7rem;
		padding: 0 3.9rem 0 2.5rem;
		border: 2px solid;
		border-top: 0;

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
			height: 20rem;

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
			height: 40%;
			padding-right: 2.5rem;
			border-right: 2px solid;

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
			padding-left: 3.9rem;
			border-left: 2px solid;

			img {
				width: 3rem;
			}
		}
	}
</style>
