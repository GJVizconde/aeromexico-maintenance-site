<script setup lang="ts">
import unpluggedImg from '@/assets/images/unplugged.webp';
import modalCloseIcon from '@/assets/icons/modal-close.svg';
import { t } from '@/utils/i18n';

interface Props {
  modelValue: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const close = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <!-- Modal de mantenimiento -->
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
    @click.self="close"
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="maintenance-title"
      aria-describedby="maintenance-description"
      class="relative w-full max-w-[580px] rounded-lg bg-white shadow-[0_3px_2px_rgba(0,0,0,0.03)] border border-[#BFBFBD] max-h-screen overflow-auto"
    >
      <!-- close -->
      <button
        type="button"
        class="absolute right-6 top-6 text-amBluePremium hover:text-black text-2xl cursor-pointer"
        @click="close"
        :aria-label="t('maintenance-modal.close')"
      >
        <img :src="modalCloseIcon" class="h-6 w-6" alt="" />
      </button>

      <div
        class="flex flex-col items-center px-10 pt-12 pb-10 text-amBluePremium text-[18px] leading-6.5"
      >
        <img :src="unpluggedImg" alt="" class="mb-6 h-[114px] w-[114px]" />

        <!-- Title -->
        <h2
          id="maintenance-title"
          class="mb-10 text-2xl font-GarnettSemibold text-heroBlue text-center"
        >
          {{ t('maintenance-modal.title') }}
        </h2>

        <div id="maintenance-description" class="space-y-5">
          <p>{{ t('maintenance-modal.intro') }}</p>
          <p>{{ t('maintenance-modal.body-1') }}</p>
          <p>{{ t('maintenance-modal.body-2') }}</p>
        </div>

        <section class="mt-6 w-full space-y-6">
          <p class="mb-4 font-GarnettSemibold font-semibold">
            {{ t('maintenance-modal.help-title') }}
          </p>

          <p>{{ t('maintenance-modal.help-body') }}</p>

          <ul class="list-disc pl-8 space-y-5 text-left">
            <li>
              <span class="font-semibold">
                {{ t('maintenance-modal.global-support-title') }}
              </span>
              {{ t('maintenance-modal.global-support-body') }}
            </li>

            <li>
              <span class="font-semibold">
                {{ t('maintenance-modal.chat-title') }}
              </span>
              {{ t('maintenance-modal.chat-body') }}
            </li>
          </ul>
        </section>

        <!-- Last Message -->
        <div class="mt-6">
          <p>{{ t('maintenance-modal.thanks-1') }}</p>
          <p>{{ t('maintenance-modal.thanks-2') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
