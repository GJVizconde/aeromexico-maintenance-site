<script setup lang="ts">
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
</script>

<template>
  <footer class="w-full bg-amBluePremium text-white">
    <div class="relative overflow-hidden">
      <div
        class="mx-auto md:max-w-[644px] md:pt-8 md:pb-[50px] lg:max-w-[1120px] lg:px-6 lg:pb-10 lg:pt-8"
      >
        <!-- Tablet layout -->
        <div class="lg:hidden md:pt-[24.25px]">
          <!-- CTA -->
          <div
            class="flex md:flex-col md:justify-between md:pb-4.5 border-b border-white/15"
          >
            <div class="flex justify-between items-center">
              <h3
                class="text-[21px] font-GarnettSemibold font-semibold leading-8"
              >
                ¿Tienes preguntas?
              </h3>
              <BaseButton
                as="button"
                variant="custom"
                size="none"
                class="flex cursor-pointer items-center justify-center gap-2.5 rounded-md bg-amBlueInnovation px-3 py-2.5 text-sm font-semibold leading-5 font-GarnettSemibold shadow-lg transition hover:brightness-110"
              >
                <img :src="chatIcon" alt="Chat en vivo" class="h-5 w-5" />
                <span class="text-xs leading-5">Chat en vivo</span>
              </BaseButton>
            </div>
            <div class="text-[10px] leading-4 text-warmWhite/60">
              <p>Si tu agencia cuenta con el servicio de Global</p>
              <p>sales Support haz clic en el siguiente botón</p>
            </div>
          </div>

          <!-- Social -->
          <div
            class="mt-8 pb-8 flex items-center gap-3 text-warmWhite border-b border-white/15"
          >
            <span class="text-[11px] leading-4.5">Síguenos en</span>
            <div class="flex items-center gap-4.5">
              <a href="#" aria-label="Facebook">
                <img :src="fbIcon" alt="Facebook" class="h-3 w-3" />
              </a>
              <a href="#" aria-label="Twitter">
                <img :src="twitterIcon" alt="Twitter" class="h-3 w-3" />
              </a>
              <a href="#" aria-label="Instagram">
                <img :src="instagramIcon" alt="Instagram" class="h-3 w-3" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img :src="liIcon" alt="LinkedIn" class="h-3 w-3" />
              </a>
              <a href="#" aria-label="YouTube">
                <img :src="youtubeIcon" alt="YouTube" class="h-3 w-3" />
              </a>
            </div>
          </div>

          <!-- Links -->
          <div
            class="mt-6 grid gap-8 pt-2 md:grid-cols-[0.7fr_1.3fr] md:items-start"
          >
            <div class="md:border-r md:border-white/15">
              <h3 class="text-lg font-semibold leading-7 font-GarnettSemibold">
                Sobre Aeroméxico
              </h3>
              <ul
                class="mt-5 flex flex-col gap-1.5 text-xs leading-[17px] text-warmWhite"
              >
                <li>
                  <a class="flex items-center gap-3 py-[6.75px]" href="#">
                    <img
                      :src="investIcon"
                      alt="Inversionistas"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Inversionistas</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center gap-3 py-[6.75px]" href="#">
                    <img
                      :src="allyIcon"
                      alt="Alianzas comerciales"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Alianzas comerciales</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center gap-3 py-[6.75px]" href="#">
                    <img
                      :src="complianceIcon"
                      alt="Compliance"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Compliance</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center gap-3 py-[6.75px]" href="#">
                    <img
                      :src="flyIcon"
                      alt="Vuela con nosotros"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Vuela con nosotros</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center gap-3 py-[6.75px]" href="#">
                    <img
                      :src="planeIcon"
                      alt="Nuestra flota"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Nuestra flota</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="">
              <h3
                class="text-[11px] pt-[7px] font-GarnettSemibold font-semibold leading-[100%]"
              >
                Descubre más de Aeroméxico
              </h3>
              <ul
                class="mt-2 flex flex-col gap-3 text-[11px] text-warmWhite md:mt-3 py-[5px] leading-4"
              >
                <li>
                  <a href="#" class="block py-[5px]">
                    Documentación para Agencias de Viajes (CAAV) México
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-[5px]">
                    Documentación para Agencias de Viajes (CAAV) Estados Unidos
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-[5px]">
                    Documentación para Agencias de Viajes (CAAV) Europa/Asia
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-[5px]">
                    Documentación para Agencias de Viajes (CAAV) Latinoamérica
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Desktop layout (igual al original) -->
        <div class="hidden lg:block">
          <div class="grid w-full grid-cols-[30%_25%_40%] gap-8 pt-2">
            <!-- Col 1 -->
            <div class="border-r border-white/15 pr-10">
              <h3 class="text-lg font-semibold leading-7 font-GarnettSemibold">
                ¿Tienes preguntas?
              </h3>
              <p class="mt-2.5 text-[10px] leading-4 text-warmWhite/60">
                Si tu agencia cuenta con el servicio de Global Sales Support haz
                clic en el siguiente botón.
              </p>
              <BaseButton
                as="button"
                variant="custom"
                size="none"
                class="mt-5 flex cursor-pointer items-center justify-center gap-2.5 rounded-md bg-amBlueInnovation px-4.5 py-5 text-sm font-semibold leading-5 font-GarnettSemibold shadow-lg transition hover:brightness-110"
              >
                <img :src="chatIcon" alt="Chat en vivo" class="h-5 w-5" />
                <span>Chat en vivo</span>
              </BaseButton>

              <div class="mt-[30.5px] flex flex-col gap-2.5 text-warmWhite">
                <span class="text-xs font-normal leading-4.5">Síguenos en</span>
                <div class="flex items-center gap-5 text-lg">
                  <a href="#" aria-label="Facebook"
                    ><img :src="fbIcon" alt="Facebook"
                  /></a>
                  <a href="#" aria-label="Twitter"
                    ><img :src="twitterIcon" alt="Twitter"
                  /></a>
                  <a href="#" aria-label="Instagram"
                    ><img :src="instagramIcon" alt="Instagram"
                  /></a>
                  <a href="#" aria-label="LinkedIn"
                    ><img :src="liIcon" alt="LinkedIn"
                  /></a>
                  <a href="#" aria-label="YouTube"
                    ><img :src="youtubeIcon" alt="YouTube"
                  /></a>
                </div>
              </div>
            </div>

            <!-- Col 2 -->
            <div class="border-r border-white/15">
              <h3
                class="mb-5 text-lg font-semibold leading-7 font-GarnettSemibold"
              >
                Sobre Aeroméxico
              </h3>
              <ul
                class="flex flex-col gap-3 text-xs leading-4.5 text-warmWhite"
              >
                <li>
                  <a class="flex items-center gap-3" href="#">
                    <img
                      :src="investIcon"
                      alt="Inversionistas"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Inversionistas</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center gap-3" href="#">
                    <img
                      :src="allyIcon"
                      alt="Alianzas comerciales"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Alianzas comerciales</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center gap-3" href="#">
                    <img
                      :src="complianceIcon"
                      alt="Compliance"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Compliance</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center gap-3" href="#">
                    <img
                      :src="flyIcon"
                      alt="Vuela con nosotros"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Vuela con nosotros</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center gap-3" href="#">
                    <img
                      :src="planeIcon"
                      alt="Nuestra flota"
                      class="h-[25px] w-[25px]"
                    />
                    <span>Nuestra flota</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Col 3 -->
            <div>
              <h3
                class="mb-5 text-lg font-semibold leading-7 font-GarnettSemibold"
              >
                Descubre más de Aeroméxico
              </h3>
              <ul
                class="flex flex-col gap-2 text-[10px] leading-4 text-warmWhite"
              >
                <li>
                  <a href="#" class="block py-1.5">
                    Documentación para Agencias de Viajes (CAAV) México
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-1.5">
                    Documentación para Agencias de Viajes (CAAV) Estados Unidos
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-1.5">
                    Documentación para Agencias de Viajes (CAAV) Europa/Asia
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-1.5">
                    Documentación para Agencias de Viajes (CAAV) Latinoamérica
                  </a>
                </li>
              </ul>
            </div>

            <div />
          </div>
        </div>
      </div>

      <div class="flex flex-col absolute right-0 top-0 lg:h-full">
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
      class="border-t border-white/15 py-[22px] text-[10px] leading-4 text-warmWhite"
    >
      <div
        class="mx-auto flex md:max-w-[644px] max-w-[1120px] flex-col items-center justify-between gap-3 lg:px-6 md:flex-row"
      >
        <p class="text-center md:text-left">
          © 2023 Aeroméxico. Todos los derechos reservados |
          <a href="#" class="underline-offset-2 hover:underline">Legal</a> |
          <a href="#" class="underline-offset-2 hover:underline"
            >Aviso de privacidad</a
          >
          |
          <a href="#" class="underline-offset-2 hover:underline"
            >Sitio accesible</a
          >
        </p>
        <div class="flex items-center gap-2">
          <span>Certificados por</span>
          <img :src="pciLogo" alt="PCI" class="h-6.5 w-6.5" />
        </div>
      </div>
    </div>
  </footer>
</template>
