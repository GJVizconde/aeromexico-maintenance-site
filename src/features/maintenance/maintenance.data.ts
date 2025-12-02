import { computed } from 'vue';
import distributionImg from '@/assets/images/distribution.webp';

import category1Img from '@/assets/images/category-1.webp';
import category2Img from '@/assets/images/category-2.webp';
import category3Img from '@/assets/images/category-3.webp';
import category4Img from '@/assets/images/category-4.webp';

import support1Img from '@/assets/images/support-1.webp';
import support2Img from '@/assets/images/support-2.webp';
import support3Img from '@/assets/images/support-3.webp';
import support4Img from '@/assets/images/support-4.webp';
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

const featuredImages: Record<string, string> = {
  'distribution.webp': distributionImg,
};

const categoryImages: Record<string, string> = {
  'category-1.webp': category1Img,
  'category-2.webp': category2Img,
  'category-3.webp': category3Img,
  'category-4.webp': category4Img,
};

const supportImages: Record<string, string> = {
  'support-1.webp': support1Img,
  'support-2.webp': support2Img,
  'support-3.webp': support3Img,
  'support-4.webp': support4Img,
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
      img: featuredImages[img] ?? distributionImg,
      pdf,
    })
  )
);

export const CATEGORY_ITEMS = computed<CategoryItem[]>(() =>
  (categoriesData as CategoryEntry[]).map(({ titleKey, textKey, img }) => ({
    title: t(titleKey),
    text: t(textKey),
    img: categoryImages[img] ?? category1Img,
  }))
);

export const SUPPORT_ITEMS = computed<SupportItem[]>(() =>
  (supportData as SupportEntry[]).map(({ titleKey, textKey, img }) => ({
    title: t(titleKey),
    text: t(textKey),
    img: supportImages[img] ?? support1Img,
  }))
);
