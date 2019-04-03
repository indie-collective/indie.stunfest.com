<template>
  <div>
    <section class="hero is-dark">
      <div class="hero-foot">
        <nav class="tabs is-centered is-medium is-fullwidth is-boxed">
          <div class="container">
            <ul>
              <li
                :class="{ 'is-active': filter === 'all' }"
                @click="filter = 'all'"
              >
                <a
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === 'all'
                  }"
                  >All</a
                >
              </li>
              <li
                :class="{ 'is-active': filter === 'competition' }"
                @click="filter = 'competition'"
              >
                <a
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === 'competition'
                  }"
                  >Competition</a
                >
              </li>
              <li
                :class="{ 'is-active': filter === 'village' }"
                @click="filter = 'village'"
              >
                <a
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === 'village'
                  }"
                  >Indie Village</a
                >
              </li>
              <li
                :class="{ 'is-active': filter === 'prototypes' }"
                @click="filter = 'prototypes'"
              >
                <a
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === 'prototypes'
                  }"
                  >Prototypes</a
                >
              </li>
              <li>
                <a
                  class="has-background-black-ter has-text-white"
                  href="http://indie.stunfest.fr/2018/"
                  target="_blank"
                  >Archive</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <div class="scroll-section">
      <section
        v-if="filter === 'all' || filter === 'competition'"
        class="section"
      >
        <p class="title is-size-4 is-uppercase">
          Competition
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card
            v-for="i in items.competition"
            :key="i.title"
            :card="i"
            :vote-link="i.voteLink"
          >
            {{ i.summary }}
          </card>
        </div>
      </section>
      <section v-if="filter === 'all' || filter === 'village'" class="section">
        <p class="title is-size-4 is-uppercase">
          Indie Village
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card v-for="i in items.village" :key="i.title" :card="i">
            {{ i.summary }}
          </card>
        </div>
      </section>
      <section
        v-if="filter === 'all' || filter === 'prototypes'"
        class="section"
      >
        <p class="title is-size-4 is-uppercase">
          Prototypes
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card v-for="i in items.prototypes" :key="i.title" :card="i">
            {{ i.summary }}
          </card>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.scroll-section {
  max-height: calc(100vh - 80px);
  overflow: scroll;
}
</style>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },

  data() {
    return {
      filter: 'all',
      items: {
        competition: [
          {
            title: 'Pawarumi',
            studio: 'Manufacture 43',
            summary:
              "Rock-Paper-Scissors with Lasers! Pawarumi is a modern shoot'em up with a twist.",
            link: 'http://pawarumi.manufacture43.com/',
            img: 'pawarumi.jpg',
            screens: []
          },
          {
            title: 'ScourgeBringer',
            studio: 'Flying Oak Games',
            summary:
              'ScourgeBringer is a fast-paced free-moving roguelite platformer. Help Kyhra to explore the unknown and to slash her way through the ancient machines guarding the seal of her past, and maybe the redemption of humanity.',
            link: 'http://scourgebringer.com/',
            img: 'scourgebringer.png',
            screens: []
          },
          {
            title: 'Bubble Town',
            studio: 'Splashteam',
            summary:
              "Bubble Town incite le joueur à sortir d'un bulle confortable et sécurisante, pour partir à la recherche de ses congénères perdus dans l'obscurité hostile. Les niveaux à la difficulté croissante sont générés aléatoirement, et le passage au niveau suivant s'effectue en ramenant tout ce petit monde dans la bulle centrale. Certains niveaux renfermeront des personnages clés, et réussir à les trouver tous permettra de débloquer la fin du jeu.",
            link: 'https://www.youtube.com/watch?v=r2O0ehZWnvQ',
            img: 'bubbletown.jpg',
            screens: []
          },
          {
            title: 'Legend of Keepers',
            studio: 'GOBLINZ STUDIO',
            summary:
              'Legend of Keepers is the perfect mix between a Dungeon Defender and a Roguelite. You have been hired as a dungeon guardian by the Company of Dungeon. Your job is simple: Protect their dungeons!',
            link: 'https://store.steampowered.com/app/978520/Legend_of_Keepers',
            img: 'legendofkeepers.jpg',
            screens: []
          },
          {
            title: 'Minimal Move',
            studio: 'TAKO STUDIO',
            summary:
              'Minimal Move is a cooperative puzzle game in 3D! The adventure starts when two space investigators, Kaiten and Ido landed in a wonder cubic world... Their mission is to discover and reveal the secret of this mysterious planet! Think in 3D, engage your brain, cooperate with each other, and solve this new perspective puzzle!',
            link: 'www.minimal-move.com',
            img: 'minimalmove.jpg',
            screens: []
          },
          {
            title: 'Unruly Heroes',
            studio: 'MAGIC DESIGN STUDIOS',
            summary:
              'Unruly Heroes is a 2D action-packed platformer inspired by the famous chinese tale Journey to the West. Assuming the role of one of 4 unlikely heroes, players will test their mettle against environmental obstacles and go toe-to-toe against a memorable rogues’ gallery of foes. Players can also fight against their friends in local or online PVP mode.',
            link: 'https://www.unrulyheroes.com',
            img: 'unrulyheroes.webp',
            screens: []
          },
          {
            title: 'Last Moon',
            studio: 'SKÖLL STUDIO',
            summary:
              'Last Moon is an A-RPG greatly inspired by Zelda, Secret of Mana, Chrono Trigger, and a lot of more great titles from the 90s!  The Moon is falling, malicious creatures appears, the world falls in chaos! Last Moon is the second game of @SkollStudio. The game is still in development.',
            link: 'http://skoll-studio.com/lastmoon.html',
            img: 'lastmoon.jpg',
            screens: []
          },
          {
            title: 'Pile Up!',
            studio: 'Seed By Seed',
            summary:
              'Jump on your friends, pile together and start exploring colorful cardboard world. Pile Up is a joyful couch co-op 3D platformer for up to 4 players!',
            link: 'https://www.pileupgame.com/',
            img: 'pileup.jpg',
            screens: []
          },
          {
            title: 'Hair Dash',
            studio: 'CLEAN CUT GAMES',
            summary:
              "Hair Dash est un jeu de combat et d'action arcade vu de côté avec une esthétique pixel-art poussée.",
            link: 'https://youtu.be/R7FA8neNCW8',
            img: 'hairdash.png',
            screens: []
          },
          {
            title: 'Ninza',
            studio: 'Klakmioch',
            summary: 'Fast paced platformer brawler, crazy madness fun',
            link: 'https://www.youtube.com/watch?v=jO_LJHJpLh4',
            img: 'ninza.jpg',
            screens: []
          },
          {
            title: 'Sillysquad',
            studio: 'Voxweaver',
            summary:
              "Sillysquad est un Party Brawler où l'on doit marquer des points avec les corps de ses adversaires. Il ne suffit pas de mettre KO les adversaires pour gagner, mais de profiter qu'ils soient inconscients pour les jeter dans la gueule de la Reine de notre tribu. A la fin de la partie, la Reine ayant le plus mangé assure la victoire de sa tribu.",
            link: 'https://voxweaver.com/our-games/',
            img: 'sillysquad.png',
            screens: []
          },
          {
            title: 'Super Chicken Catchers',
            studio: 'WHITE SMOKE GAMES',
            summary:
              'In this crazy action coop game, a team of two players competes against another one. In each team, one player is the mount, the other is the rider. Both have very different yet complementary abilities. To win they will need to catch the Chicken and flee the other team to score points and become the Super Chicken Catchers!',
            link: 'https://whitesmokegames.com/',
            img: 'superchickencatchers.jpg',
            screens: []
          }
        ],
        village: [
          {
            title: 'Skybolt Zack',
            studio: 'DEVS MUST DIE',
            summary:
              'Skybolt Zack is a fast paced action platformer with a fighting mechanic inspired by rhythm games but with no rhythm skills involved!',
            link: 'https://isart-digital.itch.io/skybolt-zack',
            img: 'skyboltzack.jpg',
            screens: []
          },
          {
            title: 'Matter',
            studio: 'Concrete Games',
            summary:
              'Explore a mystic and expressive world in a dynamic first person platformer. Dive in a dreamlike and abstract world where matter evolves and lives around you according to your actions.',
            link: 'https://www.concretegames.xyz/matter-info',
            img: 'matter.png',
            screens: []
          },
          {
            title: 'Ninza',
            studio: 'Klakmioch',
            summary: 'Fast paced platformer brawler, crazy madness fun',
            link: 'https://www.youtube.com/watch?v=jO_LJHJpLh4',
            img: 'ninza.jpg',
            screens: []
          },
          {
            title: 'RedBricks',
            studio: 'OTTERWAYS',
            summary: '',
            link: '',
            img: '',
            screens: []
          },
          {
            title: 'Sillysquad',
            studio: 'Voxweaver',
            summary:
              "Sillysquad est un Party Brawler où l'on doit marquer des points avec les corps de ses adversaires. Il ne suffit pas de mettre KO les adversaires pour gagner, mais de profiter qu'ils soient inconscients pour les jeter dans la gueule de la Reine de notre tribu. A la fin de la partie, la Reine ayant le plus mangé assure la victoire de sa tribu.",
            link: 'https://voxweaver.com/our-games/',
            img: 'sillysquad.png',
            screens: []
          },
          {
            title: 'Super Chicken Catchers',
            studio: 'WHITE SMOKE GAMES',
            summary:
              'In this crazy action coop game, a team of two players competes against another one. In each team, one player is the mount, the other is the rider. Both have very different yet complementary abilities. To win they will need to catch the Chicken and flee the other team to score points and become the Super Chicken Catchers!',
            link: 'https://whitesmokegames.com/',
            img: 'superchickencatchers.jpg',
            screens: []
          }
        ],
        prototypes: [
          {
            title: "Kairos'Light",
            studio: "LET'S DEVELOP CHANGE",
            summary: '',
            link: '',
            img: '',
            screens: []
          },
          {
            title: 'One Day To Remember',
            studio: 'SWEET DREAMS STUDIO',
            summary: '',
            link: '',
            img: '',
            screens: []
          },
          {
            title: 'SPLITI',
            studio: 'PHLEGMAGAMES',
            summary: '',
            link: '',
            img: '',
            screens: []
          },
          {
            title: 'Disk Hero',
            studio: 'PROCRASTINATION ENTERTAINEMENT',
            summary: '',
            link: '',
            img: '',
            screens: []
          },
          {
            title: '2DOOM',
            studio: 'DAMIEN MAYANCE',
            summary: '',
            link: '',
            img: '',
            screens: []
          }
        ]
      }
    }
  }
}
</script>
