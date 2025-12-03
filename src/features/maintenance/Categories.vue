<script setup lang="ts">
import { t } from '@/utils/i18n';
import CategoryCard from './CategoryCard.vue';
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
        class="text-lg md:text-[22px] lg:text-[32px] font-sans font-semibold text-amBluePremium leading-[42px]"
      >
        {{ t('home.categories') }}
      </h2>

      <div class="mt-5 grid gap-x-8 gap-y-5 lg:grid-cols-2">
        <CategoryCard v-for="(cat, idx) in items" :key="idx" :item="cat" />
      </div>
    </div>
  </section>
</template>
