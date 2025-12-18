import { computed } from 'vue';
import featuredNews from '@/data/featuredNews.json';
import categoriesData from '@/data/category.json';
import supportData from '@/data/support.json';
import navigationLinks from '@/data/navigationLinks.json';
import { t } from '@/utils/i18n';

import type {
  FeaturedItem,
  CategoryItem,
  SupportItem,
} from './maintenance.types';

type NavigationLink = {
  name: string;
  label: string;
  link: string;
};

type FeaturedNewsEntry = {
  id: string;
  titleKey: string;
  textKey: string;
  categoryKey: string;
  img: string;
  pdf?: string;
};

type CategoryEntry = {
  id: string;
  titleKey: string;
  textKey: string;
  img: string;
};

type SupportEntry = {
  id: string;
  titleKey: string;
  textKey: string;
  img: string;
};

const localImages = import.meta.glob(
  '../../assets/images/*.{jpg,jpeg,png,webp,svg}',
  { eager: true, import: 'default' }
);

const imageByFilename = Object.entries(localImages).reduce<
  Record<string, string>
>((acc, [path, url]) => {
  const filename = path.split('/').pop();
  if (filename) acc[filename] = url as string;
  return acc;
}, {});

const isExternalOrPublic = (src: string) =>
  /^(https?:)?\/\//i.test(src) || src.startsWith('/');

const resolveImage = (img: string | undefined, fallbackFile: string) => {
  if (!img) return imageByFilename[fallbackFile] ?? fallbackFile;
  if (isExternalOrPublic(img)) return img;
  return imageByFilename[img] ?? img;
};

const resolveDocument = (doc: string | undefined) => {
  if (!doc) return '';
  if (isExternalOrPublic(doc)) return doc;
  return `/docs/${doc}`;
};

export const NAV_ITEMS = computed<string[]>(() =>
  (navigationLinks as NavigationLink[]).map(({ label }) => t(label))
);

export const FEATURED_ITEMS = computed<FeaturedItem[]>(() =>
  (featuredNews as FeaturedNewsEntry[]).map(
    ({ id, titleKey, textKey, categoryKey, img, pdf }) => ({
      id,
      category: t(categoryKey),
      title: t(titleKey),
      text: t(textKey),
      img: resolveImage(img, 'distribution-1.webp'),
      pdf: resolveDocument(pdf),
    })
  )
);

export const CATEGORY_ITEMS = computed<CategoryItem[]>(() =>
  (categoriesData as CategoryEntry[]).map(({ titleKey, textKey, img }) => ({
    title: t(titleKey),
    text: t(textKey),
    img: resolveImage(img, 'category-1.webp'),
  }))
);

export const SUPPORT_ITEMS = computed<SupportItem[]>(() =>
  (supportData as SupportEntry[]).map(({ titleKey, textKey, img }) => ({
    title: t(titleKey),
    text: t(textKey),
    img: resolveImage(img, 'support-1.webp'),
  }))
);
