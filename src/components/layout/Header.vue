<script setup lang="ts">
import aeromexicoLogo from '@/assets/icons/new-aeromexico-business.svg';
import amHeadLogo from '@/assets/icons/am-head.svg';
import burgerIcon from '@/assets/icons/burger.svg';
import closeWhiteIcon from '@/assets/icons/close-white.svg';
import { computed, onUnmounted, ref, watch } from 'vue';
import MainMobileMenu from './MainMobileMenu.vue';
import LocationTrigger from './LocationTrigger.vue';
import LocationModal from './LocationModal.vue';
import { useUserPreferencesStore } from '@/stores/userPreferences';
import { storeToRefs } from 'pinia';
import { getLocaleFlag } from '@/data/localeFlags';
import MobileSelectLocation from './MobileSelectLocation.vue';
import LocationMobileMenu from './LocationMobileMenu.vue';
import { locationsData, suggestedLocations } from '@/data/locations';
import { t } from '@/utils/i18n';

interface Props {
  navItems: string[];
}

defineProps<Props>();

const isMobileMenuOpen = ref(false);
const isMainMobileMenu = ref(true);

const emit = defineEmits<{
  (event: 'open-maintenance'): void;
  (event: 'open-mobile-menu', isOpen: boolean): void;
}>();

const updateBodyScroll = (isOpen: boolean) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

const isModalOpen = ref(false);

const userPreferences = useUserPreferencesStore();
const { language, languageCode } = storeToRefs(userPreferences);

const flagSrc = computed(() => getLocaleFlag(languageCode.value));
const newLocationsData = locationsData;
const suggestions = suggestedLocations;

watch(
  isMobileMenuOpen,
  (isOpen) => {
    updateBodyScroll(isOpen);
  },
  { immediate: true }
);

onUnmounted(() => {
  updateBodyScroll(false);
});

const handleOpenMaintenance = () => {
  isMobileMenuOpen.value = false;
  emit('open-mobile-menu', isMobileMenuOpen.value);
  emit('open-maintenance');
};

const handleMobileMenu = () => {
  isMainMobileMenu.value = true;
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  emit('open-mobile-menu', isMobileMenuOpen.value);
};

const handleOpenLangModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const handleCloseLangModal = () => {
  isModalOpen.value = false;
};

const handleSelectMenu = () => {
  isMainMobileMenu.value = !isMainMobileMenu.value;
};

const handleMobileLocation = () => {
  isMainMobileMenu.value = true;
};

const handleSideBar = () => {
  isMobileMenuOpen.value = false;
  isMainMobileMenu.value = true;
  emit('open-mobile-menu', isMobileMenuOpen.value);
};

const handleLocation = () => {
  handleSideBar();
};
</script>

<template>
  <header
    class="flex items-center justify-between bg-amBluePremium h-[60px] pl-[15px] md:px-2 text-white text-xs font-semibold"
  >
    <div class="flex flex-1 items-center justify-between">
      <div class="flex items-center justify-center">
        <a href="/">
          <img
            class="hidden lg:block object-center w-[150px] mr-[9px]"
            :src="aeromexicoLogo"
            :alt="t('accessibility.alt.brand')"
          />
          <img
            class="lg:hidden object-center w-[30px] h-[22.91px] mr-[27px]"
            :src="amHeadLogo"
            :alt="t('accessibility.alt.brand')"
          />
        </a>
        <nav
          class="hidden items-center md:flex"
          :aria-label="t('accessibility.aria.main-navigation')"
        >
          <ul class="flex gap-1">
            <li v-for="item in navItems" :key="item">
              <button
                type="button"
                class="rounded py-1.5 px-2.5 leading-[18px] hover:bg-searchBorder cursor-pointer font-sans font-semibold"
                @click="handleOpenMaintenance"
              >
                {{ item }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex items-center h-full border-l border-white/15">
      <LocationTrigger
        class="hidden md:block ml-[15px]"
        :user-location="language.location"
        :lang="languageCode"
        :is-modal-lang-open="isModalOpen"
        @open-lang-modal="handleOpenLangModal"
        :flag="flagSrc"
      />
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
    class="fixed top-[60px] right-0 h-full bg-white text-white transition-transform duration-700 z-50 md:hidden overflow-y-auto"
    style="width: 100%"
  >
    <MobileSelectLocation :main="isMainMobileMenu" @click="handleSelectMenu" />
    <MainMobileMenu
      v-if="isMainMobileMenu"
      @open-maintenance="handleOpenMaintenance"
    />
    <LocationMobileMenu
      v-if="!isMainMobileMenu"
      @showSelectMobileMenu="handleMobileLocation"
      :locationsData="newLocationsData"
      :suggestions="suggestions"
      @locationEvent="handleLocation"
      :onClose="handleSideBar"
    />
  </div>

  <LocationModal :is-open="isModalOpen" :on-close="handleCloseLangModal" />
</template>
