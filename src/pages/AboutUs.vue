<template>
  <Layout>
    <div id="about_us" class="ui page container">
        <div id="vision_mission">
            <h3> 
                <i class="icon lscs_blue lightbulb outline"> </i>
                <span class="lscs_blue"> ABOUT </span> 
                <span class="lscs_yellow"> LSCS </span> 
            </h3>
            <p class="information">
                La Salle Computer Society is the pioneering organization in the College
                of Computer Studies now on its 35th year of service for the Lasallian community.
                Developing members to become competent and well-rounded Lasallians who are
                aware of the numerous advances in computer technology.
            </p>
            <div class="ui stackable grid">
                <div class="eight wide column">
                    <h3> 
                        <i class="icon lscs_yellow eye"> </i>
                        <span class="lscs_yellow"> LSCS </span>
                        <span class="lscs_blue"> VISION </span>
                    </h3>
                    <p class="information">
                        We envision the La Salle Computer Society to be an organization that, through quality assistance and activities, will mold its members academically, socially and spiritually in order for them to become competent Lasallian students and well-rounded individuals. We also see the organization to be the pioneering student organization of the De La Salle University Manila that strongly symbolizes the expertise of the College of Computer Studes (CCS) in the field of computer science.
                    </p>
                </div>
                <div class="eight wide column">
                    <h3> 
                        <i class="icon lscs_yellow flag outline"> </i>
                        <span class="lscs_yellow"> LSCS </span>
                        <span class="lscs_blue"> MISSION </span>
                    </h3>
                    <div class="information">
                        The La Salle Computer Society shall serve as a venue for the 
                        growth and development of its member through a three-step course of:
                        <ul class="list">
                            <li> <b>Purpose</b> </li>
                            to know and understand the reason behind every act, decision, and endeavor pursued.

                            <li> <b>Process</b>  </li>
                            to organize and oversee the entire procedure of every project and make sure that each goes through very necessary step towards the purpose.

                            <li> <b>Excellence</b> </li>
                            to accomplish our goals in the best way possible and in accordance with the ideals of the organization and of De La Salle University Manila.
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="recognitions">
        <h3 class="center"> 
            <i class="icon lscs_yellow star"> </i>
            <span class="lscs_yellow"> LSCS </span>
            <span class="lscs_blue"> RECOGNITIONS </span>
        </h3>
        <div id="timeline">
            <div class="mobile action">
                <a class="white ui link prev-date"> 
                    <i class="icon angle left"></i>
                </a>
                <a class="white ui link next-date"> 
                    <i class="icon angle right"></i>
                </a>  
            </div>
            <div id="dates" class="desktop">
                <div v-for="award in awards"
                    :key="award.year"
                    :data-id="award.year"
                    class="date"
                    :class="{
                        selected: award.year === selectedYear
                    }"
                > 
                    <a @click="selectedYear = award.year"> <h4 class="opensans"> {{ award.year - 1 }} - {{ award.year }} </h4></a> 
                </div>
            </div>
            <div id="events">
                <div v-for="award in awards"
                    :key="award.year"
                    :id="award.year"
                    class="event"
                    :class="{ selected: award.year === selectedYear }"
                >   
                    <h3 class="ui opensans center aligned icon header white"> 
                        <i class="icon trophy circular"></i>
                        <div v-html="award.html"></div>
                        <div class="opensans ui lscs_light_gray center header mobile"> {{ award.year - 1 }} - {{ award.year }} </div>            
                    </h3>
                </div>  
            </div>
        </div>
    </div>

    <div id="what_we_do" class="ui page container">
        <h3> 
            <i class="icon lscs_blue pencil"> </i>
            <span class="lscs_blue"> WHAT WE </span>
            <span class="lscs_yellow"> DO </span>
        </h3>
        <p class="information">
            La Salle Computer Society has been bridging out the student body to the corporate world by opening up avenues for them to be developed holistically as well-rounded La Sallians, La Salle Computer Society has been 33 years of family.
        </p>
        <div id="what_we_do_images" class="ui stackable grid">
            <div class="four wide column"> 
                <g-image src="~/assets/img/events/01.jpg" alt="image_1" width="320" class="ui image" />
            </div>
            <div class="twelve wide column"> 
                <p class="information">
                    Continuously develops and enhances the intrapersonal skills of the members with other people as well as given them a sense of empathic understanding on different cultures, environment, and communities.
                </p>
            </div>
            <div class="four wide centered column"> 
                <g-image src="~/assets/img/events/02.jpg" alt="image_1" width="320" class="ui image" />
            </div>
            <div class="twelve wide column"> 
                <p class="information">
                    De La Salle University is one of the best institutions in the Philippines to offer computer science and information systems which is why this organization works hand in hand with the administrative office of the college, striving for the best in molding its members academically as well as opened up an avenue for them to be bridged out in the outside world.
                </p>
            </div>
            <div class="four wide column"> 
                <g-image src="~/assets/img/events/03.jpg" alt="image_1" width="320" class="ui image" />
            </div>

            <div class="twelve wide column"> 
                <p class="information">
                LSCS has truly inspired individuals through Socio-Civic activities, further eliminating the rumor of being an apathethic CCS student.    
                </p>
            </div>
        </div>
    </div>

    <div id="affiliations" class="ui page container">
        <h3> 
            <i class="icon users lscs_yellow pencil"> </i>
            <span class="lscs_yellow"> LSCS </span>
            <span class="lscs_blue"> AFFILIATIONS </span>
        </h3>
        <div id="affiliations_images" class="ui stackable grid">
            <div class="twelve wide column"> 
                <p class="information">
                    The College of Computer Studies (CCS) is an educational
                    institution commited to its three-pronged vision of continually sharing knowledge
                    and expertise through teaching. Engaging in Computer Science research and
                    information technology product development, and rendering service to communities in
                    need.
                </p>
            </div>
            <div class="four wide column"> 
                <g-image src="https://www.dlsu.edu.ph/wp-content/uploads/2018/02/CCS-logo.jpg"  width="220" alt="image_1" class="ui image" />
            </div>
            <div class="twelve wide column"> 
                <p class="information">
                    The Philippine Computing Organizations Alliance (PCOA) is the
                    union of the student organizations (from different universities in the Philippines)
                    that specialize in computer studies and information technology.
                </p>
            </div>
            <div class="four wide column"> 
                <g-image src="~/assets/img/icons/pcoa_logo.png" alt="image_1"  width="220" class="ui image" />
            </div>
            <div class="twelve wide column"> 
                <p class="information">
                    The Council of Student Organizations (CSO) is the union of 42
                    accredited student organizations, categorized as professional, special interest and
                    the socio-civic organizations, of De La Salle University Manila. Since it's
                    founding in 1974, the Council continuously delivered quality student services and
                    produced outstanding student leaders dedicated to serving the Lasallian community.   
                </p>
            </div>
            <div class="four wide column"> 
                <g-image src="~/assets/img/icons/cso_logo.png" alt="image_1"  width="220" class="ui center image" />
            </div>
        </div>
    </div>

    <div id="fun_facts">
        <h3 class="center"> 
            <i class="icon lscs_blue star outline"> </i>
            <span class="lscs_blue"> FUN </span>
            <span class="lscs_yellow"> FACTS </span>
        </h3>
        <div class="ui three column stackable grid">
            <div class="ui column">
                <h2 class="ui compact header"> <i class="icon smile white"> </i> </h2>
                <h2 class="value white">
                    33
                </h2>
                <h4 class="label white opensans">
                    YEARS OF RELATIONAL ACTIVITIES
                </h4>
            </div>
            <div class="ui column white">
                <h2 class="ui compact header"> <i class="icon trophy white"> </i> </h2>
                <h2 class="value white">
                    33
                </h2>
                <h4 class="label white opensans">
                    YEARS OF ACADEMIC EXCELLENCE
                </h4>
            </div>
            <div class="ui column white">
                <h2 class="ui compact header"> <i class="icon users white"> </i> </h2>
                <h2 class="value white">
                    33
                </h2>
                <h4 class="label white opensans">
                    YEARS OF COMMUNITY ENGAGEMENT
                </h4>
            </div>
        </div>
    </div>
    <div id="sponsors_partners" class="ui page container">
        <div class="ui stackable centered grid">
            <div class="eight wide column">
                <h3 class="center"> 
                    <span class="lscs_blue"> OUR </span>
                    <span class="lscs_yellow"> SPONSORS </span>
                    <g-image src="~/assets/img/sponsors/navitaire.jpg" alt="" class="ui center image" width="300px" />
                    <g-image src="~/assets/img/sponsors/ob.png" alt="" class="ui center image" width="450px" />
                    <g-image src="~/assets/img/sponsors/jpmorgan_black.png" alt="" class="ui center image" width="300px" />
                </h3>
            </div>
            <!-- <div class="eight wide column">
                <h3 class="center"> 
                    <i class="icon users lscs_blue"></i>
                    <span class="lscs_blue"> OUR </span>
                    <span class="lscs_yellow"> PARTNERS </span>
                </h3>
            </div> -->
        </div>
    </div>
  </Layout>
</template>

<script src="~/assets/js/timeline.js"></script>

<script>
import '~/assets/css/index/about.css'

export default {
  metaInfo: {
    title: 'About us'
  },

  data() {
    return {
        selectedYear: 1998,
        awards: [
            {
                year: 1998,
                html: `AMONGST THE <span class="lscs_yellow"> TOP 5 </span> IN THE COUNCIL OF STUDENT ORGANIZATIONS`
            },
            {
                year: 2003,
                html: `<span class="lscs_yellow"> ROTARACT CLUB: </span> PLAQUE OF APPRECIATION 
                        <div class="opensans ui lscs_light_gray center header mobile"> 2002 - 2003 </div>`
            },
            {
                year: 2007,
                html: `<span class="lscs_yellow"> HARVEST OF WINNERS: </span> <br> 
                        OUTSTANDING SOCIO-CIVIC PROJECT<br>
                        CLIP`
            },
            {
                year: 2010,
                html: `<span class="lscs_yellow"> HARVEST OF WINNERS: </span> <br> 
                        MOST EFFICIENT ORGANIZATION IN PROCESSING ACTIVITIES`
            },
            {
                year: 2014,
                html: `<span class="lscs_yellow"> HARVEST OF WINNERS: </span> <br> 
                        STUDENT DISCIPLINE OFFICE AWARD`
            },
            {
                year: 2018,
                html: `<span class="lscs_yellow"> CSO INTERNALS ACCREDITATION: </span> <br> 
                        TOP 1 IN TERM 3`
            },
        ]
    }
  }
}
</script>