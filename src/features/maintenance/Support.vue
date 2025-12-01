<script setup lang="ts">
import { ref } from 'vue';
import { t } from '@/utils/i18n';
import arrowIcon from '@/assets/icons/arrow.svg';
import SupportCard from './SupportCard.vue';
import type { SupportItem } from './maintenance.types';

interface Props {
  items: SupportItem[];
}

defineProps<Props>();

const tabletSliderRef = ref<HTMLDivElement | null>(null);

const scrollTablet = (direction: 'prev' | 'next') => {
  const container = tabletSliderRef.value;
  if (!container) return;

  const firstCard = container.querySelector<HTMLElement>('article');
  const cardWidth = firstCard?.clientWidth ?? 300;
  const gap = 20; // matches md:gap-5
  const offset = cardWidth + gap;

  container.scrollBy({
    left: direction === 'prev' ? -offset : offset,
    behavior: 'smooth',
  });
};
</script>

<template>
  <!-- Support -->
  <section class="py-10 w-full">
    <div class="max-w-[1120px] mx-auto">
      <div
        class="flex items-center mx-5 justify-between gap-3 md:max-w-[645px] md:mx-auto lg:max-w-none"
      >
        <h2
          class="md:text-[22px] lg:text-[32px] font-GarnettSemibold font-semibold text-amBluePremium md:leading-[42px]"
        >
          {{ t('home.support.title') }}
        </h2>

        <div class="flex md:flex lg:hidden items-center gap-5">
          <button
            type="button"
            class="flex h-8 w-8 items-center justify-center text-amBluePremium"
            :aria-label="t('home.support.prev')"
            @click="scrollTablet('prev')"
          >
            <img :src="arrowIcon" alt="" class="h-[16.45px] w-[21.06px]" />
          </button>
          <button
            type="button"
            class="flex h-8 w-8 items-center justify-center text-amBluePremium"
            :aria-label="t('home.support.next')"
            @click="scrollTablet('next')"
          >
            <img
              :src="arrowIcon"
              alt=""
              class="h-[16.45px] w-[21.06px] rotate-180"
            />
          </button>
        </div>
      </div>

      <div
        ref="tabletSliderRef"
        class="mt-5 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full md:w-full md:max-w-none md:pl-[calc((100%-645px)/2)] md:pr-0 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:max-w-none lg:mx-0 lg:px-0"
      >
        <SupportCard
          v-for="(item, idx) in items"
          :key="idx"
          :item="item"
          :is-even="(idx + 1) % 2 === 0"
        />
      </div>
    </div>
  </section>
</template>
