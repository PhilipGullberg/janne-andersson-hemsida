<template>
    <header class="absolute top-0 left-0 w-full bg-white shadow-md z-50">
      <div class="flex justify-between items-center px-10 py-4">
        <!-- Logo -->
        <div class="flex items-center gap-6">
          <div class="text-xl font-bold uppercase text-[#124E66] md:hidden lg:block">
            {{ currentText.headerName }}
          </div>
          <button
            class="flex items-center px-2 py-1 hidden mb:flex border border-[#124E66] rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
          >
            <router-link to="/cv">
              CV <i class="fa-solid fa-file text-[#124E66] ms-3 fa-sm"></i>
            </router-link>
          </button>
        </div>
  
        <!-- Hamburger Icon -->
        <button
          @click="toggleMenu"
          class="block md:hidden text-[#124E66] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
  
        <div class="flex space-x-4 hidden md:flex">
          <!-- Svenska -->
          <button
            @click="changeLanguage('sv')"
            class="flex items-center space-x-2 px-4 py-2 border rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
              alt="Swedish Flag"
              class="w-6 h-6"
            />
          </button>
  
          <!-- Engelska -->
          <button
            @click="changeLanguage('en')"
            class="flex items-center space-x-2 px-4 py-2 border rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English Flag"
              class="w-6 h-6"
            />
          </button>
        </div>
  
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-6 items-center">
          <router-link to="/" class="hover:underline text-gray-700 border py-1 px-2 border-[#124E66] hover:bg-[#124E66] hover:text-white rounded">
            {{ currentText.navHome }}
          </router-link>
        </nav>
      </div>
  
      <!-- Mobile Navigation -->
      <nav
        v-show="menuOpen"
        class="md:hidden bg-white shadow-md border-t border-gray-200"
      >
        <ul class="flex flex-col space-y-4 py-6 px-3">
          <!-- Mobile Language Switch -->
          <div class="flex space-x-2 md:flex">
            <!-- Svenska -->
            <button
              @click="changeLanguage('sv')"
              class="flex items-center space-x-2 px-2 py-1 border rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
                alt="Swedish Flag"
                class="w-6 h-6"
              />
            </button>
  
            <!-- Engelska -->
            <button
              @click="changeLanguage('en')"
              class="flex items-center space-x-2 px-2 py-1 border rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="English Flag"
                class="w-6 h-6"
              />
            </button>
  
           
          </div>
          <button
              class="flex w-20 items-center px-2 py-1 border border-[#124E66] rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <router-link to="/cv">
                CV
                <i class="fa-solid fa-file text-[#124E66] ms-3 fa-sm"></i>
              </router-link>
            </button>
          <router-link to="/" class="hover:underline text-gray-700 border  border-[#124E66] rounded w-12 px-1">
            {{ currentText.navHome }}
          </router-link>
        </ul>
      </nav>
    </header>
  
    <div class="bg-gray-50 py-24 px-6 lg:px-24">
      <div class="max-w-7xl lg:mx-32 ">
  
        <!-- Page Title -->
        <h1 class="text-4xl font-bold text-[#124E66] mb-10">
          {{ currentText.mainTitle }}
        </h1>
  
        <!-- Contact Section -->
        <section class="mb-16">
          <h2 class="text-2xl font-semibold text-[#124E66] mb-4">
            {{ currentText.contactTitle }}
          </h2>
          <div class="flex flex-col space-y-2">
            <p>
              <span class="font-bold">{{ currentText.phoneLabel }}</span>
              +46 70 - 546 42 58
            </p>
            <p>
              <span class="font-bold">{{ currentText.emailLabel }}</span>
              <a
                href="mailto:janne@juandersson.se"
                class="text-[#124E66] hover:underline"
              >
                {{ currentText.emailLink }}
              </a>
            </p>
          </div>
        </section>
  
        <!-- Work Experience -->
        <section class="mb-16">
          <h2 class="text-2xl font-semibold text-[#124E66] mb-4">
            {{ currentText.workExpTitle }}
          </h2>
          <div class="space-y-10">
  
            <!-- Job 1 -->
            <div class="flex items-start space-x-6">
              <img
                class="w-16"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Swedish_Football_Association_crest.svg/1200px-Swedish_Football_Association_crest.svg.png"
                alt="Sveriges landslag"
              />
              <div>
                <h3 class="text-lg font-bold">
                  {{ currentText.jobs.job1.title }}
                </h3>
                <p class="text-gray-700 italic">
                  {{ currentText.jobs.job1.date }}
                </p>
                <ul class="list-disc list-inside mt-2 text-gray-700">
                  <li v-for="(bullet, index) in currentText.jobs.job1.bullets" :key="index">
                    {{ bullet }}
                  </li>
                </ul>
              </div>
            </div>
  
            <!-- Job 2 -->
            <div class="flex items-start space-x-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IFK_Norrkoping_logo.svg/1200px-IFK_Norrkoping_logo.svg.png"
                alt="IFK Norrköping"
                class="w-16"
              />
              <div>
                <h3 class="text-lg font-bold">
                  {{ currentText.jobs.job2.title }}
                </h3>
                <p class="text-gray-700 italic">
                  {{ currentText.jobs.job2.date }}
                </p>
                <ul class="list-disc list-inside mt-2 text-gray-700">
                  <li
                    v-for="(bullet, index) in currentText.jobs.job2.bullets"
                    :key="index"
                  >
                    {{ bullet }}
                  </li>
                </ul>
              </div>
            </div>
  
            <!-- Job 3 -->
            <div class="flex items-start space-x-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVipIOa7mInrZ1rMbQ4M3CdmALIimhC4fwQ&s"
                alt="Halmstad BK"
                class="w-16"
              />
              <div>
                <h3 class="text-lg font-bold">
                  {{ currentText.jobs.job3.title }}
                </h3>
                <p class="text-gray-700 italic">
                  {{ currentText.jobs.job3.date }}
                </p>
                <ul class="list-disc list-inside mt-2 text-gray-700">
                  <li
                    v-for="(bullet, index) in currentText.jobs.job3.bullets"
                    :key="index"
                  >
                    {{ bullet }}
                  </li>
                </ul>
              </div>
            </div>
  
          </div>
        </section>
  
        <!-- Education Section -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#124E66] mb-4">
            {{ currentText.educationTitle }}
          </h2>
          <div class="flex flex-col gap-8">
  
            <div class="flex items-start space-x-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/tr/b/b9/UEFA.png"
                alt="UEFA Pro License"
                class="w-16"
              />
              <div>
                <h3 class="text-lg font-bold">
                  {{ currentText.education.uefaProTitle }}
                </h3>
                <p class="text-gray-700 italic">
                  {{ currentText.education.uefaProDate }}
                </p>
              </div>
            </div>
  
            <div class="flex items-start space-x-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScbQGhp1CZnLRxI5u9kgJbOWgVyg0alqmFQ&s"
                alt="University"
                class="w-16"
              />
              <div>
                <h3 class="text-lg font-bold">
                  {{ currentText.education.uniTitle }}
                </h3>
                <p class="text-gray-700 italic">
                  {{ currentText.education.uniDate }}
                </p>
              </div>
            </div>
  
          </div>
        </section>
  
        <!-- Book Section -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#124E66] mb-4">
            {{ currentText.bookSectionTitle }}
          </h2>
          <img
            src="https://bilder.akademibokhandeln.se/images_akb/9789171265302_383/att-bygga-ett-lag"
            alt="Att bygga ett lag"
            class="w-20 mb-4"
          />
          <div>
            <h3 class="text-lg font-bold mb-2">
              {{ currentText.bookTitle }}
            </h3>
            <p class="text-gray-700">
              {{ currentText.bookDescription }}
            </p>
          </div>
        </section>
  
        <!-- Leadership Approach -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-[#124E66] mb-4">
            {{ currentText.leadershipTitle }}
          </h2>
          <p class="text-gray-700">
            {{ currentText.leadershipIntro }}
          </p>
          <ul class="list-disc list-inside mt-4 text-gray-700">
            <li v-for="(bullet, index) in currentText.leadershipBullets" :key="index">
              {{ bullet }}
            </li>
          </ul>
          <p class="text-gray-700 mt-8 whitespace-pre-line">
            {{ currentText.leadershipLongText }}
          </p>
        </section>
  
        <!-- Accolades Section -->
        <section class="mb-16">
          <h2 class="text-2xl font-semibold text-[#124E66] mb-4">
            {{ currentText.awardsTitle }}
          </h2>
          <ul class="list-disc list-inside text-gray-700">
            <li v-for="(award, index) in currentText.awardsList" :key="index">
              {{ award }}
            </li>
          </ul>
        </section>
  
        <!-- Footer -->
        <footer class="text-center mt-16 text-sm text-gray-500">
          <p>
            &copy; 2025 {{ currentText.footerName }}.
            {{ currentText.footerRights }}
          </p>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  import { languageStore } from "../store/languageStore.js";
  export default {
    name: "CVPage",
    data() {
      return {
        menuOpen: false,
        currentLanguage: "sv",
  
        textContent: {
          sv: {
            headerName: "Janne Andersson",
            navHome: "Hem",
  
            mainTitle: "CV - Janne Andersson",
            contactTitle: "Kontakt",
            phoneLabel: "Telefon:",
            emailLabel: "E-post: ",
            emailLink: "janne@juandersson.se",
            workExpTitle: "Arbetslivserfarenhet",
  
            jobs: {
              job1: {
                title: "Förbundskapten, Svenska Herrlandslaget",
                date: "2016 – 2023",
                bullets: [
                  "Ledde Sverige till VM-kvartsfinal 2018 med vinster mot Schweiz och Tyskland.",
                  "94 landskamper som förbundskapten – flest i svensk historia.",
                ],
              },
              job2: {
                title: "Manager, IFK Norrköping",
                date: "2011 – 2016",
                bullets: [
                  "Vann Allsvenskan 2015.",
                  "Flest matcher i klubbens historia som manager (162).",
                ],
              },
              job3: {
                title: "Manager, Halmstad BK",
                date: "2004 – 2009",
                bullets: [
                  "Andraplats i Allsvenskan 2004.",
                  "Vinst mot Sporting CP i UEFA-cupen 2005.",
                ],
              },
            },
  
            educationTitle: "Utbildning",
            education: {
              uefaProTitle: "UEFA Pro License",
              uefaProDate: "2008 – 2010",
              uniTitle: "University of Sport education",
              uniDate: "1984 – 1986",
            },
  
            bookSectionTitle: "Min bok",
            bookTitle: "Boken Att bygga ett lag",
            bookDescription:
              "Förutom mitt arbete som tränare har jag haft äran att få skriva en bok om ledarskap. Boken går på djupet i mina erfarenheter som fotbollstränare och de ledarskapsprinciper som har väglett mig genom min karriär. Den är ett bevis på mitt engagemang för livslångt lärande och min vilja att dela med mig av kunskap till andra.",
  
            leadershipTitle: "Ledarskap",
            leadershipIntro:
              "Janne betonar vikten av tydlig struktur både på och utanför planen. Hans ledarskap är centrerat kring:",
            leadershipBullets: [
              "Taktisk flexibilitet för att anpassa spelet till motståndet.",
              "Att ge spelare frihet i offensiven för att maximera deras potential.",
            ],
            leadershipLongText:
              `Jag har alltid trott på vikten av att upprätthålla en tydlig och effektiv struktur, både på och utanför fotbollsplanen. Det handlar inte bara om att varje spelare ska förstå sin roll och sina ansvarsområden, utan också om att skapa en sammanhållen och organiserad lagmiljö. I min tränarfilosofi är ett välstrukturerat lag ett framgångsrikt lag.
  
  En av mina grundprinciper som tränare är att ge spelarna frihet att uttrycka sig i anfallsspelet. Genom att uppmuntra kreativitet och låta spelarna ta beslut i den sista tredjedelen av planen, strävar jag efter att förbättra lagets offensiva kapacitet. Detta tillvägagångssätt leder inte bara till mer dynamisk och underhållande fotboll, utan gör också att spelarna kan utveckla sin fulla potential.
  
  Jag är fast övertygad om vikten av taktisk flexibilitet. Det är avgörande att inte vara låst vid en enda spelstil, utan istället anpassa och justera taktiken utifrån motståndarnas styrkor och svagheter. Denna anpassningsförmåga säkerställer att vi alltid är konkurrenskraftiga och redo att hantera olika utmaningar. Det handlar om att alltid ligga steget före konkurrenterna.
  
  Under min tränarkarriär har jag konsekvent lett välorganiserade och hårt arbetande lag. Jag lägger stor vikt vid att bygga upp en stark arbetsmoral, främja disciplin och utveckla en noggrannhet i detaljerna inom truppen. Resultatet är en samling spelare som inte bara uppvisar en hög teknisk nivå, utan också en orubblig hängivenhet och en outtröttlig strävan efter framgång.`,
            
            awardsTitle: "Utmärkelser",
            awardsList: [
              "Coach of the Year, Idrottsgalan (2019).",
              "Rankad 17:e bästa tränaren i världen, FourFourTwo (2018).",
            ],
            
            footerName: "Janne Andersson",
            footerRights: "Alla rättigheter förbehållna.",
          },
  
          en: {
            headerName: "Janne Andersson",
            navHome: "Home",
  
            mainTitle: "CV - Janne Andersson",
            contactTitle: "Contact",
            phoneLabel: "Phone:",
            emailLabel: "Email: ",
            emailLink: "janne@juandersson.se",
            workExpTitle: "Work Experience",
  
            jobs: {
              job1: {
                title: "Head Coach, Swedish Men's National Team",
                date: "2016 – 2023",
                bullets: [
                  "Led Sweden to the 2018 World Cup quarterfinals with victories over Switzerland and Germany.",
                  "94 international matches as head coach – the most in Swedish history.",
                ],
              },
              job2: {
                title: "Manager, IFK Norrköping",
                date: "2011 – 2016",
                bullets: [
                  "Won Allsvenskan in 2015.",
                  "Most matches in the club's history as manager (162).",
                ],
              },
              job3: {
                title: "Manager, Halmstad BK",
                date: "2004 – 2009",
                bullets: [
                  "Second place in Allsvenskan 2004.",
                  "Victory over Sporting CP in the 2005 UEFA Cup.",
                ],
              },
            },
  
            educationTitle: "Education",
            education: {
              uefaProTitle: "UEFA Pro License",
              uefaProDate: "2008 – 2010",
              uniTitle: "University of Sport Education",
              uniDate: "1968 – 1971",
            },
  
            bookSectionTitle: "My Book",
            bookTitle: "The Book 'Att bygga ett lag'",
            bookDescription:
              "In addition to my work as a coach, I have had the honor of writing a book on leadership. The book delves into my experiences as a football manager and the leadership principles that have guided me throughout my career. It is a testament to my commitment to lifelong learning and my desire to share knowledge with others.",
  
            leadershipTitle: "Leadership",
            leadershipIntro:
              "Janne emphasizes the importance of a clear structure both on and off the field. His leadership focuses on:",
            leadershipBullets: [
              "Tactical flexibility to adapt play to the opponent.",
              "Allowing players creative freedom in offense to maximize their potential.",
            ],
            leadershipLongText:
              `I have always believed in the importance of maintaining a clear and effective structure, both on and off the football field. It's not just about each player understanding their role and responsibilities, but also about fostering a cohesive and organized team environment. In my coaching philosophy, a well-structured team is a successful team.
  
  One of my core principles is to give players the freedom to express themselves in the attacking phase. By encouraging creativity and allowing players to make decisions in the final third, I aim to enhance our offensive capabilities. This approach not only leads to more dynamic and entertaining football, but it also helps players realize their full potential.
  
  I strongly believe in tactical flexibility. It's essential not to be locked into a single style of play, but instead to adapt and adjust tactics based on the strengths and weaknesses of the opposition. This adaptability ensures we remain competitive and ready to face various challenges. It's all about staying one step ahead of the competition.
  
  Throughout my coaching career, I have consistently led well-organized and hard-working teams. I place great emphasis on building a strong work ethic, fostering discipline, and paying close attention to detail within the squad. The result is a group of players who not only exhibit a high level of technical skill, but also unwavering dedication and an unrelenting drive for success.`,
  
            awardsTitle: "Awards",
            awardsList: [
              "Coach of the Year, Idrottsgalan (2019).",
              "Ranked 17th best coach in the world, FourFourTwo (2018).",
            ],
  
            footerName: "Janne Andersson",
            footerRights: "All rights reserved.",
          },
        },
      };
    },
    computed: {
    currentLanguage: {
      get() {
        return languageStore.currentLanguage;
      },
      set(lang) {
        languageStore.currentLanguage = lang;
      },
    },
    currentText() {
      return this.textContent[this.currentLanguage];
    },
  },

    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      changeLanguage(lang) {
        this.currentLanguage = lang;
      },
    },
  };
  </script>
  