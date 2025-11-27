<script setup lang="ts">
import stelasMobileIcon from '@/assets/icons/stelasMobile.svg'
import type { SupportItem } from './maintenance.types'

interface Props {
    items: SupportItem[]
}

defineProps<Props>()
</script>

<template>
    <!-- Support -->
    <section class="py-10 w-full">
        <div class="max-w-[1120px] mx-auto">
            <h2 class="text-[32px] font-GarnettSemibold font-semibold text-amBluePremium leading-[42px]">
                Cómo apoyamos su negocio
            </h2>

            <div class="mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <article v-for="(item, idx) in items" :key="idx"
                    class="group relative overflow-hidden rounded-sm shadow-lg">
                    <!-- Imagen -->
                    <img :src="item.img" alt=""
                        class="h-[382px] w-full object-cover transition duration-500 group-hover:scale-105" />

                    <!-- Overlay opcional -->
                    <div class="pointer-events-none absolute inset-0" />

                    <!-- Panel azul dentro de la foto -->
                    <div class="absolute left-[15px] right-[15px] bottom-[15px]">
                        <div
                            class="flex items-start justify-between rounded-sm bg-amBluePremium pl-4 py-[15px] shadow-lg">
                            <div>
                                <h3 class="text-[22px] font-GarnettSemibold font-semibold text-white">
                                    {{ item.title }}
                                </h3>

                                <p class="mt-2.5 text-sm leading-5 text-white">
                                    {{ item.text }}
                                </p>
                            </div>

                            <div class="mt-1 w-auto shrink-0">
                                <img :src="stelasMobileIcon" alt="estelas" />
                                <img :src="stelasMobileIcon" class="mt-1" alt="estelas" />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
