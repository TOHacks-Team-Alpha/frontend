<template>
  <v-card>
    <v-card-text class="text-h4 text-md-h3 white--text">
      Ride History
    </v-card-text>
    <v-card-subtitle>
      Your previous trips
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col
          v-for="(item, index) in getRides"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card color="info">
            <v-card-text class="overline white--text">
              <v-row>
                <v-col>
                  {{ item }}
                </v-col>
                <!-- <v-col>
                  <v-chip color="black">
                    <v-icon class="mr-2" color="primary">
                      {{ item.icon }}</v-icon
                    >
                    {{ item.stat }}
                  </v-chip> -->
                <!-- </v-col> -->
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    this.setRides();
  },
  data: () => ({
    // items: [
    //   {
    //     title: "Trip",
    //     stat: "34 Keele Street",
    //     icon: "mdi-map-marker"
    //   },
    //   {
    //     title: "Trip",
    //     stat: "232 Queen Street",
    //     icon: "mdi-map-marker"
    //   },
    //   {
    //     title: "Trip",
    //     stat: "3 Union Road",
    //     icon: "mdi-map-marker"
    //   }
    // ]
  }),
  computed: {
    ...mapGetters("modules/rider/rides", ["getRides"])
  },
  methods: {
    ...mapActions("modules/rider/rides", ["setRides"])
  }
};
</script>

<style></style>
