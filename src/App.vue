<template>
	<div class="app-wrapper">
		<FirstSection></FirstSection>
		<SecondSection></SecondSection>
		<ThirdSection></ThirdSection>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import FirstSection from './views/FirstSection.vue';
	import SecondSection from './views/SecondSection.vue';
	import ThirdSection from './views/ThirdSection.vue';

	export default defineComponent({
		components: { FirstSection, SecondSection, ThirdSection },
	});
</script>

<style lang="scss"></style>
