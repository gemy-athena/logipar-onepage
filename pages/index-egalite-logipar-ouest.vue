<template>
  <div>
    <Header />
    <div class="lg:relative">
      <div class="mx-auto max-w-7xl w-full py-16 md:container">
        <div class="mb-6 flex justify-center">
          <img src="~/assets/image/egalite.webp" alt="" class="object-cover h-48">
        </div>

        <p class="my-2">
          L’Index de l'égalité professionnelle a été conçu pour faire progresser au sein des entreprises l’égalité salariale entre les femmes et les hommes.
        </p>

        <p class="my-2">
          Il permet aux entreprises de mesurer, en toute transparence, les écarts de rémunération entre les sexes et de mettre en évidence leurs points de progression. Lorsque des disparités salariales sont constatées, des mesures de correction doivent être prises.
        </p>

        <p class="my-2">
          La note globale obtenue pour l’index égalité femmes-hommes de 2022 est de 82/100.
        </p>

        <p class="my-6">
          Les résultats de l’index égalité femmes – hommes relatifs à l’année 2022 pour <strong>Logipar Ouest</strong> sont les suivants :
        </p>

        <div class="flex justify-center">
          <ul class="list-disc my-6">
            <li>Indicateur 1 : écart de rémunération : 37/40</li>
            <li>Indicateur 2 : écart de taux d’augmentations individuelles : 25/35</li>
            <li>Indicateur 3 : taux de salariées augmentées après leur retour de congé maternité : 15/15</li>
            <li>Indicateur 4 : nombre de salariés du sexe sous représenté parmi les 10 plus hautes rémunérations : 5/10</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: 'L’index de l’égalité femmes-hommes'
    }
  }
}
</script>

<style scoped>

</style>
