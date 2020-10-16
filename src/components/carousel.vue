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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
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
                }, 
            ]
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