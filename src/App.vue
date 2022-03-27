<template>
  <v-app>
    <app-header/>
    <v-main class="grey lighten-3 pb-10">
      <router-view/>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  name: 'App',
    components: {AppFooter, AppHeader},
    data: () => ({
    //
  }),
};
</script>
