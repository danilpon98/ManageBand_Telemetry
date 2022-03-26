<template>
  <v-container>
    <v-row>
      <v-col
              md="6"
              offset-md="3"
      >
        <v-sheet rounded="lg" class="pa-5 mt-5">
          <controller-list></controller-list>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ControllerList from "@/components/ControllerList";

  export default {
    name: 'Home',

    components: {
        ControllerList
    },
  }
</script>
