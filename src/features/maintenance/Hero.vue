<script setup lang="ts">
import airplaneImg from '@/assets/images/airplane.png';
import stelasIcon from '@/assets/icons/stelas.svg';
import BaseButton from '@/components/ui/BaseButton.vue';
import stelasMobileIcon from '@/assets/icons/stelasMobile.svg';
</script>

<template>
  <!-- Hero -->
  <section class="relative flex items-center">
    <img
      class="h-[214px] md:h-[314px] w-full object-cover object-center"
      :src="airplaneImg"
      alt="Plane"
    />

    <div class="absolute left-5 top-5 md:left-[62px] lg:left-20 md:top-5 z-10">
      <div
        class="relative flex max-w-[197px] h-[174px] md:h-auto md:max-w-[378px] lg:max-w-[514px] rounded-sm bg-amBluePremium text-white shadow-2xl"
      >
        <div class="px-5 md:px-0 md:pl-[34px] py-2.5 md:py-5 md:pr-2 lg:pr-0">
          <h2
            class="leading-[19px] text-[8px] md:text-lg lg:text-sm font-GarnettSemibold font-semibold"
          >
            Servicio no disponible
          </h2>

          <h3
            class="my-2.5 md:mt-5 text-xs md:text-[28px] lg:text-4xl font-GarnettSemibold font-semibold leading-4.5 md:leading-tight"
          >
            Sitio en mantenimiento
          </h3>

          <p class="text-[10px] md:mt-[15px] lg:mt-5 lg:text-base">
            Te sugerimos llamar a Global Support o escribirnos por el chat.
          </p>

          <BaseButton
            class="hidden md:hidden lg:block lg:mt-5"
            variant="primary"
            size="lg"
          >
            Chat Aeroméxico
          </BaseButton>

          <BaseButton
            class="inline-flex text-[11px] lg:hidden mt-4 md:mt-[15px] py-[6.5px] w-full md:w-auto"
            variant="primary"
          >
            Chat Aeroméxico
          </BaseButton>
        </div>

        <img
          :src="stelasMobileIcon"
          alt="estelas"
          class="absolute right-0 top-2.5 w-8 md:hidden"
        />
        <img
          :src="stelasIcon"
          alt="estelas"
          class="relative hidden md:block h-full"
        />
      </div>
    </div>
  </section>
</template>
