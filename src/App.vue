<template>
	<div class="app-wrapper">
		<SecondSection></SecondSection>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import SecondSection from './views/SecondSection.vue';

	export default defineComponent({
		components: { SecondSection },
	});
</script>

<style lang="scss"></style>
