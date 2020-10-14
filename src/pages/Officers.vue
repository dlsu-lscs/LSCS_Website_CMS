<template>
    <Layout>
        <div id="officers">
        <h3>
            <span class="lscs_yellow">LSCS</span>
            <span>CORE</span>
            <span class="lscs_blue">OFFICERS</span>
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
                <g-image class="ui image centered" src="~/assets/img/CORE_20-21/Gab.png" />
                <div class="name">
                    Gabriel Lorenzo Dela Cruz
                </div>
                <div class="position">
                    Executive Vice President for Laguna Campus
                </div>
            </div>
        </div>
        <section v-for="committee in committees"
            :key="committee.acronym"
            :id="committee.acronym"
            class="committee"
        >
            <h3>
                <span class="lscs_yellow"> {{ committee.name.toUpperCase() }} </span>
                <span class="lscs_blue"> COMMITTEE </span>
            </h3>
            <div class="ui three column centered stackable grid">
                <div class="column officer">
                    <!-- TODO: Image here -->
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
        </section>
        <section id="laguna_campus" class="committee">
            <h3>
                <span class="lscs_yellow"> LAGUNA CAMPUS </span>
                <span class="lscs_blue"> COMMITTEE </span>
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
                            {{ officer.name }}
                        </div>
                    </div>
                </div>
            </div>
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
                        'Abigail Gan',
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
                        'Sophia Vista',
                    ],
                    ct: [
                        'Kenneth Tan',
                    ]
                },
                {
                    name: 'Publications',
                    acronym: 'publi',
                    vp: 'Jarrett Ethan Singian',
                    avp: [
                        'Gwyneth Ang',
                        'Robi Banogon',
                        'Jason Bueno',
                        'Robbie De Mesa',
                        'Kate Magbitang',
                        'Regina Masilang',
                        'Denver Noveda',
                    ],
                    ct: [
                        'Anna Catahan',
                    ]
                },
                {
                    name: 'Socio-civic',
                    acronym: 'socio-civic',
                    vp: 'Danielle Quieng',
                    avp: [
                        'Beatrice Berenguer',
                        'Sandra Berjamin',
                        'Tom Bernardo',
                        'Sofia Cuevas',
                        'Reynaldo Delima',
                        'Kathleen Flores',
                        'Jeymar Pe',
                        'Jester Ramos',
                    ],
                    ct: [
                        'Fildric Chu',
                    ]
                },
                {
                    name: 'University Relations',
                    acronym: 'unirel',
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
                    acronym: 'docu',
                    vp: 'Julia Patricia Estella',
                    avp: [
                        'Bianca Benedictos',
                        'Jericho Dizon',
                        'Daniel Enriquez',
                        'Clarissa Mandadero',
                        'Ian Racoma',
                        'Mikayla Tejada',
                        'Jethro Tsai',
                    ],
                    ct: [
                        'Matthew Neal Lim',
                        'Patrick Ong',
                        'Eugene Quiambao',
                    ]
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
                        name: 'Beaverly Cuasi'
                    },
                    {
                        position: 'Vice President',
                        committee: 'Membership and Training',
                        name: 'Ira Villanueva'
                    },
                    {
                        position: 'Vice President',
                        committee: 'Externals',
                        name: 'Victor Andrei Tulabot'
                    },
                ], [
                    {
                        position: 'Vice President',
                        committee: 'Publicity and Creatives',
                        name: 'Stephen Salamante'
                    },
                    {
                        position: 'Vice President',
                        committee: 'Operations',
                        name: 'Michele Gelvoleo'
                    },
                    {
                        position: 'Associate Vice President',
                        committee: 'Academics',
                        name: 'Angeline Maris Gubat'
                    },
                ], [
                    {
                        position: 'Associate Vice President',
                        committee: 'Membership and Training',
                        name: 'John Joseph Reyes'
                    },
                    {
                        position: 'Associate Vice President',
                        committee: 'Publicity and Creatives',
                        name: 'Jacob Darvin'
                    },
                    {
                        position: 'Associate Vice President',
                        committee: 'Operations',
                        name: 'Rethaniel Ramos'
                    },
                ]
            ]
        }
    }
}
</script>
