<template>
  <div class="image-text">
        <!-- <div class="tint" v-if="background" :style="{
            backgroundColor: background,
        }" /> -->

        <g-image src="~/assets/img/events/5.png" :height="height" class="opacity" :class="imgClass" :quality="90"/>
        
        <div class="centered" :style="{ color: textColor }">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        background: String,
        textColor: String,
        src: String,
        height: {
            type: String,
            default: '700',
        },
        imgClass: String,
    }
}
</script>

<style scoped>
.image-text {
  position: relative;
  text-align: center;
  color: white;
  overflow: hidden;
}

.opacity {
    opacity: 0.60;
}

.tint {
    position: 'absolute';
    top: 0;
    width: 100%;
    height: 100%;
}

.centered {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 72px;
  font-weight: 600;
}
</style>