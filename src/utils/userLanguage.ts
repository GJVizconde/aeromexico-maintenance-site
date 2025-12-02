import type { UserPreferencesStore } from '@/stores/userPreferences';
import { detectLanguage } from './language';

export function initializeUserLanguage(
  userPreferencesStore: UserPreferencesStore
) {
  const language = detectLanguage();

  userPreferencesStore.setLanguage(language);

  return language;
}
