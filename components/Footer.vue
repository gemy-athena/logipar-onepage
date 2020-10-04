<template>
  <div class="bg-gray-800">
    <div class="max-w-screen-xl mx-auto divide-y divide-gray-400">
      <!--LIENS REASEAUX SOCIAUX-->
      <div class="flex sm:flex-col md:flex-row justify-between p-4 items-center">
        <a href="https://gemy-automobiles.fr" target="_blank" class="hover:underline m-2" rel="noreferrer">
          <img src="~/assets/logos/gemy_bleu_blanc.svg" alt="" class="h-10">
        </a>

        <p class="text-base leading-6 text-gray-400 m-2">
          &copy; 2020 Logipar - tous droits réservés
        </p>

        <a href="#" class="flex text-gray-400 hover:text-gray-300 m-2">
          <span class="sr-only">Linkedin</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>
      </div>

      <div class="flex sm:flex-col md:flex-row justify-between items-center p-4">
        <a class="flex m-2" href="https://autoprepar.fr" target="_blank" rel="noreferrer">
          <img src="~/assets/logos/autoprepar.svg" alt="" class="h-4">
        </a>
        <a class="flex m-2" href="https://logipar.fr" target="_blank" rel="noreferrer">
          <img src="~/assets/logos/logipar.svg" alt="" class="h-4">
        </a>
        <a class="flex m-2" href="https://progicar.fr" target="_blank" rel="noreferrer">
          <img src="~/assets/logos/progicar.svg" alt="" class="h-4">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
