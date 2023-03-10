<template>
	<div class="app-wrapper">
		<RunningTextStraight text="Start your passive income Journey with Monezo NFT" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, computed, ref } from 'vue';
	import RunningTextStraight from './components/RunningTextStraight.vue';

	export default defineComponent({
		components: { RunningTextStraight },
	});
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	html,
	body {
		width: 100%;
		margin: 0;
		padding: 0;
		font-size: 62.5%;
	}

	#app {
		width: 100%;
	}

	.app-wrapper {
		// width: 1000px;
	}

	@font-face {
		font-family: 'Termina';
		src: url('@/assets/fonts/Termina-Regular.woff2') format('woff2'),
			url('@/assets/fonts/Termina-Regular.woff') format('woff'),
			url('@/assets/fonts/Termina-Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Termina';
		src: url('@/assets/fonts/Termina-Medium.woff2') format('woff2'),
			url('@/assets/fonts/Termina-Medium.woff') format('woff'),
			url('@/assets/fonts/Termina-Medium.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Termina';
		src: url('@/assets/fonts/Termina-Demi.woff2') format('woff2'),
			url('@/assets/fonts/Termina-Demi.woff') format('woff'),
			url('@/assets/fonts/Termina-Demi.ttf') format('truetype');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Termina';
		src: url('@/assets/fonts/Termina-Bold.woff2') format('woff2'),
			url('@/assets/fonts/Termina-Bold.woff') format('woff'),
			url('@/assets/fonts/Termina-Bold.ttf') format('truetype');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}
</style>
