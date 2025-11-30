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

const featuredImages: Record<string, string> = {
  'distribution.webp': distributionImg,
};

export const NAV_ITEMS: string[] = (navigationLinks as NavigationLink[]).map(
  ({ label }) => t(label)
);

export const FEATURED_ITEMS: FeaturedItem[] = (
  featuredNews as FeaturedNewsEntry[]
).map(({ id, titleKey, textKey, categoryKey, img, pdf }) => ({
  id,
  category: t(categoryKey),
  title: t(titleKey),
  text: t(textKey),
  img: featuredImages[img] ?? distributionImg,
  pdf,
}));

export const CATEGORY_ITEMS: CategoryItem[] = [
  {
    title: 'Noticias',
    text: 'Learn more about the clean and consistent experience that travelers can...',
    img: category1Img,
  },
  {
    title: 'Productos Aerom�xico',
    text: 'Learn more about the clean and consistent experience that travelers can..',
    img: category2Img,
  },
  {
    title: 'Pol�ticas Aerom�xico',
    text: 'Learn more about the clean and consistent experience that travelers can...',
    img: category3Img,
  },
  {
    title: 'NDC',
    text: 'Learn more about the clean and consistent experience that travelers can..',
    img: category4Img,
  },
];

export const SUPPORT_ITEMS: SupportItem[] = [
  {
    title: 'Chat 24 horas',
    text: 'Tendr�s una ayuda 24 horas para poder solucionar dudas que llegues a tener.',
    img: support1Img,
  },
  {
    title: 'Chat 24 horas',
    text: 'Tendr�s una ayuda 24 horas para poder solucionar dudas que llegues a tener.',
    img: support2Img,
  },
  {
    title: 'Chat 24 horas',
    text: 'Tendr�s una ayuda 24 horas para poder solucionar dudas que llegues a tener.',
    img: support3Img,
  },
  {
    title: 'Chat 24 horas',
    text: 'Tendr�s una ayuda 24 horas para poder solucionar dudas que llegues a tener.',
    img: support4Img,
  },
];
