<script setup lang="ts">
import { ref } from 'vue';

import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import Hero from './Hero.vue';
import Featured from './Featured.vue';
import Categories from './Categories.vue';
import Support from './Support.vue';
import MaintenanceModal from './MaintenanceModal.vue';

import {
  NAV_ITEMS,
  FEATURED_ITEMS,
  CATEGORY_ITEMS,
  SUPPORT_ITEMS,
} from './maintenance.data';

const isMaintenanceOpen = ref(false);

const openMaintenanceModal = () => {
  isMaintenanceOpen.value = true;
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-1 w-full overflow-hidden shadow-2xl">
      <Header :nav-items="NAV_ITEMS" @open-maintenance="openMaintenanceModal" />

      <Hero @open-maintenance="openMaintenanceModal" />

      <section class="mx-auto">
        <Featured :items="FEATURED_ITEMS" />
        <Categories :items="CATEGORY_ITEMS" />
        <Support :items="SUPPORT_ITEMS" />
      </section>
    </main>

    <Footer @open-maintenance="openMaintenanceModal" />

    <MaintenanceModal v-model="isMaintenanceOpen" />
  </div>
</template>
