<template>
  <v-container>
    <v-row>
      <v-col
              md="6"
              offset-md="3"
      >
        <v-card
                class="mt-4"
                elevation="0"
                rounded="lg"
        >
          <v-card-title>
            Список контроллеров
          </v-card-title>
          <controllers-list></controllers-list>
        </v-card>
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
