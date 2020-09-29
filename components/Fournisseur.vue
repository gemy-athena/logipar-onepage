<template>
  <div class="md:container mx-auto text-center text-gray-700 body-font">
    <h4 class="text-base font-bold leading-6 tracking-wide uppercase mt-10 mb-5">
      Parmi nos fournisseurs
    </h4>
    <client-only>
      <carousel
        class="flex"
        :autoplay="true"
        :per-page="3"
        :pagination-enabled="false"
        :autoplay-timeout="3000"
        :autoplay-hover-pause="false"
        :loop="true"
      >
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/beru.svg" alt="beru">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/ngk.svg" alt="ngk">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/kent.svg" alt="kent">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/corteco.svg" alt="corteco">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/fag.svg" alt="fag">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/gates.svg" alt="gates">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/jurid.svg" alt="jurid">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/luk.svg" alt="luk">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/monroe.svg" alt="monroe">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/moog.svg" alt="moog">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/nissens.svg" alt="nissens">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/payen.svg" alt="payen">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/purflux.svg" alt="purflux">
        </slide>
        <slide class="flex justify-center">
          <img class="h-48 w-48" src="~/assets/fournisseurs/sachs.svg" alt="sachs">
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>

export default {
  name: 'Fournisseur'
}
</script>

<style scoped>

</style>
