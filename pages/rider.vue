<template>
  <v-container fluid class="mb-8">
    
    <v-row justify="center" align="center">
      <v-col cols="12" sm="5" md="3">
        <CurrentRides />
      </v-col>
      <v-col cols="12" sm="7" md="9" class="pa-0 ma-0">
        <v-col>
          <FindRide />
        </v-col>
        <!-- <v-col>
          <RideHistory />
        </v-col> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import RideHistory from "../components/Rider/RideHistory";
import FindRide from "../components/Rider/FindRide";
import CurrentRides from "../components/Rider/CurrentRides";

export default {
  components: {
    // RideHistory,
    FindRide,
    CurrentRides
    // Driver
  }
};
</script>

<style></style>
