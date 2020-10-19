<template>
    <footer>
        <div class="ui column stackable centered grid sitemap">
            <div class="four wide column page">
                <div class="ui column stackable grid">
                    <h5 class="six wide column white">
                        Home
                    </h5>
                    <ul class="ten wide column">
                        <li><g-link class="link lscs_lighter_gray" to="/">          About Us Section    </g-link></li>
                        <li><g-link class="link lscs_lighter_gray" to="/#blogs">    Blog Section        </g-link></li>
                        <li><g-link class="link lscs_lighter_gray" to="/#officers"> Officers Section    </g-link></li>
                    </ul>
                </div>
            </div>
            <div class="four wide column page">
                <div class="ui column stackable grid">
                    <h5 class="six wide column white">
                        About Us
                    </h5>
                    <ul class="ten wide column">
                        <li><g-link class="scroll-spy link lscs_lighter_gray" to="/about-us">               Details        </g-link></li>
                        <li><g-link class="scroll-spy link lscs_lighter_gray" to="/about-us#vision_mission">Vision/Mission </g-link></li>
                        <li><g-link class="scroll-spy link lscs_lighter_gray" to="/about-us#recognitions">  More           </g-link></li>
                    </ul>
                </div>
            </div>

            <div class="four wide column page">
                <div class="ui column stackable grid">
                    <h5 class="five wide column white">
                        Officers
                    </h5>
                    <ul class="eleven wide column">
                        <li><g-link class="scroll-spy link lscs_lighter_gray" to="/officers">       Core      </g-link></li>
                        <li><g-link class="scroll-spy link lscs_lighter_gray" to="/officers#acads"> Commitees </g-link></li>
                        <li><g-link class="scroll-spy link lscs_lighter_gray" to="/officers#hrd">   More      </g-link></li>
                    </ul>
                </div>
            </div>
            <div class="four wide column page">
                <div class="ui column stackable grid">
                    <h5 class="five wide column white">
                        Blogs
                    </h5>
                    <ul v-if="$static.footerBlog.totalCount === 0" class="eleven wide column">
                        <li><g-link class="link lscs_lighter_gray"> Coming Soon </g-link></li>
                    </ul>
                    <ul v-else class="eleven wide column">
                        <li v-for="(blog, index) in $static.footerBlog.edges" :key="index">
                            <g-link class="scroll-spy link lscs_lighter_gray" :to="blog.node.path">
                                {{ blog.node.title }}
                            </g-link>
                        </li>
                        <li><g-link class="scroll-spy link lscs_lighter_gray" to="/blogs">More</g-link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="social_media" class="ui center">
            <g-link class="white link" to="https://www.facebook.com/LaSalleComputerSociety" target="_blank">
                <i class="icon facebook f"> </i>
            </g-link>

            <g-link class="white link" to="https://twitter.com/dlsu_LSCS" target="_blank">
                <i class="icon twitter"> </i>
            </g-link>

            <g-link class="white link" to="https://www.instagram.com/dlsu_lscs/" target="_blank">
                <i class="icon instagram"> </i>
            </g-link>

            <g-link class="white link" to="https://www.youtube.com/c/LaSalleComputerSociety" target="_blank">
                <i class="icon youtube"> </i>
            </g-link>
        </div>
        <div id="logo" class="ui center">
            <p class="ui white center">
                <g-image src="~/assets/favicon/favicon-32x32.png" />
                <span>La Salle Computer Society. All Rights Reserved 2020</span> 
            </p>
        </div>
    </footer>
</template>

<static-query>
query Footer {
  footerBlog: allBlog (limit: 2) {
    totalCount
    edges {
      node {
        title
        path
      }
    }
  }
}
</static-query>