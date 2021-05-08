<template>
  <v-card elevation="5">
    <v-toolbar color="info">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Driver Actions</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-view-module</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-2"
        >
          <v-list-item>
            <v-list-item-title>Current Riders</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Trip Selector</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-list>
      <template v-for="(item, index) in items">
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

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle>
              <v-icon size="20" color="primary">mdi-home</v-icon
              >{{ item.home }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon size="20" color="secondary">mdi-map-marker</v-icon
              >{{ item.dest }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="grey">mdi-close-circle-outline</v-icon>
                </v-btn>
              </template>
              <span>Kick Rider</span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
      </template>
      <v-list-item>
        <v-spacer></v-spacer>
        <v-list-item-action>
          <v-btn rounded outlined color="info">
            <div v-if="$vuetify.breakpoint.smAndUp">
              Add Rider
            </div>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-spacer></v-spacer>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn rounded color="success darken-2"> Start Trip </v-btn>
      <v-spacer></v-spacer>
      <v-btn plain color="error"> Cancel Trip </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: 0,
    items: [
      { header: "Current Riders" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: "Alex Muvadi",
        home: "1-23 Sommerville Drive",
        dest: "453 Keele Road"
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        name: "Allen Kaplan",
        home: "3 Davis Drive",
        dest: "52 King Road"
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        name: "Sandra Adams",
        home: "93 Blackthorn Avenue",
        dest: "57 King Road"
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        name: "Kali Gonzales",
        home: "3-45 Melvile Street",
        dest: "375 Patricia Drive"
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        name: "Britta Holt",
        home: "234 Sandiford Blvd",
        dest: "375 Patricia Drive"
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
