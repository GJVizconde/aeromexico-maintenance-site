<script setup lang="ts">
import { ref } from 'vue';
import type { SupportItem } from './maintenance.types';

import stelasMobileIcon from '@/assets/icons/stelas-mobile.svg';
import arrowIcon from '@/assets/icons/arrow.svg';

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
          Cómo apoyamos su negocio
        </h2>

        <div class="flex md:flex lg:hidden items-center gap-5">
          <button
            type="button"
            class="flex h-8 w-8 items-center justify-center text-amBluePremium"
            aria-label="Ver anterior"
            @click="scrollTablet('prev')"
          >
            <img :src="arrowIcon" alt="" class="h-[16.45px] w-[21.06px]" />
          </button>
          <button
            type="button"
            class="flex h-8 w-8 items-center justify-center text-amBluePremium"
            aria-label="Ver siguiente"
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
        <article
          v-for="(item, idx) in items"
          :key="idx"
          class="group relative shrink-0 overflow-hidden rounded-sm shadow-lg snap-start md:shrink-0 lg:min-w-0 lg:max-w-none"
        >
          <!-- Imagen -->
          <img
            :src="item.img"
            alt=""
            class="h-[382px] w-[256px] md:w-[259px] lg:w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <!-- Overlay opcional -->
          <div class="pointer-events-none absolute inset-0" />

          <!-- Panel azul dentro de la foto -->
          <div class="absolute left-[15px] right-[15px] bottom-[15px]">
            <div
              class="flex items-start justify-between max-w-[229px] lg:w-full rounded-sm bg-amBluePremium pl-4 py-[15px] shadow-lg"
            >
              <div>
                <h3
                  class="text-[22px] font-GarnettSemibold font-semibold text-white"
                >
                  {{ item.title }}
                </h3>

                <p class="mt-2.5 text-sm leading-5 text-white">
                  {{ item.text }}
                </p>
              </div>

              <div class="mt-1 w-auto shrink-0">
                <img :src="stelasMobileIcon" alt="estelas" />
                <img :src="stelasMobileIcon" class="mt-1" alt="estelas" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
