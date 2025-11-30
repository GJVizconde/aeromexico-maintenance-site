import es from '@/locales/es.json';

type LocaleKey = 'es';
type TranslationTree = { [key: string]: string | TranslationTree };

const dictionary: Record<LocaleKey, TranslationTree> = {
  es,
};

const currentLang: LocaleKey = 'es';

export function t(key: string): string {
  const parts = key.split('.');
  let value: string | TranslationTree | undefined = dictionary[currentLang];

  for (const part of parts) {
    if (!value || typeof value !== 'object' || !(part in value)) {
      return key; // fallback si no existe
    }
    value = value[part];
  }

  return typeof value === 'string' ? value : key;
}
