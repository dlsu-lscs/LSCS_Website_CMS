<template>
    <Layout>
        <div id="blogs" class="ui container">
            <div v-if="false" class="ui slide center">
                <div>
                    <g-image src="~/assets/img/macky.png" width="300" />
                    <h3 class="ui lscs_blue header">There are no blogs yet.</h3>
                    <h4 class="ui lscs_yellow header">Stay tuned for more updates!</h4>
                </div>
            </div>
            <h3 class="lscs_blue">    
                BLOGS 
            </h3>
            <div class="ui centered stackable cards">
                <div v-for="blog in $page.allBlog.edges" :key="blog.node.path" class="card">
                    <div class="image">
                        <img :src="blog.node.featuredImage" class="ui image" />
                    </div>
                    <div class="content">
                        <div class="header raleway">
                            {{ blog.node.title }}
                        </div>
                        <div class="meta">
                            {{ dateString(blog.node.date) }} <br>
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
            <br/>
            <br/>
            <div v-if="$page.allBlog.pageInfo.totalPages === 0" class="ui centered grid">
                No results returned.
            </div>
            <div v-else class="ui centered grid">
                <!-- <pagination :current="$page.allBlog.pageInfo.currentPage" :pages="$page.allBlog.totalCount" /> -->
                <pager :info="$page.allBlog.pageInfo"
                    class="ui pagination menu"
                    prevLabel="<"
                    nextLabel=">"
                    :range="6"
                    linkClass="desktop item"
                />
            </div>
        </div>
    </Layout>
</template>

<page-query>
query Blogs ($page: Int) { 
  allBlog: allBlog (perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
        totalPages
        currentPage
    }
    edges {
      node {
        title
        date
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
import moment from 'moment'

import '~/assets/css/index/blogs.css'

import { Pager } from 'gridsome'

export default {
    components: {
        Pager,
    },

    metaInfo: {
        title: 'Blogs'
    },

    methods: {
        dateString(date) {
            return moment(date).format('MMMM DD, YYYY')
        },
    },
}
</script>
