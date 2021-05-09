<template>
  <v-card>
    <v-card-text class="text-h4 text-md-h3 white--text">
      Statistics
    </v-card-text>
    <v-card-subtitle>
      Some information regarding your current trip
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6">
          <v-card color="info">
            <v-card-text class="overline white--text">
              <v-row>
                <v-col>
                  {{ item.title }}
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <v-chip color="black">
                    <v-icon class="mr-2" color="primary">
                      {{ item.icon }}
                    </v-icon>
                    {{ getData[index] }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    items: [
      {
        title: "Time",
        icon: "mdi-clock"
      },
      {
        title: "Space Available",
        icon: "mdi-counter"
      },
      {
        title: "Start",
        icon: "mdi-home"
      },
      {
        title: "End",
        icon: "mdi-map-marker"
      }
    ]
  }),
  computed: {
    ...mapGetters("modules/trip/trip", ["getConfirmed"]),
    ...mapGetters("modules/trip/trip", ["getData"])
  }
};
</script>

<style></style>
