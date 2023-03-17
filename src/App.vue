<template>
	<div class="app-wrapper">
		<FirstSection />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import FirstSection from './views/FirstSection.vue';

	export default defineComponent({
		components: { FirstSection },
	});
</script>

<style lang="scss"></style>
