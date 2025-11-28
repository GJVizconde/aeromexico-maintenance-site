<script setup lang="ts">
import airplaneImg from '@/assets/images/airplane.png';
import stelasIcon from '@/assets/icons/stelas.svg';
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<template>
  <!-- Hero -->
  <section class="relative flex items-center">
    <img
      class="h-[314px] w-full object-cover object-center"
      :src="airplaneImg"
      alt="Plane"
    />

    <div
      class="flex absolute md:left-[62px] lg:left-20 top-5 md:max-w-[378px] lg:max-w-[514px] rounded-sm bg-amBluePremium text-white shadow-2xl"
    >
      <div class="pl-[34px] py-5 md:pr-2 lg:pr-0">
        <h2 class="md:text-lg lg:text-sm font-GarnettSemibold font-semibold">
          Servicio no disponible
        </h2>

        <h3
          class="mt-5 md:text-[28px] lg:text-4xl font-GarnettSemibold font-semibold leading-tight"
        >
          Sitio en mantenimiento
        </h3>

        <p class="md:mt-[15px] lg:mt-5 text-base">
          Te sugerimos llamar a Global Support o escribirnos por el chat.
        </p>

        <BaseButton
          class="hidden md:hidden lg:block lg:mt-5"
          variant="primary"
          size="lg"
        >
          Chat Aeroméxico
        </BaseButton>

        <BaseButton class="hidden lg:hidden mt-[15px] py-3" variant="primary">
          Chat Aeroméxico
        </BaseButton>
      </div>

      <img :src="stelasIcon" alt="estelas" class="relative h-full" />
    </div>
  </section>
</template>
