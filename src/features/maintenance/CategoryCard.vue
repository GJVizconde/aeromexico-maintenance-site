<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue';
import stelasMobileIcon from '@/assets/icons/stelas-mobile.svg';
import { t } from '@/utils/i18n';

import type { CategoryItem } from './maintenance.types';

interface Props {
  item: CategoryItem;
}

const props = defineProps<Props>();
</script>

<template>
  <BaseCard
    as="article"
    variant="elevated"
    padding="none"
    bg-class="bg-amBluePremium"
    class="relative grid grid-cols-1 md:grid-cols-[266px_1fr] lg:grid-cols-2 overflow-hidden text-white md:h-[230px]"
  >
    <img
      v-if="props.item.img"
      :src="props.item.img"
      :alt="props.item.title"
      class="hidden md:block h-full w-full object-cover"
    />

    <div
      class="flex flex-col pt-5 pb-5 lg:pt-[27px] pl-5 lg:pl-6 pr-5 md:pr-16 lg:pr-8"
    >
      <h3 class="text-2xl leading-[34px] font-GarnettSemibold font-semibold">
        {{ props.item.title }}
      </h3>

      <p class="mt-2.5 text-sm leading-5">
        {{ props.item.text }}
      </p>

      <img
        :src="stelasMobileIcon"
        :alt="t('accessibility.alt.decorative-trails')"
        class="absolute right-0 top-[17px]"
      />
      <img
        :src="stelasMobileIcon"
        :alt="t('accessibility.alt.decorative-trails')"
        class="absolute right-0 top-8 md:top-10"
      />
    </div>
  </BaseCard>
</template>
