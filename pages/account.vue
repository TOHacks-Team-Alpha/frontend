<template>
  <v-container fluid class="mb-8">
    <v-row justify="center" align="center">
      <!-- Login -->
      <v-col cols="12" sm="8" md="6">
        <v-card v-scroll-reveal="{ delay: 250 }">
          <v-card-text class="text-overline pb-5">
            Account
          </v-card-text>

          <v-row justify="center" class="pb-5">
            <v-menu bottom min-width="300px" rounded offset-y>
              <template v-slot:activator="{ on }">
                <v-hover v-slot="{ hover }">
                  <v-btn icon x-large v-on="on" :elevation="hover ? 16 : 2">
                    <v-avatar :size="hover ? 75 : 70">
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                      </v-img>
                    </v-avatar>
                  </v-btn>
                </v-hover>
              </template>

              <v-card>
                <v-card class="mx-auto text-center">
                  <v-avatar color="brown">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                    </v-img>
                  </v-avatar>
                  <v-card-text
                    class="py-2 text-body-2 text-md-body-1 white--text"
                  >
                    {{ getName }}
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn depressed rounded text>
                      Edit Account
                    </v-btn>
                  </v-card-actions>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn depressed rounded text>
                      Disconnect
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-card>
            </v-menu>
          </v-row>
          <v-card-text>
            <v-row justify="center" align="center">
              <v-col>
                <v-text-field
                  class="mx-2"
                  :value="getName"
                  label="Name"
                  outlined
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>      <v-row justify="center" align="center">
              <v-col>
                <v-text-field
                  class="mx-2"
                  :value="getID"
                  label="ID"
                  outlined
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider class="mx-2"></v-divider>

          <v-card-text>
            <v-row class="pa-0 mx-1">
              <v-col cols="12" sm="6" md="3">
                <v-hover v-slot="{ hover }">
                  <v-card
                    justify="center"
                    align="center"
                    class="pa-2"
                    tile
                    :elevation="hover ? 16 : 2"
                  >
                    <v-chip color="transparent">
                      <v-icon large color="orange" class="mr-2">
                        mdi-circle-multiple-outline
                      </v-icon>
                      {{ getCoins }}
                    </v-chip>
                    <v-card-text>Coins</v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-hover v-slot="{ hover }"
                  ><v-card
                    justify="center"
                    align="center"
                    class="pa-2"
                    tile
                    :elevation="hover ? 16 : 2"
                  >
                    <v-chip color="transparent">
                      <v-icon large color="yellow darken-2" class="mr-2">
                        mdi-car
                      </v-icon>
                      {{ getTripsDriven }}
                    </v-chip>
                    <v-card-text>Trips Driven</v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-hover v-slot="{ hover }"
                  ><v-card
                    justify="center"
                    align="center"
                    class="pa-2"
                    tile
                    :elevation="hover ? 16 : 2"
                  >
                    <v-chip color="transparent">
                      <v-icon large color="yellow darken-2" class="mr-2">
                        mdi-car
                      </v-icon>
                      {{ getTripsRidden }}
                    </v-chip>
                    <v-card-text>Trips Ridden</v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-hover v-slot="{ hover }">
                  <v-card
                    justify="center"
                    align="center"
                    class="pa-2"
                    tile
                    :elevation="hover ? 16 : 2"
                  >
                    <v-chip color="transparent">
                      <v-icon large color="red darken-2" class="mr-2">
                        mdi-road-variant
                      </v-icon>
                      {{ getTotalDistance }}
                    </v-chip>
                    <v-card-text>Distance</v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters("modules/user", [
      "getName",
      "getID",
      "getCoins",
      "getTripsDriven",
      "getTripsRidden",
      "getTotalDistance"
    ])
  },
  methods: {
    ...mapActions("modules/user", ["getData"])
  }
};
</script>

<style></style>
