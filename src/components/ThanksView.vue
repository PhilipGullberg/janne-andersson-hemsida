<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
      <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-md" v-fade-in>
        <h1 class="text-3xl font-semibold text-gray-800 mb-4">{{ thankYouTitle }}</h1>
        <p class="text-gray-600 mb-6">{{ thankYouMessage }}</p>
        <button
          @click="goBack"
          class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          {{ backButtonText }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import { computed, watchEffect, ref } from 'vue';
  import { languageStore } from '../store/languageStore';
  
  export default {
    setup() {
      const router = useRouter();
      const currentLanguage = computed({
        get() {
          return languageStore.currentLanguage;
        },
        set(lang) {
          languageStore.currentLanguage = lang;
        },
      });
  
      // Reactive text properties
      const thankYouTitle = ref('');
      const thankYouMessage = ref('');
      const backButtonText = ref('');
  
      // Watch for language changes and update text dynamically
      watchEffect(() => {
        if (currentLanguage.value === 'en') {
          thankYouTitle.value = 'Thank You!';
          thankYouMessage.value = 'Thank you for filling out the form. We will get back to you as soon as possible!';
          backButtonText.value = 'Go Back';
        } else {
          thankYouTitle.value = 'Tack!';
          thankYouMessage.value = 'Tack för att du fyllde i formuläret. Vi återkommer så snart som möjligt!';
          backButtonText.value = 'Gå tillbaka';
        }
      });
  
      const goBack = () => {
        router.push('/');
      };
  
      return {
        currentLanguage,
        thankYouTitle,
        thankYouMessage,
        backButtonText,
        goBack,
      };
    },
  };
  </script>
  
  <style>
  .fade-start {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .fade-end {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  