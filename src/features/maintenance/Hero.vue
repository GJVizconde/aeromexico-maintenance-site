<script setup lang="ts">
import airplaneImg from '@/assets/images/airplane.png'
import stelasIcon from '@/assets/icons/stelas.svg'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
    <!-- Hero -->
    <section class="relative flex items-center">
        <img class="h-[314px] w-full object-cover object-center" :src="airplaneImg" alt="Plane" />

        <div class="flex absolute left-20 top-5 max-w-[514px] rounded-sm bg-amBluePremium text-white shadow-2xl">
            <div class="pl-[34px] py-5">
                <h2 class="text-sm font-GarnettSemibold font-semibold">Servicio no disponible</h2>

                <h3 class="mt-5 text-4xl font-GarnettSemibold font-semibold leading-tight">
                    Sitio en mantenimiento
                </h3>

                <p class="mt-5 text-base">
                    Te sugerimos llamar a Global Support o escribirnos por el chat.
                </p>

                <BaseButton class="mt-5" variant="primary" size="lg">
                    Chat Aeroméxico
                </BaseButton>
            </div>

            <img :src="stelasIcon" alt="estelas" />
        </div>
    </section>
</template>
