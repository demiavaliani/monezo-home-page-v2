<template>
	<div class="app-wrapper">
		<FirstSection class="section-element"></FirstSection>
		<SecondSection class="section-element"></SecondSection>
		<ThirdSection class="section-element"></ThirdSection>
		<FourthSection class="section-element"></FourthSection>
		<FifthSection class="section-element"></FifthSection>
		<SixthSection
			:is-intersecting="sixthSectionIsIntersecting"
			class="section-element"
			ref="sixthSectionIntersectionTarget"
		></SixthSection>
		<SeventhSection
			:is-intersecting="seventhSectionIsIntersecting"
			class="section-element"
			ref="seventhSectionIntersectionTarget"
		></SeventhSection>
		<SeventhSectionQuarters class="section-element"></SeventhSectionQuarters>
		<EighthSection class="section-element"></EighthSection>
		<NinthSection class="section-element"></NinthSection>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';
	import { useIntersectionObserver } from '@vueuse/core';
	import FirstSection from './views/FirstSection.vue';
	import SecondSection from './views/SecondSection.vue';
	import ThirdSection from './views/ThirdSection.vue';
	import FourthSection from './views/FourthSection.vue';
	import FifthSection from './views/FifthSection.vue';
	import SixthSection from './views/SixthSection.vue';
	import SeventhSection from './views/SeventhSection.vue';
	import SeventhSectionQuarters from './views/SeventhSectionQuarters.vue';
	import EighthSection from './views/EighthSection.vue';
	import NinthSection from './views/NinthSection.vue';

	export default defineComponent({
		components: {
			FirstSection,
			SecondSection,
			ThirdSection,
			FourthSection,
			FifthSection,
			SixthSection,
			SeventhSection,
			SeventhSectionQuarters,
			EighthSection,
			NinthSection,
		},

		setup() {
			const sixthSectionIntersectionTarget = ref<HTMLElement | null>();
			const seventhSectionIntersectionTarget = ref<HTMLElement | null>();

			const sixthSectionIsIntersecting = ref(false);
			const seventhSectionIsIntersecting = ref(false);

			const addSectionTitleTagsToViewsInDevMode = () => {
				const sections = document.querySelectorAll('.section-element');
				sections.forEach((section) => {
					const title = document.createElement('p');
					title.style.position = 'absolute';
					title.style.fontSize = '3rem';
					title.style.fontWeight = 'bold';
					title.style.color = 'yellow';
					title.innerText = section.classList[0];
					section.prepend(title);
				});
			};

			useIntersectionObserver(sixthSectionIntersectionTarget, ([{ isIntersecting }]) => {
				if (isIntersecting) {
					sixthSectionIsIntersecting.value = true;
				}
			});

			useIntersectionObserver(
				seventhSectionIntersectionTarget,
				([{ isIntersecting }]) => {
					if (isIntersecting) {
						seventhSectionIsIntersecting.value = true;
					}
				},
				{ threshold: 0.8 }
			);

			onMounted(() => {
				if (import.meta.env.DEV) {
					addSectionTitleTagsToViewsInDevMode();
				}
			});

			return {
				sixthSectionIntersectionTarget,
				seventhSectionIntersectionTarget,
				sixthSectionIsIntersecting,
				seventhSectionIsIntersecting,
			};
		},
	});
</script>

<style lang="scss"></style>
