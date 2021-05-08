<template>
  <v-row justify="center" align="center">
    <!-- Login -->
    <v-col v-if="!isAuth" cols="12" sm="8" md="6">
      <v-card>
        <v-card-text class="text-overline pb-0">
          Rider
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$fire.auth.currentUser !== null;
    }
  }
};
</script>

<style></style>
