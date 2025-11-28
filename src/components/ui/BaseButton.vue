<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link' | 'custom';
type ButtonSize = 'sm' | 'md' | 'lg' | 'none';

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: 'button' | 'a';
  href?: string;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  as: 'button',
  disabled: false,
});
</script>

<template>
  <component
    :is="as"
    :href="as === 'a' ? href : undefined"
    :disabled="as === 'button' ? disabled : undefined"
    class="items-center justify-center cursor-pointer rounded-md font-GarnettSemibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    :class="[
      // Variantes (no aplicamos nada si es 'custom')
      variant === 'primary' && 'bg-[#f90083] text-white hover:brightness-110',
      variant === 'secondary' &&
        'bg-white text-amBluePremium border border-amBluePremium hover:bg-amBluePremium/5',
      variant === 'ghost' && 'bg-transparent text-white hover:bg-white/10',
      variant === 'link' &&
        'bg-transparent text-[#1c61ff] underline-offset-2 hover:underline',

      // Tamaños (no aplicamos nada si es 'none')
      size === 'sm' && 'px-3 py-[6.5px] md:text-xs',
      size === 'md' && 'px-4 py-2 text-sm',
      size === 'lg' && 'px-[18px] py-5 text-sm',
    ]"
  >
    <slot />
  </component>
</template>
