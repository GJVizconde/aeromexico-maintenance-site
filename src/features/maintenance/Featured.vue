<script setup lang="ts">
import Card from './Card.vue';
import type { FeaturedItem } from './maintenance.types';

interface Props {
  items: FeaturedItem[];
}

defineProps<Props>();
</script>

<template>
  <!-- Featured -->
  <section class="w-full py-10">
    <div class="mx-5 md:max-w-[644px] lg:max-w-[1120px] md:mx-auto">
      <h2
        class="text-lg md:text-[22px] lg:text-[32px] font-GarnettSemibold font-semibold text-amBluePremium leading-[42px]"
      >
        Contenido destacado
      </h2>

      <div
        class="mt-5 grid gap-5 md:gap-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 select-none"
      >
        <Card
          v-for="(card, index) in items"
          :key="index"
          :item="card"
          :class="index > 1 ? 'md:hidden lg:block' : ''"
        />
      </div>
    </div>
  </section>
</template>
