<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

import SuggestionsAccordion from './SuggestionsAccordion.vue';
import LocationCard from '../ui/LocationCard.vue';
import {
  locationsData as defaultLocations,
  suggestedLocations,
  type LocationData,
} from '@/data/locations';
import { useUserPreferencesStore } from '@/stores/userPreferences';
import { t } from '@/utils/i18n';

const props = defineProps<{
  onClose: () => void;
  locationsData?: LocationData[];
  suggestions?: LocationData[];
}>();

const emit = defineEmits<{
  (event: 'showSelectMobileMenu'): void;
  (event: 'locationEvent', location: string): void;
}>();

const preferences = useUserPreferencesStore();
const { language } = storeToRefs(preferences);

const isSuggestionsOpen = ref(false);
const isChangingLocation = ref(false);

const locations = computed(
  () => props.locationsData ?? (defaultLocations as LocationData[])
);
const suggestions = computed(
  () => props.suggestions ?? (suggestedLocations as LocationData[])
);
const currentLocation = computed(
  () => language.value?.location ?? language.value?.code ?? ''
);

const changeLocation = async (codeLocation: string) => {
  if (isChangingLocation.value) return;

  if (currentLocation.value === codeLocation) {
    emit('locationEvent', codeLocation);
    props.onClose?.();
    return;
  }

  isChangingLocation.value = true;

  try {
    const lang = codeLocation.split('-')[1] ?? codeLocation;
    preferences.setLanguageByCode(lang);
    emit('locationEvent', codeLocation);
  } finally {
    isChangingLocation.value = false;
    props.onClose?.();
  }
};

const toggleAccordion = () => {
  isSuggestionsOpen.value = !isSuggestionsOpen.value;
};
</script>

<template>
  <div class="flex flex-col overflow-y-auto h-screen">
    <SuggestionsAccordion
      :suggestions="suggestions"
      :current-location="currentLocation"
      :is-open="isSuggestionsOpen"
      @toggle="toggleAccordion"
      @changeCountry="changeLocation"
    />

    <div
      class="flex w-full h-[60px] items-center px-5 text-amBluePremium font-GarnettSemibold font-semibold text-xs tracking-widest shrink-0"
    >
      {{ t('navbar.lang.all') }}
    </div>

    <div v-for="location in locations" :key="location.code" class="shrink-0">
      <LocationCard
        :code="location.code"
        :name="location.name"
        :flag="location.flag"
        :language="location.languages[0]"
        :isSelected="currentLocation === location.code"
        @click="() => changeLocation(location.code)"
      />
    </div>
  </div>
</template>
