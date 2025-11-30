export interface FeaturedItem {
  id?: string;
  category: string;
  title: string;
  text: string;
  img: string;
  pdf?: string;
}

export interface CategoryItem {
  title: string;
  text: string;
  img: string;
}

export interface SupportItem {
  title: string;
  text: string;
  img: string;
}
