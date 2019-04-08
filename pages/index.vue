<template>
  <div>
    <section class="hero is-dark sticky">
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
    <div>
      <section
        v-if="filter === 'all' || filter === 'competition'"
        class="section"
      >
        <p class="title is-size-1 is-text-primary is-uppercase">
          Competition
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card
            v-for="i in competitionRandom"
            :key="i.title"
            :card="i"
            :vote-link="i.voteLink"
          >
            {{ i.summary }}
          </card>
        </div>
      </section>
      <section v-if="filter === 'all' || filter === 'village'" class="section">
        <p class="title is-size-1 is-text-primary is-uppercase">
          Indie Village
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card v-for="i in villageRandom" :key="i.title" :card="i">
            {{ i.summary }}
          </card>
        </div>
      </section>
      <section
        v-if="filter === 'all' || filter === 'prototypes'"
        class="section"
      >
        <p class="title is-size-1 is-text-primary is-uppercase">
          Prototypes
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card v-for="i in prototypesRandom" :key="i.title" :card="i">
            {{ i.summary }}
          </card>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.tabs {
  font-family: 'Montserrat', sans-serif;
}
</style>

<script>
import Card from '~/components/Card'

function randomizeCards(cardSection) {
  let j, x, i
  for (i = cardSection.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = cardSection[i]
    cardSection[i] = cardSection[j]
    cardSection[j] = x
  }
  return cardSection
}

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
              "Pawarumi est un shoot'em up moderne se déroulant dans un univers rétro-futuriste inspiré des cultures pré-colombiennes. Vous prenez les commandes du tout puissant vaisseau Chukaru ! Choisissez bien votre arme pour maximiser vos dégâts, vous soigner ou recharger votre attaque spéciale !",
            link: 'http://pawarumi.manufacture43.com/',
            img: 'pawarumi'
          },
          {
            title: 'ScourgeBringer',
            studio: 'Flying Oak Games',
            summary:
              'ScourgeBringer is a fast-paced free-moving roguelite platformer. Help Kyhra to explore the unknown and to slash her way through the ancient machines guarding the seal of her past, and maybe the redemption of humanity.',
            link: 'http://scourgebringer.com/',
            img: 'scourgebringer'
          },
          {
            title: 'Bubble Town',
            studio: 'Splashteam',
            summary:
              "Bubble Town incite le joueur à sortir d'un bulle confortable et sécurisante, pour partir à la recherche de ses congénères perdus dans l'obscurité hostile. Les niveaux à la difficulté croissante sont générés aléatoirement, et le passage au niveau suivant s'effectue en ramenant tout ce petit monde dans la bulle centrale.",
            link: 'https://www.youtube.com/watch?v=r2O0ehZWnvQ',
            img: 'bubbletown'
          },
          {
            title: 'Legend of Keepers',
            studio: 'Goblinz Studio',
            summary:
              'Legend of Keepers is the perfect mix between a Dungeon Defender and a Roguelite. You have been hired as a dungeon guardian by the Company of Dungeon. Your job is simple: Protect their dungeons!',
            link: 'https://store.steampowered.com/app/978520/Legend_of_Keepers',
            img: 'legendofkeepers'
          },
          {
            title: 'Minimal Move',
            studio: 'Tako Studio',
            summary:
              'Un jeu de puzzle coopératif en 3D ! Votre aventure commence quand deux inspecteurs de l’espace, Kaiten et Ido atterrissent dans un merveilleux monde cubique pour découvrir les secrets de cette galaxie… Faites appel à votre sens de l’observation, coopérez, et pensez en 3D !',
            link: 'http://www.minimal-move.com',
            img: 'minimalmove'
          },
          {
            title: 'Unruly Heroes',
            studio: 'Magic Design Studios',
            summary:
              "Inspiré du célèbre roman chinois \"La Pérégrination vers l'Ouest\", Unruly Heroes conte l'aventure de quatre héros totalement invraisemblables que tout oppose. Ces derniers devront traverser des mondes fantastiques et coopérer pour rassembler tous les fragments de Parchemin et restaurer l'équilibre.",
            link: 'https://www.unrulyheroes.com',
            img: 'unrulyheroes'
          },
          {
            title: 'Last Moon',
            studio: 'Sköll Studio',
            summary:
              'Last Moon is an A-RPG greatly inspired by Zelda, Secret of Mana, Chrono Trigger, and a lot of more great titles from the 90s! The Moon is falling, malicious creatures appears, the world falls in chaos!',
            link: 'http://skoll-studio.com/lastmoon.html',
            img: 'lastmoon'
          },
          {
            title: 'Pile Up!',
            studio: 'Seed By Seed',
            summary:
              'Pile Up is a 1 to 4 player co-op 3D platformer for friends and families! Jump joyfully, play together and use items from the environnement to build the funniest piles! Coordination and creativity is required to progress through the joyful levels of the cardboard world and encounter the most friendly bosses!',
            link: 'https://www.pileupgame.com/',
            img: 'pileup'
          },
          {
            title: 'Hair Dash',
            studio: 'Clean Cut Games',
            summary:
              'Come defend your island against the jealous King Octopus in Hair Dash, a nervous action packed mobile game! Starring warriors with LUSCIOUS hair!',
            link: 'http://www.cleancutgames.com/',
            img: 'hairdash'
          },
          {
            title: 'Ninza',
            studio: 'Klakmioch',
            summary:
              "Ninza est un jeu de confrontation d'un genre inédit: le platformer 2D brawler. En effet, les plateformes qui composent les niveaux du jeu servent autant à votre survie qu'à l'élimination de vos adversaires! Destiné à 1-4 joueurs, Ninza est très facile à prendre et promet des moments de jeu intense au rythme effrené.",
            link: 'https://www.ninza-game.com/',
            img: 'ninza'
          },
          {
            title: 'Sillysquad',
            studio: 'Voxweaver',
            summary:
              "Sillysquad est un Party Brawler où l'on doit marquer des points avec les corps de ses adversaires. Il ne suffit pas de mettre KO les adversaires pour gagner, mais de profiter qu'ils soient inconscients pour les jeter dans la gueule de la Reine de notre tribu. A la fin de la partie, la Reine ayant le plus mangé assure la victoire de sa tribu.",
            link: 'https://voxweaver.com/our-games/',
            img: 'sillysquad'
          },
          {
            title: 'Super Chicken Catchers',
            studio: 'White Smoke Games',
            summary:
              'In this crazy action coop game, a team of two players competes against another one. In each team, one player is the mount, the other is the rider. Both have very different yet complementary abilities. To win they will need to catch the Chicken and flee the other team to score points and become the Super Chicken Catchers!',
            link: 'https://whitesmokegames.com/',
            img: 'superchickencatchers'
          },
          {
            title: 'Snowtopia',
            studio: 'Tea For Two',
            summary:
              'Snowtopia is a ski resort construction game with a hint of strategy and respect for the environment. It is intended for ski enthusiasts and tycoon players.',
            link: 'https://www.playsnowtopia.com/',
            img: 'snowtopia'
          },
          {
            title: 'Skelittle:A Giant Party',
            studio: 'Bubble Studios',
            summary:
              'Skelittle : A Giant Party is a party game that lets you play as a tiny figure discovering our human-sized world, challenge your friends in a serie of funky mini games and create your own game sessions with the sandbox mode !',
            link:
              'https://store.steampowered.com/app/916960/Skelittle_A_Giant_Party/',
            img: 'skelittle'
          },
          {
            title: 'Beat the Clock',
            studio: 'Mastodonte',
            summary:
              'Beat the Clock est un Roguelike RPG dynamique qui fait appel aux réflexes et à la réactivité du joueur. Formez une équipe de 4 héros parmi une vingtaine de héros aux capacités uniques. Des combats tactiques et dynamiques au tour par tour. Générez des mécaniques de jeu aléatoires à chaque nouvelle partie.',
            link: 'http://www.beat-the-clock.fr/index.php/fr/',
            img: 'beattheclock'
          },
          {
            title: 'Protocore',
            studio: 'Iumtec',
            summary:
              'Essaie un shooter nerveux dans un univers sci-fi en solo ou en coop ! Tire au travers d’implacables vagues de robots dans un vaisseau gigantesque et affronte l’IA la plus manipulatrice jamais programmée. Sois vif ! Tu perds déjà le contrôle… N’attend pas d’être dépassée par ton némésis, Anomalie. FAIS FACE AUX MACHINES dès maintenant !',
            link: 'https://protocore.fr/',
            img: 'protocore'
          },
          {
            title: 'Halzae:Heroes of Divinity',
            studio: 'Saltclock Studio',
            summary:
              "Halzae : Heroes of Divinity est un jeu de bataille en arène en ligne dynamique et compétitive dans lequel 2 à 8 joueurs s'affrontent en chacun pour soi ou en équipe. Chaque joueur choisit son héros, ses sorts, et se lance dans la bataille.",
            link:
              'https://store.steampowered.com/app/942320/Halzae_Heroes_of_Divinity/',
            img: 'halzae'
          }
        ],
        village: [
          {
            title: 'Skybolt Zack',
            studio: 'Devs Must Die',
            summary:
              "Vous êtes Skybolt Zack ! Frayez-vous un chemin en bondissant d'ennemi en ennemi. Plus vous détruisez d'ennemis, plus la musique s'intensifie et plus l'action devient frénétique !",
            link: 'https://isart-digital.itch.io/skybolt-zack',
            img: 'skyboltzack'
          },
          {
            title: 'Matter',
            studio: 'Concrete Games',
            summary:
              'Explore a mystic and expressive world in a dynamic first person platformer. Dive in a dreamlike and abstract world where matter evolves and lives around you according to your actions.',
            link: 'https://www.concretegames.xyz/matter-info',
            img: 'matter'
          },
          {
            title: 'Ninza',
            studio: 'Klakmioch',
            summary:
              "Ninza est un jeu de confrontation d'un genre inédit: le platformer 2D brawler. En effet, les plateformes qui composent les niveaux du jeu servent autant à votre survie qu'à l'élimination de vos adversaires! Destiné à 1-4 joueurs, Ninza est très facile à prendre et promet des moments de jeu intense au rythme effrené.",
            link: 'https://www.ninza-game.com/',
            img: 'ninza'
          },
          {
            title: 'RedBricks',
            studio: 'Otterways',
            summary:
              'RedBricks est la plateforme de création communautaire d’OtterWays, destinée à la création vidéoludique. Il s’agit d’un espace privilégié où les développeurs et leur communauté de joueurs peuvent se retrouver autour de la création du jeu vidéo.',
            link: 'https://redbricks.games/',
            img: 'redbricks'
          },
          {
            title: 'Sillysquad',
            studio: 'Voxweaver',
            summary:
              "Sillysquad est un Party Brawler où l'on doit marquer des points avec les corps de ses adversaires. Il ne suffit pas de mettre KO les adversaires pour gagner, mais de profiter qu'ils soient inconscients pour les jeter dans la gueule de la Reine de notre tribu. A la fin de la partie, la Reine ayant le plus mangé assure la victoire de sa tribu.",
            link: 'https://voxweaver.com/our-games/',
            img: 'sillysquad'
          },
          {
            title: 'Super Chicken Catchers',
            studio: 'White Smoke Games',
            summary:
              'In this crazy action coop game, a team of two players competes against another one. In each team, one player is the mount, the other is the rider. Both have very different yet complementary abilities. To win they will need to catch the Chicken and flee the other team to score points and become the Super Chicken Catchers!',
            link: 'https://whitesmokegames.com/',
            img: 'superchickencatchers'
          },
          {
            title: 'Protocore',
            studio: 'Iumtec',
            summary:
              'Essaie un shooter nerveux dans un univers sci-fi en solo ou en coop ! Tire au travers d’implacables vagues de robots dans un vaisseau gigantesque et affronte l’IA la plus manipulatrice jamais programmée. Sois vif ! Tu perds déjà le contrôle… N’attend pas d’être dépassée par ton némésis, Anomalie. FAIS FACE AUX MACHINES dès maintenant !',
            link: 'https://protocore.fr/',
            img: 'protocore'
          },
          {
            title: 'Hair Dash',
            studio: 'Clean Cut Games',
            summary:
              'Come defend your island against the jealous King Octopus in Hair Dash, a nervous action packed mobile game! Starring warriors with LUSCIOUS hair!',
            link: 'http://www.cleancutgames.com/',
            img: 'hairdash'
          },
          {
            title: 'Halzae:Heroes of Divinity',
            studio: 'Saltclock Studio',
            summary:
              "Halzae : Heroes of Divinity est un jeu de bataille en arène en ligne dynamique et compétitive dans lequel 2 à 8 joueurs s'affrontent en chacun pour soi ou en équipe. Chaque joueur choisit son héros, ses sorts, et se lance dans la bataille.",
            link:
              'https://store.steampowered.com/app/942320/Halzae_Heroes_of_Divinity/',
            img: 'halzae'
          },
          {
            title: 'Toulouse Game Dev',
            summary:
              "Ce groupe se veut réunir et rassembler tous les passionnés de création et des coulisses du jeu vidéo. Vous pouvez donc venir rencontrer l'association ToulouseGameDev si vous êtes créateur, passionné de jeux, universitaire sur le jeu vidéo, ou si vous voulez juste venir boire avec nous.",
            link: 'http://toulousegamedev.fr/',
            img: 'toulousegamedev'
          }
        ],
        prototypes: [
          {
            title: "Kairos'Light",
            studio: "Let's Develop Change",
            summary:
              'Un jeu de simulation RPG humoristique. Le mage Kairos dont les pouvoirs sont infinis, donne une chance à Edmond de revivre sa jeunesse pour changer sa destinée ! Le joueur incarne Edmond dans un univers fun et frais. Selon ses choix de vie, plusieurs destins s’offrent à lui dans un jeu aux fins multiples.',
            link: 'https://www.facebook.com/KairosLight',
            img: 'kairoslight'
          },
          {
            title: 'One Day To Remember',
            studio: 'Sweet Dreams Studio',
            summary: 'Narrative & exploration game through puzzle gameplay',
            link: 'https://www.facebook.com/SweetDreamsStd/',
            img: ''
          },
          {
            title: 'SPLITI',
            studio: 'Phlegmagames',
            summary:
              "Spliti est un jeu de plateforme/puzzle contemplatif qui se déroule dans un monde poétique. L'atmosphère est magnifiée par l'utilisation de graphiques épurés. Vous jouez au travers l'esprit d'un scientifique. Ce héro est bloqué dans un cube d'énergie à la suite d'une expérience ratée.",
            link: 'https://phlegmagames.com/',
            img: 'spliti'
          },
          {
            title: 'Disk Hero',
            studio: 'Procrastination Entertainement',
            summary:
              "You play bliki a yunikan spaceship pilot which receive the power of the old disk to save his world. So you control bliki's spaceship and your only weapon is this disk that which have cool behavior such as to stuck on the wall and wait for the player to recall it.",
            img: 'diskhero'
          },
          {
            title: '2DOOM',
            studio: 'Damien Mayance',
            summary: "A DOOM Run'n'gun demake (freeware for fun)",
            link: 'https://dmayance.com/2DOOM/',
            img: '2doom'
          },
          {
            title: 'Ghost 808',
            studio: 'Reverence Prod',
            summary:
              "Ghost 808 is an vertical shoot'em up, currently in development by 3 French developers. Focused bullet hell type, the peculiarities are to have dashes, to dodge, and dynamic aspects of the game based on the player's skill. The game's world is inspired by the Japanese space opera and Saint Seiya for history (warranty without plagiarism).",
            link: 'https://www.ghost-808.com/',
            img: 'ghost808'
          },
          {
            title: 'Magicarium',
            studio: '3Axes',
            summary:
              "Magicarium est une simulation d'apprentis magicien en VR. Le but est de découvrir les sorts et les interactions possible dans l'environnement mis à disposition du joueur. Il n'y as pas d'objectif spécifique, chaque joueur est libre d'agir comme il le souhait. L’intention recherché est de laissé un maximum de liberté au joueur.",
            img: 'magicarium'
          },
          {
            title: '::CallBack',
            studio: 'Water Temple Studio',
            summary:
              "Affrontez-vous dans ce party-game local arcade et frénétique entre amis en propulsant les projectiles sur vos adversaires à toute vitesse ! Trajectoires et rebonds doivent être maîtrisés si vous souhaitez devenir le Champion de l'Arène ! Il vous faut une manette par joueur pour jouer.",
            link: 'https://store.steampowered.com/app/985930/CallBack/',
            img: 'callback'
          },
          {
            title: 'Arbopost',
            studio: 'Interlock',
            summary:
              'Build a night shelter for passing adventurers and cook them more and more sophisticated breakfasts. But your marvelous house tree will need a lot of care... Arbopost is a unique mix of RTS colony-sim and engineering-puzzle game, hopefully coming in 2019!',
            link: 'https://vimeo.com/317547252',
            img: 'arbopost'
          }
        ]
      }
    }
  },

  computed: {
    villageRandom() {
      return randomizeCards(this.items.village)
    },
    competitionRandom() {
      return randomizeCards(this.items.competition)
    },
    prototypesRandom() {
      return randomizeCards(this.items.prototypes)
    }
  }
}
</script>
