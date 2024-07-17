import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useResizeObserver } from '@vueuse/core';

export const useGlobalStore = defineStore('globalStore', {
	state: () => {
		const app = document.getElementById('app');
		const isMobile = ref();

		if (app) {
			useResizeObserver(app, (entries) => {
				const { width } = entries[0].contentRect;

				isMobile.value = width <= 430 ? true : false;
			});
		}

		return {
			isHamburgerMenuOpen: false,
			isMobile,
		};
	},
});

// 360x780
// 360x800
// 375x667
// 375x812
// 384x854
// 390x844
// 393x852
// 412x915
// 414x736
// 414x896
// 428x926
// 430x932
