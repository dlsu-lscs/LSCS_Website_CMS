<template>
    <Layout>
        <div id="about_us" class="ui page container">
            <h3>
                <span class="lscs_blue"> ABOUT </span> 
                <span class="lscs_yellow"> LSCS </span> 
            </h3>
            <p class="information">
                La Salle Computer Society is the pioneering organization in the College
                of Computer Studies now on its 35th year of service for the Lasallian community.
                Developing members to become competent and well-rounded Lasallians who are
                aware of the numerous advances in computer technology.
            </p>
        </div>

        <div id="what_we_do" class="ui page container">
            <g-image src="~/assets/img/events/5.png" alt="image" height="400" position="bottom" class="ui image"/>
            <h3>
                <span class="lscs_blue"> WHAT WE </span>
                <span class="lscs_yellow"> DO </span>
            </h3>
            <p class="information">
                LSCS holds many on-campus and off-campus activities for the college.
                Some of these on-campus activities include programming seminars, workshops, fund-raising programs, and bazaars.
                For off-campus activities, these include outreach programs, company career talks, and many more.
            </p>
            <div id="what_we_do_images" class="ui stackable grid">
                <g-image src="~/assets/img/events/1.jpg" alt="image_3" width="200" height="200" quality="100"/>
                <g-image src="~/assets/img/events/2.jpg" alt="image_3" width="200" height="200" quality="100"/>
                <g-image src="~/assets/img/events/4.jpg" alt="image_3" width="200" height="200" quality="100"/>
                <g-image src="~/assets/img/events/5.png" alt="image_1" width="200" height="200" quality="100"/>
            </div>
        </div>

        <div id="vision_mission" class="ui page container">
            <div class="ui stackable grid">
                <div class="eight wide column">
                    <h3> 
                        <span class="lscs_yellow"> LSCS </span>
                        <span class="lscs_blue"> VISION </span>
                    </h3>
                    <p class="information">
                        We envision the La Salle Computer Society to be an organization that, through quality assistance and activities, will mold its members academically, socially and spiritually in order for them to become competent Lasallian students and well-rounded individuals. We also see the organization to be the pioneering student organization of the De La Salle University Manila that strongly symbolizes the expertise of the College of Computer Studes (CCS) in the field of computer science.
                    </p>
                </div>
                <div class="eight wide column">
                    <h3>
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

        <div id="recognitions">
            <h3 class="center"> 
                <span class="lscs_yellow"> LSCS </span>
                <span class="lscs_blue"> RECOGNITIONS </span>
            </h3>
            <div id="timeline">
                <div class="mobile action">
                    <div @click="prevYear()" class="white ui link prev-date"> 
                        <i class="icon angle left"></i>
                    </div>
                    <div @click="nextYear()" class="white ui link next-date"> 
                        <i class="icon angle right"></i>
                    </div>
                </div>
                <div id="dates" class="desktop">
                    <div v-for="(award, index) in awards"
                        :key="index"
                        :data-id="award.year"
                        class="date"
                        :class="{
                            selected: award.year === selectedYear
                        }"
                    > 
                        <a @click="updateYear(index, award.year)"> <h4 class="opensans"> {{ award.year - 1 }} - {{ award.year }} </h4></a> 
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

        <div id="affiliations" class="ui page container">
            <h3> 
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

        <div id="sponsors_partners" class="ui page container">
            <h3 class="left"> 
                <span class="lscs_blue"> OUR </span>
                <span class="lscs_yellow"> SPONSORS </span>
            </h3>
            <div class="ui stackable left grid">
                <div class="four wide column">
                    <g-image src="~/assets/img/sponsors/navitaire.jpg" alt="" class="ui left image" width="300" />
                    <g-image src="~/assets/img/sponsors/ob.png" alt="" class="ui left image" width="450" />
                </div>
                <div class="two wide column" />
                <div class="four wide column">
                    <g-image src="~/assets/img/sponsors/Accenture.png" alt="" class="ui left image" width="450" />
                    <g-image src="~/assets/img/sponsors/jpmorgan_black.png" alt="" class="ui left image" width="300" />
                </div>
                <div class="two wide column" />
                <div class="four wide column">
                    <g-image src="~/assets/img/sponsors/SGV.png" alt="" class="ui left image" width="175" />
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

<script>
import '~/assets/css/index/about.css'

import ImageText from '../components/contact-modal'

export default {
    props: {
        ImageText
    },

    metaInfo: {
        title: 'About us'
    },
    
    data() {
        return {
            selected: 0,
            selectedYear: 1998,
            awards: [
                {
                    year: 1998,
                    html: `AMONGST THE <span class="lscs_yellow"> TOP 5 </span> IN THE COUNCIL OF STUDENT ORGANIZATIONS`
                },
                {
                    year: 2003,
                    html: `
                        <span class="lscs_yellow"> ROTARACT CLUB: </span> PLAQUE OF APPRECIATION 
                    `
                },
                {
                    year: 2007,
                    html: `
                        <span class="lscs_yellow"> HARVEST OF WINNERS: </span> <br> 
                        OUTSTANDING SOCIO-CIVIC PROJECT<br>
                        CLIP
                    `
                },
                {
                    year: 2010,
                    html: `
                        <span class="lscs_yellow"> HARVEST OF WINNERS: </span> <br> 
                        MOST EFFICIENT ORGANIZATION IN PROCESSING ACTIVITIES
                    `
                },
                {
                    year: 2014,
                    html: `
                        <span class="lscs_yellow"> HARVEST OF WINNERS: </span> <br> 
                        STUDENT DISCIPLINE OFFICE AWARD
                    `
                },
                {
                    year: 2018,
                    html: `
                        <span class="lscs_yellow"> CSO INTERNALS ACCREDITATION: </span> <br> 
                        TOP 1 IN TERM 3
                    `
                },
                {
                    year: 2019,
                    html: `
                        <span class="lscs_yellow"> LASALLIAN EXCELLENCE AWARD: </span> <br>
                        OUTSTANDING PUBLICATION AWARD <br>
                        (1ST PLACE) BITS & BYTES <br>
                        <span class="lscs_yellow"> LASALLIAN EXCELLENCE AWARD: </span> <br>
                        Outstanding Organizational Development <br>
                        (1ST PLACE) IGNITE <br>
                        <span class="lscs_yellow"> CSO TOP ORGANIZATIONS: </span> <br> TOP 2 OVERALL
                    `
                },
                {
                    year: 2020,
                    html: `
                        <span class="lscs_yellow"> CSO TOP ORGANIZATIONS: </span> <br>
                        TOP 1 IN TERM 1 <br>
                        <span class="lscs_yellow"> CSO FINANCE ACCREDITATION: </span> <br>
                        TOP 1 IN TERM 1 <br>
                        <span class="lscs_yellow"> CSO INTERNALS ACCREDITATION: </span> <br>
                        TOP 2  IN TERM 1
                    `
                }
            ]
        }
    },

    methods: {
        updateYear(index, year) {
            this.selected = index
            this.selectedYear = year
        },

        nextYear() {
            if (this.selected < this.selectedYear - 1) {
                this.selected++
                this.selectedYear = this.awards[this.selected].year
            }
        },

        prevYear() {
            if (this.selected > -1) {
                this.selected--
                this.selectedYear = this.awards[this.selected].year
            }
        },
    },
}
</script>

<style scoped>

</style>
