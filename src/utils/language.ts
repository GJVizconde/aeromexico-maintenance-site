import languages from '@/data/languages.json';

export type Language = (typeof languages)[number];
export type LanguageCode = Language['code'];

export const LANGUAGE_COOKIE_NAME = 'USRLANG';
export const FALLBACK_LANGUAGE_CODE: LanguageCode = 'en';

const fallbackLanguage =
  languages.find((lang) => lang.code === FALLBACK_LANGUAGE_CODE) ??
  languages[0] ??
  (() => {
    throw new Error('languages.json must include at least one language');
  })();

const normalizeLanguageCode = (code: string | null | undefined): string => {
  if (!code) return '';
  const lowerCased = code.toLowerCase();
  const [languagePart] = lowerCased.split(/[-_]/);
  return languagePart ?? '';
};

const matchLanguage = (code: string | null | undefined): Language | null => {
  const normalized = normalizeLanguageCode(code);
  const matched = languages.find((lang) => lang.code === normalized);
  return matched ?? null;
};

const getBrowserLanguage = (): string => {
  if (typeof navigator === 'undefined') return '';
  const primary = navigator.languages?.[0] ?? navigator.language ?? '';

  return primary ?? '';
};

export function readLanguageCookie(): string | null {
  if (typeof document === 'undefined') return null;

  const entry = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${LANGUAGE_COOKIE_NAME}=`));

  const value = entry?.split('=')[1];
  return value ? decodeURIComponent(value) : null;
}

export function persistLanguageCookie(code: string): void {
  if (typeof document === 'undefined') return;

  const maxAgeSeconds = 60 * 60 * 24 * 365; // 1 year
  document.cookie = `${LANGUAGE_COOKIE_NAME}=${encodeURIComponent(
    code
  )}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
}

export function findLanguageByCode(code: string | null | undefined): Language {
  return matchLanguage(code) ?? fallbackLanguage;
}

export function detectLanguage(): Language {
  const fromCookie = matchLanguage(readLanguageCookie());
  if (fromCookie) return fromCookie;

  return matchLanguage(getBrowserLanguage()) ?? fallbackLanguage;
}

export function getFallbackLanguage(): Language {
  return fallbackLanguage;
}

export function getAvailableLanguages(): Language[] {
  return languages;
}
