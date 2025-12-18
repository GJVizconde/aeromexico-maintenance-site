<script setup lang="ts">
import { computed } from 'vue';
import { t } from '@/utils/i18n';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

import type { FeaturedItem } from './maintenance.types';

interface Props {
  item: FeaturedItem;
  ctaLabel?: string;
}

const props = defineProps<Props>();
const resolvedCtaLabel = computed(() => props.ctaLabel ?? t('home.featuredCta'));

const downloadPdf = () => {
  const pdf = props.item.pdf;
  if (!pdf) return;

  const link = document.createElement('a');
  link.href = pdf;
  link.download = pdf.split('/').pop() ?? 'document';
  link.target = '_blank';

  document.body.appendChild(link);
  link.click();
  link.remove();
};
</script>

<template>
  <BaseCard
    class="pt-5 md:px-5 lg:px-8 lg:max-w-[352px] transition hover:-translate-y-0.5 hover:shadow-lg"
  >
    <p class="text-sm lg:font-semibold text-amBlueInnovation leading-[22px]">
      {{ props.item.category }}
    </p>

    <h3
      class="md:mt-2 text-2xl font-sans font-semibold text-amBluePremium leading-[34px] md:mb-[13px]"
    >
      {{ props.item.title }}
    </h3>

    <img
      v-if="props.item.img"
      :src="props.item.img"
      alt=""
      class="hidden md:block h-[188px] w-full rounded-md object-cover"
    />

    <p class="md:mt-5 text-sm leading-5 text-amTextGray">
      {{ props.item.text }}
    </p>

    <BaseButton
      class="mt-2 text-[11px] leading-[17px] md:mt-[19px] bg-amBlueInnovation"
      size="sm"
      @click="downloadPdf"
    >
      {{ resolvedCtaLabel }}
    </BaseButton>
  </BaseCard>
</template>
