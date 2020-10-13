<template>
  <Layout>
    <Particles />
    <section id="introduction" class="ui center slide">
        <div id="particles" class="background"> </div>
        <div class="content">
            <iframe  id="video" src="https://www.youtube.com/embed/v5Rxdtj1-jY?rel=0" frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
        </div>
    </section>
    <section id="about_us">
        <header class="wow fadeInUp"><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <h5 class="ui compact white header"> ABOUT </h5>
            <h3 class="ui compact lscs_yellow header"> LSCS </h3>
        </header>
        <p class="wow fadeInUp">
            La Salle Computer Society is the only professional organization in the College of Computer Studies accredited by
            the Council of Student Organizations in De La Salle University for over 33 years.
        </p>
        <g-link class="ui lscs_yellow button" href="/about-us">
            <span>Read More</span>
        </g-link>
    </section>

    <section id="blogs">
        <div class="wow fadeInUp">
            <h3 class="ui lscs_blue header">
                BLOGS
            </h3>
            
            <div v-if="$page.allBlog.totalCount !== 0">
                <div class="ui centered stackable cards">
                    <div v-for="blog in $page.allBlog.edges"
                        :key="blog.node.date"
                        class="card"
                    >
                        <div class="image">
                            <img :src="blog.node.featuredImage" />
                        </div>
                        <div class="content">
                            <div class="header raleway">
                                {{ blog.node.title }}</div>
                            <div class="meta">
                                {{ dateString(blog.node.date) }} <br>
                                Posted by: {{ blog.node.author }}
                            </div>
                            <div class="description">
                                {{ blog.node.excerpt }}...
                            </div>
                        </div>
                        <div class="extra content">
                            <g-link :to="blog.node.path" class="lscs_blue link right floated">Read More</g-link>
                        </div>
                    </div>
                </div>
                <div class="ui buttons container">
                    <g-link class="ui lscs_blue button" to="/blogs">
                        <span>Read more Blogs</span>
                    </g-link>
                </div>
            </div>
            <div v-else class="ui buttons container">
                <h4 class="lscs_blue"> There are no blogs yet. Please wait for further announcements! </h4>
            </div>
        </div>
    </section>

    <section id="officers">
        <h3 class="wow fadeInUp ui lscs_blue header">
            <span class="lscs_yellow">LSCS</span>
            <span class="lscs_blue">OFFICERS</span>
        </h3>
        <div class="ui five column stackable grid">
            <div class="column officer">
                <!-- <img class="ui image centered" src="{{ ('img/officers/Ngo%20(low-res).jpg') }}"> -->
                <div class="name">
                    Ivan Jason Dichaves
                </div>
                <div class="description">
                    President
                </div>
            </div>
            <div class="column officer">
                <!-- <img class="ui image centered" src="{{ asset('img/officers/Go%20(low-res).jpg') }}"> -->
                <div class="name">
                    Jonathan Go
                </div>
                <div class="description">
                    Executive Vice President for Internals
                </div>
            </div>
            <div class="column officer">
                <!-- <img class="ui image centered" src="{{ asset('img/officers/Dino%20(low-res).jpg') }}"> -->
                <div class="name">
                    Charles Stepven Lin
                </div>
                <div class="description">
                    Executive Vice President for Externals
                </div>
            </div>
            <div class="column officer">
                <!-- <img class="ui image centered" src="{{ asset('img/officers/Paragas%20(low-res).jpg') }}"> -->
                <div class="name">
                    Myles Russel Chan
                </div>
                <div class="description">
                    Executive Vice President for Operations
                </div>
            </div>
            <div class="column officer">
                <!-- <img class="ui image centered" src="{{ asset('img/officers/Gallega%20(low-res).jpg') }}"> -->
                <div class="name">
                    Gabriel Lorenzo Dela Cruz
                </div>
                <div class="description">
                    Executive Vice President for Laguna Campus
                </div>
            </div>
        </div>
        <div class="ui buttons container">
            <g-link class="ui lscs_blue button" to="/officers">
                <span>See the Rest</span>
            </g-link>
        </div>
    </section>
  </Layout>
</template>

<page-query>
query { 
  allBlog: allBlog (limit: 4) {
    totalCount
    edges {
      node {
        title
        date
        featuredImage
        excerpt
        author
        content
        path
      }
    }
  }
}
</page-query>

<script src="~/assets/js/particles.js"></script>

<script>
import moment from 'moment'

import Particles from '../components/particles'

import '~/assets/css/index/welcome.css'

export default {
    components: {
        Particles
    },

    methods: {
        dateString(date) {
            return moment(date, 'DD/MM/YYYY, h:mm:s a').format('MMMM DD, YYYY')
        },
    }
}
</script>

<style>


</style>
