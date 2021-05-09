<template>
  <v-row class="mb-3 ml-1">
    <v-container>
      <v-form ref="form" v-model="form">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="start"
              label="Starting Destination"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="end"
              label="Ending Destination"
              type=""
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-subheader class="pl-0 mb-5">
              View drivers within this distance from your
              <strong>&nbsp;current location</strong>
            </v-subheader>
            <v-slider
              v-model="startRadius"
              :thumb-size="24"
              thumb-label="always"
            ></v-slider>
          </v-col>
          <v-col cols="6">
            <v-subheader class="pl-0 mb-5">
              View trips within this distance from your
              <strong>&nbsp;destination(km)</strong>
            </v-subheader>
            <v-slider
              v-model="endRadius"
              :thumb-size="24"
              thumb-label="always"
            ></v-slider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="searchForRides">Search</v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-row
        v-for="(ride, index) in getDrives"
        :key="index"
        justify="center"
        align="center"
      >
        <v-col>
          <v-card class="mt-3 mb-3 pa-6 mr-3">
            <v-text class="text-overline">
              <v-icon color="green darken-2">mdi-car</v-icon> Ride #{{
                index + 1
              }}
              Time of Departure: {{ ride.time }} <br />
            </v-text>
            <div class="mt-3">
              <v-text>
                Start Address: {{ ride.start_address }} <br />
                End Address: {{ ride.dest_address }} <br />
                Distance from Driver Start: {{ ride.start_distance }} <br />
                Distance from Desired End: {{ ride.dest_distance }} <br />
                Driver ID: {{ ride.driver_id }} <br />Rides Completed:
                {{ ride.num_trips_driven }} <br />Rides Taken:
                {{ ride.num_trips_ridden }} <br />
                Drive ID: {{ ride.drive_id }}
              </v-text>
            </div>

            <v-btn @click="reqRide(ride)" class="mt-4">
              Request a Ride!
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    form: "",
    valid: true,
    loading: false,
    loader: null,
    selectedItem: 0,
    start: "",
    startRules: [v => !!v || "Start destination is required"],
    end: "",
    endRules: [v => !!v || "End destination is required"],
    startRadius: "",
    endRadius: ""
  }),
  computed: {
    ...mapGetters("modules/rider/find", ["getDrives"])
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    }
  },
  methods: {
    ...mapActions("modules/rider/find", ["setDrives"]),

    searchForRides() {
      if (this.$refs.form.validate()) {
        this.loader = "loading";
        const payload = {
          start: this.start,
          end: this.end,
          startRadius: this.startRadius,
          endRadius: this.endRadius
        };
        this.setDrives(payload);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    async reqRide(payload) {
      const body = {
        drive_id: payload.drive_id
      };
      const domain = "https://vagon-backend-my7m42cgfa-uc.a.run.app";
      // const domain = "https://api.vagon.tech";
      const token = await this.$fire.auth.currentUser.getIdToken();
      await axios
        .post(domain + "/req", body, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          this.data = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log("unable to load data: " + err);
        });
    }
  }
};
</script>
