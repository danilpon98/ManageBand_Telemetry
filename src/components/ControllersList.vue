<template>
  <v-data-table
          :headers="headers"
          :items="controllers"
          class="elevation-1"
  >
    <template v-slot:item.Imei="{ item }">
      <router-link :to="{ name: 'controller', params: { imai: item.Imei }}">
        {{ item.Imei }}
      </router-link>
    </template>
  </v-data-table>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'ControllersList',

        data: () => ({
            headers: [
                {
                    text: 'Imei',
                    value: 'Imei',
                    align: 'start',
                },
                {
                    text: 'TruckId',
                    sortable: false,
                    value: 'TruckId',
                },
            ],
        }),
        computed: {
            ...mapGetters('controllers', {controllers: 'list'})
        }
    }
</script>
