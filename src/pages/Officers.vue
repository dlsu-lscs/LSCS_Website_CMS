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
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_23-24/PRESIDENT-MISHI.png"
            />
            <div class="name">
              Janina Mishi Bacay
            </div>
            <div class="position">
              President
            </div>
          </div>
        </div>
        <div class="ui four column centered stackable grid">
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_23-24/EVP-INTERNALS-VINNIE.png"
            />
            <div class="name">
              Rey Vincent Inocencio
            </div>
            <div class="position">
              Executive Vice President for Internals
            </div>
          </div>
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_23-24/EVP-EXTERNALS-JACK.png"
            />
            <div class="name">
              Jack Elinzano
            </div>
            <div class="position">
              Executive Vice President for Externals
            </div>
          </div>
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_23-24/EVP-OPS-ETHAN.png"
            />
            <div class="name">
              Ethan Angelo Yu
            </div>
            <div class="position">
              Executive Vice President for Operations
            </div>
          </div>
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_22-23/EVP-L.png"
            />
            <div class="name">
              Joshua Tipon
            </div>
            <div class="position">
              Executive Vice President for Laguna Campus
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
            callback: (value) => committeeTrigger(value, committee.acronym),
            options: intersectionOptions,
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
                      width: '64px',
                    }"
                  />
                </div>
                <div>
                  <span class="lscs_yellow">
                    {{ committee.name.toUpperCase() }}
                  </span>
                  <span class="lscs_blue"> COMMITTEE </span>
                </div>
              </div>
            </h3>
            <div class="ui three column centered stackable grid">
              <div class="column center officer">
                <div v-if="committee.vpImg">
                  <g-image
                    class="ui image centered"
                    :src="
                      require(`~/assets/img/EB_23-24/${committee.vpImg}.png`)
                    "
                    :style="{
                      width: '200px',
                    }"
                  />
                </div>
                <div class="name" v-if="committee.vp">
                  {{ committee.vp }}
                </div>
                <div
                  class="name"
                  v-else
                  v-for="(name, index) in committee.vpOIC"
                  :key="index"
                >
                  {{ name }}
                </div>
                <div class="position" v-if="committee.vp">
                  Vice President for {{ committee.name }}
                </div>
                <div class="position" v-else>
                  Officer-In-Charge Vice President for {{ committee.name }}
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
            callback: (value) => committeeTrigger(value, 'laguna'),
            options: intersectionOptions,
          }"
        ></div>
        <transition name="fade-up">
          <div v-if="show.laguna">
            <h3>
              <div :style="{ display: 'flex', alignItems: 'center' }">
                <div :style="{ marginRight: '1rem' }">
                  <g-image
                    class="ui"
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
              <div
                v-for="(officers, index) in laguna"
                :key="index"
                class="three column row"
              >
                <div
                  v-for="(officer, index) in officers"
                  :key="index"
                  class="column officer"
                >
                  <div class="name">
                    {{ officer.position }} <br />
                    for {{ officer.committee }}
                  </div>
                  <div class="position">
                    <ul class="center lscs_dark_gray">
                      <li v-for="(name, index) in officer.names" :key="index">
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
import '~/assets/css/index/officers.css';

export default {
  metaInfo: {
    title: 'Officers',
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
        threshold: [0.25, 0.75], // [0.25, 0.75] if you want a 25% offset!
      },
      committees: [
        {
          name: 'Academics',
          acronym: 'acads',
          vp: 'Robert Joachim Encinas',
          vpImg: 'VP-ACADS',
          avp: [
            'Airelle Loumel Maagma',
            'Erica Bernardo',
            'Jose Maria Angelo Guerra',
            'Ken Ivan Cheng',
          ],
           ct: [
            'Joel Ethan Batac',
            'Chrysille So',
            'Lorenzo Aivin Ambrosio',
          ],
        },
        {
          name: 'Human Resource Development',
          acronym: 'hrd',
          vp: 'Zachary Gomez',
          vpImg: 'VP-HRD',
          avp: [
            'Joshua Emmanuel Policarpio',
            'Ghee Kaye Lopez',
            'Nicolas Miguel Ching',
            'Nathaniel Christian Portez',
            'Mikaela Hermoso',
          ],
          ct: [
            'Wilbert Shawn Villagarcia',
          ],
        },
        {
          name: 'Research and Development',
          acronym: 'rnd',
          vp: 'Richard John Pecson Jr.',
          vpImg: 'VP-RND',
          avp: [
            'Orrin Landon Uy',
            'Patrick Angelo Aquino',
            'Aila Janelle Manlangit',
            'Justin Nathaniel Lim',
            'John Kieffer Recato Dy',
            'Annika Posadas',
            'Rydel Ridley Lim',
          ],
          // ct: []
        },
        {
          name: 'Training and Development',
          acronym: 'tnd',
          vp: 'Ysabelle Laurena Son',
          vpImg: 'VP-TND',
          avp: [
            'Andrea Li Santos',
            'Dylan Andrei Rodriguez',
            'Andrea Eliza Dulin',
            'Ricardo Luis Vicerra',
            'Ramon Isidro Sabarre',
            'Aaron Jardenil',
          ],
          // ct: [],
        },
        {
          name: 'Corporate Relations',
          acronym: 'corporel',
          vp: 'Francis Isip Bawa',
          vpImg: 'VP-CORP',
          avp: [
            'Ma. China Ortiz',
            'Joseph Miguel Maristela',
            'Timothy Joshua Tan',
            'Brenda Minette Armada',
            'Gabrielle Mae Arco',
            'Joseph Dean Enriquez',
          ],
          // ct: []
        },
        {
          name: 'Publications',
          acronym: 'publi',
          vp: 'Regner Francis Atutubo',
          vpImg: 'VP-PUBLI',
          avp: [
            'Patrick James Marcellana',
            'Fiona Amaia Tano',
            'Anjelo Patrick Atanacio',
          ],
           ct: [
           'Joaquin Lorenzo Sitoy',
           ],
        },
        {
          name: 'Publicity and Creatives',
          acronym: 'pubs',
          vp: 'Angelo Julius Nuque',
          vpImg: 'VP-PUBS',
          avp: [
            'Kathryn Leigh Pulido',
            'Vincent Alvin Marquez',
            'Jan Anthony Murillo',
            'Reese Chantal Calucag',
            'Charlize Villaflores',
            'Airam Mumiah David',
          ],
          // ct: []
        },
        {
          name: 'Socio-civic',
          acronym: 'socio',
          vp: 'Shanky de Gracia',
          vpImg: 'VP-SOC',
          avp: [
            'Ysobella Torio',
            'Joel Miguel Leysa',
            'Jared Ethan Limjoco',
            'Ashley Hannah Cosing',
          ],
           ct: [
            'Izabella Imperial',
            'Lucas Antonio Tujan',
           ],
        },
        {
          name: 'University Relations',
          acronym: 'univrel',
          vp: 'Mari Salvador Lapuz', 
          vpImg: 'VP-UNIVREL', 
          avp: [
            'Jasmine Gayamo',
            'Marian Ricci Ariaga',
            'Dana Louise Guillarte',
          ],
          ct: [
            'John Isaac Zuñiga',
            'Wesly Samson',
            'Miko Santos',
            'Elaine Riz Martin',
          ]
        },
        {
          name: 'Documentation and Logistics',
          acronym: 'doculog',
          vp: 'Gwen Kathleen Roco',
          vpImg: 'VP-DOCULOGI',
          avp: [
            'Tristan Neo Mercado',
            'Roger Canayon',
            'Valiant Lance Dionela',
            'Samantha Erica O\'Neil',
          ],
          ct: [
              'Manuel Carlos Tanchiao',
              'Eric Johann Garcia',
            ]
        },
        {
          name: 'Finance',
          acronym: 'fin',
          vp: 'Hans Martin Rejano',
          vpImg: 'VP-FIN',
          avp: [
            'Isiah Reuben Exconde',    
            'Jasmin Chua',
            'Nicole Kate Uy',
            'Samantha Breanne Sanchez',
            'Kurt Lewis Chiu',
            'Julianne Chrystel Ong',
          ],
          // ct: [],
        },
      ],
      laguna: [
        [
          {
            position: 'Vice President',
            committee: 'Membership and Training',
            names: [''],
          },
          {
            position: 'Vice President',
            committee: 'Publicity and Creatives',
            names: [''],
          },
        ],
        [
          // {
          //   position: 'Associate Vice President',
          //   committee: 'Academics',
          //   names: ['Mark Burguillos'],
          // },
        ],
      ],
    };
  },

  methods: {
    committeeTrigger({ going, direction }, committee) {
      if (
        going === this.$waypointMap.GOING_IN &&
        direction === this.$waypointMap.DIRECTION_TOP
      ) {
        this.show[committee] = true;
      }
    },
  },
};
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
