<template>
    <nav id="navigation" class="ui secondary menu" :class="{ scroll: top }">
        <g-link to="/">
            <div class="brand">
                <g-image src="~/assets/favicon/apple-touch-icon-152x152.png" alt="" width="40" />
                <span class="text"> La Salle Computer Society </span>
            </div>
        </g-link>
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
            >
                Blogs
            </g-link>
            <g-link class="item"
                to="/officers"
                exact
            >
                Officers
            </g-link>
            
            <div @click="modal" class="item">
                <g-link class="ui blue button contact_us_button">
                    Contact Us
                </g-link>
            </div>
        </div>
        
        <div class="right menu mobile">
            <div class="content">
                <div class="ui inline dropdown"
                    :class="{ inverted: !top }"
                    tabindex="0"
                    @click="show = !show"
                >
                    <div v-if="path === '/'" class="text"> <i class="icon home"> </i> Home </div>
                    <div v-if="path === '/about-us'" class="text"> <i class="icon lightbulb"> </i> About LSCS </div>
                    <div v-if="path === '/blogs'" class="text"> <i class="icon pencil"> </i> Blogs </div>
                    <div v-if="path === '/officers'" class="text"> <i class="icon users"> </i> Officers </div>
                    <i class="icon dropdown"> </i>
                    <transition name="shrink">
                        <div v-if="show" class="vertical menu transition visible">
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
                            <div @click="modal" class="item contactus-button"><i class="icon phone"> </i> Contact Us</div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <contact-modal ref="contactModal" />
    </nav>
</template>

<script>
import ContactModal from './contact-modal'

export default {
    components: {
        ContactModal
    },

    data() {
        return {
            top: true,
            path: this.$route.path,
            show: false,
        }
    },

    methods: {
        handleScroll (event) {
            if (!process.browser) return

            this.top = window.scrollY < 50
        },

        modal() {
            this.$refs.contactModal.show()
        },
    },

    created() {
        if (!process.browser) return

        this.top = window.scrollY < 50
        window.addEventListener('scroll', this.handleScroll)
    },

    destroyed() {
        if (!process.browser) return

        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

<style scoped>
.shrink-enter-active {
    animation: shrink .25s;
}

.shrink-leave-active {
    animation: shrink .25s reverse;
}

@keyframes shrink {
    0% {
        transform: translate(0, -52%) scale(1, 0);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0) scale(1, 1);
        opacity: 1;
    }
}
</style>