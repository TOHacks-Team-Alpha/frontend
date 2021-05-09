<template>
  <v-card elevation="5"
   v-if="getRides.length > 0">
    <v-toolbar color="info">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Rider Actions</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-view-module</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <template v-for="(item, index) in getRides">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.Drive.drive_id">
          <v-list-item-avatar>
            <v-img :src="items[index].avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
              <!-- v-html="item.Drive.driver_id" -->
            <v-list-item-title
              v-html="item.User.name"
            ></v-list-item-title>
            <v-list-item-subtitle>
              <v-icon size="20" color="primary">mdi-home</v-icon
              >{{ item.Drive.start_address }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon size="20" color="secondary">mdi-map-marker</v-icon
              >{{ item.Drive.dest_address }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon size="20" color="yellow">mdi-alarm</v-icon
              >{{ item.Drive.time }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon size="20" color="yellow">mdi-car</v-icon
              >{{ item.Req.status }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon size="20" color="yellow">mdi-car</v-icon
              >{{ item.Req.drive_id }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" @click="complete(item)">
                  <v-icon color="grey">mdi-check-outline</v-icon>
                </v-btn>
              </template>
              <span>Trip Completed</span>
            </v-tooltip>
             <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" @click="cancel(item)">
                  <v-icon color="grey">mdi-close-circle-outline</v-icon>
                </v-btn>
              </template>
              <span>Cancel Trip</span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
      </template>
      <v-list-item>
        <v-spacer></v-spacer>
        <!-- <v-list-item-action>
          <v-btn rounded outlined color="info">
            <div v-if="$vuetify.breakpoint.smAndUp">
              Invite Rider
            </div>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-list-item-action> -->
        <v-spacer></v-spacer>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <!-- <v-card-actions>
      <v-btn rounded outlined color="success darken-2"> Start Trip </v-btn>
      <v-spacer></v-spacer>
      <v-btn plain color="error"> Cancel Trip </v-btn>
    </v-card-actions> -->
    <!-- {{ getReqs }} -->
  </v-card>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    this.setRides();
  },
  computed: {
    ...mapGetters("modules/rider/rides", ["getRides"])
  },
  methods: {
    ...mapActions("modules/rider/rides", ["setRides"]), 
    complete(item) {
      // console.log(item);
      // console.log(item.Req);
      const pl = {
        drive_id: item.Req.drive_id,
        rider_id: item.Req.rider_id,
        status: "complete"
      };
      this.req(pl);
      this.setRides();
    },
    cancel(item) {
      // console.log(item.Req);
      const pl = {
        drive_id: item.Req.drive_id,
        rider_id: item.Req.rider_id,
        status: "cancelled"
      };
      this.req(pl);
      this.setRides();
    },
    async req(payload) {
      const domain = "https://vagon-backend-my7m42cgfa-uc.a.run.app";
      // const domain = "https://api.vagon.tech";
      const token = await this.$fire.auth.currentUser.getIdToken();
      await axios
        .put(domain + "/req", payload, {
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
  },
  data: () => ({
    drawer: false,
    group: 0,
    items: [
      { header: "Current Riders" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: "Alex Muvadi",
        home: "1-23 Sommerville Drive",
        dest: "453 Keele Road",
        time: "2:30pm"
      },

      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        name: "Britta Holt",
        home: "234 Sandiford Blvd",
        dest: "375 Patricia Drive",
        time: "8:00pm"
      },
      { divider: true, inset: true }
    ]
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style></style>
