<template>
  <div class="bg-gray-50">
    <div class="relative bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:container">
        <div class="flex justify-between items-center py-6 md:space-x-10">
          <div class="flex">
            <a href="#" class="inline-flex">
              <Logotitre class="h-8" />
            </a>
          </div>
          <div class="-mr-2 -my-2 lg:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              @click="toggleMenu"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden lg:flex space-x-6">
            <a
              href="#"
              class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
            >
              Présentation
            </a>
            <a
              href="#"
              class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
            >
              Produits et services
            </a>
            <a
              href="#"
              class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
            >
              Chiffres clés
            </a>
          </nav>
          <div class="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <span class="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150"
              >
                Accéder au portail de commandes
              </a>
            </span>
          </div>
        </div>
      </div>

      <!--MENU MOBILE-->
      <div v-show="menuOpen" class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden">
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <Logotitre class="h-6" />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    @click="toggleMenu"
                  >
                    <!-- Heroicon name: x -->
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav class="grid gap-y-8">
                  <a
                    href="#"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    @click="toggleMenu"
                  >
                    <!-- Heroicon name: chart-bar -->
                    <svg class="flex-shrink-0 h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Présentation
                    </div>
                  </a>
                  <a
                    href="#"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    @click="toggleMenu"
                  >
                    <!-- Heroicon name: cursor-click -->
                    <svg class="flex-shrink-0 h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Produits et services
                    </div>
                  </a>
                  <a
                    href="#"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    @click="toggleMenu"
                  >
                    <!-- Heroicon name: shield-check -->
                    <svg class="flex-shrink-0 h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Chiffres clés
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div class="space-y-6">
                <span class="w-full flex rounded-md shadow-sm">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150"
                  >
                    Accéder au portail de commandes
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="lg:relative text-center">
      <div class="mx-auto max-w-7xl w-full py-16 text-center md:container">
        <svg
          class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4 z-neg"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>
        <div class="px-4 sm:px-8 xl:pr-16">
          <h2 class="text-5xl tracking-tight leading-10 font-extrabold text-gray-900">
            Le spécialiste de la
            <br class="xl:hidden">
            <span class="text-orange-600">distribution de pièces de rechange automobile multimarques</span>
          </h2>
          <p class="max-w-md mx-auto text-lg text-gray-600 font-light sm:text-xl mt-10 md:max-w-3xl">
            Logipar opère au sein du réseau Distrigo à partir de deux plateformes logistiques, l’une dans le Grand Ouest (Torcé), l’autre en Provence (Le Luc)
          </p>

          <div class="flex sm:flex-col lg:flex-row justify-center items-center mt-10">
            <div class="flex m-5">
              <img src="~/assets/logo/distrigo.png" alt="Distrigo">
            </div>
            <div class="flex m-5">
              <img src="~/assets/logo/eurorepar.png" alt="Distrigo">
            </div>
          </div>
          <div class="max-w-md mx-auto text-lg text-gray-600 font-light sm:text-xl mt-10 md:max-w-3xl">
            <p>
              Dès sa fondation en 2004 - d’abord sous le nom Gemy PR - Logipar a été l’un des premiers distributeurs en France à mettre en œuvre une approche de
              type logistique à grande échelle et d’une digitalisation du service.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Logotitre from '@/components/LogoTitre.vue'

export default {
  name: 'HeaderV2',
  components: { Logotitre },
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>

</style>
