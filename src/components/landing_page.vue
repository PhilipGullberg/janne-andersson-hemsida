<template>
    <div class="bg-white text-gray-900 min-h-screen">
      <!-- Header -->
      <header class="absolute top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="flex justify-between items-center px-6 py-4">
      <!-- Logo -->
      <div class="text-xl font-bold uppercase text-[#124E66]">Janne Andersson</div>
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
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6 items-center">
        <a href="#about" class="hover:underline text-gray-700">Om Janne</a>
        <a href="#föreläsningar" class="hover:underline text-gray-700">Föreläsningar</a>
        <a href="#uppdrag" class="hover:underline text-gray-700">Uppdrag</a>
        <a
          href="#contact"
          class="hover:underline text-gray-700 border py-1 px-2 border-[#124E66] hover:bg-[#124E66] hover:text-white rounded"
        >
          Kontakt
        </a>
      </nav>
    </div>
    <!-- Mobile Navigation -->
    <nav
      v-show="menuOpen"
      class="md:hidden bg-white shadow-md border-t border-gray-200"
    >
      <ul class="flex flex-col space-y-4 py-4 px-6">
        <li><a href="#about" class="hover:underline text-gray-700">Om Janne</a></li>
        <li><a href="#föreläsningar" class="hover:underline text-gray-700">Föreläsningar</a></li>
        <li><a href="#uppdrag" class="hover:underline text-gray-700">Uppdrag</a></li>
        <li>
          <a
            href="#contact"
            class="hover:underline text-gray-700 border py-2 px-4 border-[#124E66] hover:bg-[#124E66] hover:text-white rounded"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  </header>
  
      <!-- Hero Section -->
      <section class="flex flex-col lg:flex-row items-center justify-around text-center mt: lg:text-left px-6 lg:px-24 py-20 bg-gray-100">
        <div class="max-w-lg">
          <h1 class="text-5xl font-bold text-gray-900 leading-tight">
            Janne Andersson
          </h1>
          <p class="mt-4 text-lg text-gray-700">
            Efter 40 år som tränare inom svensk fotboll, inklusive rollen som förbundskapten för herrlandslaget, jobbar jag numera med föreläsningar, ambassadörsuppdrag och olika mediaproduktioner.
          </p>
          <a
            href="#contact"
            class="mt-6 inline-block px-6 py-3 bg-[#124E66] text-white font-semibold rounded-full hover:bg-[#0f3d52]"
          >
            Kontakta mig
          </a>
        </div>
        <div class="mt-10 lg:mt-0 lg:max-w-md">
          <img
            src="https://www.cafe.se/app/uploads/2021/05/dd97e726-cafe_janne1337-1.jpg"
            alt="Placeholder for Hero"
            class="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section class="bg-white-100 py-16 px-6 lg:px-24">
    <div class="max-w-5xl mx-auto text-center">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
        <!-- Achievement 1 -->
        <div class="flex flex-col items-center">
          <span class="text-6xl font-extrabold text-[#124E66]">496</span>
          <p class="text-gray-700 text-md mt-4">
            Allsvenska matcher som tränare och assisterande tränare.
          </p>
        </div>
       
        <!-- Achievement 3 -->
        <div class="flex flex-col items-center">
          <span class="text-6xl font-extrabold text-[#124E66]">94</span>
          <p class="text-gray-700 text-md mt-4">
            Landskamper som förbundskapten för Sveriges herrlandslag.
          </p>
        </div>
        <!-- Achievement 4 -->
        <div class="flex flex-col items-center">
          <span class="text-6xl font-extrabold text-[#124E66]">2</span>
          <p class="text-gray-700 text-md mt-4">
            SM-guld som tränare: med Halmstads BK och IFK Norrköping.
          </p>
        </div>
        <!-- Achievement 5 -->
        <div class="flex flex-col items-center">
          <span class="text-6xl font-extrabold text-[#124E66]">100+</span>
          <p class="text-gray-700 text-md mt-4">
            Föreläsningar och medieproduktioner.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-6xl font-extrabold text-[#124E66]">5+</span>
          <p class="text-gray-700 text-md mt-4">
            Priser och utmärkelser för ledarskap, inklusive "Årets tränare" i svensk fotboll.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <section id="about" class="py-16 px-6 lg:px-24 bg-gray-100">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-3xl font-semibold text-gray-900 mb-6">Om Janne</h2>
    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      Med över 40 års erfarenhet inom svensk fotboll är Janne Andersson en av landets mest respekterade tränare. 
      Som förbundskapten (2016–2023) ledde han Sverige till flera framgångar, bland annat VM-kvartsfinalen i Ryssland 2018.
    </p>
    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      Jannes karriär började på 1980-talet och tog honom från små klubbar till SM-guld med IFK Norrköping 2015. 
      Han är känd för sitt tydliga ledarskap och förmågan att skapa starka lag.
    </p>
    <p class="text-lg leading-relaxed text-gray-700">
      Idag inspirerar Janne genom föreläsningar och rådgivning där han delar sin passion för ledarskap och teamwork. 
      Hans budskap är tydligt: <em>"Styrkan ligger i laget, inte i individen."</em>
    </p>
  </div>
</section>
<section class="bg-white-100 py-10 px-8 lg:px-32" id="föreläsningar">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <!-- Left Column: Text Content -->
    <div>
      <h2 class="text-4xl font-bold text-gray-900 mb-6">Föreläsningar</h2>
      <p class="text-lg text-gray-700 mb-4">
        Janne Andersson delar med sig av sin unika erfarenhet från över 40 år inom svensk fotboll och ledarskap.
        Föreläsningarna är inspirerande och fyllda med insikter om teamwork, kommunikation och hur man bygger framgångsrika team.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Med över <span class="font-bold text-[#124E66]">100 föreläsningar</span> genomförda, både för företag och idrottsorganisationer,
        erbjuder Janne konkreta råd och strategier för att förbättra ledarskap och samarbete.
      </p>
      <a
        href="#contact"
        class="mt-6 inline-block px-6 py-3 bg-[#124E66] text-white font-semibold rounded-full hover:bg-[#0f3d52]"
      >
        Boka en föreläsning
      </a>
    </div>

    <!-- Right Column: Image Gallery -->
    <div class="grid grid-cols-3 gap-4">
      <div class="aspect-w-4 aspect-h-3">
        <img
          src="https://static.bonniernews.se/ba/7a1ecaba-d429-4250-a588-7aee0c459211.jpeg?width=1400&format=pjpg&auto=webp"
          alt="Föreläsning Bild 1"
          class="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div class="aspect-w-4 aspect-h-3">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D22AQFpopqGOf_Tkg/feedshare-shrink_800/B4DZR6BYcqHIAk-/0/1737213976683?e=1740614400&v=beta&t=aG9E7akk9w8s37MtAArQj0hnu7sX_SWb6c0qvKziNa4"
          alt="Föreläsning Bild 2"
          class="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div class="aspect-w-4 aspect-h-3">
        <img
          src="https://static.bonniernews.se/ba/39306555-a7ed-5735-9cd2-2d2825890dec.jpeg?width=1400&format=pjpg&auto=webp"
          alt="Föreläsning Bild 3"
          class="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div class="aspect-w-4 aspect-h-3">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D22AQGzwYfeZNPnVg/feedshare-shrink_2048_1536/B4DZR6BYdfGkAo-/0/1737213974242?e=1740614400&v=beta&t=O7AnyAfoknL5lzaMTtCGs63BSxzG6oodc-xLT9IwKLQ"
          alt="Föreläsning Bild 4"
          class="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div class="aspect-w-4 aspect-h-3">
        <img
          src="https://lidingoforsamling.se/wp-content/uploads/foredrag-janne-andersson.jpg"
          alt="Föreläsning Bild 4"
          class="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div class="aspect-w-4 aspect-h-3">
        <img
          src="https://static.bonniernews.se/ba/cde8809d-b154-4851-871c-8bd5dfb443ab.jpeg?crop=4752%2C2673%2Cx0%2Cy178&width=1400&format=pjpg&auto=webp"
          alt="Föreläsning Bild 4"
          class="rounded-lg shadow-lg object-cover"
        />
      </div>
      
    </div>
  </div>
</section>

<section class="bg-gray-50 py-16 px-6 lg:px-24" id="uppdrag">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold text-gray-900 text-center mb-12">Uppdrag och Produktioner</h2>
    <p class="text-l text-gray-700 text-center mb-12">Janne har deltagit i mängder av intervjuer, produktioner och andra uppdrag, här är ett antal utvalda där han deltagit på sistone</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Card 1: Hjärtuppropet -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://www.hjartuppropet.se/wp-content/uploads/2024/12/Janne-Andersson-13-683x1024.jpg"
          alt="Hjärtuppropet"
          class="w-full h-40 object-cover object-top"
          style="object-position: 50% 20%;"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">Hjärtuppropet</h3>
          <p class="text-gray-700 mb-4">
            Ambassadör för Hjärtuppropet, där han arbetar för att öka kunskapen om hjärt-lungräddning och hjärtstartare.
          </p>
          <a
            href="https://www.hjartuppropet.se/nyhet/hjartuppropet-utser-janne-andersson-till-ny-ambassador-efter-svennis/"
            target="_blank"
            class="text-[#124E66] font-medium hover:underline "
          >
            Läs mer
          </a>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.wl68Mvb13L3xkCg6felrnAHaE0&pid=Api"
          alt="Barncancerfonden"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">Barncancerfonden</h3>
          <p class="text-gray-700 mb-4">
            Janne Andersson är "förbundskapten" för Barncancerfondens lag, där han arbetar för att öka medvetenheten och stödet för barn med cancer.
          </p>
          <a
            href="https://www.tv4.se/artikel/1fDCl5PfEcy6unGCY6cdAS/haer-aer-janne-anderssons-nya-foerbundskaptensuppdrag"
            target="_blank"
            class="text-[#124E66] font-medium hover:underline"
          >
            Läs mer
          </a>
        </div>
      </div>
      <!-- Card 2: Medverkan i Skavlan -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3b2hJL0ICBUo5mSw5HB8uXWWNPuBsF48WxA&s"
          alt="Skavlan"
          class="w-full h-40 object-cover"
          style="object-position: 50% 30%;"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">Skavlan</h3>
          <p class="text-gray-700 mb-4">
            Janne Andersson har gästat talkshow-programmet "Skavlan" och diskuterat ledarskap, pressen inom elitfotboll och personliga insikter.
          </p>
          <a
            href="https://www.svtplay.se/video/KqWpr53/skavlan/janne-andersson-och-gunde-och-ferry-svan-bland-gasterna"
            target="_blank"
            class="text-[#124E66] font-medium hover:underline"
          >
            Läs mer
          </a>
        </div>
      </div>
      <!-- Card 3: Sommar i P1 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.uUAJv2tF_M2dellCC9HF5gHaEK&pid=Api"
          alt="Sommar i P1"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">Sommar i P1</h3>
          <p class="text-gray-700 mb-4">
            Janne Andersson var sommarpratare i "Sommar i P1", där han berättade om sin karriär, uppväxt och personliga insikter från fotbollen.
          </p>
          <a
            href="https://www.sverigesradio.se/avsnitt/janne-andersson"
            target="_blank"
            class="text-[#124E66] font-medium hover:underline"
          >
            Läs mer
          </a>
        </div>
      </div>
      
      <!-- Card 2: UNICEF -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.agwgT7zEebl9EUzGQamfGAHaEK&pid=Api"
          alt="UNICEF"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">UNICEF</h3>
          <p class="text-gray-700 mb-4">
            Som UNICEF-ambassadör reste Janne till Botswana för att uppmärksamma barns rättigheter och levnadsvillkor.
          </p>
          <a
            href="https://www.youtube.com/watch?v=L_vNFAMNNMI"
            target="_blank"
            class="text-[#124E66] font-medium hover:underline"
          >
            Läs mer
          </a>
        </div>
      </div>
      <!-- Card 3: Masked Singer -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.crGMMqb03zcunnFiAWeAOQHaEK&pid=Api"
          alt="Masked Singer"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">Masked Singer</h3>
          <p class="text-gray-700 mb-4">
            Janne deltog i "Masked Singer Sverige" som Mullvaden och överraskade publiken med sina framträdanden.
          </p>
          <a
            href="https://www.tv4.se/artikel/R9Xe927EwnzWz0QXmxAD5/haer-avsloejas-den-andra-deltagaren-i-masked-singer-sverige"
            target="_blank"
            class="text-[#124E66] font-medium hover:underline"
          >
            Läs mer
          </a>
        </div>
      </div>
      <!-- Card 4: Över Atlanten -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.USxQsR-IaVoSNhztzX8vhwHaDt&pid=Api"
          alt="Över Atlanten"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">Över Atlanten</h3>
          <p class="text-gray-700 mb-4">
            Medverkade i den populära serien "Över Atlanten" där han seglade över Atlanten tillsammans med andra kända profiler.
          </p>
          <a
            href="https://sv.wikipedia.org/wiki/%C3%96ver_Atlanten"
            target="_blank"
            class="text-[#124E66] font-medium hover:underline"
          >
            Läs mer
          </a>
        </div>
      </div>
      <!-- Card 5: Bäst i Test -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZTdjOGZkMDAtZmJkNi00NzQ5LTlmN2MtNzZiNTdiOTYxNGFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          alt="Bäst i Test"
          class="w-full h-40 object-cover   object-top"
          style="object-position: 30% 30%;"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">Bäst i Test</h3>
          <p class="text-gray-700 mb-4">
            Janne Andersson medverkade i det populära humorprogrammet "Bäst i Test", där han deltog i olika utmaningar.
          </p>
          <a
            href="https://www.svtplay.se/bast-i-test"
            target="_blank"
            class="text-[#124E66] font-medium hover:underline"
          >
            Läs mer
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  
      <!-- Contact Section -->
      <section id="contact" class="py-16 px-6 lg:px-24 bg-white">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-3xl font-semibold text-gray-900 mb-6">Kontakt</h3>
          <form class="bg-gray-100 p-6 rounded-lg shadow-md">
            <div class="mb-4">
              <label class="block text-left text-sm font-medium text-gray-700">Namn</label>
              <input
                type="text"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#124E66] focus:border-[#124E66]"
                placeholder="Ditt namn"
              />
            </div>
            <div class="mb-4">
              <label class="block text-left text-sm font-medium text-gray-700">E-post</label>
              <input
                type="email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#124E66] focus:border-[#124E66]"
                placeholder="Din e-postadress"
              />
            </div>
            <div class="mb-6">
              <label class="block text-left text-sm font-medium text-gray-700">Meddelande</label>
              <textarea
                rows="4"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#124E66] focus:border-[#124E66]"
                placeholder="Skriv ditt meddelande här"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-[#124E66] text-white py-3 font-semibold rounded-lg hover:bg-[#0f3d52]"
            >
              Skicka Meddelande
            </button>
          </form>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-100 text-gray-700 text-center py-6">
        <p>&copy; 2025 Janne Andersson. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
    data() {
    return {
      menuOpen: false, // Tracks if the menu is open
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Toggles the menu state
    },
  },
    
  };
  </script>


<style scoped>
</style>