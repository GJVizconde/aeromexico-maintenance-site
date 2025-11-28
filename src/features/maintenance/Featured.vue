<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

import type { FeaturedItem } from './maintenance.types';

interface Props {
  items: FeaturedItem[];
}

defineProps<Props>();
</script>

<template>
  <!-- Featured -->
  <section class="w-full py-10">
    <div class="md:max-w-[644px] lg:max-w-[1120px] mx-auto">
      <h2
        class="md:text-[22px] lg:text-[32px] font-GarnettSemibold font-semibold text-amBluePremium leading-[42px]"
      >
        Contenido destacado
      </h2>

      <div
        class="mt-5 grid md:gap-8 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 select-none"
      >
        <BaseCard
          v-for="(card, index) in items"
          :key="index"
          :class="[
            'pt-5 md:px-5 lg:px-8  lg:max-w-[352px] transition hover:-translate-y-0.5 hover:shadow-lg',
            index > 1 ? 'md:hidden lg:block' : '',
          ]"
        >
          <p
            class="text-sm lg:font-semibold text-amBlueInnovation leading-[22px]"
          >
            {{ card.category }}
          </p>

          <h3
            class="mt-2 text-2xl font-GarnettSemibold font-semibold text-amBluePremium leading-[34px] mb-[13px]"
          >
            {{ card.title }}
          </h3>

          <img
            :src="card.img"
            alt=""
            class="h-[188px] w-full rounded-md object-cover"
          />

          <p class="mt-5 text-sm leading-5 text-amTextGray">
            {{ card.text }}
          </p>

          <BaseButton class="mt-[19px] lg:mb-5 bg-amBlueInnovation" size="sm">
            PDF
          </BaseButton>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
