<template>
	<div class="button-wrapper">
		<div
			:class="['button', classAddons]"
			@mouseenter="isHovered = true"
			@mouseleave="isHovered = false"
			ref="button"
			id="button"
		>
			<p>{{ text }}</p>
			<img v-if="isHovered" src="@/assets/images/button-arrow-right.svg" />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed, onMounted, nextTick, watch } from 'vue';

	export default defineComponent({
		components: {},

		props: {
			text: {
				type: String,
				required: true,
			},

			background: {
				type: String,
				required: true,
				validator: (value: string) => ['filled', 'transparent'].includes(value),
			},

			initialWidth: {
				type: Number,
				required: true,
			},

			hoverWidth: {
				type: Number,
				required: true,
			},
		},

		setup(props) {
			const isHovered = ref(false);

			const classAddons = computed(() => {
				return {
					'button--filled': props.background === 'filled',
					'button--transparent': props.background === 'transparent',
				};
			});

			const initialWidthRem = computed(() => `${props.initialWidth}rem`);
			const hoverWidthRem = computed(() => `${props.hoverWidth}rem`);

			return { isHovered, classAddons, initialWidthRem, hoverWidthRem };
		},
	});
</script>

<style lang="scss">
	.button-wrapper {
		display: flex;
		align-items: center;
		height: 5.4rem;

		.button {
			display: inline-block;
			display: flex;
			align-items: center;
			width: v-bind(initialWidthRem);
			height: 5.4rem;
			padding: 1.6rem 4.4rem;
			border: 2px solid $monezo-night-black;
			border-radius: 1rem;
			transition: width 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
				height 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-color 300ms, color 300ms;

			p {
				white-space: nowrap;
				font-family: 'Termina';
				font-size: 1.8rem;
				line-height: 2.2rem;
				font-weight: bold;
			}

			img {
				margin-left: 1rem;
			}

			&:hover {
				width: v-bind(hoverWidthRem);
				height: 5.8rem;
				border: 2px solid $monezo-dark-charcoal;
				color: $monezo-night-black;
				background-color: $monezo-venetian-red;
				box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
			}

			&--filled {
				color: $monezo-white;
				background-color: $monezo-night-black;
			}

			&--transparent {
				border: 2px solid $monezo-night-black;
				color: $monezo-night-black;
				background-color: transparent;
			}
		}
	}
</style>
