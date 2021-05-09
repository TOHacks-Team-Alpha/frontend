<template>
  <v-container fluid>
    <v-row justify="center">
      <!-- v-if="!getConfirmed" -->
      <v-col cols="12" sm="12" md="8">
        <CurrentRiders />
      </v-col>

      <v-col cols="12" sm="12" md="8">
        <TripForm />
      </v-col>
      <v-col cols="12" sm="12" md="8" v-if="getConfirmed">
        <v-col class="pa-0 ma-0">
          <Driver />
        </v-col>
        <v-col class="pa-0 my-7">
          <Statistics />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import CurrentRiders from "../components/Driver/CurrentRiders";
import Driver from "../components/Driver/Driver";
import Statistics from "../components/Driver/Statistics";
import TripForm from "../components/Driver/TripForm";

export default {
  components: {
    CurrentRiders,
    Driver,
    Statistics,
    TripForm
  },
  computed: {
    ...mapGetters("modules/trip/trip", ["getConfirmed"])
  }
};
</script>

<style></style>
