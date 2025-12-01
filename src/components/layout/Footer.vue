<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import allyIcon from '@/assets/icons/ally.svg';
import chatIcon from '@/assets/icons/chat.svg';
import complianceIcon from '@/assets/icons/compliance.svg';
import fbIcon from '@/assets/icons/fb.svg';
import flyIcon from '@/assets/icons/fly.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import investIcon from '@/assets/icons/invest.svg';
import liIcon from '@/assets/icons/li.svg';
import pciLogo from '@/assets/icons/pci.svg';
import planeIcon from '@/assets/icons/plane.svg';
import stelasIcon from '@/assets/icons/stelas.svg';
import twitterIcon from '@/assets/icons/twitter.svg';
import youtubeIcon from '@/assets/icons/youtube.svg';
import caretDownIcon from '@/assets/icons/caret-down.svg';
import footerData from '@/data/footer.json';
import { t } from '@/utils/i18n';

type FooterLink = {
  name: string;
  labelKey: string;
  link: string;
  icon?: string;
};

type FooterColumn = {
  id: string;
  titleKey: string;
  subtitleKey?: string;
  ctaLabelKey?: string;
  socialLabelKey?: string;
  descriptionKey?: string;
  links?: FooterLink[];
};

type FooterRow = {
  titleKey: string;
  certifiedKey: string;
  links: FooterLink[];
};

type FooterContent = {
  columns: FooterColumn[];
  social: FooterLink[];
  rows: FooterRow[];
};

const content = footerData as FooterContent;

const contactColumn = content.columns.find((col) => col.id === 'contact');
const aboutColumn = content.columns.find((col) => col.id === 'about');
const discoverColumn = content.columns.find((col) => col.id === 'discover');
const footerRow = content.rows[0];

const iconMap: Record<string, string> = {
  'invest.svg': investIcon,
  'ally.svg': allyIcon,
  'compliance.svg': complianceIcon,
  'fly.svg': flyIcon,
  'plane.svg': planeIcon,
  'fb.svg': fbIcon,
  'twitter.svg': twitterIcon,
  'instagram.svg': instagramIcon,
  'li.svg': liIcon,
  'youtube.svg': youtubeIcon,
};

const mapIcon = (icon?: string) => (icon ? iconMap[icon] ?? '' : '');

const contactCopy = computed(() => ({
  title: t(contactColumn?.titleKey ?? ''),
  subtitle: t(contactColumn?.subtitleKey ?? ''),
  cta: t(contactColumn?.ctaLabelKey ?? ''),
  socialLabel: t(contactColumn?.socialLabelKey ?? ''),
}));

const aboutLinks = computed(() =>
  (aboutColumn?.links ?? []).map((link) => ({
    ...link,
    iconSrc: mapIcon(link.icon),
    label: t(link.labelKey),
  }))
);

const discoverLinks = computed(() =>
  (discoverColumn?.links ?? []).map((link) => ({
    ...link,
    label: t(link.labelKey),
  }))
);

const discoverCopy = computed(() => ({
  title: t(discoverColumn?.titleKey ?? ''),
  description: discoverColumn?.descriptionKey
    ? t(discoverColumn.descriptionKey)
    : '',
}));

const socialLinks = computed(() =>
  (content.social ?? []).map((link) => ({
    ...link,
    iconSrc: mapIcon(link.icon),
  }))
);

const bottomCopy = computed(() => ({
  title: t(footerRow?.titleKey ?? ''),
  certified: t(footerRow?.certifiedKey ?? ''),
  links:
    footerRow?.links.map((link) => ({
      ...link,
      label: t(link.labelKey),
    })) ?? [],
}));

const mobileAccordion = ref<{ about: boolean; more: boolean }>({
  about: false,
  more: false,
});

const toggleMobileSection = (section: 'about' | 'more') => {
  mobileAccordion.value[section] = !mobileAccordion.value[section];
};
</script>

<template>
  <footer class="w-full bg-amBluePremium text-white">
    <div class="relative overflow-hidden">
      <div
        class="mx-auto md:max-w-[644px] md:pt-8 md:pb-[50px] lg:max-w-[1120px] lg:px-6 lg:pb-10 lg:pt-8"
      >
        <!-- Mobile layout -->
        <div class="md:hidden px-5 pt-8 pb-7.5">
          <div class="flex flex-col">
            <div class="flex flex-col gap-3">
              <h3
                class="text-[21px] font-GarnettSemibold font-semibold leading-[100%] text-warmWhite"
              >
                {{ contactCopy.title }}
              </h3>
              <p class="text-[10px] leading-4 text-warmWhite/60">
                {{ contactCopy.subtitle }}
              </p>
              <BaseButton
                as="button"
                variant="custom"
                size="none"
                class="w-full flex cursor-pointer items-center justify-center gap-2.5 rounded bg-amBlueInnovation px-3 py-2.5 text-xs font-semibold leading-5 font-GarnettSemibold shadow-lg transition hover:brightness-110"
              >
                <img :src="chatIcon" alt="Chat" class="h-5 w-5" />
                <span>{{ contactCopy.cta }}</span>
              </BaseButton>
            </div>

            <div
              class="flex flex-col gap-2.5 border-b border-white/15 pb-8 mt-8"
            >
              <span class="text-[11px] leading-[100%] text-warmWhite">
                {{ contactCopy.socialLabel }}
              </span>
              <div class="flex items-center gap-5 text-warmWhite">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.link"
                  target="_blank"
                  rel="noreferrer"
                  :aria-label="social.name"
                >
                  <img
                    :src="social.iconSrc"
                    :alt="social.name"
                    class="h-3 w-3"
                  />
                </a>
              </div>
            </div>

            <div class="divide-y divide-white/15">
              <div class="py-4">
                <button
                  type="button"
                  class="flex w-full items-center justify-between gap-3 text-left"
                  @click="toggleMobileSection('about')"
                >
                  <span
                    class="text-xs font-GarnettSemibold font-semibold leading-[100%]"
                  >
                    {{ t(aboutColumn?.titleKey ?? '') }}
                  </span>
                  <img
                    :src="caretDownIcon"
                    :alt="t(aboutColumn?.titleKey ?? '')"
                    class="h-1.5 w-2.5 transition-transform duration-200"
                    :class="mobileAccordion.about ? 'rotate-180' : 'rotate-0'"
                  />
                </button>
                <div
                  v-if="mobileAccordion.about"
                  class="mt-4 flex flex-col gap-3 text-xs text-warmWhite/60"
                >
                  <a
                    v-for="link in aboutLinks"
                    :key="link.name"
                    class="flex items-center gap-3"
                    :href="link.link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img :src="link.iconSrc" :alt="link.label" class="h-5 w-5" />
                    <span>{{ link.label }}</span>
                  </a>
                </div>
              </div>

              <div class="py-4 border-b border-white/15">
                <button
                  type="button"
                  class="flex w-full items-center justify-between gap-3 text-left"
                  @click="toggleMobileSection('more')"
                >
                  <span
                    class="text-xs font-GarnettSemibold font-semibold leading-[100%]"
                  >
                    {{ discoverCopy.title }}
                  </span>
                  <img
                    :src="caretDownIcon"
                    :alt="discoverCopy.title"
                    class="h-1.5 w-2.5 transition-transform duration-200"
                    :class="mobileAccordion.more ? 'rotate-180' : 'rotate-0'"
                  />
                </button>
                <div
                  v-if="mobileAccordion.more"
                  class="mt-4 flex flex-col gap-3 text-xs text-warmWhite/60"
                >
                  <p class="text-xs leading-4 text-warmWhite/80">
                    {{ discoverCopy.description }}
                  </p>
                  <ul class="flex flex-col gap-2">
                    <li v-for="link in discoverLinks" :key="link.name">
                      <a
                        :href="link.link"
                        class="block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {{ link.label }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tablet layout -->
        <div class="hidden md:block lg:hidden md:pt-[24.25px]">
          <div
            class="flex md:flex-col md:justify-between md:pb-4.5 border-b border-white/15"
          >
            <div class="flex justify-between items-center">
              <h3
                class="text-[21px] font-GarnettSemibold font-semibold leading-8"
              >
                {{ contactCopy.title }}
              </h3>
              <BaseButton
                as="button"
                variant="custom"
                size="none"
                class="flex cursor-pointer items-center justify-center gap-2.5 rounded-md bg-amBlueInnovation px-3 py-2.5 text-sm font-semibold leading-5 font-GarnettSemibold shadow-lg transition hover:brightness-110"
              >
                <img :src="chatIcon" alt="Chat" class="h-5 w-5" />
                <span class="text-xs leading-5">{{ contactCopy.cta }}</span>
              </BaseButton>
            </div>
            <div class="text-[10px] leading-4 text-warmWhite/60">
              <p>{{ contactCopy.subtitle }}</p>
            </div>
          </div>

          <div
            class="mt-8 pb-8 flex items-center gap-3 text-warmWhite border-b border-white/15"
          >
            <span class="text-[11px] leading-4.5">{{ contactCopy.socialLabel }}</span>
            <div class="flex items-center gap-4.5">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.link"
                target="_blank"
                rel="noreferrer"
                :aria-label="social.name"
              >
                <img :src="social.iconSrc" :alt="social.name" class="h-3 w-3" />
              </a>
            </div>
          </div>

          <div
            class="mt-6 grid gap-8 pt-2 md:grid-cols-[0.7fr_1.3fr] md:items-start"
          >
            <div class="md:border-r md:border-white/15">
              <h3 class="text-lg font-semibold leading-7 font-GarnettSemibold">
                {{ t(aboutColumn?.titleKey ?? '') }}
              </h3>
              <ul
                class="mt-5 flex flex-col gap-1.5 text-xs leading-[17px] text-warmWhite"
              >
                <li v-for="link in aboutLinks" :key="link.name">
                  <a
                    class="flex items-center gap-3 py-[6.75px]"
                    :href="link.link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      :src="link.iconSrc"
                      :alt="link.label"
                      class="h-[25px] w-[25px]"
                    />
                    <span>{{ link.label }}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                class="text-[11px] pt-[7px] font-GarnettSemibold font-semibold leading-[100%]"
              >
                {{ discoverCopy.title }}
              </h3>
              <ul
                class="mt-2 flex flex-col gap-3 text-[11px] text-warmWhite md:mt-3 py-[5px] leading-4"
              >
                <li v-for="link in discoverLinks" :key="link.name">
                  <a
                    :href="link.link"
                    class="block py-[5px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Desktop layout -->
        <div class="hidden lg:block">
          <div class="grid w-full grid-cols-[30%_25%_40%] gap-8 pt-2">
            <div class="border-r border-white/15 pr-10">
              <h3 class="text-lg font-semibold leading-7 font-GarnettSemibold">
                {{ contactCopy.title }}
              </h3>
              <p class="mt-2.5 text-[10px] leading-4 text-warmWhite/60">
                {{ contactCopy.subtitle }}
              </p>
              <BaseButton
                as="button"
                variant="custom"
                size="none"
                class="mt-5 flex cursor-pointer items-center justify-center gap-2.5 rounded-md bg-amBlueInnovation px-4.5 py-5 text-sm font-semibold leading-5 font-GarnettSemibold shadow-lg transition hover:brightness-110"
              >
                <img :src="chatIcon" alt="Chat" class="h-5 w-5" />
                <span>{{ contactCopy.cta }}</span>
              </BaseButton>

              <div class="mt-[30.5px] flex flex-col gap-2.5 text-warmWhite">
                <span class="text-xs font-normal leading-4.5">{{
                  contactCopy.socialLabel
                }}</span>
                <div class="flex items-center gap-5 text-lg">
                  <a
                    v-for="social in socialLinks"
                    :key="social.name"
                    :href="social.link"
                    target="_blank"
                    rel="noreferrer"
                    :aria-label="social.name"
                  >
                    <img :src="social.iconSrc" :alt="social.name" />
                  </a>
                </div>
              </div>
            </div>

            <div class="border-r border-white/15">
              <h3
                class="mb-5 text-lg font-semibold leading-7 font-GarnettSemibold"
              >
                {{ t(aboutColumn?.titleKey ?? '') }}
              </h3>
              <ul
                class="flex flex-col gap-3 text-xs leading-4.5 text-warmWhite"
              >
                <li v-for="link in aboutLinks" :key="link.name">
                  <a
                    class="flex items-center gap-3"
                    :href="link.link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      :src="link.iconSrc"
                      :alt="link.label"
                      class="h-[25px] w-[25px]"
                    />
                    <span>{{ link.label }}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                class="mb-5 text-lg font-semibold leading-7 font-GarnettSemibold"
              >
                {{ discoverCopy.title }}
              </h3>
              <ul
                class="flex flex-col gap-2 text-[10px] leading-4 text-warmWhite"
              >
                <li v-for="link in discoverLinks" :key="link.name">
                  <a
                    :href="link.link"
                    class="block py-1.5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>

            <div />
          </div>
        </div>
      </div>

      <div class="hidden md:flex md:flex-col absolute right-0 top-0 lg:h-full">
        <img
          :src="stelasIcon"
          alt="Estelas decorativas"
          class="pointer-events- lg:h-full w-[18px] object-cover md:w-[26px]"
        />
        <img
          :src="stelasIcon"
          alt="Estelas decorativas"
          class="pointer-events- lg:hidden w-[18px] object-cover md:w-[26px]"
        />
        <img
          :src="stelasIcon"
          alt="Estelas decorativas"
          class="pointer-events- lg:hidden w-[18px] object-cover md:w-[26px]"
        />
      </div>
    </div>

    <div
      class="border-t border-white/15 pt-2.5 md:py-[22px] text-[10px] leading-4 text-warmWhite"
    >
      <div
        class="mx-auto flex md:max-w-[644px] max-w-[1120px] flex-col items-center justify-between gap-3 lg:px-6 md:flex-row"
      >
        <p class="hidden md:block md:text-left">
          {{ bottomCopy.title }}
          <span v-for="(link, idx) in bottomCopy.links" :key="link.name">
            <span v-if="idx === 0"> | </span>
            <a
              :href="link.link"
              class="underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
            <span v-if="idx < bottomCopy.links.length - 1"> | </span>
          </span>
        </p>
        <div class="text-center leading-6.5 text-warmWhite md:hidden">
          <p>{{ bottomCopy.title }}</p>
          <p>
            <template v-for="(link, idx) in bottomCopy.links" :key="link.name">
              <a
                :href="link.link"
                class="underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {{ link.label }}
              </a>
              <span v-if="idx < bottomCopy.links.length - 1"> | </span>
            </template>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span>{{ bottomCopy.certified }}</span>
          <img :src="pciLogo" alt="PCI" class="h-6.5 w-6.5" />
        </div>
      </div>
    </div>
  </footer>
</template>
