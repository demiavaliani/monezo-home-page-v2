<template>
	<div class="app-wrapper">
		<FirstSection></FirstSection>
		<SecondSection></SecondSection>
		<ThirdSection></ThirdSection>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted } from 'vue';
	import FirstSection from './views/FirstSection.vue';
	import SecondSection from './views/SecondSection.vue';
	import ThirdSection from './views/ThirdSection.vue';
	import gsap from 'gsap';
	import { Power2 } from 'gsap';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { Observer } from 'gsap/Observer';

	export default defineComponent({
		components: { FirstSection, SecondSection, ThirdSection },

		setup() {
			onMounted(() => {
				gsap.registerPlugin(ScrollToPlugin, Observer);
				const sections = gsap.utils.toArray('#snap-section');
				let currentSection = sections[0];
				let sectionToGo = sections[1];
				let scrolling = false;

				const goToSection = (section) => {
					gsap.to(window, {
						scrollTo: { y: section, autoKill: false },
						overwrite: true,
						duration: 0.2,
						ease: Power2.easeOut,
						onComplete: () => {
							scrolling = true;
							currentSection = sectionToGo;
							setTimeout(() => {
								scrolling = false;
							}, 200);
						},
					});
				};

				Observer.create({
					type: 'wheel,scroll',
					onDown: () => {
						if (!scrolling) {
							sectionToGo = sections[sections.indexOf(currentSection) + 1];
							if (sectionToGo) {
								goToSection(sectionToGo);
							}
						}
					},
					onUp: () => {
						if (!scrolling) {
							sectionToGo = sections[sections.indexOf(currentSection) - 1];
							if (sectionToGo) {
								goToSection(sectionToGo);
							}
						}
					},

					preventDefault: true,
				});
			});
			return {};
		},
	});
</script>

<style lang="scss"></style>
