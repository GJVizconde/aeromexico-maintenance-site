import { defineStore } from 'pinia';
import type { Language } from '@/utils/language';
import {
  detectLanguage,
  findLanguageByCode,
  getFallbackLanguage,
  persistLanguageCookie,
} from '@/utils/language';
import { setLocale } from '@/utils/i18n';

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
      setLocale(language.code);
      persistLanguageCookie(language.code);
    },
    setLanguageByCode(code: string) {
      this.setLanguage(findLanguageByCode(code));
    },
    resetLanguage() {
      this.setLanguage(getFallbackLanguage());
    },
  },
});
