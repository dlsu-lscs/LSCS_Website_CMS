<template>
    <footer>
        <div class="ui column stackable centered grid sitemap">
            <div class="four wide column page">
                <div class="ui column stackable grid">
                    <h5 class = "six wide column white">
                        Home
                    </h5>
                    <ul class = "ten wide column">
                        <li><g-link class = "link lscs_lighter_gray" to="/home#about_us">    About Us Section    </g-link></li>
                        <li><g-link class = "link lscs_lighter_gray" to="/home#blogs">       Blog Section        </g-link></li>
                        <li><g-link class = "link lscs_lighter_gray" to="/home#officers">    Officers Section    </g-link></li>
                    </ul>
                </div>
            </div>
            <div class="four wide column page">
                <div class="ui column stackable grid">
                    <h5 class = "six wide column white">
                        About Us
                    </h5>
                    <ul class = "ten wide column">
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/about#">                Details                 </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/about#vision_mission">  Vision/Mission          </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/about#recognitions">    Recognitions            </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/about#what_we_do">      Objectives              </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/about#affiliations">    Affiliations            </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/about#fun_facts">       Other Facts/Sponsors    </g-link></li>
                    </ul>
                </div>
            </div>

            <div class="four wide column page">
                <div class="ui column stackable grid">
                    <h5 class = "five wide column white">
                        Officers
                    </h5>
                    <ul class = "eleven wide column">
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#">                      Core                        </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#academics">             Academics                   </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#hrd">                   Human Resource Development  </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#rnd">                   Research & Development      </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#tnd">                   Training & Development      </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#corporate_relations">   Corporate Relations         </g-link></li>
                    </ul>
                </div>
            </div>
            <div class="four wide column page">
                <div class="ui column grid">
                    <ul class="sixteen wide column">
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#publicity_creatives">   Publicity & Creatives       </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#publications">          Publications                </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#socio_civic">           Socio-Civic                 </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#university_relations">  University Relations        </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#documentations">        Documentations & Logistics  </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#finance">               Finance                     </g-link></li>
                        <li><g-link class = "scroll-spy link lscs_lighter_gray" to="/officers#laguna_campus">         Laguna Campus               </g-link></li>
                    </ul>
                </div>
            </div>
            <!-- <div class="four wide column page">
                <div class="ui column stackable grid">
                    <h5 class = "white six wide column">
                        Blogs
                    </h5>
                    @if(isset($blogs) && $blogs->count() != 0)
                    <ul class = "ten wide column">
                        @foreach ($blogs as $blog)
                        <li> 
                            <g-link class = "link lscs_lighter_gray" to = "{{ route('blog', ['blog_id' => $blog->id]) }}"> {{ $blog->title }} </g-link>
                        </li>
                        @endforeach
                    </ul>
                    @else
                    <ul class = "ten wide column">
                        <li> 
                            <g-link class = "link lscs_lighter_gray">  Coming Soon  </g-link>
                        </li>
                    </ul>
                    @endif
                </div>
            </div> -->
        </div>

        <div id="social_media" class = "ui center">
            <g-link class="white link" to="https://www.facebook.com/LaSalleComputerSociety" target="_blank">
                <i class="icon facebook f"> </i>
            </g-link>

            <g-link class="white link" to="https://twitter.com/dlsu_LSCS" target="_blank">
                <i class="icon twitter"> </i>
            </g-link>

            <g-link class="white link" to="https://www.instagram.com/dlsu_lscs/" target="_blank">
                <i class="icon instagram"> </i>
            </g-link>
        </div>
        <div id="logo" class = "ui center">
            <p class = "ui white center">
                <g-image src="~/assets/favicon/favicon-32x32.png" />
                <span>La Salle Computer Society. All Rights Reserved 2018</span> 
            </p>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>