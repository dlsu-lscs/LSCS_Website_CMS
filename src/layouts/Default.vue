<template>
  <div class="layout">
    <Navbar />
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
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

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>