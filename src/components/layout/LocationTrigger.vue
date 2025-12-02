<script setup lang="ts">
import { toRefs } from 'vue';
import vectorArrowIcon from '@/assets/icons/vector-arrow.svg';
import caretDownIcon from '@/assets/icons/caret-down.svg';

interface Props {
  userLocation: string;
  lang: string;
  isModalLangOpen: boolean;
  flag: string;
}

const props = withDefaults(defineProps<Props>(), {
  userLocation: '',
  lang: '',
  isModalLangOpen: false,
  flag: '',
});

const { userLocation, lang, isModalLangOpen, flag } = toRefs(props);

const emit = defineEmits<{
  (event: 'open-lang-modal'): void;
}>();

const handleSelectLocation = () => {
  emit('open-lang-modal');
};
</script>

<template>
  <div
    v-if="userLocation"
    class="hidden md:flex text-white text-[14px] space-x-2 py-[7px] pl-2.5 items-center w-[90px] cursor-pointer select-none rounded hover:bg-[#FFFFFF26]"
    @click="handleSelectLocation"
  >
    <img :src="flag" alt="" class="w-4 h-4" />
    <div
      class="text-xs cursor-pointer font-GarnettSemibold font-semibold uppercase tracking-wider"
    >
      {{ lang }}
    </div>

    <img
      class="w-3 h-3"
      :src="isModalLangOpen ? vectorArrowIcon : caretDownIcon"
      alt="search"
    />
  </div>
</template>
