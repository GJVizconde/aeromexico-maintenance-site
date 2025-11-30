<script setup lang="ts">
import stelasMobileIcon from '@/assets/icons/stelas-mobile.svg';
import type { CategoryItem } from './maintenance.types';

interface Props {
  items: CategoryItem[];
}

defineProps<Props>();
</script>

<template>
  <!-- Categories -->
  <section class="py-10 w-full bg-white">
    <div class="mx-5 md:max-w-[644px] lg:max-w-[1120px] md:mx-auto">
      <h2
        class="text-lg md:text-[32px] font-GarnettSemibold font-semibold text-amBluePremium leading-[42px]"
      >
        Nuestras Categorías
      </h2>

      <div class="mt-5 grid gap-x-8 gap-y-5 lg:grid-cols-2">
        <article
          v-for="(cat, idx) in items"
          :key="idx"
          class="relative grid grid-cols-[266px_1fr] lg:grid-cols-2 overflow-hidden rounded-sm bg-amBluePremium shadow-lg lg:h-[230px]"
        >
          <img
            :src="cat.img"
            alt="category"
            class="hidden md:block h-full w-full object-cover"
          />

          <div
            class="flex flex-col pt-5 pb-5 lg:pt-[27px] pl-5 lg:pl-6 pr-5 md:pr-16 lg:pr-8 text-white"
          >
            <h3
              class="text-2xl leading-[34px] font-GarnettSemibold font-semibold"
            >
              {{ cat.title }}
            </h3>

            <p class="mt-2.5 text-sm leading-5">
              {{ cat.text }}
            </p>

            <!-- Icono rojo -->
            <img
              :src="stelasMobileIcon"
              alt="estelas"
              class="absolute right-0 top-[17px]"
            />
            <img
              :src="stelasMobileIcon"
              alt="estelas"
              class="absolute right-0 top-8 md:top-10"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
