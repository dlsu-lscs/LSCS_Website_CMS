<template>
    <Layout>
        <div id="officers">
        <h3 class="center aligned">
            <span class="lscs_yellow">LSCS </span>
            <span class="lscs_blue">OFFICERS</span>
        </h3>    
        <section class="committee" id="core">
            <h3>
                <div :style="{ display: 'flex', alignItems: 'center' }">
                    <div :style="{ marginRight: '1rem' }">
                        <g-image class="ui"
                            src="~/assets/img/logos/core.png"
                            :style="{
                                width: '64px',
                            }"
                        />
                    </div>
                    <div>
                        <span>CORE</span>
                    </div>
                </div>
            </h3>
            <div class="ui centered stackable grid">
                <div class="officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Reb.png" />
                    <div class="name">
                        Rebecalyn Lao
                    </div>
                    <div class="position">
                        President
                    </div>
                </div>    
            </div>
            <div class="ui four column centered stackable grid">
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Legs.png" />
                    <div class="name">
                        John Gabriel Legaspi
                    </div>
                    <div class="position">
                        Executive Vice President for Internals
                    </div>
                </div>
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Noki.png" />
                    <div class="name">
                        Noki Topacio
                    </div>
                    <div class="position">
                        Executive Vice President for Externals
                    </div>
                </div>
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Myles.png" />
                    <div class="name">
                        Myles Russel Chan
                    </div>
                    <div class="position">
                        Executive Vice President for Operations
                    </div>
                </div>
                <div class="column officer">
                    <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Mich.png" />
                    <div class="name">
                        Michele Gelvoleo
                    </div>
                    <div class="position">
                        Executive Vice President for Laguna Campus
                    </div>
                </div>
            </div>
        </section>
        <section v-for="committee in committees"
            :key="committee.acronym"
            :id="committee.acronym"
            class="committee"
        >
            <div v-waypoint="{ active: true, callback: value => committeeTrigger(value, committee.acronym), options: intersectionOptions }"></div>
            <transition name="fade-up">
                <div v-if="show[committee.acronym]">
                    <h3>
                        <div :style="{ display: 'flex', alignItems: 'center' }">
                            <div :style="{ marginRight: '1rem' }">
                                <g-image class="ui"
                                    :src="require(`~/assets/img/logos/${committee.acronym}.png`)"
                                    :style="{
                                        width: '64px',
                                    }"
                                />
                            </div>
                            <div>
                                <span class="lscs_yellow"> {{ committee.name.toUpperCase() }} </span>
                                <span class="lscs_blue"> COMMITTEE </span>
                            </div>
                        </div>
                    </h3>
                    <div class="ui three column centered stackable grid">
                        <div class="column center officer">
                            <div class="name">
                                {{ committee.vp }}
                            </div>
                            <div class="position">
                                Vice President for {{ committee.name }}
                            </div>
                        </div>
                        <div class="column center">
                            <h5 class="ui lscs_blue header center">Associate Vice Presidents</h5>
                            <ul class ="center lscs_dark_gray">
                                <li v-for="(name, index) in committee.avp" :key="index">
                                    {{ name }}
                                </li>
                            </ul>
                        </div>
                        <div v-if="committee.ct" class="column center">
                            <h5 class="ui lscs_blue header center">Committee Trainees</h5>
                            <ul class ="center lscs_dark_gray">
                                <li v-for="(name, index) in committee.ct" :key="index">
                                    {{ name }}
                                </li>
                            </ul>
                        </div>
                        <div v-else class="column center"></div>
                    </div>
                </div>
            </transition>
        </section>
        <section id="laguna_campus" class="committee">
            <div v-waypoint="{ active: true, callback: value => committeeTrigger(value, 'laguna'), options: intersectionOptions }"></div>
            <transition name="fade-up">
                <div v-if="show.laguna">
                    <h3>
                        <div :style="{ display: 'flex', alignItems: 'center' }">
                            <div :style="{ marginRight: '1rem' }">
                                <g-image class="ui"
                                    src="~/assets/img/logos/laguna.png"
                                    :style="{
                                        width: '64px',
                                    }"
                                />
                            </div>
                            <div>
                                <span> LAGUNA CAMPUS </span>
                            </div>
                        </div>
                    </h3>
                    <div class="ui relaxed stackable centered grid">
                        <div v-for="(officers, index) in laguna"
                            :key="index"
                            class="three column row"
                        >      
                            <div v-for="(officer, index) in officers"
                                :key="index"
                                class="column officer"
                            >
                                <div class="name">
                                    {{ officer.position }} <br>
                                    for {{ officer.committee }}
                                </div>
                                <div class="position">
                                    <ul class ="center lscs_dark_gray">
                                        <li v-for="(name, index) in officer.names"
                                                :key="index"
                                            >
                                            {{ name }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </section>
        </div>
    </Layout>
</template>

<script>
import '~/assets/css/index/officers.css'

export default {
    metaInfo: {
        title: 'Officers'
    },

    data() {
        return {
            show: {
                acads: false,
                hrd: false,
                rnd: false,
                tnd: false,
                corporel: false,
                pubs: false,
                publi: false,
                socio: false,
                univrel: false,
                doculog: false,
                fin: false,
                laguna: false,
            },
            intersectionOptions: {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: [ 0.25, 0.75 ] // [0.25, 0.75] if you want a 25% offset!
            },
            committees: [
                {
                    name: 'Academics',
                    acronym: 'acads',
                    vp: 'John Henry Cagaoan',
                    avp: [
                        'Zoe Avila',
                        'Franchezka Cruz',
                        'Jacob Gaba',
                        'Nilo Jatico',
                        'James Lin',
                        'Nathan Von Rodriguez',
                        'Czarina Tiu',
                        'Andilyn Uy',
                        'Shimei Zhang',
                    ],
                    // ct: []
                },
                {
                    name: 'Human Resource Development',
                    acronym: 'hrd',
                    vp: 'Ricson Andrei Vergara',
                    avp: [
                        'Charlene Ang',
                        'Bryan Camarillo',
                        'Paolo Espiritu',
                        'Marc Gonzales',
                        'Ira Lapuz',
                        'Joseph Leonard Lee',
                        'Alfonso Lima',
                        'Ryan Medina',
                        'Pamela Olalia',
                        'Azriel Ortega',
                        'Christopher Pinpin',
                    ],
                    // ct: []
                },
                {
                    name: 'Research and Development',
                    acronym: 'rnd',
                    vp: 'Gerald Dalan',
                    avp: [
                        'Lynux Ansay',
                        'Kysonn Dela Cerna',
                        'William Dimaculangan',
                        'Christopher Lim',
                        'Neil Lua',
                        'Jan Uriel Marcelo',
                        'Heinze Moneda',
                        'Gabriel Pua',
                        'Carlos Shi',
                        'Tyrone Sta. Maria',
                        'Kurt Tanting',
                        'Lance Teng',
                    ],
                    // ct: []
                },
                {
                    name: 'Training and Development',
                    acronym: 'tnd',
                    vp: 'Melody Joy Go',
                    avp: [
                        'Jeric Barraza',
                        'Nicholas Campos',
                        'Samantha De Leon',
                        'Keil Chritopher Finez',
                        'James Lemsic',
                        'Judge Manzano',
                        'Matt Ordonia',
                        'Jordan Sibug',
                        'Joshua Tan',
                    ],
                    // ct: []
                },
                {
                    name: 'Corporate Relations',
                    acronym: 'corporel',
                    vp: 'Shannon Gail Ho',
                    avp: [
                        'Axel Alba',
                        'Camille Cay',
                        'Hannah Chen',
                        'Karl David',
                        'Joseph Lorenzo Lee',
                        'Carlo Santos',
                        'Patrick Simpao',
                        'Nicolas Sy',
                        'Christian Tan',
                        'Lorene Uy',
                        'Terel Crisotomo'
                    ],
                    // ct: []
                },
                {
                    name: 'Publications',
                    acronym: 'publi',
                    vp: 'Jarrett Ethan Singian',
                    avp: [
                        'Gwyneth Ang',
                        'Robi Banogon',
                        'Jason Bueno',
                        'Anna Catahan',
                        'Robbie De Mesa',
                        'Kate Magbitang',
                        'Denver Noveda',
                    ],
                    // ct: []
                },
                {
                    name: 'Publicity and Creatives',
                    acronym: 'pubs',
                    vp: 'Sharmaine Gaw',
                    avp: [
                        'Louis Allen Aboy',
                        'Earl Jeffrey Capistrano',
                        'John Matthew Gan',
                        'Marjorie Lua',
                        'Ralph Marquez',
                        'Elderwell Ramos',
                        'Rainer Sih',
                        'Kenneth Tan',
                        'Sophia Vista',
                    ],
                    // ct: []
                },
                {
                    name: 'Socio-civic',
                    acronym: 'socio',
                    vp: 'Danielle Quieng',
                    avp: [
                        'Beatrice Berenguer',
                        'Sandra Berjamin',
                        'Fildric Chu',
                        'Sofia Cuevas',
                        'Reynaldo Delima',
                        'Kathleen Flores',
                        'Jeymar Pe',
                        'Jester Ramos',
                    ],
                    // ct: []
                },
                {
                    name: 'University Relations',
                    acronym: 'univrel',
                    vp: 'Bryan Ethan Tio',
                    avp: [
                        'Pete Choi',
                        'Bianca Chua',
                        'Angeli Mata',
                        'Jaime Pastor',
                        'James Andrew Perez',
                        'Carl James Raymundo',
                        'Patrick Tan',
                        'Sean Yuhico',
                    ],
                    // ct: []
                },
                {
                    name: 'Documentation and Logistics',
                    acronym: 'doculog',
                    vp: 'Julia Patricia Estella',
                    avp: [
                        'Bianca Benedictos',
                        'Jericho Dizon',
                        'Daniel Enriquez',
                        'Matthew Neal Lim',
                        'Clarissa Mandadero',
                        'Patrick Ong',
                        'Eugene Quiambao',
                        'Ian Racoma',
                        'Mikayla Tejada',
                        'Jethro Tsai',
                    ],
                    // ct: []
                },
                {
                    name: 'Finance',
                    acronym: 'fin',
                    vp: 'Richard Alvin Zapanta',
                    avp: [
                        'Juliana Agulto',
                        'Erwin Chen',
                        'Kenley Chiu',
                        'Pierre Michael Espina',
                        'Maron Fabelico',
                        'Caila Favor',
                        'Dustin Maceda',
                        'Nathaniel Franz Rustia',
                        'Winzentt Sy',
                        'Ryan Yao',
                    ],
                    // ct: []
                },
            ],
            laguna: [
                [
                    {
                        position: 'Vice President',
                        committee: 'Academics',
                        names: ['Beaverly Cuasi']
                    },
                    {
                        position: 'Vice President',
                        committee: 'Membership and Training',
                        names: ['Ira Villanueva']
                    },
                    {
                        position: 'Vice President',
                        committee: 'Externals',
                        names: ['Victor Andrei Tulabot']
                    },
                ], [
                    {
                        position: 'Vice President',
                        committee: 'Publicity and Creatives',
                        names: ['Stephen Salamante']
                    },
                    {
                        position: 'Vice President',
                        committee: 'Operations',
                        names: ['Gabriel Lorenzo Dela Cruz']
                    },
                    {
                        position: 'Associate Vice President',
                        committee: 'Academics',
                        names: ['Angeline Maris Gubat']
                    },
                ], [
                    {
                        position: 'Associate Vice President',
                        committee: 'Membership and Training',
                        names: [
                            'John Joseph Reyes',
                            'Vince Rosete',
                            'Jan Carlo San Juan',
                        ]
                    },
                    {
                        position: 'Associate Vice President',
                        committee: 'Publicity and Creatives',
                        names: [
                            'Jacob Darvin',
                            'Andre Ponce'
                        ]
                    },
                    {
                        position: 'Associate Vice President',
                        committee: 'Operations',
                        names: [
                            'Rethaniel Ramos',
                            'Pancho Villaroman'
                        ]
                    },
                ], [
                    {
                        position: 'Associate Vice President',
                        committee: 'Externals',
                        names: ['Joshue Jadie']
                    },
                ]
            ]
        }
    },

    methods: {
        committeeTrigger({ going, direction }, committee) {
            if (going === this.$waypointMap.GOING_IN && direction === this.$waypointMap.DIRECTION_TOP) {
                this.show[committee] = true
            }
        }
    }
}
</script>

<style scoped>
.fade-up-enter-active {
    animation: fade-up 0.5s;
}

@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>