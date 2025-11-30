import mxFlag from '@/assets/icons/flags/mx-flag.svg';
import usFlag from '@/assets/icons/flags/us-flag.svg';
import brFlag from '@/assets/icons/flags/br-flag.svg';
import frFlag from '@/assets/icons/flags/fr-flag.svg';
import itFlag from '@/assets/icons/flags/it-flag.svg';

export type LocaleCode = 'es' | 'en' | 'pt' | 'fr' | 'it';

export const LOCALE_FLAGS: Record<LocaleCode, string> = {
  es: mxFlag,
  en: usFlag,
  pt: brFlag,
  fr: frFlag,
  it: itFlag,
};

const SUPPORTED = Object.keys(LOCALE_FLAGS) as LocaleCode[];

export function getLocaleFlag(locale: string | null | undefined): string {
  const code = (locale ?? '').toLowerCase();
  return (SUPPORTED as string[]).includes(code)
    ? LOCALE_FLAGS[code as LocaleCode]
    : LOCALE_FLAGS.es;
}
