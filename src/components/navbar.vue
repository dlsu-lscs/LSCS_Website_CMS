<template>
  <nav id="navigation" class="ui secondary menu" :class="{ scroll: top }">
        <div class = "brand">
            <g-image src="~/assets/favicon/apple-touch-icon-152x152.png" alt="" width="40" />
            <span class = "text"> La Salle Computer Society </span>
        </div> 
        <div class="desktop right menu">
            <g-link class="item"
                to="/"
                exact
            >
                Home
            </g-link>
            <g-link class="item"
                to="/about-us"
                exact
            >
                About Us
            </g-link>
            <g-link class="item"
                to="/blogs"
                exact
            >
                Blogs
            </g-link>
            <g-link class="item"
                to="/officers"
                exact
            >
                Officers
            </g-link>
            
            <div class="item">
                <g-link class="ui blue button contact_us_button">
                    Contact Us
                </g-link>
            </div>
        </div>
        
        <div class="right menu mobile">
            <div class="content">
                <div class="ui inline dropdown" :class="{ inverted: top }"  tabindex="0">
                    <div v-if="path === '/'" class="text"> <i class="icon home"> </i> Home </div>
                    <div v-if="path === '/about-us'" class="text"> <i class="icon lightbulb"> </i> About LSCS </div>
                    <div v-if="path === '/blogs'" class="text"> <i class="icon pencil"> </i> Blogs </div>
                    <div v-if="path === '/officers'" class="text"> <i class="icon users"> </i> Officers </div>
                    <i class="icon dropdown"> </i>
                    <div class="vertical menu">
                        <g-link class="item"
                            to="/"
                            exact
                        > <i class="icon home"> </i> Home </g-link>
                        <g-link class="item"
                            to="/about-us"
                            exact
                        > <i class="icon lightbulb"> </i> About LSCS</g-link>
                        <g-link class="item"
                            to="/blogs"
                            exact
                        > <i class="icon pencil"> </i> Blogs</g-link>
                        <g-link class="item"
                            to="/officers"
                            exact
                        > <i class="icon users"> </i> Officers</g-link>
                        <g-link class="item contactus-button"><i class="icon phone"> </i> Contact Us</g-link>
                    </div>
                </div>
            </div>
        </div>
  </nav>
</template>

<script>
export default {
    methods: {
        handleScroll (event) {
            this.top = window.scrollY < 50
        }
    },

    created () {
        this.top = window.scrollY < 50
        window.addEventListener('scroll', this.handleScroll)
    },

    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },

    data() {
        return {
            top: true,
            path: this.$route.path,
        }
    },
}
</script>

<style>

</style>