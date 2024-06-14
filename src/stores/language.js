import { defineStore } from 'pinia';
import enFlag from '@/assets/flags/en.png';
import brFlag from '@/assets/flags/br.png';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLang: null,
    availableLanguages: [
      {
        id: 1,
        name: 'English',
        value: 'en',
        flag: enFlag
      },
      {
        id: 2,
        name: 'Português',
        value: 'br',
        flag: brFlag,
        default: true
      }
    ]
  }),
  actions: {
    switchLanguage(newLang) {
      this.$state.currentLang = newLang;
    },
    init() {
      if (!this.$state.currentLang) {
        const defaultLang = this.availableLanguages.find(lang => lang.default)?.value || this.availableLanguages[0].value;
        this.switchLanguage(defaultLang);
      }
    },
    changeToNextLanguage() {
      this.init();
      const currentIndex = this.availableLanguages.findIndex(lang => lang.value === this.$state.currentLang);
      const newIndex = (currentIndex + 1) % this.availableLanguages.length;
      this.switchLanguage(this.availableLanguages[newIndex].value);
    },
    getCurrentLanguage() {
      this.init();
      return this.availableLanguages.find(lang => lang.value === this.$state.currentLang);
    }
  }
});
