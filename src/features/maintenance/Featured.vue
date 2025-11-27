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
    <div class="max-w-[1120px] mx-auto">
      <h2
        class="text-[32px] font-GarnettSemibold font-semibold text-amBluePremium leading-[42px]"
      >
        Contenido destacado
      </h2>

      <div class="mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 select-none">
        <BaseCard
          v-for="(card, index) in items"
          :key="index"
          class="pt-5 px-8 max-w-[352px] transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <p class="text-sm font-semibold text-amBlueInnovation leading-[22px]">
            {{ card.category }}
          </p>

          <h3
            class="mt-2 text-2xl font-GarnettSemibold font-semibold text-amBluePremium leading-[34px]"
          >
            {{ card.title }}
          </h3>

          <img
            :src="card.img"
            alt=""
            class="mt-[13px] h-36 w-full rounded-md object-cover"
          />

          <p class="mt-5 text-sm leading-5 text-amTextGray">
            {{ card.text }}
          </p>

          <BaseButton class="mt-[19px] mb-5" size="sm"> PDF </BaseButton>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
