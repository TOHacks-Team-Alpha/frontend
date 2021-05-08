<template>
  <v-row justify="center" align="center" class="mx-2">
    <v-col cols="6">
      <v-card color="transparent">
        <v-card-text class="text-h3 text-md-h2 white--text">
          Start your engines. Ready. Set. Go!
        </v-card-text>
        <v-card-subtitle class="text-overline">
          Providing a sustainable solution to environmental issues
        </v-card-subtitle>
        <v-card-actions>
          <v-btn rounded color="primary"> Get Started </v-btn>
          <v-btn rounded outlined color="info"> Learn More </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-parallax src="/img/carpool.png"> </v-parallax>
    </v-col>

    <v-col cols="12" sm="8" md="6">
      <v-card class="px-2">
        <v-card-text class="text-h4 text-md-h2 white--text">
          Hello, I am a template!
        </v-card-text>
        <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1">
          this is a subtitle
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          I would probably put some text here
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="px-0">
          <v-btn color="primary">I'm a button!</v-btn>
          <v-spacer />
          <v-btn color="error"> I'm way over here!</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>
