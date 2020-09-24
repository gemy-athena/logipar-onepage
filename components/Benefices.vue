<template>
  <div id="benef" class="relative bg-white">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img
          class="object-cover w-full h-56 lg:absolute lg:h-full"
          src="/satisfaction.jpg"
          alt="Satisfaction client"
        >
      </div>
    </div>
    <div class="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
      <div class="lg:col-start-2 lg:pl-8">
        <div class="mx-auto text-base max-w-prose lg:max-w-lg lg:ml-auto ">
          <p class="font-semibold leading-6 tracking-wide text-orange-600 uppercase">
            Bénéfices clients
          </p>
          <div class="mt-6 border-t-2 border-gray-200 pt-6">
            <dl>
              <div>
                <dt class="text-lg leading-7">
                  <button class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                    <span class="font-medium text-gray-900">
                      Conseil et expertise
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12">
                  <p class="text-base leading-6 text-gray-600">
                    Amélioration de la stratégie VO (réparation ou remplacement, arbitrage par type de VO)
                  </p>
                </dd>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span class="font-medium text-gray-900">
                        Optimisation du Lead time
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12">
                    <p class="text-base leading-6 text-gray-600">
                      Réduction du délai entre reprise en concession et présentation en showroom du VO « prêt à partir »
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span class="font-medium text-gray-900">
                        Rentabilité
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12">
                    <p class="text-base leading-6 text-gray-600">
                      Amélioration de la marge par VO, diminution de l’encours financier
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span class="font-medium text-gray-900">
                        Organisation
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12">
                    <p class="text-base leading-6 text-gray-600">
                      Prise en charge complète de vos véhicules, du transport à la mise en ligne des photos
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefices'
}
</script>

<style scoped>

</style>
