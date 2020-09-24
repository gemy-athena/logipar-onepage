<template>
  <section class="text-gray-700 body-font">
    <div class="mt-10 text-center">
      <h1 class="text-base font-bold leading-6 tracking-wide uppercase md:mx-auto md:text-center mb-10">
        Produits et services
      </h1>
      <div class="max-w-md mx-auto text-lg text-gray-600 font-light sm:text-xl mt-10 md:max-w-3xl">
        <p>
          Une gamme complète de pièces de rechange et de services pour la réparation automobile
        </p>

        <p class="mt-10">
          LOGIPAR fournit des pièces de rechanges multi marques pour véhicules automobiles, VL et VUL, aux concessions automobiles, aux agents de marque,
          aux réparateurs indépendants ainsi qu’aux ateliers intégrés
        </p>
      </div>
    </div>
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img
          alt="feature"
          class="object-cover object-center h-full w-full"
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3304&q=80"
        >
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Large stock de + 65000 références
            </h2>
            <div class="leading-relaxed text-base">
              <ul class="font-light list-disc ml-8 mt-4  text-gray-600">
                <li>pièces d’origine multimarques</li>
                <li>consommables</li>
                <li>outillage</li>
                <li>matériel de garage</li>
                <li>EPI</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Supports informatiques dédiés
            </h2>
            <div class="leading-relaxed text-base">
              <ul class="font-light list-disc ml-8 mt-4  text-gray-600">
                <li> Multibrand : un catalogue d’identification multimarques</li>
                <li> LOGIP@RTS : 1 site internet de commande dédié</li>
                <li> Procédure de retour simplifiée</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Maîtrise logistique
            </h2>
            <div class="leading-relaxed text-base">
              <ul class="font-light list-disc ml-8 mt-4  text-gray-600">
                <li> Service 24h/24 grâce à une prise de commande multicanal</li>
                <li> Préparation à l’ordre de réparation</li>
                <li> + 5000 commandes / jour</li>
                <li> 2 à 4 livraisons par jour vers + 1000 points de ventes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>

</style>
