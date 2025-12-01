import { defineStore } from 'pinia';
import type { Language } from '@/utils/language';
import { detectLanguage, findLanguageByCode, getFallbackLanguage } from '@/utils/language';

export type UserPreferencesStore = ReturnType<typeof useUserPreferencesStore>;

export const useUserPreferencesStore = defineStore('userPreferences', {
  state: () => ({
    language: detectLanguage(),
  }),
  getters: {
    languageCode: (state) => state.language.code,
  },
  actions: {
    setLanguage(language: Language) {
      this.language = language;
    },
    setLanguageByCode(code: string) {
      this.language = findLanguageByCode(code);
    },
    resetLanguage() {
      this.language = getFallbackLanguage();
    },
  },
});
