<template>
  <div>
    <Header />
    <Presentation />
    <Ambition />
    <Services />
    <Contact />
    <Fournisseur />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Presentation from '@/components/Presentation'
import Header from '@/components/Header.vue'
import Ambition from '@/components/Ambition.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'
import Fournisseur from '@/components/Fournisseur.vue'

export default {
  components: {
    Fournisseur,
    Presentation,
    Contact,
    Services,
    Ambition,
    Header,
    Footer
  }
}
</script>
