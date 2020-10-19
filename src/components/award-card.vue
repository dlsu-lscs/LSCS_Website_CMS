<template>
    <div class="content ui opensans">
        <h5 :style="{
                color: 'white',
            }"
        >
            <div class="ui header opensans center" 
                :style="{
                    color: 'white'
                }"
            > {{ award.year - 1 }} - {{ award.year }} </div>
            <div class="description center">
                <div v-for="(item, index) in award.awards" :key="index">
                    <div class="lscs_yellow" v-html="item.title"></div>
                    <div v-html="item.description"></div>
                    <br>
                </div>
            </div> 
        </h5>
    </div>
</template>

<script>
export default {
    props: {
        award: Array
    } 
}
</script>

<style scoped>

</style>