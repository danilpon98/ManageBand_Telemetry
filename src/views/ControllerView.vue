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
            Данные за указанный промежуток времени не найдены
          </div>
        </template>
        <template v-slot:item.Time="{ item }">
          <span class="text-no-wrap">{{ item.Time }}</span>
        </template>
      </v-data-table>
    </v-card>

    <v-row class="mt-10" v-if="indicators.length">
      <v-col cols="9">
        <v-sheet
                min-height="70vh"
                rounded="lg"
                class="pt-4 pr-2"
        >
          <apexchart type="line" :options="apexchartOptions" :series="chartData"></apexchart>
        </v-sheet>
      </v-col>
      <v-col cols="3">
        <v-sheet rounded="lg" class="overflow-hidden">
          <v-navigation-drawer permanent height="400" width="100%">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Параметры
                </v-list-item-title>
                <v-list-item-subtitle>
                  для построения графика
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>


            <v-list color="transparent">
              <v-list-item
                      v-for="(indicator, index) in indicators"
                      :key="index"
                      link
                      color="blue lighten-1"
                      :input-value="indicator === selectedIndicator"
                      @click="selectIndicator(indicator)"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ indicator }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-sheet>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import VueApexCharts from "vue-apexcharts";

    export default {
        name: 'ControllersList',
        components: {
          'apexchart': VueApexCharts
        },
        data: () => ({
            dates: [
                (new Date((new Date()).setDate((new Date()).getDate() - 1)).toISOString()).substr(0, 10),
                (new Date().toISOString()).substr(0, 10)
            ],
            modal: false,
            selectedIndicator: null,
            apexchartOptions: {
                xaxis: {
                    type: "datetime"
                },
                yaxis: {
                    labels: {
                        formatter: (value) => { return value.toFixed(2) },
                    }
                }
            },
        }),
        created() {
            // Берем начальные значение фильтра даты из url
            let {filter_date_to, filter_date_from} = this.$route.query;
            if (filter_date_from) this.dates[0] = filter_date_from;
            if (filter_date_to) this.dates[1] = filter_date_to;

            // Устанавливем первый индикатор выбранным по умолчанию
            if (this.indicators.length) this.selectedIndicator = this.indicators[0];
        },
        computed: {
            ...mapGetters('controllers', {statisticsProxy: 'statistics'}),
            ...mapGetters('indicators', {indicators: 'active'}),
            id() {
                return this.$route.params.imai;
            },
            statistics() {
                return this.statisticsProxy(this.id);
            },
            dateRangeText() {
                return this.dates.join(' ~ ')
            },
            chartData() {
                const data = this.statistics.reduce((total, current) => {
                    if (!this.filterDate(current.Time)) return total;
                    total.push({
                        x: current.Time,
                        y: current[this.selectedIndicator]
                    });
                    return total;
                }, [])
                return [
                    {
                        name: this.selectedIndicator,
                        data
                    }
                ]
            },
            headers() {
                let headers = [
                    {
                        text: 'Time',
                        align: 'start',
                        value: 'Time',
                        filter: value => this.filterDate(value)
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
                // глубокое копирование объекта
                let queries = JSON.parse(JSON.stringify(this.$route.query));
                queries.filter_date_from = this.dates[0]
                if (this.dates[1]) {
                    queries.filter_date_to = this.dates[1]
                } else {
                    delete queries.filter_date_to;
                }
                this.$router.replace({query: queries});
            },
            selectIndicator(indicator) {
                this.selectedIndicator = indicator;
            },
            filterDate(value) {
                let timestamp = [];
                let timestampItem = new Date(value.substr(0, 10)).getTime();
                timestamp[0] = new Date(this.dates[0]).getTime();
                if (!this.dates[1]) {
                    timestamp[1] = new Date().getTime();
                } else {
                    timestamp[1] = new Date(this.dates[1]).getTime();
                }
                return timestampItem >= timestamp[0] && timestampItem <= timestamp[1];
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
