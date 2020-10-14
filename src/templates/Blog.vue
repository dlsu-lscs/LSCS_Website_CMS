<template>
    <Layout>
        <div id="blog" class="ui container">
            <div class="center">
                <h3 class="ui compact header black"> 
                    {{ $page.blog.title }}
                </h3>
                <h5 class="ui compact header"> {{ $page.blog.subtitle }} </h5>
            </div>
            <div class="desktop metadata ui three column grid">
                <div class="column">
                    <div class="left">
                        by: {{ $page.blog.author }}
                    </div>
                </div>
                <div class="column">
                    <div class="center">
                    
                    </div>
                </div>
                <div class="column">
                    <div class="right">
                        {{ dateString($page.blog.date) }} 
                    </div>
                </div>
            </div>
            <div class="mobile metadata">
                <div class="left">
                    by: {{ $page.blog.author }} <br>
                    {{ dateString($page.blog.date) }} 
                </div>
            </div>
            <hr>
            <div class="ui body container">
                <img class="ui center image" :src="$page.blog.featuredImage" alt="blog" width="75%"/>
                <div v-html="$page.blog.content">
                </div>
            </div>
            <hr>
        </div>
    </Layout>
</template>

<page-query>
query Blog ($path: String!) {
	blog: blog (path: $path) {
        title
        subtitle
        author
        featuredImage (width: 100, quality: 100)
        content
        date
    }
}
</page-query>

<script>
import '~/assets/css/index/blog.css'
import 'github-markdown-css'

import moment from 'moment'

export default {
    metaInfo() {
        return {
            title: this.$page.blog.title
        }
    },

    methods: {
        dateString(date) {
            return moment(date).format('MMMM DD, YYYY')
        }
    }
}
</script>

<style scoped>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}

/* markdown image resize */
div > p > img {
    width: 75%;
    max-width: 500px;
}

div#logo > p > img {
    width: 32px;
}
</style>