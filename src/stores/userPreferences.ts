import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Language } from '@/utils/language';
import {
  findLanguageByCode,
  getFallbackLanguage,
  persistLanguageCookie,
} from '@/utils/language';
import { setLocale } from '@/utils/i18n';

export type UserPreferencesStore = ReturnType<typeof useUserPreferencesStore>;

export const useUserPreferencesStore = defineStore('userPreferences', () => {
  const language = ref<Language>(getFallbackLanguage());

  const languageCode = computed(() => language.value.code);

  const setLanguage = (value: Language) => {
    language.value = value;
    setLocale(value.code);
    persistLanguageCookie(value.code);
  };

  const setLanguageByCode = (code: string) => {
    setLanguage(findLanguageByCode(code));
  };

  const resetLanguage = () => {
    setLanguage(getFallbackLanguage());
  };

  return {
    language,
    languageCode,
    setLanguage,
    setLanguageByCode,
    resetLanguage,
  };
});
