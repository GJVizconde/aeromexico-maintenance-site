<script setup lang="ts">
import navigationLinks from '@/data/navigationLinks.json';
import { t } from '@/utils/i18n';

type NavigationLink = {
  name: string;
  label: string;
  link: string;
};

const links = (navigationLinks as NavigationLink[]).map((item) => ({
  ...item,
  text: t(item.label),
}));

const emit = defineEmits<{
  (event: 'open-maintenance'): void;
}>();

const handleLinkClick = () => {
  emit('open-maintenance');
};

// const currentPath =
//   typeof window !== 'undefined' ? window.location.pathname : '';

// const isActive = (href: string) => {
//   if (!currentPath) return false;
//   return href === '/' ? currentPath === '/' : currentPath.startsWith(href);
// };
</script>

<template>
  <div class="text-amDarkGray text-[14px]">
    <div
      class="flex items-center px-5 h-[50px] tracking-wider text-xs text-amBlueInnovation"
    >
      {{ t('navbar.side.main-menu') }}
    </div>
    <div class="flex px-5 flex-col">
      <div class="border-t border-b">
        <div
          class="flex w-full gap-[15px] font-extrabold text-amBluePremium no-underline"
          v-for="value in links"
          :key="value.name"
        >
          <button
            type="button"
            class="cursor-pointer p-4 text-[#020C41] hover:text-amTextGray no-underline text-lg flex flex-start text-left w-full font-GarnettSemibold bg-transparent border-0 text-start"
            @click="handleLinkClick"
          >
            {{ value.text }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
