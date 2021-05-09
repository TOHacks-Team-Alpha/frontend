<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="5" md="3">
        <CurrentRiders />
      </v-col>
      <v-col cols="12" sm="7" md="9" class="pa-0 ma-0">
        <v-col>
          <FindRide />
        </v-col>
        <v-col>
          <RideHistory />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import RideHistory from "../components/Rider/RideHistory";
import FindRide from "../components/Rider/FindRide";
import CurrentRiders from "../components/Rider/CurrentDrivers";

export default {
  components: {
    RideHistory,
    FindRide,
    CurrentRiders
    // Driver
  }
};
</script>

<style></style>
