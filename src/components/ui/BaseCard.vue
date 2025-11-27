<script setup lang="ts">

type CardVariant = 'default' | 'elevated' | 'bordered'

interface Props {
    variant?: CardVariant
    padding?: 'none' | 'sm' | 'md' | 'lg'
    as?: 'div' | 'article' | 'section'
}

withDefaults(defineProps<Props>(), {
    variant: 'default',
    padding: 'md',
    as: 'div',
})
</script>

<template>
    <component :is="as" class="rounded-sm bg-white transition" :class="[
        // Variantes del card
        variant === 'default' && 'shadow-sm border border-gray-200',
        variant === 'elevated' && 'shadow-lg border border-transparent',
        variant === 'bordered' && 'border border-gray-300',

        // Padding opcional
        padding === 'none' && 'p-0',
        padding === 'sm' && 'p-3',
        padding === 'md' && 'p-5',
        padding === 'lg' && 'p-8',
    ]">
        <slot />
    </component>
</template>
