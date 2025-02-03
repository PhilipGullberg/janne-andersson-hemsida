<template>
  <div class="bg-white text-gray-900 min-h-screen">

    <!-- Header -->
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div class="flex justify-between items-center px-10 py-2">
        
        <!-- Left side logo and CV button -->
        <div class="flex items-center gap-6">
          <div class="text-xl font-bold uppercase text-[#124E66] md:hidden lg:block">
            <a href="/">{{ currentText.headerName }}</a>
          </div>
          <button
            class="flex items-center hidden md:flex px-2 py-1 border border-[#124E66] rounded-full hover:bg-gray-200 transition duration-300"
          >
            <router-link to="/cv" @click.native="scrollToTop()">
              {{ currentText.headerCV }} 
              <i class="fa-solid fa-file text-[#124E66] ms-1 fa-sm"></i>
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

        <!-- Desktop Language Switch -->
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
          <a href="#about" class="hover:underline text-gray-700">{{ currentText.navAbout }}</a>
          <a href="#föreläsningar" class="hover:underline text-gray-700">{{ currentText.navLectures }}</a>
          <a href="#uppdrag" class="hover:underline text-gray-700">{{ currentText.navAssignments }}</a>
          <a href="#utmärkelser" class="hover:underline text-gray-700">{{ currentText.navAwards }}</a>
          <a
            @click="toggleMenu()"
            href="#contact"
            class="hover:underline text-gray-700 border py-1 px-2 border-[#124E66] hover:bg-[#124E66] hover:text-white rounded"
          >
            {{ currentText.navContact }}
            
          </a>
        </nav>
      </div>

      <!-- Mobile Navigation -->
      <nav
        v-show="menuOpen"
        class="md:hidden bg-white shadow-md border-t border-gray-200"
      >
        <ul class="flex flex-col space-y-4 py-6 px-3">
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

          <!-- CV button mobile -->
          <button
            class="flex items-center w-20 px-2 py-1 border border-[#124E66] rounded-full  hover:bg-gray-200 transition duration-300"
          >
            <router-link to="/cv" @click.native="scrollToTop()">
              {{ currentText.headerCV }}
              <i class="fa-solid fa-file text-[#124E66] ms-1 fa-sm"></i>
            </router-link>
          </button>

          <li><a href="#about" class="hover:underline text-gray-700">{{ currentText.navAbout }}</a></li>
          <li><a href="#föreläsningar" class="hover:underline text-gray-700">{{ currentText.navLectures }}</a></li>
          <li><a href="#uppdrag" class="hover:underline text-gray-700">{{ currentText.navAssignments }}</a></li>
          <li><a href="#utmärkelser" class="hover:underline text-gray-700">{{ currentText.navAwards }}</a></li>
          <li>
            <a @click="toggleMenu()"
              href="#contact"
              class="hover:underline text-gray-700 border py-2 px-4 border-[#124E66] hover:bg-[#124E66] hover:text-white rounded"
            >
              {{ currentText.navContact }}
              
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main v-if="currentPage === 'main'" class="animate-fade-in">

      <!-- Hero Section -->
      <section  class="flex flex-col md:flex-row items-center justify-around text-center mt: lg:text-left px-6 lg:px-24 py-20 bg-gray-100">
        <div class="lg:max-w-lg max-w-md" >
          <h1 class="text-5xl font-bold text-gray-900 leading-tight">
            {{ currentText.heroTitle }}
          </h1>
          <p class="mt-4 text-lg leading-relaxed text-gray-700">
            {{ currentText.heroDescription }}
          </p>
          <a
          @click="toggleMenu()"
            href="#contact"
            class="mt-8 inline-block px-6 py-3 bg-[#124E66] text-lg text-white font-semibold rounded-full hover:bg-[#0f3d52] hover:scale-105 transform transition duration-300"
          >
            {{ currentText.heroCta }} <i class="fa-solid fa-arrow-right fa-sm ms-3 self-center"></i>
            
          </a>
        </div>
        <div class="mt-10 lg:mt-4 md:ms-4 lg:max-w-md">
          <img
            src="https://www.cafe.se/app/uploads/2021/05/dd97e726-cafe_janne1337-1.jpg"
            alt="Placeholder for Hero"
            class="rounded-lg shadow-lg object-cover w-[400px] h-[500px]"
          />
        </div>
      </section>

      <!-- Stats Section -->
      <section class="bg-white py-16 px-6 lg:px-24">
        <div class="max-w-5xl mx-auto text-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <div v-for="stat in currentText.stats" :key="stat.id" class="flex flex-col items-center">
            <!-- Animated Number -->
            <div class="flex">
              <!-- If the value is 100 or 10, we show 0 initially, otherwise we show the data-value text. 
                   This logic is from your original code. -->
              <span
                ref="animatedNumbers"
                class="text-6xl font-extrabold text-[#124E66]"
                :data-value="stat.value"
                v-if="stat.value == 100"
              >
                0
              </span>
              <span
                ref="animatedNumbers"
                class="text-6xl font-extrabold text-[#124E66]"
                :data-value="stat.value"
                v-else-if="stat.value == 10"
              >
                0
              </span>
              <span
                v-if="stat.value == 100 || stat.value == 10"
                class="text-6xl font-extrabold text-[#124E66]"
              >
                +
              </span>
              <span
                v-else
                ref="animatedNumbers"
                class="text-6xl font-extrabold text-[#124E66]"
                :data-value="stat.value"
              >
                0
              </span>
            </div>
            <p class="text-gray-700 text-md mt-4">{{ stat.text }}</p>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="pt-16 pb-8 px-6 lg:px-24 bg-gray-100">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-3xl font-semibold text-gray-900 mb-6">
            {{ currentText.aboutTitle }}
          </h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            {{ currentText.aboutParagraph1 }}
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            {{ currentText.aboutParagraph2 }}
          </p>
          <p class="text-lg leading-relaxed text-gray-700">
            {{ currentText.aboutParagraph3 }}
          </p>
        </div>
      </section>
      <section id="education" class="py-4 pb-16 px-6 lg:px-24 bg-gray-100">
  <div class="max-w-5xl mx-auto text-center">
    <!-- <h2 class="text-3xl font-bold text-gray-900 mb-8">
      {{ currentLanguage === 'sv' ? 'Utbildningar' : 'Education' }}
    </h2> -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div
        v-for="education in currentText.educations"
        :key="education.id"
        class="flex flex-col items-center bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-300"
      >
        <!-- Ikon, storlek och färg kan justeras -->
        <div class="text-4xl text-[#124E66]">
          <i :class="education.iconClass"></i>
        </div>
        <p class="mt-4 text-lg text-gray-700 text-center">
          {{ education.title }}
        </p>
      </div>
    </div>
  </div>
</section>

      <!-- Lectures Section -->
      <section class="bg-white-100 py-10 px-8 lg:px-32" id="föreläsningar">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left Column: Text Content -->
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              {{ currentText.lectureTitle }}
            </h2>
            <p class="text-lg text-gray-700 mb-4">
              {{ currentText.lectureParagraph1 }}
            </p>
            <p class="text-lg text-gray-700 mb-4">
              {{ currentText.lectureParagraph2 }}
            </p>
            <a
            @click="toggleMenu()"
              href="#contact"
              class="mt-6 inline-block px-6 py-3 bg-[#124E66] text-white font-semibold rounded-full hover:bg-[#0f3d52]"
            >
              {{ currentText.lectureCta }}
            </a>
          </div>

          <!-- Right Column: Image Gallery (unchanged) -->
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
                alt="Föreläsning Bild 5"
                class="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div class="aspect-w-4 aspect-h-3">
              <img
                src="https://static.bonniernews.se/ba/cde8809d-b154-4851-871c-8bd5dfb443ab.jpeg?crop=4752%2C2673%2Cx0%2Cy178&width=1400&format=pjpg&auto=webp"
                alt="Föreläsning Bild 6"
                class="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="book" class="py-16 px-6 lg:px-24 bg-gradient-to-r from-[#124E66] to-[#124E66] text-white md:px-12 ">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
    <!-- Bokbild -->
    <div class="md:w-1/2 sm:w-full self-center">
      <img
        src="https://bilder.akademibokhandeln.se/images_akb/9789171265302_383/att-bygga-ett-lag"
        alt="Bokens omslag"
        class="rounded-lg shadow-2xl object-cover md:w-3/4 sm:w-3/5"
      />
    </div>
    <!-- Textinnehåll -->
    <div class="md:w-1/2 sm:w-full">
      <h2 class="text-4xl font-extrabold mb-4">
        {{ currentText.bookSection.title }}
      </h2>
      <p class="text-lg mb-6">
        {{ currentText.bookSection.description }}
        
      </p>
      <blockquote class="border-l-4 border-white pl-4 italic text-xl">
        "{{ currentText.bookSection.quote }}"
        
      </blockquote>
      <a target="_blank"
            class="px-4 flex items-center w-2/3 md:w-1/3 justify-between py-2 bg-white text-[#124E66] font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-2xl hover:scale-105 transition duration-200 mt-8" href="https://www.akademibokhandeln.se/bok/att-bygga-ett-lag/9789171265302">{{ currentText.bookSection.CTA }}</a>
    </div>
  </div>
</section>

      <!-- LinkedIn Section -->
      <section class="bg-gray-50 py-16 px-6 lg:px-8">
        <div class="max-w-7xl mx-auto text-center flex justify-center flex-col items-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-12">
            {{ currentText.linkedInTitle }}
          </h2>
          <a
            href="https://www.linkedin.com/in/janne-andersson-1b0783335/"
            target="_blank"
            class="flex md:w-1/3 sm:w-3/4 items-center md:px-2 px-4 py-4 my-4 mb-8 justify-center bg-[#0077B5] text-white font-semibold text-lg rounded-full shadow-md hover:bg-[#005983] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6 mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.324 0 .724 0h14.552c.4 0 
                   .724.513.724 1.146v13.708c0 .633-.324 1.146-.724 
                   1.146H.724A.72.72 0 010 14.854V1.146zm4.943 
                   12.248V6.169H2.542v7.225h2.4zm-1.2-8.212c.837 
                   0 1.356-.554 1.356-1.248-.015-.71-.519-1.247-1.342-1.247-.823 
                   0-1.356.537-1.356 1.247 0 
                   .694.519 1.248 1.328 1.248h.014zm4.908 
                   8.212V9.359c0-.216.015-.432.08-.586.175-.432.574-.878 
                   1.243-.878.875 0 1.225.662 1.225 
                   1.632v3.867h2.4V9.273c0-2.217-1.185-3.246-2.766-3.246-1.28 
                   0-1.845.702-2.165 1.195v.025h-.014a3.75 
                   3.75 0 01.014-.025V6.17h-2.4c.03.662 0 7.224 0 
                   7.224h2.4z"
              />
            </svg>
            {{ currentText.linkedInButton }}
          </a>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300  overflow-hidden">
              <div class="aspect-w-16 aspect-h-9 h-96 overflow-hidden ">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7288187782546493440"
                  frameborder="0"
                  
                  allowfullscreen
                  title="Inbäddat inlägg"
                  class="w-full h-full overflow-hidden"
                ></iframe>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
              <div class="aspect-w-16 aspect-h-9  h-96">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7285659427091746817"
                  frameborder="0"
                  
                  allowfullscreen
                  title="Inbäddat inlägg"
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
              <div class="aspect-w-16 aspect-h-9  h-96">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7285541759995027456"
                  frameborder="0"
                  allowfullscreen
                  
                  title="Inbäddat inlägg"
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Assignments Section -->
      <section class=" py-16 px-6 lg:px-18 bg-gray-100" id="uppdrag">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl font-bold text-gray-900 text-center mb-8">
            {{ currentText.assignmentsTitle }}
          </h2>
          <p class="text-l text-gray-700 text-center mb-8">
            {{ currentText.assignmentsDescription }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(card, index) in currentText.cards" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="card.image" :alt="card.title" style="object-position:50% 20%;" class="w-full h-40 object-cover " />
          <div class="p-6">
            <h3 class="text-2xl font-semibold text-gray-900 mb-2">{{ card.title }}</h3>
            <p class="text-gray-700 mb-4">{{ card.description }}</p>
            <a :href="card.link" target="_blank" class="text-[#124E66] font-medium hover:underline">
              {{ currentText.readMore }}
            </a>
          </div>
        </div>
      </div>
        </div>
      </section>

      <!-- "Contact Me" CTA Section -->
      <div class="bg-[#124E66] text-white py-10">
        <div
          class="max-w-7xl mx-auto px-4 lg:px-24 flex flex-col lg:flex-row items-center gap-8 justify-between"
        >
          <!-- Text Section -->
          <div class="text-center lg:text-left">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4">
              {{ currentText.inviteTitle }}
            </h2>
            <p class="text-lg mb-6">
              {{ currentText.inviteParagraph }}
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex justify-center lg:justify-end lg:w-2/5 md:w-3/5 w-3/4">
            <a
             @click="toggleMenu()"
              href="#contact"
              class="px-4 flex items-center w-3/4 justify-between py-2 bg-white text-[#124E66] font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-2xl hover:scale-105 transition duration-200"
            >
              {{ currentText.inviteCta }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Awards Section -->
      <section id="utmärkelser" class="py-4">
        <h1 class="text-4xl font-bold text-gray-900 text-center mb-10 mt-16">
          {{ currentText.awardsTitle }}
        </h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-16 px-6">
      <div
        v-for="(award, index) in currentText.majorAwards"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 class="text-xl font-semibold text-[#124E66] mb-2">
          {{ award.title }}
        </h3>
        <div class="aspect-w-16 aspect-h-9 flex-shrink-0">
          <img
            class="w-full h-full object-cover"
            :src="award.image"
            :alt="award.title"
          />
        </div>
      </div>
    </div>

    <!-- Minor Awards (Icon-based) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:px-16 px-6">
      <div
        v-for="(award, index) in currentText.minorAwards"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition duration-300"
      >
        <div class="flex-shrink-0">
          <i :class="award.iconClass"></i>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-[#124E66]">
            {{ award.title }}
          </h3>
          <p class="text-gray-700 text-sm">
            ({{ award.year }})
          </p>
        </div>
      </div>
    </div>
      </section>

      <hr class="my-12 border-1 border-[#124E66]" />

      <!-- Contact Form -->
      <section id="contact" class="py-10 px-6 lg:px-24 bg-white">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-3xl font-semibold text-gray-900 mb-6">
            {{ currentText.contactTitle }}
          </h3>
          <form action="https://api.web3forms.com/submit" method="POST" class="bg-gray-100 p-6 rounded-lg shadow-md">
            <input type="hidden" name="access_key" value="a274ae47-cae4-4fbf-bb60-747cf431ed3e">
            <div class="mb-4">
              <label class="block text-left text-sm font-medium text-gray-700">
                {{ currentText.formName }}
              </label>
              <input
                type="text"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#124E66] focus:border-[#124E66]"
                :placeholder="currentText.formNamePlaceholder"
                name="name"
              />
            </div>
            <div class="mb-4">
              <label class="block text-left text-sm font-medium text-gray-700">
                {{ currentText.formEmail }}
              </label>
              <input
                type="email"
                name="email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#124E66] focus:border-[#124E66]"
                :placeholder="currentText.formEmailPlaceholder"
              />
            </div>
            <div class="mb-6">
              <label class="block text-left text-sm font-medium text-gray-700">
                {{ currentText.formMessage }}
              </label>
              <textarea
                rows="4"
                name="message"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#124E66] focus:border-[#124E66]"
                :placeholder="currentText.formMessagePlaceholder"
              ></textarea>
            </div>
            <!--<input type="checkbox" name="botcheck" class="hidden" style="display: none;">-->
            <button
              type="submit"
              class="w-full bg-[#124E66] text-white py-3 font-semibold rounded-lg hover:bg-[#0f3d52]"
            >
              {{ currentText.formSubmit }}
            </button>
          </form>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-100 text-gray-700 text-center py-6">
        <p>
          &copy; 2025 {{ currentText.footerName }}.
          {{ currentText.footerRights }}
        </p>
      </footer>
    </main>

    <!-- Example sub-component usage (if relevant) -->
    <utmärkelser v-else @go-back="currentPage = 'main'" />

  </div>
</template>

<script>
import axios from "axios";
import { languageStore } from "../store/languageStore.js";

export default {
  name: "LandingPage",

  data() {
    return {
      menuOpen: false,
      currentPage: "main",
      posts: [],
      

      // All text for Swedish and English
      textContent: {
        sv: {
          educations: [
      {
        id: 1,
        title: "UEFA Pro License",
        iconClass: "fas fa-trophy"  // Exempel på ikon, byt vid behov
      },
      {
        id: 2,
        title: "Certifierad från Styrelseakademien",
        iconClass: "fas fa-university"
      },
      {
        id: 3,
        title: "Idrottsvetenskaplig utbildning",
        iconClass: "fas fa-chalkboard-teacher"
      }
    ],
          bookSection: {
          title: "En handbok för ledare",
          description: "Denna bok ger en djupgående inblick i ledarskap med inspirerande berättelser och praktiska exempel. Varje kapitel är utformat för att vara både informativt och engagerande.",
          quote: "En bok som alla som jobbar med någon form av ledarskap bör läsa. En handbok i hur man får människor att trivas och prestera.",
          image: "https://via.placeholder.com/400x600.png?text=Bokens+Omslag",
          CTA:"Köp boken",
        },
          awardsTitle: "Utmärkelser",
          title: "Uppdrag och Produktioner",
          readMore: "Läs mer",
          cards: [
            {
              title: "Hjärtuppropet",
              description: "Ambassadör för Hjärtuppropet, där han arbetar för att öka kunskapen om hjärt-lungräddning och hjärtstartare.",
              image: "https://www.hjartuppropet.se/wp-content/uploads/2024/12/Janne-Andersson-13-683x1024.jpg",
              link: "https://www.hjartuppropet.se/nyhet/hjartuppropet-utser-janne-andersson-till-ny-ambassador-efter-svennis/"
            },
            {
              title: "Barncancerfonden",
              description: "Janne är 'förbundskapten' för Barncancerfondens lag och arbetar för att öka medvetenheten om barncancer.",
              image: "https://tse1.mm.bing.net/th?id=OIP.wl68Mvb13L3xkCg6felrnAHaE0&pid=Api",
              link: "https://www.tv4.se/artikel/1fDCl5PfEcy6unGCY6cdAS/haer-aer-janne-anderssons-nya-foerbundskaptensuppdrag"
            },
            {
              title: "Skavlan",
              description: "Gästade 'Skavlan' och diskuterade ledarskap, pressen inom elitfotboll och personliga insikter.",
              image: "https://idrottensaffarer.se/files/imagecache/100_proc/story_image/svt-skavlan-2017-e10-7d27.jpg",
              link: "https://www.svtplay.se/video/KqWpr53/skavlan/janne-andersson-och-gunde-och-ferry-svan-bland-gasterna"
            },
            {
              title: "Masked Singer",
              description: "Janne deltog i 'Masked Singer Sverige' som Mullvaden och överraskade publiken med sina framträdanden.",
              image: "https://tse1.mm.bing.net/th?id=OIP.crGMMqb03zcunnFiAWeAOQHaEK&pid=Api",
              link: "https://www.tv4.se/artikel/R9Xe927EwnzWz0QXmxAD5/haer-avsloejas-den-andra-deltagaren-i-masked-singer-sverige"
            },
            {
              title: "Över Atlanten",
              description: "Medverkade i den populära serien 'Över Atlanten' där han seglade över Atlanten tillsammans med andra kända profiler.",
              image: "https://tse4.mm.bing.net/th?id=OIP.USxQsR-IaVoSNhztzX8vhwHaDt&pid=Api",
              link: "https://sv.wikipedia.org/wiki/%C3%96ver_Atlanten"
            },
            {
              title: "Bäst i Test",
              description: "Janne medverkade i det populära humorprogrammet 'Bäst i Test', där han deltog i olika utmaningar.",
              image: "https://m.media-amazon.com/images/M/MV5BZTdjOGZkMDAtZmJkNi00NzQ5LTlmN2MtNzZiNTdiOTYxNGFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
              link: "https://www.svtplay.se/bast-i-test"
            },
            {
  "title": "UNICEF",
  "description": "Som UNICEF-ambassadör reste Janne till Botswana för att uppmärksamma barns rättigheter och levnadsvillkor.",
  "image": "https://tse4.mm.bing.net/th?id=OIP.agwgT7zEebl9EUzGQamfGAHaEK&pid=Api",
  "link": "https://www.youtube.com/watch?v=L_vNFAMNNMI"
},
{
  "title": "Sommar i P1",
  "description": "Janne Andersson var sommarpratare i 'Sommar i P1', där han berättade om sin karriär, uppväxt och personliga insikter från fotbollen.",
  "image": "https://tse1.mm.bing.net/th?id=OIP.uUAJv2tF_M2dellCC9HF5gHaEK&pid=Api",
  "link": "https://www.sverigesradio.se/avsnitt/janne-andersson"
}
          ],
          majorAwards: [
            {
              title: "Kungens guldmedalj av 8:e storleken i högblått band (2024)",
              image: "https://imageproxy.a2d.tv/?width=720&source=https:%2F%2Ftvmedia.image-service.eu-north-1-prod.vmnd.tv%2Fapi%2Fv2%2Fimg%2F666b1f16e4b0f73816c4f4a3-1718297067208%3Flocation=main"
            },
            {
              title: "Årets ledare på Idrottsgalan, utdelad av Greta Thunberg (2019)",
              image: "https://static.bonniernews.se/gcs/bilder/epi-30-dn/UploadedImages/2019/1/21/63bd70cb-0683-4d32-8c28-d062c6c0aa04/bigOriginal.jpg?io=1&width=1024&crop=16:9,smart"
            },
            {
              title: "Årets tränare i Svensk fotboll, för sina insatser (2004, 2015)",
              image: "https://static-cdn.sr.se/images/160/06df03b3-00b2-4e11-a2ae-eecd64cf01ba.jpg?preset=1024x576"
            }
          ],

          minorAwards: [
            {
              title: "Hedersmedlem Alets IK",
              year: 2004,
              iconClass: "fas fa-award text-[#124E66] text-3xl"
            },
            {
              title: "Hallands Akademis stora pris",
              year: 2018,
              iconClass: "fas fa-trophy text-[#124E66] text-3xl"
            },
            {
              title: "Hedersmedborgare Norrköping",
              year: 2016,
              iconClass: "fas fa-star text-[#124E66] text-3xl"
            },
            {
              title: "Hedersmedborgare Halmstad",
              year: 2018,
              iconClass: "fas fa-medal text-[#124E66] text-3xl"
            },
            {
              title: "HP-guldet",
              year: 2018,
              iconClass: "fas fa-trophy text-[#124E66] text-3xl"
            },
            {
              title: "Korvakademins jubileumspris",
              year: 2021,
              iconClass: "fas fa-medal text-[#124E66] text-3xl"
            },
            {
              title: "Årets Hallänning",
              year: 2019,
              iconClass: "fas fa-star text-[#124E66] text-3xl"
            },
            {
              title: "Fryshusets pris som Årets Påverkare",
              year: 2019,
              iconClass: "fas fa-award text-[#124E66] text-3xl"
            }
          ],
          stats: [
            {
              id: 1,
              value: 496,
              text: "Allsvenska matcher som tränare och assisterande tränare."
            },
            {
              id: 2,
              value: 94,
              text: "Landskamper som förbundskapten för Sveriges herrlandslag."
            },
            {
              id: 3,
              value: 2,
              text: "SM-guld som tränare: Halmstads BK (ass.) och IFK Norrköping."
            },
            {
              id: 4,
              value: 100,
              text: "Föreläsningar och medieproduktioner."
            },
            {
              id: 5,
              value: 10,
              text: "Utmärkelser för ledarskap, bland annat 'Årets ledare' (2019)."
            }
          ],
          /* --- HEADER --- */
          headerName: "Janne Andersson",
          headerCV: "CV",

          /* --- NAVIGATION --- */
          navAbout: "Om Janne",
          navLectures: "Föreläsningar",
          navAssignments: "Uppdrag",
          navAwards: "Utmärkelser",
          navContact: "Kontakt",

          /* --- HERO --- */
          heroTitle: "Janne Andersson",
          heroDescription:
            "Efter 40 år som tränare inom svensk fotboll, inklusive rollen som förbundskapten för herrlandslaget, arbetar han numera med föreläsningar, ambassadörsuppdrag, mentorskap och olika mediaproduktioner.",
          heroCta: "Kontakta mig",

          /* --- ABOUT --- */
          aboutTitle: "Om Janne",
          aboutParagraph1:
            "Med över 40 års erfarenhet inom svensk fotboll är Janne Andersson en av landets mest respekterade tränare och ledare. Som förbundskapten (2016–2023) ledde han Sverige till flera framgångar, bland annat VM-kvartsfinalen i Ryssland 2018.",
          aboutParagraph2:
            "Jannes karriär började på 1980-talet och tog honom från modersklubben Alets IK i Halmstad, till SM-guld med IFK Norrköping 2015. Han är känd för sitt tydliga ledarskap och förmågan att skapa starka lag.",
          aboutParagraph3:
            'Idag inspirerar Janne genom föreläsningar och rådgivning där han delar sin passion för ledarskap och teamwork. Hans budskap är tydligt: "Tillsammans är vi starka."',

          /* --- LECTURES --- */
          lectureTitle: "Föreläsningar",
          lectureParagraph1:
            "Janne Andersson delar med sig av sin unika erfarenhet från över 40 år inom svensk fotboll och ledarskap. Föreläsningarna är inspirerande och fyllda med insikter om teamwork, kommunikation och hur man bygger framgångsrika team.",
          lectureParagraph2:
            "Med över 100 föreläsningar genomförda, både för företag och idrottsorganisationer, erbjuder Janne konkreta råd och strategier för att förbättra ledarskap och samarbete.",
          lectureCta: "Boka en föreläsning",

          /* --- LINKEDIN --- */
          linkedInTitle: "På LinkedIn uppdaterar Janne om sina aktuella uppdrag",
          linkedInButton: "Följ Janne på LinkedIn",
          linkedInReadMore: "Läs mer",

          /* --- ASSIGNMENTS --- */
          assignmentsTitle: "Uppdrag och Produktioner",
          assignmentsDescription:
            "Janne har deltagit i mängder av intervjuer, produktioner och andra uppdrag, här är ett antal utvalda där han deltagit på sistone.",

          /* --- CTA SECTION --- */
          inviteTitle: "Välkommen att kontakta Janne Andersson",
          inviteParagraph:
            "Hör gärna av er om ni är intresserade av att komma i kontakt, för föreläsningar, ambassadörsuppdrag eller annat.",
          inviteCta: "Kontakta mig",

          /* --- AWARDS SECTION --- */
          awardsTitle: "Utmärkelser",

          /* --- CONTACT FORM --- */
          contactTitle: "Kontakt",
          formName: "Namn",
          formNamePlaceholder: "Ditt namn",
          formEmail: "E-post",
          formEmailPlaceholder: "Din e-postadress",
          formMessage: "Meddelande",
          formMessagePlaceholder: "Skriv ditt meddelande här",
          formSubmit: "Skicka Meddelande",

          /* --- FOOTER --- */
          footerName: "Janne Andersson",
          footerRights: "Alla rättigheter förbehållna.",
        },

        en: {
          educations: [
      {
        id: 1,
        title: "UEFA Pro License",
        iconClass: "fas fa-trophy"
      },
      {
        id: 2,
        title: "Certified by the Board Academy",
        iconClass: "fas fa-university"
      },
      {
        id: 3,
        title: "Sports Science education",
        iconClass: "fas fa-chalkboard-teacher"
      }
    ],
          bookSection: {
        title: "A handbook for leadarship",
        description: "This book offers an in-depth look at leadership with inspiring stories and practical examples. Each chapter is designed to be both informative and engaging.",
        quote: "A book that everyone who works with any form of leadership should read. A handbook on how to make people thrive and perform.",
        image: "https://via.placeholder.com/400x600.png?text=Book+Cover",
        CTA:"Buy the book",
      },
          awardsTitle: "Awards",
          title: "Assignments and Productions",
          readMore: "Read more",
          cards: [
            {
              title: "Hjärtuppropet",
              description: "Ambassador for Hjärtuppropet, working to increase knowledge about CPR and defibrillators.",
              image: "https://www.hjartuppropet.se/wp-content/uploads/2024/12/Janne-Andersson-13-683x1024.jpg",
              link: "https://www.hjartuppropet.se/nyhet/hjartuppropet-utser-janne-andersson-till-ny-ambassador-efter-svennis/"
            },
            {
              title: "Barncancerfonden",
              description: "Janne is the 'head coach' of Barncancerfonden’s team, raising awareness and support for children with cancer.",
              image: "https://tse1.mm.bing.net/th?id=OIP.wl68Mvb13L3xkCg6felrnAHaE0&pid=Api",
              link: "https://www.tv4.se/artikel/1fDCl5PfEcy6unGCY6cdAS/haer-aer-janne-anderssons-nya-foerbundskaptensuppdrag"
            },
            {
              title: "Skavlan",
              description: "Guest on 'Skavlan' discussing leadership, the pressures of elite football, and personal insights.",
              image: "https://idrottensaffarer.se/files/imagecache/100_proc/story_image/svt-skavlan-2017-e10-7d27.jpg",
              link: "https://www.svtplay.se/video/KqWpr53/skavlan/janne-andersson-och-gunde-och-ferry-svan-bland-gasterna"
            },
            {
              title: "Masked Singer",
              description: "Janne participated in 'Masked Singer Sweden' as Mullvaden and surprised the audience with his performances.",
              image: "https://tse1.mm.bing.net/th?id=OIP.crGMMqb03zcunnFiAWeAOQHaEK&pid=Api",
              link: "https://www.tv4.se/artikel/R9Xe927EwnzWz0QXmxAD5/haer-avsloejas-den-andra-deltagaren-i-masked-singer-sverige"
            },
            {
  "title": "Across the Atlantic",
  "description": "Participated in the popular series 'Across the Atlantic', where he sailed across the Atlantic alongside other well-known personalities.",
  "image": "https://tse4.mm.bing.net/th?id=OIP.USxQsR-IaVoSNhztzX8vhwHaDt&pid=Api",
  "link": "https://sv.wikipedia.org/wiki/%C3%96ver_Atlanten"
},
{
  "title": "Bäst i Test",
  "description": "Janne appeared in the popular Swedish comedy show 'Bäst i Test', where he took part in various challenges.",
  "image": "https://m.media-amazon.com/images/M/MV5BZTdjOGZkMDAtZmJkNi00NzQ5LTlmN2MtNzZiNTdiOTYxNGFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "link": "https://www.svtplay.se/bast-i-test"
},
{
  "title": "UNICEF",
  "description": "As a UNICEF ambassador, Janne traveled to Botswana to raise awareness about children's rights and living conditions.",
  "image": "https://tse4.mm.bing.net/th?id=OIP.agwgT7zEebl9EUzGQamfGAHaEK&pid=Api",
  "link": "https://www.youtube.com/watch?v=L_vNFAMNNMI"
},
{
  "title": "Sommar i P1",
  "description": "Janne Andersson was a guest on 'Sommar i P1', where he shared insights about his career, upbringing, and personal experiences in football.",
  "image": "https://tse1.mm.bing.net/th?id=OIP.uUAJv2tF_M2dellCC9HF5gHaEK&pid=Api",
  "link": "https://www.sverigesradio.se/avsnitt/janne-andersson"
}

          ],

          majorAwards: [
            {
              title: "King's Medal of the 8th Size in Blue Ribbon (2024)",
              image: "https://imageproxy.a2d.tv/?width=720&source=https:%2F%2Ftvmedia.image-service.eu-north-1-prod.vmnd.tv%2Fapi%2Fv2%2Fimg%2F666b1f16e4b0f73816c4f4a3-1718297067208%3Flocation=main"
            },
            {
              title: '“Coach of the Year” at Idrottsgalan, awarded by Greta Thunberg (2019)',
              image: "https://static.bonniernews.se/gcs/bilder/epi-30-dn/UploadedImages/2019/1/21/63bd70cb-0683-4d32-8c28-d062c6c0aa04/bigOriginal.jpg?io=1&width=1024&crop=16:9,smart"
            },
            {
              title: "Sweden’s Football Coach of the Year (2004, 2015)",
              image: "https://static-cdn.sr.se/images/160/06df03b3-00b2-4e11-a2ae-eecd64cf01ba.jpg?preset=1024x576"
            }
          ],

          minorAwards: [
            {
              title: "Honorary Member of Alets IK",
              year: 2004,
              iconClass: "fas fa-award text-[#124E66] text-3xl"
            },
            {
              title: "Hallands Academy Grand Prize",
              year: 2018,
              iconClass: "fas fa-trophy text-[#124E66] text-3xl"
            },
            {
              title: "Honorary Citizen of Norrköping",
              year: 2016,
              iconClass: "fas fa-star text-[#124E66] text-3xl"
            },
            {
              title: "Honorary Citizen of Halmstad",
              year: 2018,
              iconClass: "fas fa-medal text-[#124E66] text-3xl"
            },
            {
              title: "HP Award",
              year: 2018,
              iconClass: "fas fa-trophy text-[#124E66] text-3xl"
            },
            {
              title: "Korvakademin Anniversary Award",
              year: 2021,
              iconClass: "fas fa-medal text-[#124E66] text-3xl"
            },
            {
              title: "Hallandian of the Year",
              year: 2019,
              iconClass: "fas fa-star text-[#124E66] text-3xl"
            },
            {
              title: "Fryshuset’s “Influencer of the Year”",
              year: 2019,
              iconClass: "fas fa-award text-[#124E66] text-3xl"
            }
          ],
          stats: [
            {
              id: 1,
              value: 496,
              text: "Allsvenskan matches as head or assistant coach."
            },
            {
              id: 2,
              value: 94,
              text: "International matches as head coach of Sweden's men's team."
            },
            {
              id: 3,
              value: 2,
              text: "Championship titles: Halmstads BK (assistant) and IFK Norrköping."
            },
            {
              id: 4,
              value: 100,
              text: "Lectures and media productions."
            },
            {
              id: 5,
              value: 10,
              text: "Leadership awards, including 'Coach of the Year' (2019)."
            }
          ],
          /* --- HEADER --- */
          headerName: "Janne Andersson",
          headerCV: "CV",

          /* --- NAVIGATION --- */
          navAbout: "About Janne",
          navLectures: "Lectures",
          navAssignments: "Assignments",
          navAwards: "Awards",
          navContact: "Contact",

          /* --- HERO --- */
          heroTitle: "Janne Andersson",
          heroDescription:
            "After 40 years of coaching in Swedish football, including serving as head coach of the men's national team, he is now engaged in lectures, ambassador roles, mentorships, and various media productions.",
          heroCta: "Contact Me",

          /* --- ABOUT --- */
          aboutTitle: "About Janne",
          aboutParagraph1:
            "With over 40 years of experience in Swedish football, Janne Andersson is one of the country's most respected coaches and leaders. As head coach (2016–2023), he led Sweden to several successes, including a World Cup quarterfinal in Russia 2018.",
          aboutParagraph2:
            "Janne's career began in the 1980s, taking him from his hometown club Alets IK in Halmstad to an Allsvenskan championship with IFK Norrköping in 2015. He is known for his clear leadership style and ability to build strong teams.",
          aboutParagraph3:
            'Today, Janne inspires through lectures and consulting, sharing his passion for leadership and teamwork. His message is clear: "Together we are strong."',

          /* --- LECTURES --- */
          lectureTitle: "Lectures",
          lectureParagraph1:
            "Janne Andersson shares his unique experience from over 40 years in Swedish football and leadership. His lectures are inspiring and packed with insights on teamwork, communication, and how to build successful teams.",
          lectureParagraph2:
            "Having delivered more than 100 lectures for both companies and sports organizations, Janne offers concrete advice and strategies to improve leadership and collaboration.",
          lectureCta: "Book a Lecture",

          /* --- LINKEDIN --- */
          linkedInTitle: "On LinkedIn, Janne posts updates about his current work",
          linkedInButton: "Follow Janne on LinkedIn",
          linkedInReadMore: "Read more",

          /* --- ASSIGNMENTS --- */
          assignmentsTitle: "Assignments & Productions",
          assignmentsDescription:
            "Janne has participated in numerous interviews, productions, and other assignments. Here are a few select recent highlights.",

          /* --- CTA SECTION --- */
          inviteTitle: "Feel free to contact Janne Andersson",
          inviteParagraph:
            "Reach out if you’re interested in getting in touch for lectures, ambassador roles, or other opportunities.",
          inviteCta: "Contact Me",

          /* --- AWARDS SECTION --- */
          awardsTitle: "Awards",

          /* --- CONTACT FORM --- */
          contactTitle: "Contact",
          formName: "Name",
          formNamePlaceholder: "Your name",
          formEmail: "Email",
          formEmailPlaceholder: "Your email address",
          formMessage: "Message",
          formMessagePlaceholder: "Write your message here",
          formSubmit: "Send Message",

          /* --- FOOTER --- */
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

  mounted() {

    const animateNumbers = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetValue = parseInt(el.dataset.value, 10);
          this.countUp(el, targetValue);
          observer.unobserve(el); 
        }
      });
    };
    const observer = new IntersectionObserver(animateNumbers, {
      threshold: 0.5,
    });
    this.$refs.animatedNumbers.forEach((el) => observer.observe(el));

    // Example: You might also fetch posts if you want
    // axios.get("some-api-endpoint").then((res) => (this.posts = res.data));
  },

  methods: {
    scrollToTop() {
    window.scrollTo(0,0);
  },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    changeLanguage(lang) {
      this.currentLanguage = lang;
    },

    countUp(el, target) {
      let current = 0;
      const increment = Math.ceil(target / 100); // Adjust speed
      const duration = 2000; // total ms
      const interval = duration / (target / increment);

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target; // no overshoot
          clearInterval(counter);
        }
        el.textContent = current;
      }, interval);
    },
  },
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1.2s ease-in-out;
}
</style>
