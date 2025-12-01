import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import it from '@/locales/it.json';
import pt from '@/locales/pt.json';
import { detectLanguage, FALLBACK_LANGUAGE_CODE } from './language';

type TranslationTree = { [key: string]: string | TranslationTree };

const dictionary = {
  en,
  es,
  fr,
  it,
  pt,
};

type LocaleKey = keyof typeof dictionary;

const fallbackLocale: LocaleKey = ((): LocaleKey => {
  const normalized = FALLBACK_LANGUAGE_CODE.toLowerCase();
  return normalized in dictionary ? (normalized as LocaleKey) : 'en';
})();

const normalizeLocale = (locale: string | null | undefined): LocaleKey => {
  const [languagePart] = (locale ?? '').toLowerCase().split(/[-_]/);
  const normalized = languagePart || '';
  return normalized in dictionary ? (normalized as LocaleKey) : fallbackLocale;
};

const translateFrom = (
  locale: LocaleKey,
  parts: string[]
): string | undefined => {
  let value: string | TranslationTree | undefined = dictionary[locale];

  for (const part of parts) {
    if (!value || typeof value !== 'object' || !(part in value)) {
      return undefined;
    }
    value = value[part];
  }

  return typeof value === 'string' ? value : undefined;
};

let currentLang: LocaleKey = normalizeLocale(detectLanguage().code);

export function setLocale(locale: string | null | undefined): void {
  currentLang = normalizeLocale(locale);
}

export function getLocale(): LocaleKey {
  return currentLang;
}

export function t(key: string): string {
  const parts = key.split('.');

  return (
    translateFrom(currentLang, parts) ??
    translateFrom(fallbackLocale, parts) ??
    key
  );
}
