<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="!isAuth" color="success" @click="login()">Login</v-btn>
          <v-btn v-if="isAuth" color="error" @click="logout()">Logout</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("modules/firebase/auth", ["isAuth"])
  },
  methods: {
    ...mapActions("modules/firebase/auth", ["login"]),
    ...mapActions("modules/firebase/auth", ["logout"])
  }
};
</script>

<style></style>
