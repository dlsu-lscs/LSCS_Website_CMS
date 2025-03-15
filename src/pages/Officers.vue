<script>
import presidentImg from '@/assets/img/CORE_24-25/president.JPG'

export default {
  data() {
    return {
      imageSrc: presidentImg
    }
  }
}
</script>

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
              <g-image
                class="ui"
                src="~/assets/img/logos/core.png"
                :style="{
                  width: '64px'
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
            <img
              src="https://i.imgur.com/kNh1SiL.jpg"
              alt="President"
              class="box"
            />
            <div class="name">
              Ma. China Ortiz
            </div>
            <div class="position">
              President
            </div>
          </div>
        </div>
        <div class="ui four column centered stackable grid">
          <div class="column officer">
            <img
              src="https://i.imgur.com/9KOgX2o.jpg"
              alt="President"
              class="box"
            />
            <div class="name">
              Andrea Eliza Duliin
            </div>
            <div class="position">
              Executive Vice President for Internals
            </div>
          </div>
          <div class="column officer">
            <img
              src="https://i.imgur.com/obAMdb1.jpg"
              alt="President"
              class="box"
            />
            <div class="name">
              Gabrielle Mae Arco
            </div>
            <div class="position">
              Executive Vice President for Externals
            </div>
          </div>
          <div class="column officer">
            <img
              src="https://i.imgur.com/tsH1G0y.jpg"
              alt="President"
              class="box"
            />
            <div class="name">
              Roger Canayon
            </div>
            <div class="position">
              Executive Vice President for Operations
            </div>
          </div>
        </div>
      </section>
      <section
        v-for="committee in committees"
        :key="committee.acronym"
        :id="committee.acronym"
        class="committee"
      >
        <div
          v-waypoint="{
            active: true,
            callback: value => committeeTrigger(value, committee.acronym),
            options: intersectionOptions
          }"
        ></div>
        <transition name="fade-up">
          <div v-if="show[committee.acronym]">
            <h3>
              <div :style="{ display: 'flex', alignItems: 'center' }">
                <div :style="{ marginRight: '1rem' }">
                  <g-image
                    class="ui"
                    :src="
                      require(`~/assets/img/logos/${committee.acronym}.png`)
                    "
                    :style="{
                      width: '64px'
                    }"
                  />
                </div>
                <div>
                  <span clps="lscs_yellow">
                    {{ committee.name.toUpperCase() }}
                  </span>
                  <span class="lscs_blue"> COMMITTEE </span>
                </div>
              </div>
            </h3>
            <div class="ui three column centered stackable grid">
              <div class="column center officer">
                <div v-if="committee.vp && committee.vp.length">
                  <div v-for="(vp, index) in committee.vp" :key="index">
                    <img :src="vp.img" :alt="vp.name" class="box" />
                    <div class="name">{{ vp.name }}</div>
                  </div>
                </div>
                <div v-else>
                  <div
                    v-for="(name, index) in committee.vpOIC"
                    :key="index"
                    class="name"
                  >
                    {{ name }}
                  </div>
                </div>
                <div class="position">
                  Vice President for {{ committee.name }}
                </div>
              </div>
              <div class="column center">
                <h5 class="ui lscs_blue header center">
                  Associate Vice Presidents
                </h5>
                <ul class="center lscs_dark_gray">
                  <li v-for="(name, index) in committee.avp" :key="index">
                    {{ name }}
                  </li>
                </ul>
              </div>
              <div v-if="committee.ct" class="column center">
                <h5 class="ui lscs_blue header center">Committee Trainees</h5>
                <ul class="center lscs_dark_gray">
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
        <div
          v-waypoint="{
            active: true,
            callback: value => committeeTrigger(value, 'laguna'),
            options: intersectionOptions
          }"
        ></div>
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
        laguna: false
      },
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0.25, 0.75] // [0.25, 0.75] if you want a 25% offset!
      },
      committees: [
        {
          name: 'Academics',
          acronym: 'acads',
          vp: [
            {
              name: 'Joel Ethan Batac',
              img: 'https://imgur.com/32xuAWp.jpg'
            }
          ],
          avp: [
            'Enzo Rafael Chan',
            'Kyle Elijah Gan',
            'Andrea Li Santos',
            'Chynna Mae Tria',
            'Ryan Clemence Vasquez',
            'Meia Richelle Go',
            'Juan Miguel Miranda'
          ]
          // ct: ['Joel Ethan Batac', 'Chrysille So', 'Lorenzo Alvin Ambrosio']
        },
        {
          name: 'Human Resource Development',
          acronym: 'hrd',
          vp: [
            {
              name: 'Mikaela Hermoso',
              img: 'https://imgur.com/0ZzubrY.jpg'
            }
          ],
          avp: [
            'Nicolas Miguel T. Ching',
            'Ana Gabrielle Luis D. Casas',
            'Hector Francis Seigmund Desamito',
            'Villagarcia, Wilbert Shawn, G.',
            'Policarpio, Joshua Emmanuel',
            'Ronald Dawson R. Catignas',
            'Carl Justin B. De los Reyes',
            'Hermione F. Marucot',
            'Yumi Ann S. Pangan',
            'Adler Clarence E. Strebel',
            'Vincent Renz H. Tabuzo'
          ]
          // ct: ['Wilbert Shawn Villagarcia']
        },
        {
          name: 'Research and Development',
          acronym: 'rnd',
          vp: [
            {
              name: 'Sean Denzel Robenta',
              img: 'https://imgur.com/xMH62Op.png'
            }
          ],
          avp: [
            'Rydel Ridley Lim',
            'Angelo Julius Nuque',
            'Anjelo Patrick Atanacio',
            'Rohann Gabriel Dizon',
            'Lorenz Bernard Marqueses',
            'Max Benedict Chavez',
            'Edwin Sadiarin Jr.',
            'Vaughn Marick Sy',
            'Sean Benedict Bernardo',
            'Ellexandrei Esponilla',
            'Clarence Ivan Ang',
            'Jose Miguel Simbillo',
            'Roan Campo'
          ]
          // ct: []
        },
        {
          name: 'Training and Development',
          acronym: 'tnd',
          vp: [
            {
              name: 'Fiona Amaia Tano',
              img: 'https://imgur.com/yytgXbW.jpg'
            }
          ],
          avp: [
            'Abram Aki Bukuhan',
            'Jose Paolo Cruzado',
            'Kenneth Macy Estabillo',
            'Rey Vincent Inocencio',
            'Rhezarie Reanelle Roca',
            'Katarina Milcah Valdez',
            'Charlize Villaflores',
            'Jorice Erika Cataluña',
            'Carl Vincent Ko'
          ]
          // ct: [],
        },
        {
          name: 'Corporate Relations',
          acronym: 'corporel',
          vp: [
            {
              name: 'Sean Riley Veracruz',
              img: 'https://imgur.com/DfKl1aV.jpg'
            },
            { name: 'Kellyn Senas', img: 'https://imgur.com/Pcess6i.jpg' }
          ],
          avp: [
            'Peter Parker',
            'Wesner Almin III',
            'Monica Keisha Cu',
            'Andrew Hiro Ishikawa',
            'Devon Jarek Javier',
            'Nathaniel Tolentino',
            'Immanuel Umali',
            'Chester Aldrin Uy'
          ]
        },
        {
          name: 'Publications',
          acronym: 'publi',
          vp: [
            {
              name: 'Chinyere Angelique Cabas',
              img: 'https://imgur.com/Jd9egYr.jpg'
            }
          ],
          avp: [
            'Tristan Raphael M. Pacana',
            'Paulo Grane Gabriel C. Silva',
            'Martin T. Tengco III',
            'Enzo Saulog',
            'Juan Franco P. Gonzalez',
            'Lance Ivanhoe C. Trias',
            'Marc Yuri G. Olivares',
            'Dania Marielle B. Encinas',
            'Philip Anthon L. Santiago'
          ]
          // ct: ['Joaquin Lorenzo Sitoy']
        },
        {
          name: 'Publicity and Creatives',
          acronym: 'pubs',
          vp: [
            {
              name: 'Vincent Alvin Marquez',
              img: 'https://imgur.com/qKBEBtB.jpg'
            }
          ],
          avp: [
            'Chastine Cabatay',
            'Samantha Jade Cabreros',
            'Yesha Jose',
            'Jeremy Koen Palacios',
            'Cyrus Rylie Bautista',
            'Matthew Joshua Copon',
            'Janina Angela Esteban',
            'Matthew Benison Javier',
            'Job Lozada',
            'Myrine Tumbaga',
            'Ruth Yee'
          ]
          // ct: []
        },
        {
          name: 'Socio-civic',
          acronym: 'socio',
          vp: [
            {
              name: 'Donita Jane O. Taguibao',
              img: 'https://imgur.com/aFo0tk1.jpg'
            }
          ],
          avp: [
            'Maxene Allison R. Tolentino',
            'Vienn Rowen G. Balcita',
            'Mark Edrian Celemen',
            'Francis Kyle E. Clemente',
            'Hannah Lee',
            'Carl Vincent Blix P. Lingat',
            'Dencel Angelo D. Pineda',
            'Pulvert Gerald M. Valdez'
          ]
          // ct: ['Izabella Imperial', 'Lucas Antonio Tujan']
        },
        {
          name: 'University Relations',
          acronym: 'univrel',
          vp: [
            {
              name: 'Bon Windel Aquino',
              img: 'https://imgur.com/cvUgBqW.jpg'
            }
          ],
          avp: [
            'Roemer Gabriel B. Caliboso',
            'Dana Louise A. Guillarte',
            'Dalrianne Francesca Togado',
            'Evan Andrew J. Pinca',
            'Daniella A. Ughoc',
            'Charmis Lane B. Adriano',
            'Chester Bryan C. Ruiz',
            'Marvin Ivan C. Mangubat',
            'Abigail B. Seperidad',
            'Nicole Perol'
          ]
          // ct: [
          //   'John Isaac Zuñiga',
          //   'Wesly Samson',
          //   'Miko Santos',
          //   'Elaine Riz Martin'
          // ]
        },
        {
          name: 'Documentation and Logistics',
          acronym: 'doculog',
          vp: [
            {
              name: 'Lucas Antonio V F. Tujan',
              img: 'https://imgur.com/7NPMTT3.jpg'
            }
          ],
          avp: [
            'Jeff P. Cumti',
            'Christian Joseph C. Bunyi',
            'Kurt Christian D. Andaya',
            'Mark Justin C. Mallari',
            'Evan Mari B. De Guzman',
            'Sean Kyle E. Dimaunahan',
            'Prince Bendrik C. Buencamino'
          ]
          // ct: ['Manuel Carlos Tanchiao', 'Eric Johann Garcia']
        },
        {
          name: 'Finance',
          acronym: 'fin',
          vp: [
            {
              name: 'Samantha Breanne A. Sanchez',
              img: 'https://imgur.com/hP3S42Q.jpg'
            }
          ],
          avp: [
            'Diane Cabato',
            'Patrick Hans Perez',
            'Megan Kei Dasal',
            'Eric Johann Garcia',
            'Rizza Mikaella Chan',
            'Isha Daphne Zulueta',
            'Wanda Jude de la Calzada'
          ]
          // ct: [],
        }
      ],
      laguna: [
        [
          {
            position: 'Vice President',
            committee: 'Membership and Training',
            names: ['Aira Jin Garganera'],
            vpImg: 'L-VP-MAT'
          },
          {
            position: 'Vice President',
            committee: 'Publicity and Creatives',
            names: ['Mauries Lopez'],
            vpImg: 'L-VP-PUBS'
          },
          {
            position: 'Vice President',
            committee: 'Academics',
            names: ['Gabriel Paulo Rayo'],
            vpImg: 'L-VP-ACADS'
          },
          {
            position: 'Vice President',
            committee: 'Externals',
            names: ['Kathleen Mae Romblon'],
            vpImg: 'L-VP-EXTERNALS'
          },
          {
            position: 'Vice President',
            committee: 'Operations',
            names: ['Johann James del Rosario'],
            vpImg: 'L-VP-OPS'
          }
        ],
        [
          // {
          //   position: 'Associate Vice President',
          //   committee: 'Academics',
          //   names: ['Mark Burguillos'],
          // },
        ]
      ]
    }
  },

  methods: {
    committeeTrigger({ going, direction }, committee) {
      if (
        going === this.$waypointMap.GOING_IN &&
        direction === this.$waypointMap.DIRECTION_TOP
      ) {
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
.box {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 0px;
}
</style>
