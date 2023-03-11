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
              src="~/assets/img/CORE_22-23/President.png"
            />
            <div class="name">
              Hannah Regine Fong
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
              src="~/assets/img/CORE_22-23/EVP-I.png"
            />
            <div class="name">
              Gabriel Angelo Gerardino
            </div>
            <div class="position">
              Executive Vice President for Internals
            </div>
          </div>
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_22-23/EVP-E.png"
            />
            <div class="name">
              Criscela Ysabelle Racelis
            </div>
            <div class="position">
              Executive Vice President for Externals
            </div>
          </div>
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_22-23/EVP-O.png"
            />
            <div class="name">
              Nathan Dominick Ngo
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
              Leon Pavino
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
                      require(`~/assets/img/EB_22-23/${committee.vpImg}.png`)
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
        publi: true,
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
          vp: 'Janina Mishi Bacay', // TODO: Update VP-Academics' officer name
          vpImg: 'VP-Acads', // TODO: Update VP-Academics' image (in PNG format)
          // TODO: Update Acads-AVPs
          avp: [
            'Katrina Isabel Estrella',
            'Jan Carlo Roleda',
            'Ysobella Torio',
            'Maria Monica Manlises',
            'Jacob Miguel Villa',
            'Richard John Pecson Jr.',
            'Erica Bernardo',
            'Jose Maria Angelo Guerra',
            'Ciara Micaela Gutierrez',
            'Robert Joachim Encinas',
          ],
          // ct: []
        },
        {
          name: 'Human Resource Development',
          acronym: 'hrd',
          vp: null,
          vpOIC: ['Andrei Marin', 'Hyenne Audrey Lim'], // TODO: Update OIC-HRD
          vpImg: null,
          // TODO: Update HRD-AVPs
          avp: [
            'Cedric Leopold Yu',
            'Chelsea Anne Fernandez',
            'Zachary Gomez',
            'Annika Posadas',
            'Zoe Ann Avila',
            'Czarina Faye Tiu',
            'Mark Daniel Gutierrez',
            'Paolo Miguel Flores',
            'Donnielle Andres',
          ],
          // ct: []
        },
        {
          name: 'Research and Development',
          acronym: 'rnd',
          vp: 'Pierre Vincent Hernandez', // TODO: Update VP-RND's officer name
          vpImg: 'VP-RND', // TODO: Update VP-RND's image (in PNG format)
          // TODO: Update RND-AVPs
          avp: [
            'Heinze Kristian Moneda',
            'Josh Aaron Khyle Uson',
            'John Vincent Chua',
            'Jose Mari Victorio Genuino',
            'Anne Gabrielle Sulit',
            'Andrei David Ancheta',
            'David Joshua Corpuz',
            'Josh Darren Ang Ngo Ching',
            'Jomar Delos Reyes',
            'Patrick Angelo Aquino',
            'Brendan Nathaniel Castillo',
          ],
          // ct: []
        },
        {
          name: 'Training and Development',
          acronym: 'tnd',
          vp: 'Darrell Kenji Hartigan-Go', // TODO: Udpate VP-TND's officer name
          vpImg: 'VP-TND', // TODO: Update VP-TND's image (in PNG format)
          // TODO: Update TND-AVPs
          avp: [
            'Merlot Josh Esteban',
            'Aila Janelle Manlangit',
            'Ryan Jay Deculawan',
            'Ysabelle Laurena Puno Son',
            'Marissa Ann Villaceran',
            'Zhoe Aeris Gon Gon',
            'Tyrone Angelo Uy',
            'Cameron Kylie Mariazeta',
            'Ramon Isidro Sabarre',
            'Rey Vincent Inocencio',
            'Clarrisa Mae Mandadero'
          ],
          // ct: [],
        },
        {
          name: 'Corporate Relations',
          acronym: 'corporel',
          vp: 'Kirschelle Cadao', // TODO: Update VP-CorpRel's officer name
          vpImg: 'VP-CorpoRel', // TODO: Udpate VP-Corprel's
          // TODO: Update CorpRel-AVPs
          avp: [
            'Piolo Jose Francisco',
            'Kendrick Mikhael Pua',
            'Nicholas Scott Campos',
            'John Marvic Mojica',
            'Jack Elinzano',
            'Isiah Reuben Exconde',
            'Lander Gabriel Fulcher',
            'Mezen Lababidi',
            'Harvey Justin Wang'
          ],
          // ct: []
        },
        {
          name: 'Publications',
          acronym: 'publi',
          vp: 'Franczeska Margaux Silvestre', // TODO: Update VP-Publi's officer name
          vpImg: 'VP-Publi', // TODO: Update VP-Publi's image (in PNG format)
          // TODO: Update Publi-AVPs
          avp: [
            'Regner Francis Atutubo',
            'Julia Kirsten Singian',
            'William Mitchell Dimaculangan',
            'Lauren Antoinette Garcia',
            'Hanz Patrick Yu',
          ],
          // TODO: Uncomment and add Publi-CT(s)
          ct: ['Airon John Cruz'],
        },
        {
          name: 'Publicity and Creatives',
          acronym: 'pubs',
          vp: 'Kim Williame Lee', // TODO: Update VP-Pubs' officer name
          vpImg: 'VP-Pubs', // TODO: Update VP-Pubs' image (in PNG format)
          // TODO: Update Pubs-AVPs
          avp: [
            'Lorane Bernadeth Fausto',
            'Lance Griffin Tan',
            'Martin James Arellano',
            'David, Airam Mumiah',
            'Samuel Jedidiah Uy',
            'Angelo Julius Nuque',
            'Layne Ashley Vitan',
            'Ricci Mariell Rivero',
            'Janine Blair Chua Ching',
            'Daniel Spencer Tan',
          ],
          // ct: []
        },
        {
          name: 'Socio-civic',
          acronym: 'socio',
          vp: 'Marc Angelo Caesar Gonzales', // TODO: Update VP-Socio's officer name
          vpImg: 'Marc', // TODO: Update VP-Socio's image
          // TODO: Update Socio-AVPs
          avp: [
            'Charlene Ang',
            'Reynaldo Delima Jr.',
            'Misael Andrei Marin',
            'Danessa Mayuga',
            'Reynaldo Delima',
            'Jaira Santos',
            'Lorene Uy',
          ],
          // ct: []
        },
        {
          name: 'University Relations',
          acronym: 'univrel',
          vp: 'Ayisha Miara Dytoc', 
          vpImg: 'VP-UnivRel', 
          avp: [
            'Annika Ayesha Capada',
            'Mari Salvador Lapuz',
            'Joshua Tan',
            'Daphne Janelyn Go',
            'Vince Victor Lim',
            'Francis Zaccharie De Leon',
            'Jason Jan Jabanes',
            'Jasmine Gayamo',
          ],
          //ct: [],
        },
        {
          name: 'Documentation and Logistics',
          acronym: 'doculog',
          vp: 'Ayiana Louise Romero', // TODO: Update VP-DouLogi's officer name
          vpImg: 'VP-DocuLogi', // TODO: Update VP-DocuLogi's image (in PNG format)
          // TODO: Update DocuLogi-AVPs
          avp: [
            'Rulet Fulo',
            'Joseph Thomas Ano',
            'Kenneth Clark Digno',
            'Gwen Kathleen Roco',
            'Antoinne Bryce R Salvador',
            'Shaun Vincent Ong',
            'Ethan Angelo Yu',
            'Daphne Louise Ong',
            'Matthew Cuaresma',
          ],
          // ct: []
        },
        {
          name: 'Finance',
          acronym: 'fin',
          vp: 'Juliana Marie Agulto', // TODO: Update VP-Fin's officer name
          vpImg: "Juliana", // TODO: Udpdate VP-Fin's image (in PNG format)
          // TODO: Update Fin-AVPs
          avp: [
            'Kurt Lewis Chiu',
            'Jeric Kerby Chua',
            'Jericho Dizon',
            'Jason Jan Jabanes',
            'Stanley Vincent Lim',
            'Sophia Lin',
            'Jan Daniel Lee Ng',
            'Nathan Dominick Ngo',
          ],
          // ct: [],
        },
      ],
      laguna: [
        // TODO: Update LSCS Laguna Campus officers
        [
          {
            position: 'Vice President',
            committee: 'Membership and Training',
            names: ['Angel Lopez'],
          },
          {
            position: 'Vice President',
            committee: 'Publicity and Creatives',
            names: ['Andre Ponce'],
          },
        ],
        [
          // TODO: Comment out or remove AVP-Academics of Laguna Campus
          {
            position: 'Associate Vice President',
            committee: 'Academics',
            names: ['Mark Burguillos'],
          },
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
