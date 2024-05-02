<template>
  <div>
    <Header />
    <Presentation />
    <Photos />
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
import Photos from '@/components/Photos.vue'

export default {
  components: {
    Photos,
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
