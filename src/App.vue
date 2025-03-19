<script>
import landing_page from './components/landing_page.vue';
import { Analytics } from "@vercel/analytics/vue"

export default {
  components: {
    Analytics,
    landing_page,
  },
};
</script>

<template>
  <Analytics />
    <router-view></router-view>
</template>

<style>
.fade-start {
  opacity: 0;
  transform: translateY(20px);
}

.fade-end {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}

</style>
