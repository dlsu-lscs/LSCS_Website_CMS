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
              src="~/assets/img/CORE_21-22/Richard.png"
            />
            <div class="name">
              Richard Alvin Zapanta
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
              src="~/assets/img/CORE_21-22/Ricson.png"
            />
            <div class="name">
              Ricson Andrei Vergara
            </div>
            <div class="position">
              Executive Vice President for Internals
            </div>
          </div>
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_21-22/Jeric.png"
            />
            <div class="name">
              Jeric Austin Barraza
            </div>
            <div class="position">
              Executive Vice President for Externals
            </div>
          </div>
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_21-22/Kenley.png"
            />
            <div class="name">
              Kenley Lewis Chiu
            </div>
            <div class="position">
              Executive Vice President for Operations
            </div>
          </div>
          <div class="column officer">
            <g-image
              class="ui image centered"
              src="~/assets/img/CORE_21-22/Joshue.png"
            />
            <div class="name">
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
                      require(`~/assets/img/EB_21-22/${committee.vpImg}.png`)
                    "
                    :style="{
                      width: '200px',
                    }"
                  />
                </div>
                <div class="name">
                  {{ committee.vp }}
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
          vp: 'Czarina Faye Tiu',
          vpImg: 'Czarina',
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
          vp: 'Azriel Matthew Ortega',
          vpImg: 'Azriel',
          avp: [
            'Terel Lean Crisostomo',
            'Sofia Bianca Cuevas',
            'Louis Angelo De Guzman',
            'Joaquin Escarraga',
            'Gabriel Angelo Gerardino',
            'Hyenne Audrey Lim',
          ],
          // ct: []
        },
        {
          name: 'Research and Development',
          acronym: 'rnd',
          vp: 'Heinze Kristian Moneda',
          vpImg: 'Heinze',
          avp: [
            'John Vincent Chua',
            'Alfonso Miguel Cruz',
            'Gerald Dalan',
            'Pierre Vincent Hernandez',
            'Maxine Angela Ileto',
            'Josh Uson',
          ],
          ct: ['Jose Mari Genuino'],
        },
        {
          name: 'Training and Development',
          acronym: 'tnd',
          vp: 'Jordan Sibug',
          vpImg: 'Jordan',
          avp: [
            'Krischelle Cadao',
            'Nicholas Scott Campos',
            'Jhervey Edric Cheng',
            'Darrell Kenji Hartigan-Go',
            'Ramon Alvaro Jardin',
            'Joshua Tan',
            'Samuel Jedidiah Uy',
          ],
          ct: ['Jared Frenzer Tan'],
        },
        {
          name: 'Corporate Relations',
          acronym: 'corporel',
          vp: 'Hannah Regine Fong',
          vpImg: 'Hannah',
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
          vp: 'Anna Kumiko Catahan',
          vpImg: 'Kimi',
          avp: [
            'Gwyneth Ang',
            'Robbie De Mesa',
            'William Dimaculangan',
            'Lauren Antoinette Garcia',
            'Denver Noveda',
            'Franczeska Silvestre',
          ],
          // ct: []
        },
        {
          name: 'Publicity and Creatives',
          acronym: 'pubs',
          vp: 'Louis Allen Aboy',
          vpImg: 'Allen',
          avp: [
            'Luciana Francesca Antonio',
            'Martin James Arellano',
            'Lorane Bernadeth Fausto',
            'Kim Williame Lee',
            'Rainer Nielsen Sih',
            'Lance Griffin Tan',
            'Sophia Danielle Vista',
          ],
          ct: ['Leigh Arriane Buendia', 'Jahn Juhlia Lu'],
        },
        {
          name: 'Socio-civic',
          acronym: 'socio',
          vp: 'Marc Angelo Caesar Gonzales',
          vpImg: 'Marc',
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
          vp: 'Patrick Elijah Tan',
          vpImg: 'Patrick',
          avp: [
            'Annika Ayesha Capada',
            'Ayisha Miara Dytoc',
            'Neil Matthew Lua',
            'Criscela Ysabelle Racelis',
            'Bryan Ethan Tio',
          ],
          ct: ['Jose Tristan Tan'],
        },
        {
          name: 'Documentation and Logistics',
          acronym: 'doculog',
          vp: 'Clarissa Mae Mandadero',
          vpImg: 'Clar',
          avp: [
            'Melanie Aquino',
            'Zoe Ann Avila',
            'Carissa Bartolome',
            'Daphne Louise Ong',
            'Patrick Ervin Ong',
            'Shaun Vincent Ong',
            'Ayiana Louise Romero',
            'Ethan Angelo Yu',
          ],
          // ct: []
        },
        {
          name: 'Finance',
          acronym: 'fin',
          vp: 'Juliana Marie Agulto',
          vpImg: 'Juliana',
          avp: [
            'Kurt Lewis Chiu',
            'Jericho Dizon',
            'Jason Jan Jabanes',
            'Sophia Lin',
            'Jan Daniel Lee Ng',
            'Nathan Dominick Ngo',
          ],
          ct: ['Jeric Kerby Chua', 'Stanley Vincent Lim '],
        },
      ],
      laguna: [
        [
          {
            position: 'Vice President',
            committee: 'Academics',
            names: ['Angeline Gubat'],
          },
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
          {
            position: 'Vice President',
            committee: 'Operations',
            names: ['Gabriel Lorenzo Dela Cruz'],
          },
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
