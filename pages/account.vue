<template>
  <v-container fluid>
    <v-row v-if="isAuth" justify="center" align="center">
      <!-- Login -->
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-text class="text-overline pb-5">
            Account
          </v-card-text>

          <v-row justify="center" class="pb-5">
            <v-menu bottom min-width="300px" rounded offset-y>
              <template v-slot:activator="{ on }">
                <v-hover v-slot="{ hover }">
                  <v-btn icon x-large v-on="on" :elevation="hover ? 16 : 2">
                    <v-avatar
                      :color="hover ? 'brown darken-1' : 'brown'"
                      size="70"
                    >
                      <span class="white--text headline">{{
                        user.initials
                      }}</span>
                    </v-avatar>
                  </v-btn>
                </v-hover>
              </template>

              <v-card>
                <v-card class="mx-auto text-center">
                  <v-avatar color="brown">
                    <span class="white--text headline">{{
                      user.initials
                    }}</span>
                  </v-avatar>
                  <v-card-text
                    class="py-2 text-body-2 text-md-body-1 white--text"
                  >
                    {{ user.fullName }}
                  </v-card-text>
                  <v-card-text class="caption text-body-2 mt-1 pt-0">
                    {{ user.email }}
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
                  value="John Doe"
                  label="Name"
                  outlined
                  disabled
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  class="mx-2"
                  value="123 Apple rd"
                  label="Address"
                  outlined
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider class="mx-2"></v-divider>

          <v-card-text>
            <v-row class="pa-0 mx-1">
              <v-col cols="12" sm="4">
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
                      {{ user.coins }}
                    </v-chip>
                    <v-card-text>Coins</v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="12" sm="4">
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
                      {{ user.drives }}
                    </v-chip>
                    <v-card-text>Number of Rides</v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="12" sm="4">
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
                      {{ user.distance }}
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
export default {
  data: () => ({
    user: {
      initials: "AK",
      fullName: "Allen Kaplan",
      email: "john.doe@doe.com",
      coins: "100",
      distance: "1000 km",
      drives: "22"
    }
  }),
  computed: {
    isAuth() {
      return this.$fire.auth.currentUser !== null;
    }
  }
};
</script>

<style></style>
