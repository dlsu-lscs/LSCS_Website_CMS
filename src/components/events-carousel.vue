<template>
    <swiper class="swiper" :options="swiperOptions">
        <swiper-slide v-for="event in events" :key="event.url">
            <div class="image-container">
                <g-image :src=event.url alt="image" class="ui centered image"/>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import 'swiper/css/swiper.css'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
    props: ["events"],

    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            swiperOptions: {
                spaceBetween: 30,
                centeredSlides: true,
                loop: true, 
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
            }
        }
    }
}
</script>
<style scoped>
.image {
    height: 60vh; 
}
@media screen and (max-width: 900px) {
    .image {
        height: 40vh; 
    }
}
</style>