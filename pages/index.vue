<template>
  <div>
    <Header />
    <Presentation />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Presentation from '@/components/Ambition.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'

export default {
  components: {
    Contact,
    Services,
    Presentation,
    Header,
    Footer
  }
}
</script>
