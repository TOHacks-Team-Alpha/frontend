<template>
  <v-card elevation="5">
    <v-card-text class="text-h4 text-md-h3 white--text">
      Find a Ride
    </v-card-text>
    <v-card-subtitle>
      <Destination />
    </v-card-subtitle>
    <v-card-text>
      <!-- <GmapMap
        :center="{ lat: toronto.lat, lng: toronto.lng }"
        :zoom="zoom"
        :map-type-id="type"
        style="width: 100%; height: 500px"
      >
      </GmapMap> -->
    </v-card-text>
  </v-card>
</template>

<script>
import Destination from "./Destination";

export default {
  components: {
    Destination
  },

  data: () => ({
    zoom: 15,
    type: "roadmap",
    toronto: {
      lat: 43.6533,
      lng: -79.3832
    }
  })
};
</script>

<style></style>
