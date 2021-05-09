<template>
  <v-row justify="center" align="center" class="mx-2">
    <!-- Spacing -->
    <v-col cols="12">
      <v-sheet height="5vh" color="transparent"></v-sheet>
    </v-col>

    <!-- Row 1 -->
    <v-col :cols="mobile ? '12' : '6'">
      <v-card
        v-scroll-reveal="{ delay: 250 }"
        color="transparent"
        elevation="0"
      >
        <v-card-text class="text-h3 text-md-h2 white--text">
          Start your engines. Ready. Set. Go!
        </v-card-text>
        <v-card-subtitle class="text-overline">
          Providing an environmentally
          <i class="success--text"> sustainable </i> solution to motor travel
        </v-card-subtitle>
        <v-card-actions>
          <v-btn rounded color="primary" to="/login"> Get Started </v-btn>
          <v-btn rounded outlined color="info"> Learn More </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col v-if="!mobile" cols="6">
      <v-parallax
        v-scroll-reveal="{ delay: 450 }"
        src="/img/carpool.png"
        class="rounded-card"
      >
      </v-parallax>
    </v-col>

    <!-- Spacing -->
    <v-col cols="12">
      <v-sheet
        :height="mobile ? '10vh' : '50vh'"
        color="transparent"
        class="text-center"
      >
        <v-divider
          v-scroll-reveal="{ delay: 250 }"
          inset
          :vertical="true"
        ></v-divider>
      </v-sheet>
    </v-col>

    <!-- Row 2 -->
    <v-col v-if="!mobile" cols="6">
      <v-parallax
        v-scroll-reveal="{ delay: 250 }"
        src="/img/inclusive.png"
        class="rounded-card"
      >
      </v-parallax>
    </v-col>
    <v-col :cols="mobile ? '12' : '6'">
      <v-card v-scroll-reveal="{ delay: 450 }" class="pa-2 rounded-card">
        <v-card-text class="text-h5 text-md-h4 white--text">
          Features
        </v-card-text>
        <v-card-subtitle>
          Whether you want to drive yourself or drive others; we've got you
          covered. When you sign up with vagon.tech today you gain access to all
          of these great features.
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <v-card
            v-for="(feat, index) in features"
            :key="index"
            color="info darken-1"
            elevation="5"
            class="my-2"
          >
            <v-card-title> {{ index + 1 }}. {{ feat.title }} </v-card-title>
            <v-card-subtitle> {{ feat.text }} </v-card-subtitle>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-btn rounded color="primary" to="/login"> Get Started </v-btn>
          <v-btn rounded outlined color="info"> Learn More </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- Spacing -->
    <v-col cols="12">
      <v-sheet
        :height="mobile ? '10vh' : '50vh'"
        color="transparent"
        class="text-center"
      >
        <v-divider inset :vertical="true"></v-divider>
      </v-sheet>
    </v-col>

    <!-- Row 3 -->
    <v-col :cols="mobile ? '12' : '6'">
      <v-card v-scroll-reveal="{ delay: 450 }" class="pa-2 rounded-card">
        <v-card-text class="text-h5 text-md-h4 white--text">
          Get Started Today
        </v-card-text>
        <v-card-subtitle>
          It's as easy as 1, 2, 3! If you're interested, get started using
          vagon.tech today by following these simple steps.
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <v-card
            v-for="(step, index) in steps"
            :key="index"
            color="primary darken-2"
            elevation="5"
            class="my-2"
          >
            <v-card-title> {{ index + 1 }}. {{ step.title }} </v-card-title>
            <v-card-subtitle> {{ step.text }} </v-card-subtitle>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-btn rounded color="primary" to="/login"> Get Started </v-btn>
          <v-btn rounded outlined color="info"> Learn More </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col v-if="!mobile" cols="6">
      <v-img
        v-scroll-reveal="{ delay: 250 }"
        src="/img/inclusive2.jpg"
        class="rounded-card"
      >
      </v-img>
    </v-col>

    <!-- Spacing -->
    <v-col cols="12">
      <v-sheet :height="mobile ? '10vh' : '20vh'" color="transparent"></v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    isMounted: false,
    features: [
      {
        title: "Catch a ride",
        text:
          "Need to get somewhere but don't have a car? Don't worry, just select your destination and we'll pair you up with a driver!"
      },
      {
        title: "Drive others",
        text:
          "Are you headed somewhere all alone? Set your destination and we'll pair you up with riders!"
      },
      {
        title: "Earn Coins",
        text:
          "Are you interested in earning sweet, sweet coins? We'll then you're in luck, because we'll give you coins everytime you ride or drive!"
      },
      {
        title: "Redeem Awesome Gifts",
        text:
          "Once you've earned enough coins you can redeem them for awesome gifts and prizes in our store!"
      }
    ],
    steps: [
      {
        title: "Create an Account",
        text:
          "Start by creating an account with us so that you have access to the application."
      },
      {
        title: "Select Driver/Rider",
        text:
          "Choose whether you want to be a driver or a rider (you can change at any time!)"
      },
      {
        title: "Create/Join a Trip",
        text:
          "Depending on your last choice, either create a new trip or join an existing one near you."
      },
      {
        title: "Earn Coins!",
        text:
          "That's all! You'll be notified when your driver is nearby. Sit back. Relax. Earn some coins!"
      }
    ]
  }),
  computed: {
    mobile() {
      return (
        this.isMounted && ["xs", "sm"].includes(this.$vuetify.breakpoint.name)
      );
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 25px;
}
</style>
