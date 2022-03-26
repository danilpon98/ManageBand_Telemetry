<template>
  <v-container>
    <v-row>
      <v-col
              md="6"
              offset-md="3"
      >
        <v-sheet rounded="lg" class="pa-5 mt-5">
          <h1 class="mb-4 font-weight-medium">Список контроллеров</h1>
          <controllers-list></controllers-list>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ControllersList from "@/components/ControllersList";

  export default {
    name: 'Home',

    components: {
        ControllersList,
    },
  }
</script>
