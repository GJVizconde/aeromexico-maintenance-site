<script setup lang="ts">
import unpluggedImg from '@/assets/images/unplugged.png';
import modalCloseIcon from '@/assets/icons/modalClose.svg';

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
        aria-label="Cerrar mensaje de mantenimiento"
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
          Página en Mantenimiento
        </h2>

        <div id="maintenance-description" class="space-y-5">
          <p>Lamentamos los inconvenientes.</p>
          <p>
            En este momento, el sitio que intentas visitar se encuentra en
            mantenimiento programado o experimenta problemas técnicos
            temporales.
          </p>
          <p>
            Nuestro equipo ya está trabajando para restablecer el servicio lo
            antes posible y garantizar una mejor experiencia para nuestros
            usuarios.
          </p>
        </div>

        <section class="mt-6 w-full space-y-6">
          <p class="mb-4 font-GarnettSemibold font-semibold">
            ¿Necesitas asistencia inmediata?
          </p>

          <p>
            Estamos aquí para ayudarte. Puedes ponerte en contacto a través de
            los siguientes canales:
          </p>

          <ul class="list-disc pl-8 space-y-5 text-left">
            <li>
              ✉️ <span>Global Support:</span>
              Nuestro equipo de soporte está disponible para resolver cualquier
              duda o requerimiento que tengas.
            </li>

            <li>
              💬 <span>Chat de Aeroméxico Business:</span>
              Si prefieres una atención más directa, puedes escribirnos a través
              del chat en nuestra plataforma de atención empresarial.
            </li>
          </ul>
        </section>

        <!-- Last Message -->
        <div class="mt-6">
          <p>Agradecemos tu comprensión y paciencia.</p>
          <p>
            Muy pronto estaremos nuevamente en línea para seguir ofreciéndote el
            servicio que mereces.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
