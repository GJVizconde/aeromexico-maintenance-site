<script setup lang="ts">
import stelasMobileIcon from '@/assets/icons/stelas-mobile.svg';
import { t } from '@/utils/i18n';
import type { SupportItem } from './maintenance.types';

interface Props {
  item: SupportItem;
  isEven?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isEven: false,
});
</script>

<template>
  <article
    class="group relative shrink-0 overflow-hidden rounded-sm shadow-lg snap-start md:shrink-0 lg:min-w-0 lg:max-w-none"
  >
    <img
      :src="props.item.img"
      alt=""
      class="h-[382px] w-[256px] md:w-[259px] lg:w-full object-cover transition duration-500 group-hover:scale-105"
    />

    <div class="pointer-events-none absolute inset-0" />

    <div class="absolute left-[15px] right-[15px] bottom-[15px]">
      <div
        :class="[
          'flex items-start justify-between max-w-[229px] lg:w-full rounded-sm pl-4 py-[15px] shadow-lg min-h-[150px]',
          props.isEven
            ? 'bg-white text-amBluePremium'
            : 'bg-amBluePremium text-white',
        ]"
      >
        <div>
          <h3
            :class="[
              'text-[22px] font-sans font-semibold',
              props.isEven ? 'text-amBluePremium' : 'text-white',
            ]"
          >
            {{ props.item.title }}
          </h3>

          <p
            :class="[
              'mt-2.5 text-sm leading-5',
              props.isEven ? 'text-amBluePremium' : 'text-white',
            ]"
          >
            {{ props.item.text }}
          </p>
        </div>

        <div class="mt-1 w-auto shrink-0">
          <img
            :src="stelasMobileIcon"
            :alt="t('accessibility.alt.decorative-trails')"
          />
          <img
            :src="stelasMobileIcon"
            class="mt-1"
            :alt="t('accessibility.alt.decorative-trails')"
          />
        </div>
      </div>
    </div>
  </article>
</template>
