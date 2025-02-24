<template>
  <div>
    <Header />
    <div class="lg:relative">
      <div class="mx-auto max-w-7xl w-full py-16 md:container">
        <div class="mb-6 flex justify-center">
          <img src="~/assets/image/egalite.webp" alt="" class="object-cover h-48">
        </div>

        <p class="my-2">
          <strong>Index égalité professionnelle H/F pour 2024</strong>
        </p>
        <p class="my-2">
          Dans le cadre de la publication annuelle de l’Index Egalité Professionnelle entre les Femmes et les Hommes, Logipar a obtenu la note de 77/100 pour l’année 2024 (66/100 pour l’année 2023).
        </p>
        <p class="my-2">
          Voici le détail des notes obtenues pour chaque indicateur :
        </p>
        <div class="flex justify-center">
          <ul class="list-disc my-6">
            <li>Ecart de rémunération</li>
            <li>Ecart du taux d’augmentation individuelle</li>
            <li>% de salariées augmentées au retour de congé maternité</li>
            <li>Nombre de personnes du sexe sous-représenté parmi les 10 plus hautes rémunérations</li>
          </ul>
        </div>
        <p class="my-2">
          Objectifs de progression fixés :
        </p>
        <p class="my-2">
          L’analyse de la situation comparée des hommes et des femmes traduit une représentativité plus importante des hommes (63 %) par rapport aux femmes (37%).
        </p>
        <p class="my-2">
          Cette sur-représentativité s’explique à la fois par le secteur d’activité : métiers de l’automobile (22.7% de femmes dans les effectifs du secteur d’activité selon l’observatoire de l’ANFA) et par les rythmes de travail existants au sein de l’entreprise notamment sur la partie logistique (3x8).
        </p>
        <br>
        <p class="my-2">
          Les classifications et les positionnements hiérarchiques des collaborateurs sont appliqués conformément à la convention collective applicable.
        </p>
        <p class="my-2">
          Le niveau de rémunération fixe est attribué à chaque collaborateur conformément à la grille de la convention collective en vigueur.
        </p>
        <p class="my-2">
          La Direction tient à rappeler qu’elle poursuivra la mise en œuvre de la politique d’égalité professionnelle entre les hommes et les femmes conformément aux dispositions légales.
        </p>
        <br>
        <p class="my-2">
          Ce constat étant établi, il convient alors à l’entreprise de se focaliser sur des axes sur lesquels il est possible d’agir. Il en ressort trois grands axes de travail :
        </p>
        <div class="flex justify-center">
          <ul class="list-disc my-6">
            <li>Concernant l’embauche : La société Logipar souhaite continuer à renforcer les embauches de femmes au sein des effectifs afin de contribuer à la progression de la part des femmes dans les métiers et catégories sous représentés.</li>
            <li>Concernant la promotion : La société Logipar applique une politique de promotion exempte de discrimination.</li>
            <li>Concernant les rémunérations : La société Logipar souhaite continuer à promouvoir l’égalité salariale entre les femmes et les hommes tout au long de leur carrière.</li>
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
