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
          <a
            class="cursor-pointer p-4 text-[#020C41] hover:text-amTextGray no-underline text-lg flex flex-start text-left w-full font-GarnettSemibold"
            :href="value.link"
          >
            {{ value.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
