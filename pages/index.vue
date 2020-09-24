<template>
  <div>
    <Header />
    <Presentation />
    <Services />
    <Contact />
    <Fournisseur />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Presentation from '@/components/Ambition.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'
import Fournisseur from '@/components/Fournisseur.vue'

export default {
  components: {
    Fournisseur,
    Contact,
    Services,
    Presentation,
    Header,
    Footer
  }
}
</script>
