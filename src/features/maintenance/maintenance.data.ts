import distributionImg from '@/assets/images/distribution.webp';

import category1Img from '@/assets/images/category_1.webp';
import category2Img from '@/assets/images/category_2.webp';
import category3Img from '@/assets/images/category_3.webp';
import category4Img from '@/assets/images/category_4.webp';

import support1Img from '@/assets/images/support_1.webp';
import support2Img from '@/assets/images/support_2.webp';
import support3Img from '@/assets/images/support_3.webp';
import support4Img from '@/assets/images/support_4.webp';

import type {
  FeaturedItem,
  CategoryItem,
  SupportItem,
} from './maintenance.types';

export const NAV_ITEMS: string[] = [
  'Noticias',
  'Productos',
  'Políticas',
  'Herramientas',
  'NDC',
];

export const FEATURED_ITEMS: FeaturedItem[] = Array.from({ length: 3 }).map(
  () => ({
    category: 'Products & Services',
    title: 'Nuestra visión de distribucion',
    img: distributionImg,
    text: 'Learn more about the clean and consistent experience that travelers can...',
  })
);

export const CATEGORY_ITEMS: CategoryItem[] = [
  {
    title: 'Noticias',
    text: 'Learn more about the clean and consistent experience that travelers can...',
    img: category1Img,
  },
  {
    title: 'Productos Aeroméxico',
    text: 'Learn more about the clean and consistent experience that travelers can..',
    img: category2Img,
  },
  {
    title: 'Políticas Aeroméxico',
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
    text: 'Tendrás una ayuda 24 horas para poder solucionar dudas que llegues a tener.',
    img: support1Img,
  },
  {
    title: 'Chat 24 horas',
    text: 'Tendrás una ayuda 24 horas para poder solucionar dudas que llegues a tener.',
    img: support2Img,
  },
  {
    title: 'Chat 24 horas',
    text: 'Tendrás una ayuda 24 horas para poder solucionar dudas que llegues a tener.',
    img: support3Img,
  },
  {
    title: 'Chat 24 horas',
    text: 'Tendrás una ayuda 24 horas para poder solucionar dudas que llegues a tener.',
    img: support4Img,
  },
];
