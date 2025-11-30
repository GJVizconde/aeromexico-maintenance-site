<script setup lang="ts">
import aeromexicoLogo from '@/assets/icons/new-aeromexico-business.svg';
import amHeadLogo from '@/assets/icons/am-head.svg';
import burgerIcon from '@/assets/icons/burger.svg';
import closeWhiteIcon from '@/assets/icons/close-white.svg';
import { ref } from 'vue';
import MainMobileMenu from './MainMobileMenu.vue';

interface Props {
  navItems: string[];
}

defineProps<Props>();

const isMobileMenuOpen = ref(false);

const emit = defineEmits<{
  (event: 'open-maintenance'): void;
  (event: 'open-mobile-menu', isOpen: boolean): void;
}>();

const handleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  console.log('isModalMenuOpen.value', isMobileMenuOpen.value);
  emit('open-mobile-menu', isMobileMenuOpen.value);
};
</script>

<template>
  <header
    class="flex items-center justify-between bg-amBluePremium h-[60px] pl-[15px] md:px-6 text-white text-xs font-semibold"
  >
    <div class="flex flex-1 items-center justify-between">
      <div class="flex items-center justify-center">
        <a href="/">
          <img
            class="hidden lg:block object-center w-[150px] mr-[9px]"
            :src="aeromexicoLogo"
            alt="Aeromexico Business"
          />
          <img
            class="lg:hidden object-center w-[30px] h-[22.91px] mr-[27px]"
            :src="amHeadLogo"
            alt="Aeromexico Business"
          />
        </a>
        <nav
          class="hidden items-center md:flex"
          aria-label="Navegación principal"
        >
          <ul class="flex gap-1">
            <li v-for="item in navItems" :key="item">
              <button
                type="button"
                class="rounded py-1.5 px-2.5 leading-[18px] hover:bg-searchBorder cursor-pointer font-GarnettSemibold font-semibold"
                @click="emit('open-maintenance')"
              >
                {{ item }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex items-center h-full border-l border-white/15">
      <button
        type="button"
        class="md:hidden cursor-pointer h-full flex items-center justify-center px-[15px] ml-[15px] shrink-0"
        :class="{
          'bg-amMediumBlue': isMobileMenuOpen,
          'bg-amBluePremium': !isMobileMenuOpen,
        }"
        @click="handleMobileMenu"
      >
        <img
          :src="isMobileMenuOpen ? closeWhiteIcon : burgerIcon"
          alt=""
          class="h-[30px] w-[30px] shrink-0"
        />
      </button>
    </div>
  </header>

  <div
    :style="{
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(130%)',
    }"
    class="fixed top-[60px] right-0 h-full bg-white text-white transition-transform duration-700 z-50 md:hidden"
    style="width: 100%"
  >
    <MainMobileMenu v-if="isMobileMenuOpen" />
  </div>
</template>
