<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { locationsData, suggestedLocations } from '@/data/locations';
import { useUserPreferencesStore } from '@/stores/userPreferences';
import { t } from '@/utils/i18n';
import LocationCard from '../ui/LocationCard.vue';

import blueWorldIcon from '@/assets/icons/blue-world.svg';
import navigationCloseIcon from '@/assets/icons/navigation-close.svg';

const props = defineProps<{
  isOpen: boolean;
  onClose: () => void;
}>();

const isOpen = computed(() => props.isOpen);
const handleClose = () => props.onClose?.();

const emit = defineEmits<{
  (event: 'locationEvent', location: string): void;
}>();

const preferences = useUserPreferencesStore();
const { language } = storeToRefs(preferences);

const suggestions = suggestedLocations;
const selectedLocation = ref('');

watch(
  isOpen,
  (open) => {
    if (open) {
      selectedLocation.value = language.value?.location ?? '';
    }
  },
  { immediate: true }
);

const changeLocation = (codeLocation: string) => {
  const langCode = codeLocation.split('-')[1] ?? codeLocation;

  preferences.setLanguageByCode(langCode);
  selectedLocation.value = language.value?.location ?? codeLocation;

  emit('locationEvent', codeLocation);
  handleClose();
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-gray-800/50 z-50"
  >
    <div class="bg-white rounded-lg shadow-lg w-full max-w-[704px] h-auto">
      <header
        class="h-[88px] flex justify-between items-center px-8 border-b border-amUltraLightGray relative z-10"
      >
        <div class="flex gap-4 items-center">
          <img class="h-[31.5px] w-[31.5px]" :src="blueWorldIcon" alt="" />
          <h3 class="text-[28px] font-GarnettSemibold">
            {{ t('navbar.lang.title') }}
          </h3>
        </div>
        <img
          class="cursor-pointer"
          @click="handleClose"
          :src="navigationCloseIcon"
          alt=""
        />
      </header>

      <div
        class="flex flex-col gap-[35px] px-8 pb-8 pt-8 h-[304px] overflow-auto relative z-0"
      >
        <div class="flex flex-col gap-2.5">
          <h4 class="text-lg">
            {{ t('navbar.lang.suggested') }}
          </h4>
          <section class="grid grid-cols-3 gap-x-8 gap-y-3.5">
            <div v-for="suggestion in suggestions" :key="suggestion.code">
              <LocationCard
                :code="suggestion.code"
                :name="suggestion.name"
                :flag="suggestion.flag"
                :language="suggestion?.languages[0]"
                :isSelected="selectedLocation === suggestion.code"
                :card="true"
                @click="() => changeLocation(suggestion.code)"
              />
            </div>
          </section>
        </div>

        <div class="flex flex-col gap-5">
          <h4 class="text-lg">
            {{ t('navbar.lang.all') }}
          </h4>
          <section class="grid grid-cols-3 gap-x-8 gap-y-3.5">
            <div v-for="location in locationsData" :key="location.code">
              <LocationCard
                :code="location.code"
                :name="location.name"
                :flag="location.flag"
                :language="location?.languages[0]"
                :isSelected="selectedLocation === location.code"
                :card="true"
                @click="() => changeLocation(location.code)"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
