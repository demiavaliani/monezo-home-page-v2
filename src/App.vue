<template>
	<div class="app-wrapper">
		<FirstSection></FirstSection>
		<SecondSection></SecondSection>
		<ThirdSection></ThirdSection>
		<FourthSection></FourthSection>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import FirstSection from './views/FirstSection.vue';
	import SecondSection from './views/SecondSection.vue';
	import ThirdSection from './views/ThirdSection.vue';
	import FourthSection from './views/FourthSection.vue';

	export default defineComponent({
		components: {
			FirstSection,
			SecondSection,
			ThirdSection,
			FourthSection,
		},
	});
</script>

<style lang="scss"></style>
