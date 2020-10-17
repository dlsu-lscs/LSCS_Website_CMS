<template>
    <Layout>
        <Particles />
        <section id="introduction" class="ui center slide">
            <div id="particles" class="background"> </div>
            <div class="content">
                <iframe id="video"
                    src="https://www.youtube.com/embed/1RhUN5LkPCg"
                    frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </section>

        <section id="about_us">
            <header class="wow fadeInUp"><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <h5 class="ui compact white header"> ABOUT </h5>
                <h3 class="ui compact lscs_yellow header"> LSCS </h3>
            </header>
            <p class="wow fadeInUp">
                La Salle Computer Society is the pioneering organization in the College of Computer Studies now on its 35th year of service for the Lasallian community.
                Developing members to become competent and well-rounded Lasallians who are aware of the numerous advances in computer technology.
            </p>
            <g-link class="ui lscs_yellow button" to="/about-us">
                <span>Read More</span>
            </g-link>
        </section>

        <section id="upcoming_events">
            <div class="wow fadeInUp">
                <h3 class="ui centered lscs_blue header">
                    EVENTS
                </h3>
                <EventsCarousel :events="events"/> 
            </div>
        </section>

        <section id="blogs">
            <div class="wow fadeInUp">
                <h3 class="ui centered lscs_blue header">
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
                                    {{ blog.node.date }} <br>
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
            <h3 class="wow fadeInUp ui centered lscs_blue header">
                <span class="lscs_yellow">LSCS</span>
                <span class="lscs_blue">OFFICERS</span>
            </h3>
            <!-- 
                - Update the CORE list
                - Change arrangement to Operations, Internals, President, Externals, Laguna
                - Add CORE Photos
            -->
            <div class="ui five column stackable grid">
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Myles.png" />
                    <div class="name">
                        Myles Russel Chan
                    </div>
                    <div class="description">
                        Executive Vice President for Operations
                    </div>
                </div>
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Legs.png" />
                    <div class="name">
                        John Gabriel Legaspi
                    </div>
                    <div class="description">
                        Executive Vice President for Internals
                    </div>
                </div>
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Reb.png" />
                    <div class="name">
                        Rebecalyn Lao
                    </div>
                    <div class="description">
                        President
                    </div>
                </div>
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Noki.png" />
                    <div class="name">
                        Noki Topacio
                    </div>
                    <div class="description">
                        Executive Vice President for Externals
                    </div>
                </div>
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Gab.png" />
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
query Blogs {
  allBlog: allBlog (limit: 4) {
    totalCount
    edges {
      node {
        title
        date (format: "MMMM DD, YYYY")
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

<script>
import '~/assets/css/index/welcome.css'

import Particles from '../components/particles'
import EventsCarousel from '../components/events-carousel'

export default {
    components: {
        Particles,
        EventsCarousel 
    },
    
    data() {
        return {
            events: [
                {
                    name: "Event 1", 
                    url: require("@/assets/img/events/1.jpg")
                }, 
                {
                    name: "Event 2", 
                    url: require("@/assets/img/events/2.jpg")
                }, 
                {
                    name: "Event 3", 
                    url: require("@/assets/img/events/3.jpg")
                }, 
                {
                    name: "Event 4", 
                    url: require("@/assets/img/events/4.jpg")
                }, 
                {
                    name: "Event 5", 
                    url: require("@/assets/img/events/5.png")
                }
            ]
        }
    }
}
</script>

<style>

</style>
