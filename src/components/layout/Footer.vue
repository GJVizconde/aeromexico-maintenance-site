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
  <footer class="bg-amBluePremium text-white w-full">
    <div class="relative">
      <div class="max-w-[1120px] mx-auto">
        <div class="grid grid-cols-[30%_25%_40%] gap-8 pt-8 w-full">
          <!-- Part1 -->
          <div class="border-r border-white/15">
            <div class="pr-20">
              <h3 class="text-lg font-GarnettSemibold leading-7 font-semibold">
                ¿Tienes preguntas?
              </h3>
              <p class="mt-2.5 text-[10px] text-warmWhite/60 leading-4">
                Si tu agencia cuenta con el servicio de Global Sales Support haz
                clic en el siguiente botón.
              </p>
            </div>
            <BaseButton
              as="button"
              variant="custom"
              size="none"
              class="mt-5 rounded-md bg-amBlueInnovation px-4.5 py-5 leading-5 text-sm font-GarnettSemibold font-semibold shadow-lg hover:brightness-110 cursor-pointer flex gap-2.5 justify-center"
            >
              <img :src="chatIcon" alt="chat" class="w-5 h-5" />
              <span>Chat en vivo</span>
            </BaseButton>

            <div class="flex flex-col gap-2.5 mt-[30.5px] text-warmWhite">
              <span class="text-xs font-normal leading-4.5">Síguenos en</span>
              <div class="flex gap-5 text-lg items-center">
                <a href=""><img :src="fbIcon" alt="Facebook" /></a>
                <a href=""><img :src="twitterIcon" alt="Twitter" /></a>
                <a href=""><img :src="instagramIcon" alt="Instagram" /></a>
                <a href=""><img :src="liIcon" alt="LinkedIn" /></a>
                <a href=""><img :src="youtubeIcon" alt="YouTube" /></a>
              </div>
            </div>
          </div>

          <!-- Part 2 -->
          <div class="border-r border-white/15">
            <h3
              class="text-lg font-GarnettSemibold leading-7 font-semibold mb-5"
            >
              Sobre Aeroméxico
            </h3>
            <ul class="gap-3 flex flex-col text-xs leading-4.5 text-warmWhite">
              <li>
                <a class="flex gap-3 items-center" href="">
                  <img :src="investIcon" alt="" class="w-[25px] h-[25px]" />
                  <span>Inversionistas</span>
                </a>
              </li>
              <li>
                <a class="flex gap-3 items-center" href="">
                  <img :src="allyIcon" alt="" class="w-[25px] h-[25px]" />
                  <span>Alianzas comerciales</span>
                </a>
              </li>
              <li>
                <a class="flex gap-3 items-center" href="">
                  <img :src="complianceIcon" alt="" class="w-[25px] h-[25px]" />
                  <span>Compliance</span>
                </a>
              </li>
              <li>
                <a class="flex gap-3 items-center" href="">
                  <img :src="flyIcon" alt="" class="w-[25px] h-[25px]" />
                  <span>Vuela con nosotros</span>
                </a>
              </li>
              <li>
                <a class="flex gap-3 items-center" href="">
                  <img :src="planeIcon" alt="plane" class="w-[25px] h-[25px]" />
                  <span>Nuestra flota</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Part 3 -->
          <div>
            <h3
              class="text-lg font-GarnettSemibold leading-7 font-semibold mb-5"
            >
              Descubre más de Aeroméxico
            </h3>
            <ul
              class="flex flex-col gap-2 text-[10px] leading-4 text-warmWhite"
            >
              <li>
                <a href="" class="block py-1.5">
                  Documentación para Agencias de Viajes (CAAV) México
                </a>
              </li>
              <li>
                <a href="" class="block py-1.5">
                  Documentación para Agencias de Viajes (CAAV) Estados Unidos
                </a>
              </li>
              <li>
                <a href="" class="block py-1.5">
                  Documentación para Agencias de Viajes (CAAV) Europa/Asia
                </a>
              </li>
              <li>
                <a href="" class="block py-1.5">
                  Documentación para Agencias de Viajes (CAAV) Latinoamérica
                </a>
              </li>
            </ul>
          </div>

          <div />
        </div>
      </div>

      <!-- Stelas-->
      <img
        :src="stelasIcon"
        alt="estelas"
        class="absolute right-0 top-0 h-full pointer-events-none"
      />
    </div>

    <!-- Copyright -->
    <div
      class="py-[25px] text-[10px] text-warmWhite leading-4 border-t border-white/15"
    >
      <div class="flex justify-between items-center max-w-[1120px] mx-auto">
        <p>
          © 2023 Aeroméxico. Todos los derechos reservados ·
          <a href="">Legal</a> ·
          <a href="">Aviso de privacidad</a>
        </p>
        <div class="flex items-center gap-2">
          <span>Certified by</span>
          <img :src="pciLogo" alt="" class="h-6.5 w-6.5" />
        </div>
      </div>
    </div>
  </footer>
</template>
