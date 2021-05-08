<template>
  <v-row justify="center" align="center" class="mx-2">
    <!-- Spacing -->
    <v-col cols="12">
      <v-sheet height="5vh" color="transparent"></v-sheet>
    </v-col>

    <!-- Row 1 -->
    <v-col :cols="mobile ? '12' : '6'">
      <v-card color="transparent" elevation="0">
        <v-card-text class="text-h3 text-md-h2 white--text">
          Start your engines. Ready. Set. Go!
        </v-card-text>
        <v-card-subtitle class="text-overline">
          Providing a <i class="success--text"> sustainable </i> solution to
          environmental issues
        </v-card-subtitle>
        <v-card-actions>
          <v-btn rounded color="primary"> Get Started </v-btn>
          <v-btn rounded outlined color="info"> Learn More </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col v-if="!mobile" cols="6">
      <v-parallax src="/img/carpool.png"> </v-parallax>
    </v-col>

    <!-- Spacing -->
    <v-col cols="12">
      <v-sheet height="50vh" color="transparent"></v-sheet>
    </v-col>

    <!-- Row 2 -->
    <v-col v-if="!mobile" cols="6">
      <v-parallax src="/img/inclusive.png"> </v-parallax>
    </v-col>
    <v-col :cols="mobile ? '12' : '6'">
      <v-card class="pa-2">
        <v-card-text class="text-h5 text-md-h4 white--text">
          Features
        </v-card-text>
        <v-card-subtitle>
          Check out our features
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          Featues go here
        </v-card-text>
        <v-card-actions>
          <v-btn rounded color="primary"> Get Started </v-btn>
          <v-btn rounded outlined color="info"> Learn More </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- Spacing -->
    <v-col cols="12">
      <v-sheet height="50vh" color="transparent"></v-sheet>
    </v-col>

    <v-col cols="12">
      <v-card class="pa-2">
        <v-card-text>
          How to or something
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Spacing -->
    <v-col cols="12">
      <v-sheet height="25vh" color="transparent"></v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    isMounted: false
  }),
  mounted() {
    this.isMounted = true;
  },
  computed: {
    mobile() {
      return (
        this.isMounted && ["xs", "sm"].includes(this.$vuetify.breakpoint.name)
      );
    }
  }
};
</script>
