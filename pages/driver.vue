<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="5" md="3">
        <CurrentRiders />
      </v-col>
      <v-col>
        <Driver />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CurrentRiders from "../components/Driver/CurrentRiders";
import Driver from "../components/Driver/Driver";

export default {
  components: {
    CurrentRiders,
    Driver
  }
};
</script>

<style></style>
