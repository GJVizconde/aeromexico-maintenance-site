<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import blueArrowRightIcon from '@/assets/icons/blue-arrow-right.svg';
import { getLocaleFlag } from '@/data/localeFlags';
import { useUserPreferencesStore } from '@/stores/userPreferences';
import { t } from '@/utils/i18n';

const preferences = useUserPreferencesStore();
const { language } = storeToRefs(preferences);

const { main } = defineProps({
  main: {
    type: Boolean,
  },
});

const flag = computed(() => getLocaleFlag(language.value.code));
</script>

<template>
  <div
    class="flex h-[60px] w-full border-b cursor-pointer border-amUltraLightGray"
  >
    <div v-if="main" class="flex px-5 justify-between items-center w-full">
      <div class="flex gap-2.5 items-center justify-center">
        <img
          class="w-[25px] h-[25px]"
          :src="flag"
          :alt="t('accessibility.alt.flag')"
        />
        <span class="text-base font-medium text-amBluePremium">{{
          language.name
        }}</span>
      </div>
      <img class="w-5 h-5" :src="blueArrowRightIcon" alt="" />
    </div>

    <div v-else class="flex px-5 justify-between items-center w-full">
      <div class="flex gap-3 items-center">
        <img
          class="w-[19px] h-[15px] rotate-180"
          :src="blueArrowRightIcon"
          alt=""
        />
        <span
          class="text-lg font-sans font-semibold text-amBluePremium tracking-wider"
          >{{ t('navbar.lang.location-language') }}</span
        >
      </div>
    </div>
  </div>
</template>
