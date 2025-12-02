import languages from '@/data/languages.json';
import { getLocaleFlag } from '@/data/localeFlags';

type LanguageEntry = (typeof languages)[number];

export type LocationData = {
  code: string;
  name: string;
  flag: string;
  languages: {
    label_menu: string;
    code: string;
  }[];
};

const mapLanguageToLocation = (item: LanguageEntry): LocationData => ({
  code: item.location ?? item.code,
  name: item.country ?? item.name,
  flag: getLocaleFlag(item.code),
  languages: [
    {
      label_menu: item.name,
      code: item.code,
    },
  ],
});

export const locationsData: LocationData[] = (languages as LanguageEntry[]).map(
  mapLanguageToLocation
);

export const suggestedLocations: LocationData[] = locationsData.slice(0, 2);
