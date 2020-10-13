<template>
  <div class="layout">
    <Navbar />
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
// CSS
import 'semantic-ui-css/semantic.min.css'
import $ from 'jquery'
import '~/assets/css/app.css'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default {
  components: {
    Navbar,
    Footer
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>