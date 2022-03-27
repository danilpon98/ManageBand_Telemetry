<template>
  <v-container>
    <v-row>
      <v-col
              md="8"
              offset-md="2"
      >
        <v-card
                class="mt-4"
                elevation="0"
                rounded="lg"
        >
          <v-card-title>
            Настройка отображения параметров
          </v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="4" v-for="(indicator, index) in indicators" :key="index">
                <v-checkbox
                        v-model="checkedIndicators"
                        :value="indicator"
                        :label="indicator"
                        hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn
                    depressed
                    color="primary"
                    @click="saveIndicators"
                    :disabled="!checkedIndicators.length"
            >
              Сохранить настройки
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
            :timeout="2000"
            :color="message.color"
            v-model="message.show"
            fixed
            right
            top
            text
            app
    >
      {{ message.text }}
    </v-snackbar>

  </v-container>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import indicators from "@/store/indicators";

    export default {
        name: "SettingsView",
        data: () => ({
          checkedIndicators: [],
          message: {
              show: false,
              color: 'success',
              text: 'Параметры сохранены'
          }
        }),
        created() {
            this.checkedIndicators = this.indicatorsActive
        },
        computed: {
            ...mapGetters('indicators', {
                indicators: 'all',
                indicatorsActive: 'active'
            }),
        },
        methods: {
            ...mapActions('indicators', {indicatorsActiveUpdate: 'updateActive'}),
            saveIndicators() {
                localStorage.setItem('indicators',JSON.stringify(this.checkedIndicators))
                this.indicatorsActiveUpdate(this.checkedIndicators)
                this.message.show = true;
            }
        }
    }
</script>

<style scoped>

</style>