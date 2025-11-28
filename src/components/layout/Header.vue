<script setup lang="ts">
import aeromexicoLogo from '@/assets/icons/new_aeromexico_business.svg';
import amHeadLogo from '@/assets/icons/amHead.svg';
import burgerIcon from '@/assets/icons/burger.svg';

interface Props {
  navItems: string[];
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'open-maintenance'): void;
}>();
</script>

<template>
  <header
    class="flex items-center justify-between bg-amBluePremium h-[60px] px-6 text-white text-xs font-semibold"
  >
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
              class="rounded py-1.5 px-2.5 leading-[18px] hover:bg-searchBorder cursor-pointer"
              @click="emit('open-maintenance')"
            >
              {{ item }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <button type="button" class="md:hidden">
      <img :src="burgerIcon" alt="" />
    </button>
  </header>
</template>
