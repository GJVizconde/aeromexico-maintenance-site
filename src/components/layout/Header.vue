<script setup lang="ts">
import aeromexicoLogo from '@/assets/icons/new_aeromexico_business.svg'

interface Props {
    navItems: string[]
}

defineProps<Props>()

const emit = defineEmits<{
    (e: 'open-maintenance'): void
}>()
</script>

<template>
    <header class="flex items-center justify-between bg-amBluePremium h-[60px] px-6 text-white text-xs font-semibold">
        <div class="flex items-center">
            <a href="/">
                <img class="object-center min-w-[150px] pr-[9px]" :src="aeromexicoLogo" alt="Aeromexico Business"
                    width="150" height="17" />
            </a>

            <nav class="hidden items-center lg:flex" aria-label="Navegación principal">
                <ul class="flex gap-1">
                    <li v-for="item in navItems" :key="item">
                        <button type="button"
                            class="rounded py-1.5 px-2.5 leading-[18px] hover:bg-searchBorder cursor-pointer"
                            @click="emit('open-maintenance')">
                            {{ item }}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
