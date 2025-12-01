import type { UserPreferencesStore } from '@/stores/userPreferences';
import { detectLanguage, persistLanguageCookie } from './language';
import { setLocale } from './i18n';

export function initializeUserLanguage(
  userPreferencesStore: UserPreferencesStore
) {
  const language = detectLanguage();

  userPreferencesStore.setLanguage(language);
  setLocale(language.code);
  persistLanguageCookie(language.code);

  return language;
}
