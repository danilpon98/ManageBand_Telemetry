<template>
  <v-container>
    <v-card
            class="mt-4"
            elevation="0"
            rounded="lg"
    >
      <v-card-title>
        Данные контроллера
        <v-spacer></v-spacer>
        <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="dates"
                persistent
                width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                    v-model="dateRangeText"
                    label="Сортировка по дате"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
                  v-model="dates"
                  scrollable
                  range
          >
            <v-spacer></v-spacer>
            <v-btn
                    text
                    color="primary"
                    @click="modal = false"
            >
              Отменить
            </v-btn>
            <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(dates)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-card-title>

      <v-data-table
              :headers="headers"
              :items="statistics"
      >
        <template v-slot:no-results
        >
          <div class="text-left">
            Данные за указанный промежуток времени не найдены</div>
        </template>
        <template v-slot:item.Time="{ item }">
          <span class="text-no-wrap">{{ item.Time }}</span>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    const date = new Date();

    export default {
        name: 'ControllersList',

        data: () => ({
            dates: [
                (new Date((new Date()).setDate((new Date()).getDate() - 1)).toISOString()).substr(0, 10),
                (new Date().toISOString()).substr(0, 10)
            ],
            modal: false,
        }),
        created() {
            let { filter_date_to, filter_date_from} = this.$route.query;
            if (filter_date_from) this.dates[0] = filter_date_from;
            if (filter_date_to) this.dates[1] = filter_date_to;
        },
        computed: {
            ...mapGetters('controllers', {statisticsProxy: 'statistics'}),
            ...mapGetters('indicators', {indicators: 'all'}),
            id() {
                return this.$route.params.imai;
            },
            statistics() {
                return this.statisticsProxy(this.id);
            },
            dateRangeText() {
                return this.dates.join(' ~ ')
            },
            headers() {
                let headers = [
                    {
                        text: 'Time',
                        align: 'start',
                        value: 'Time',
                        filter: value => {
                            let timestamp = [];
                            let timestampItem = new Date(value)
                            timestamp[0] = new Date(this.dates[0] + 'T00:00:00Z').getTime();
                            if (!this.dates[1]) {
                                timestamp[1] = new Date().getTime();
                            }else{
                                timestamp[1] = new Date(this.dates[1] + 'T00:00:00Z').getTime();
                            }
                            return timestampItem >= timestamp[0] && timestampItem<=timestamp[1];
                        }
                    },
                ];
                this.indicators.forEach(indicators => headers.push({
                    text: indicators,
                    value: indicators
                }))
                return headers;
            }
        },
        watch: {
            dates() {
                this.updateUrlFilter()
            }
        },
        methods: {
            updateUrlFilter() {
                let queries = JSON.parse(JSON.stringify(this.$route.query));
                queries.filter_date_from = this.dates[0]
                if (this.dates[1]) {
                    queries.filter_date_to = this.dates[1]
                }else{
                    delete queries.filter_date_to;
                }
                this.$router.replace({ query: queries });
            }
        }
    }
</script>

<style lang="scss">
  .v-data-table-header {
    .sortable {
      white-space: nowrap !important;
    }
  }
</style>
