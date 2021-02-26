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

        <section id="about_us" :style="{ overflow: 'hidden' }">
            <div v-waypoint="{ active: true, callback: aboutUsTrigger, options: intersectionOptions }"></div>
            <transition name="fade-up-2000ms">
                <div v-if="aboutUs">
                    <header><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                        <h5 class="ui compact white header"> ABOUT </h5>
                        <h3 class="ui compact lscs_yellow header"> LSCS </h3>
                    </header>
                    <p>
                        La Salle Computer Society is the pioneering organization in the College of Computer Studies now on its 35th year of service for the Lasallian community.
                        Developing members to become competent and well-rounded Lasallians who are aware of the numerous advances in computer technology.
                    </p>
                    <g-link class="ui lscs_yellow button" to="/about-us">
                        <span>Read More</span>
                    </g-link>
                </div>
            </transition>
        </section>

        <section id="upcoming_events">
            <div>
                <h3 class="ui centered lscs_blue header">
                    EVENTS
                </h3>
                <EventsCarousel :events="events"/> 
            </div>
        </section>

        <section id="blogs">
            <div v-waypoint="{ active: true, callback: blogsTrigger, options: intersectionOptions }"></div>
            <div>
                <h3 class="ui centered lscs_blue header">
                    BLOGS
                </h3>
                
                <transition name="slide-left">
                    <div v-if="blogs">
                        <div v-if="$page.allBlog.totalCount !== 0">
                            <div class="ui centered stackable cards">
                                <div v-for="(blog, index) in $page.allBlog.edges"
                                    :key="index"
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
                </transition>
            </div>
        </section>

        <section id="officers">
            <div v-waypoint="{ active: true, callback: officersTrigger, options: intersectionOptions }"></div>
            <h3 class="ui centered lscs_blue header">
                <span class="lscs_yellow">LSCS </span>
                <span class="lscs_blue">OFFICERS</span>
            </h3>
            <!-- 
                - Update the CORE list
                - Change arrangement to Operations, Internals, President, Externals, Laguna
                - Add CORE Photos
            -->
            <div class="ui five column stackable grid">
                <transition name="fade-up-1750ms">
                    <div v-if="operation" class="column officer">
                        <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Myles.png" />
                        <div class="name">
                            Myles Russel Chan
                        </div>
                        <div class="description">
                            Executive Vice President for Operations
                        </div>
                    </div>
                </transition>
                <transition name="fade-up-1250ms">
                    <div v-if="internal" class="column officer">
                        <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Legs.png" />
                        <div class="name">
                            John Gabriel Legaspi
                        </div>
                        <div class="description">
                            Executive Vice President for Internals
                        </div>
                    </div>
                </transition>
                <transition name="fade-up-1000ms">
                    <div v-if="president" class="column officer">
                        <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Reb.png" />
                        <div class="name">
                            Rebecalyn Lao
                        </div>
                        <div class="description">
                            President
                        </div>
                    </div>
                </transition>
                <transition name="fade-up-1500ms">
                    <div v-if="external" class="column officer">
                        <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Noki.png" />
                        <div class="name">
                            Noki Topacio
                        </div>
                        <div class="description">
                            Executive Vice President for Externals
                        </div>
                    </div>
                </transition>
                <transition name="fade-up-2000ms">
                    <div v-if="laguna" class="column officer">
                        <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Mich.png" />
                        <div class="name">
                            Michele Gelvoleo
                        </div>
                        <div class="description">
                            Executive Vice President for Laguna Campus
                        </div>
                    </div>
                </transition>
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
            aboutUs: false,
            blogs: false,
            president: false,
            external: false,
            internal: false,
            operation: false,
            laguna: false,
            intersectionOptions: {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: [ 0.25, 0.75 ] // [0.25, 0.75] if you want a 25% offset!
            },
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
    },

    methods: {
        aboutUsTrigger({ going, direction }) {
            if (going === this.$waypointMap.GOING_IN && direction === this.$waypointMap.DIRECTION_TOP) {
                this.aboutUs = true
            }
        },

        blogsTrigger({ going, direction }) {
            if (going === this.$waypointMap.GOING_IN && direction === this.$waypointMap.DIRECTION_TOP) {
                this.blogs = true
            }
        },

        officersTrigger({ going, direction }) {
            if (going === this.$waypointMap.GOING_IN && direction === this.$waypointMap.DIRECTION_TOP) {
                this.president = true
                this.external = true
                this.internal = true
                this.operation = true
                this.laguna = true
            }
        },
    }
}
</script>

<style scoped>
.fade-up-2000ms-enter-active {
    animation: fade-up 2s;
}

.fade-up-1750ms-enter-active {
    animation: fade-up 1.75s;
}

.fade-up-1500ms-enter-active {
    animation: fade-up 1.5s;
}

.fade-up-1250ms-enter-active {
    animation: fade-up 1.25s;
}

.fade-up-1000ms-enter-active {
    animation: fade-up 1s;
}

.slide-left-enter-active {
    animation: slide-right 0.75s;
}

@keyframes slide-right {
    0% {
        transform: translateX(200px);
    }
    75% {
        transform: translateX(-25px);
    }
    100% {
        transform: translateX(0px);
    }
}

@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
