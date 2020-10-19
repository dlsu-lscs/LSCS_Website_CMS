<template>
    <div>
        <swiper id="awards-carousel" class="swiper desktop" :options="swiperOptions">
            <swiper-slide v-for="award in awards"
                :key="award.year"
                :id="award.year"
                class="ui card"
                :style="{
                    ...cardHeight,
                    boxShadow: '2px 2px 10px #000000',
                    borderRadius: 0,
                    backgroundColor: '#1c1c1c',
                }"
            >   
                <AwardCard :award="award"/>
            </swiper-slide> 
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <swiper id="awards-carousel" class="swiper mobile" :options="swiperOptionsMobile">
            <swiper-slide v-for="award in awards"
                :key="award.year"
                :id="award.year"
                class="ui card award-slide-mobile"
                :style="{
                    ...cardHeight,
                    boxShadow: 'none',
                    borderRadius: 0,
                }"
            >   
                <AwardCard :award="award"/>
            </swiper-slide> 
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AwardCard from '../components/award-card'

export default {
    props: {
        awards: Array
    }, 

    components: {
        Swiper,
        SwiperSlide,
        AwardCard
    },

    data() {
        return {
            cardHeight: {}, 
            swiperOptions: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                // loopFillGroupWithBlank: false,
                spaceBetween: 30,
                // centeredSlides: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionsMobile: {}
        }
    },

    methods: {
        matchHeight() {
            let container = document.getElementById('awards-carousel')
            let heightString = (container.clientHeight) + 'px'
            this.$set(this.cardHeight, 'height', heightString)
        }
    },

    mounted() {
        this.matchHeight()
        this.swiperOptionsMobile = { ...this.swiperOptions }
        this.swiperOptionsMobile.slidesPerView = 1
        this.swiperOptionsMobile.slidesPerGroup = 1 
    }
}
</script>

<style scoped>

</style>