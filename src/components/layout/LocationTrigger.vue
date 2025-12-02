<script setup lang="ts">
interface Props {
  userLocation: string;
  lang: string;
  isModalOpen: boolean;
  flag: string;
}

const { userLocation, lang, isModalOpen, flag } = withDefaults(
  defineProps<Props>(),
  {
    userLocation: '',
    lang: '',
    isModalOpen: false,
    flag: '',
  }
);

const handleSelectLocation = () => {
  console.log('handleSelectLocation');
};
</script>

<template>
  <div
    v-if="userLocation"
    class="hidden md:flex text-white text-[14px] space-x-2 py-[7px] px-2.5 items-center w-[90px] cursor-pointer select-none rounded hover:bg-[#FFFFFF26]"
    @click="handleSelectLocation"
  >
    <img :src="flag" alt="" width="16" height="16" class="min-w-4 min-h-4" />
    <div class="text-xs cursor-pointer font-semibold uppercase tracking-wider">
      {{ lang }}
    </div>

    <img
      class=""
      :src="`/images/newIconography/${
        isModalOpen ? 'Vectorarrow' : 'caret-down'
      }.svg`"
      alt="search"
      width="12"
      height="12"
    />
  </div>
</template>
