<script setup lang="ts">
import vectorArrowIcon from '@/assets/icons/vector-arrow.svg';
import caretDownBlueIcon from '@/assets/icons/caret-down-blue.svg';
import LocationCard from '../ui/LocationCard.vue';
import type { LocationData } from '@/data/locations';
import { t } from '@/utils/i18n';

defineProps<{
  suggestions: LocationData[];
  currentLocation: string;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (event: 'toggle'): void;
  (event: 'changeCountry', code: string): void;
}>();
</script>

<template>
  <div class="text-amBluePremium">
    <div
      class="flex w-full h-[60px] justify-between items-center px-5 cursor-pointer border-b border-amUltraLightGray"
      @click="emit('toggle')"
    >
      <span
        class="text-amBluePremium font-GarnettSemibold font-semibold text-xs tracking-widest uppercase"
        >{{ t('navbar.lang.suggested') }}</span
      >

      <img
        :src="isOpen ? vectorArrowIcon : caretDownBlueIcon"
        alt=""
        class="w-3 h-3 select-none"
      />
    </div>

    <div v-if="isOpen" class="overflow-y-auto flex-1">
      <div v-for="suggestion in suggestions" :key="suggestion.code">
        <LocationCard
          :code="suggestion.code"
          :name="suggestion.name"
          :flag="suggestion.flag"
          :language="suggestion?.languages[0]"
          :isSelected="currentLocation === suggestion.code"
          @click="() => emit('changeCountry', suggestion.code)"
        />
      </div>
    </div>
  </div>
</template>
