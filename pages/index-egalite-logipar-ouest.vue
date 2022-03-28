<template>
  <div>
    <Header />
    <div class="lg:relative">
      <div class="mx-auto max-w-7xl w-full py-16 md:container">
        <div class="mb-6 flex justify-center">
          <img src="~/assets/image/egalite.webp" alt="" class="object-cover h-48">
        </div>

        <p class="my-2">
          L’index de l’égalité femmes-hommes est entré en vigueur depuis le 1er mars 2019 suite à la loi « Avenir Professionnel » du 5 septembre 2018 qui a pour
          ambition de promouvoir l’égalité professionnelle entre les femmes et les hommes à travers 5 indicateurs, sur une échelle de 100. Les 5 indicateurs
          sont les suivants :
        </p>

        <div class="flex justify-center">
          <ul class="list-disc my-6">
            <li>Indicateur 1 : écart de rémunération H/F,</li>
            <li>Indicateur 2 : écart de taux d’augmentations individuelles H/F,</li>
            <li>Indicateur 3 : écart de taux de promotion H/F,</li>
            <li>Indicateur 4 : taux de salariées augmentées après leur retour de congé maternité,</li>
            <li>Indicateur 5 : répartition sexuée des dix salariés ayant les plus hautes rémunérations.</li>
          </ul>
        </div>

        <div class="my-6 flex justify-center">
          <LogoTitre class="object-cover h-12" />
        </div>

        <p class="my-6">
          L’égalité femmes-hommes est aujourd’hui un enjeu sociétal majeur. Nous nous engageons à garantir un équilibre sur la promotion, la rémunération et les
          augmentations des salariés FEMMES-HOMMES. Logipar Ouest est déterminé à maintenir ses efforts en matière de mixité professionnelle.
        </p>

        <p class="my-6">
          Les résultats de l’index égalité femmes – hommes relatifs à l’année 2021 pour Logipar Ouest sont les suivants :
        </p>

        <div class="flex justify-center">
          <ul class="list-disc my-6">
            <li>Indicateur 1 : 21 points</li>
            <li>Indicateur 2 : 20 points</li>
            <li>Indicateur 3 : 15 points</li>
            <li>Indicateur 4 : 15 points</li>
            <li>Indicateur 5 : 5 points</li>
            <li>Note globale : 76 points</li>
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
