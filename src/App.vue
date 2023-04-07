<template>
	<div class="app-wrapper">
		<FirstSection></FirstSection>
		<SecondSection></SecondSection>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted } from 'vue';
	import FirstSection from './views/FirstSection.vue';
	import gsap from 'gsap';
	import SecondSection from './views/SecondSection.vue';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

	export default defineComponent({
		components: { FirstSection, SecondSection },

		setup() {
			const goToSection = (section) => {
				gsap.to(window, {
					scrollTo: { y: section, autoKill: false },
					overwrite: true,
					duration: 1,
				});
			};

			onMounted(() => {
				gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

				document.querySelectorAll('#snap-section').forEach((section) => {
					ScrollTrigger.create({
						trigger: section,
						onEnter: () => {
							if (section.classList.contains('first-section')) {
								return;
							}
							goToSection(section);
						},
						onEnterBack: () => {
							goToSection(section);
						},
					});
				});
			});

			return {};
		},
	});
</script>

<style lang="scss"></style>
