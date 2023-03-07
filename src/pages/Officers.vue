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
            <!-- TODO: Update President's image -->
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_21-22/Richard.png"
            />
            <div class="name">
              <!-- TODO: Update President's officer name -->
              Richard Alvin Zapanta
            </div>
            <div class="position">
              President
            </div>
          </div>
        </div>
        <div class="ui four column centered stackable grid">
          <div class="column officer">
            <!-- TODO: Update EVP-Internals' image -->
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_21-22/Ricson.png"
            />
            <div class="name">
            <!-- TODO: Update EVP-Internals' officer name -->
              Ricson Andrei Vergara
            </div>
            <div class="position">
              Executive Vice President for Internals
            </div>
          </div>
          <div class="column officer">
            <!-- TODO: Update EVP-Externals' image -->
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_21-22/Jeric.png"
            />
            <div class="name">
            <!-- TODO: Update EVP-Externals' officer name -->
              Jeric Austin Barraza
            </div>
            <div class="position">
              Executive Vice President for Externals
            </div>
          </div>
          <div class="column officer">
            <!-- TODO: Update EVP-Operations' image -->
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_21-22/Kenley.png"
            />
            <div class="name">
            <!-- TODO: Update EVP-Operations' officer name -->
              Kenley Lewis Chiu
            </div>
            <div class="position">
              Executive Vice President for Operations
            </div>
          </div>
          <div class="column officer">
            <!-- TODO: Update EVP-Laguna's image -->
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_21-22/Joshue.png"
            />
            <div class="name">
            <!-- TODO: Update EVP-Laguna's officer name -->
              Joshue Jadie
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
          vp: 'Czarina Faye Tiu', // TODO: Update VP-Academics' officer name
          vpImg: 'Czarina', // TODO: Update VP-Academics' image (in PNG format)
          // TODO: Update Acads-AVPs
          avp: [
            'Janina Mishi Bacay',
            'Daniel Enriquez',
            'Nilo Jatico II',
            'Julian Carlos Li',
            'Dustin Maceda',
            'James Matthew Sy',
            'Miguel Tansingco',
            'Jacob Miguel Villa',
          ],
          // ct: []
        },
        {
          name: 'Human Resource Development',
          acronym: 'hrd',
          vp: null,
          vpOIC: ['Louis Angelo De Guzman', 'Gabriel Angelo Gerardino'], // TODO: Update OIC-HRD
          vpImg: null,
          // TODO: Update HRD-AVPs
          avp: [
            'Terel Lean Crisostomo',
            'Sofia Bianca Cuevas',
            'Joaquin Escarraga',
            'Hyenne Audrey Lim',
          ],
          // ct: []
        },
        {
          name: 'Research and Development',
          acronym: 'rnd',
          vp: 'Heinze Kristian Moneda', // TODO: Update VP-RND's officer name
          vpImg: 'Heinze', // TODO: Update VP-RND's image (in PNG format)
          // TODO: Update RND-AVPs
          avp: [
            'John Vincent Chua',
            'Alfonso Miguel Cruz',
            'Gerald Dalan',
            'Pierre Vincent Hernandez',
            'Maxine Angela Ileto',
            'Josh Uson',
            'Jose Mari Genuino',
          ],
          // ct: []
        },
        {
          name: 'Training and Development',
          acronym: 'tnd',
          vp: 'Jordan Sibug', // TODO: Udpate VP-TND's officer name
          vpImg: 'Jordan', // TODO: Update VP-TND's image (in PNG format)
          // TODO: Update TND-AVPs
          avp: [
            'Krischelle Cadao',
            'Nicholas Scott Campos',
            'Jhervey Edric Cheng',
            'Darrell Kenji Hartigan-Go',
            'Ramon Alvaro Jardin',
            'Joshua Tan',
            'Samuel Jedidiah Uy',
            'Jared Frenzer Tan',
          ],
          // ct: [],
        },
        {
          name: 'Corporate Relations',
          acronym: 'corporel',
          vp: 'Hannah Regine Fong', // TODO: Update VP-CorpRel's officer name
          vpImg: 'Hannah', // TODO: Udpate VP-Corprel's
          // TODO: Update CorpRel-AVPs
          avp: [
            'Kate Ashley Anonuevo',
            'Camille Allyson Cay',
            'Hannah Chen',
            'Shannon Ho',
            'John Marvic Mojica',
            'Kenneth Edward Tan',
            'Mikayla Tejada',
            'Kenn Michael Villarama',
          ],
          // ct: []
        },
        {
          name: 'Publications',
          acronym: 'publi',
          vp: 'Anna Kumiko Catahan', // TODO: Update VP-Publi's officer name
          vpImg: 'Kimi', // TODO: Update VP-Publi's image (in PNG format)
          // TODO: Update Publi-AVPs
          avp: [
            'Gwyneth Ang',
            'Robbie De Mesa',
            'William Dimaculangan',
            'Lauren Antoinette Garcia',
            'Denver Noveda',
            'Franczeska Silvestre',
          ],
          // TODO: Uncomment and add Publi-CT(s)
          // ct: []
        },
        {
          name: 'Publicity and Creatives',
          acronym: 'pubs',
          vp: 'Louis Allen Aboy', // TODO: Update VP-Pubs' officer name
          vpImg: 'Allen', // TODO: Update VP-Pubs' image (in PNG format)
          // TODO: Update Pubs-AVPs
          avp: [
            'Luciana Francesca Antonio',
            'Martin James Arellano',
            'Lorane Bernadeth Fausto',
            'Kim Williame Lee',
            'Rainer Nielsen Sih',
            'Lance Griffin Tan',
            'Sophia Danielle Vista',
            'Jahn Juhlia Lu',
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
          vp: 'Patrick Elijah Tan', // TODO: Update VP-UnivRel's officer name
          vpImg: 'Patrick', // TODO: Update VP-UnivRel's image (in PNG format)
          // TODO: Update UnivRel-AVPs
          avp: [
            'Annika Ayesha Capada',
            'Ayisha Miara Dytoc',
            'Neil Matthew Lua',
            'Criscela Ysabelle Racelis',
            'Jose Tristan Tan',
            'Bryan Ethan Tio',
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
          vpImg: 'Juliana', // TODO: Udpdate VP-Fin's image (in PNG format)
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
      laguna: [ // TODO: Update LSCS Laguna Campus officers
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
        [ // TODO: Comment out or remove AVP-Academics of Laguna Campus
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
