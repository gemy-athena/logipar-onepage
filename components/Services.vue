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
    <div class="md:container px-5 py-24 mx-auto flex flex-wrap">
      <!--ILLUSTRATION-->
      <div class="lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-hidden">
        <img
          alt="Logipar - Entrepot"
          class="object-cover object-center h-full w-full"
          src="~/assets/image/entrepot.jpg"
        >
      </div>
      <!--TEXTE-->
      <div class="flex flex-col flex-wrap lg:w-1/2 lg:pl-12 lg:text-left text-center sm:mt-10 lg:mt-0">
        <!-- REFERENCES -->
        <div class="flex flex-row items-center">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-box-seam"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
            </svg>
          </div>
          <div class="flex ml-2">
            Large stock de + 65000 références
          </div>
        </div>
        <div class="leading-relaxed text-left">
          <ul class="font-light list-disc ml-8 mt-4 text-gray-600">
            <li>pièces d’origine multimarques</li>
            <li>consommables</li>
            <li>outillage</li>
            <li>matériel de garage</li>
            <li>EPI</li>
          </ul>
        </div>

        <div class="flex flex-row items-center mt-12">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-signpost-split"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 16h2V6H8V2h1v-.586a1 1 0 0 0-2 0V7h1v4H7v5z" />
              <path fill-rule="evenodd" d="M14 3H8v2h6l.75-1L14 3zM8 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H8zM2 8h6v2H2l-.75-1L2 8zm6-1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h6z" />
            </svg>
          </div>
          <div class="flex ml-2">
            Maîtrise logistique
          </div>
        </div>
        <div class="leading-relaxed text-left">
          <ul class="font-light list-disc ml-8 mt-4  text-gray-600">
            <li> Service 24h/24 grâce à une prise de commande multicanal</li>
            <li> Préparation à l’ordre de réparation</li>
            <li> + 5000 commandes / jour</li>
            <li> 2 à 4 livraisons par jour vers + 1000 points de ventes</li>
          </ul>
        </div>

        <div class="flex flex-row items-center mt-12">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-laptop"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z" />
              <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z" />
            </svg>
          </div>
          <div class="flex ml-2">
            Supports informatiques dédiés
          </div>
        </div>
        <div class="leading-relaxed text-left">
          <ul class="font-light list-disc ml-8 mt-4  text-gray-600">
            <li> Multibrand : un catalogue d’identification multimarques</li>
            <li><a href="http://commande.logipar.fr" class="underline font-medium">1 site internet de commande dédié</a></li>
            <li> Procédure de retour simplifiée</li>
          </ul>
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
