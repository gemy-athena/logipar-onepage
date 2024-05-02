<template>
  <div class="bg-gray-800">
    <div class="max-w-screen-xl mx-auto">
      <!--LIENS REASEAUX SOCIAUX-->
      <div class="flex sm:flex-col md:flex-row justify-between p-4 items-center">
        <a href="https://gemy-automobiles.fr" target="_blank" class="hover:underline m-2" rel="noreferrer">
          <img src="~/assets/logos/gemy_bleu_blanc.svg" alt="" class="h-10">
        </a>
        <p class="text-base leading-6 text-gray-400 m-2">
          &copy; 2024 Logipar - tous droits réservés
        </p>
        <div class="flex flex-row space-x-4">
          <a href="https://www.linkedin.com/company/gemy/" class="flex text-gray-400 hover:text-gray-300 m-2">
            <span class="sr-only">Linkedin</span>
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a href="https://www.youtube.com/@gemyautomobiles" class="flex text-gray-400 hover:text-gray-300 m-2">
            <span class="sr-only">YouTube</span>
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M21.8 8.001c-.24-.894-.94-1.594-1.834-1.833-1.623-.45-8.166-.45-8.166-.45s-6.543 0-8.166.45c-.894.239-1.594.939-1.834 1.833-.45 1.623-.45 5.003-.45 5.003s0 3.38.45 5.003c.24.894.94 1.594 1.834 1.833 1.623.45 8.166.45 8.166.45s6.543 0 8.166-.45c.894-.239 1.594-.939 1.834-1.833.45-1.623.45-5.003.45-5.003s0-3.38-.45-5.003zM9.5 15.5v-7l6 3.5-6 3.5z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="flex sm:flex-col md:flex-row justify-between items-center p-4 border-t border-gray-400">
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
