<script setup lang="ts">
import airplaneImg from '@/assets/images/airplane.webp';
import airplaneImgLg from '@/assets/images/airplane-1280.webp';
import airplaneImgSm from '@/assets/images/airplane-768.webp';
import heroContent from '@/data/hero.json';
import { t } from '@/utils/i18n';
import HeroCard from './HeroCard.vue';
import { computed } from 'vue';
import { useHeroImage } from './useHeroImage';

type HeroCardContent = {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
};

const { src: heroSrc, srcset: heroSrcset, sizes: heroSizes } = useHeroImage({
  src: airplaneImg,
  srcSm: airplaneImgSm,
  srcLg: airplaneImgLg,
});

const emit = defineEmits<{
  (event: 'open-maintenance'): void;
}>();

const heroCardContent = computed<HeroCardContent>(() => ({
  badge: t(heroContent.badgeKey),
  title: t(heroContent.titleKey),
  description: t(heroContent.descriptionKey),
  ctaLabel: t(heroContent.ctaLabelKey),
}));
</script>

<template>
  <!-- Hero -->
  <section class="relative">
    <img
      class="h-[214px] md:h-[415px] w-full object-cover object-center"
      :src="heroSrc"
      :srcset="heroSrcset"
      :sizes="heroSizes"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      :alt="t('accessibility.alt.hero-plane')"
    />
    <div class="absolute inset-0">
      <div class="relative w-full md:max-w-[645px] lg:max-w-[1120px] mx-auto">
        <div class="absolute left-5 top-5 md:left-0 md:top-5 z-10">
          <HeroCard
            v-bind="heroCardContent"
            @open-maintenance="emit('open-maintenance')"
          />
        </div>
      </div>
    </div>
  </section>
</template>
