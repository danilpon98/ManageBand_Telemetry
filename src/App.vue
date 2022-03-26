<template>
  <v-app>
    <app-header/>
    <v-main class="grey lighten-3">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import AppHeader from "@/components/AppHeader";
export default {
  name: 'App',
    components: {AppHeader},
    data: () => ({
    //
  }),
};
</script>
