<script setup>
import { computed } from 'vue';

const { code, name, language, flag, isSelected, card, hover } = defineProps({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  language: {
    type: Object,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    required: true,
  },
  card: {
    type: Boolean,
  },
  hover: {
    type: Boolean,
  },
});

const classModal = computed(() => ({
  [`bg-[#48A83E0D] border-amGreen border-t`]: isSelected === true,
  [`bg-[#fff] border-amNewLighterGray`]: !isSelected,
}));

const classWith = computed(() => ({
  [`w-[192px] rounded border`]: card,
  [`w-full border-b `]: !card,
}));

const classHover = computed(() => ({
  [`bg-[#F2F8FC] border-amNewLighterGray`]: hover === true,
}));
</script>

<template>
  <article
    :class="[
      classModal,
      classWith,
      classHover,
      ` ${hover ? ' bg-slate-100 border border-amNewLighterGray ' : 'hover:bg-[#F2F8FC] hover:border-amNewLighterGray'}group  py-2.5 px-3.5 h-[60px] text-sm  cursor-pointer select-none`,
    ]"
  >
    <div class="flex gap-3.5 items-center">
      <img
        class="h-[30px] w-[30px] rounded-full flex justify-center"
        :src="flag"
        alt=""
      />

      <div>
        <div
          class="text-amBluePremium leading-5 font-GarnettRegular font-semibold group-hover:text-[#0074B8]"
        >
          {{ name }}
        </div>
        <div class="text-amDarkGray leading-5 font-medium">
          {{ language?.label_menu }}
        </div>
      </div>
    </div>
  </article>
</template>
