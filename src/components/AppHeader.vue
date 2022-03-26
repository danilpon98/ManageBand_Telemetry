<template>
  <v-app-bar
          app
          color="primary"
          dark
  >
    <v-toolbar-title>Телеметрия</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text to="/">Список контроллеров</v-btn>
      <v-btn text to="home">Настройки</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>

</style>