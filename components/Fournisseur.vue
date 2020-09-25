<template>
  <div class="md:container mx-auto text-center text-gray-700 body-font">
    <h3 class="text-base font-bold leading-6 tracking-wide uppercase mt-10 mb-5">
      Parmi nos fournisseurs
    </h3>

    <Carousel
      class="flex"
      :autoplay="true"
      :per-page="3"
      :pagination-enabled="false"
      :autoplay-timeout="3000"
      :autoplay-hover-pause="false"
      :loop="true"
    >
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/beru.svg" alt="beru">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/ngk.svg" alt="ngk">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/champion.svg" alt="champion">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/corteco.svg" alt="corteco">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/fag.svg" alt="fag">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/gates.svg" alt="gates">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/jurid.svg" alt="jurid">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/luk.svg" alt="luk">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/monroe.svg" alt="monroe">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/moog.svg" alt="moog">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/nissens.svg" alt="nissens">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/payen.svg" alt="payen">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/purflux.svg" alt="purflux">
      </Slide>
      <Slide class="flex justify-center">
        <img class="h-48 w-48" src="~/assets/fournisseurs/sachs.svg" alt="sachs">
      </Slide>
    </Carousel>
  </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Fournisseur',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>

</style>
