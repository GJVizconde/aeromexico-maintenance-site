<script setup lang="ts">
import airplaneImg from '@/assets/images/airplane.webp';
import heroContent from '@/data/hero.json';
import { t } from '@/utils/i18n';
import HeroCard from './HeroCard.vue';

type HeroCardContent = {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
};

const heroCardContent: HeroCardContent = {
  badge: t(heroContent.badgeKey),
  title: t(heroContent.titleKey),
  description: t(heroContent.descriptionKey),
  ctaLabel: t(heroContent.ctaLabelKey),
};
</script>

<template>
  <!-- Hero -->
  <section class="relative flex items-center">
    <img
      class="h-[214px] md:h-[314px] w-full object-cover object-center"
      :src="airplaneImg"
      alt="Plane"
    />

    <div class="absolute left-5 top-5 md:left-[62px] lg:left-20 md:top-5 z-10">
      <HeroCard v-bind="heroCardContent" />
    </div>
  </section>
</template>
