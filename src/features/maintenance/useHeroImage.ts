import { onMounted } from 'vue';

type UseHeroImageOptions = {
  src: string;
  srcSm: string;
  srcLg: string;
  preloadId?: string;
  sizes?: string;
};

export function useHeroImage({
  src,
  srcSm,
  srcLg,
  preloadId = 'hero-airplane-preload',
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw',
}: UseHeroImageOptions) {
  const srcset = `${srcSm} 768w, ${srcLg} 1280w, ${src} 1536w`;

  onMounted(() => {
    if (typeof document === 'undefined') return;
    if (document.querySelector(`link#${preloadId}`)) return;

    const link = document.createElement('link');
    link.id = preloadId;
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.setAttribute('imagesrcset', srcset);
    link.setAttribute('imagesizes', sizes);
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  });

  return {
    src,
    srcset,
    sizes,
  };
}
