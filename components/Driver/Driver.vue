<template>
  <v-card elevation="5">
    <v-card-text
      class="text-h4 text-md-h3"
      :class="$vuetify.theme.dark ? 'white--text' : ''"
    >
      Trip Map
    </v-card-text>
    <v-card-text>
      <GmapMap
        :center="{ lat: toronto.lat, lng: toronto.lng }"
        :zoom="zoom"
        :map-type-id="type"
        style="width: 100%; height: 500px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
        <Gmap-polyline
          v-bind:path.sync="path"
          v-bind:options="{ strokeColor: 'black' }"
        >
        </Gmap-polyline>
      </GmapMap>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    zoom: 15,
    type: "roadmap",
    toronto: {
      lat: 43.6528,
      lng: -79.3832
    },
    markers: [
      {
        position: {
          lat: 43.648,
          lng: -79.4
        }
      },
      {
        position: {
          lat: 43.6544,
          lng: -79.37
        }
      }
    ],
    path: [
      { lat: 43.648, lng: -79.4 },
      { lat: 43.6544, lng: -79.37 }
    ]
  }),
  computed: {
    ...mapGetters("modules/trip/trip", ["getData"])
  },
  methods: {
    stepComplete(step) {
      return this.curr > step;
    },
    stepStatus(step) {
      return this.curr > step ? "success" : "primary";
    },
    validate(n) {
      this.steps[n].valid = false;
      let v = null;
      if (n === 0) {
        v = this.$refs.form1.validate();
      } else {
        v = this.$refs.form2.validate();
      }
      if (v) {
        this.steps[n].valid = true;
        // continue to next
        this.curr += 1;
      }
    },
    reset() {
      this.$refs.form1.reset();
      this.$refs.form2.reset();
      this.curr = 1;
    },
    submit() {
      this.curr = 4;
      this.confirmed = true;
    }
  }
};
</script>

<style></style>
