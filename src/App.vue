<template>
	<div class="app-wrapper">
		<FirstSection></FirstSection>
		<SecondSection></SecondSection>
		<ThirdSection></ThirdSection>
		<FourthSection></FourthSection>
		<FifthSection></FifthSection>
		<SixthSection></SixthSection>
		<SeventhSection></SeventhSection>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import FirstSection from './views/FirstSection.vue';
	import SecondSection from './views/SecondSection.vue';
	import ThirdSection from './views/ThirdSection.vue';
	import FourthSection from './views/FourthSection.vue';
	import FifthSection from './views/FifthSection.vue';
	import SixthSection from './views/SixthSection.vue';
	import SeventhSection from './views/SeventhSection.vue';

	export default defineComponent({
		components: {
			FirstSection,
			SecondSection,
			ThirdSection,
			FourthSection,
			FifthSection,
			SixthSection,
			SeventhSection,
		},
	});
</script>

<style lang="scss"></style>
