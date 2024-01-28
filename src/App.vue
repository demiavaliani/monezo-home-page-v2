<template>
	<div class="app-wrapper">
		<HamburgerMenu class="section-element" />
		<FirstSection class="section-element" />
		<SecondSection class="section-element" />
		<ThirdSection class="section-element" />
		<FourthSection class="section-element" />
		<FifthSection class="section-element" />
		<SixthSection
			:is-intersecting="sixthSectionIsIntersecting"
			class="section-element"
			ref="sixthSectionIntersectionTarget"
		/>
		<SeventhSection
			:is-intersecting="seventhSectionIsIntersecting"
			class="section-element"
			ref="seventhSectionIntersectionTarget"
		/>
		<SeventhSectionQuarters class="section-element" />
		<EighthSection class="section-element" />
		<NinthSection class="section-element" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';
	import { useIntersectionObserver } from '@vueuse/core';
	import HamburgerMenu from './components/HamburgerMenu.vue';
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
			HamburgerMenu,
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
