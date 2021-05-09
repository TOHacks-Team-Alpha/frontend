<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item
          v-for="(item, i) in filteredRoutes"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevate-on-scroll app>
      <v-app-bar-nav-icon v-if="mobile" @click.stop="drawer = !drawer" />
      <!-- toolbar title wont truncate -->
      <div>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            <v-icon class="mx-1"> {{ icon }} </v-icon>
            {{ !mobile ? title : trunc }}
          </router-link>
        </v-toolbar-title>
      </div>
      <v-spacer v-if="mobile"></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        class="ml-4 pt-6"
        color="orange"
      ></v-switch>
      <v-icon>mdi-theme-light-dark</v-icon>
      <v-spacer />
      <v-tabs v-if="!mobile" :color="$vuetify.theme.dark ? 'white' : 'primary'">
        <v-spacer></v-spacer>
        <template v-for="item in filteredRoutes">
          <v-tab :key="item.id" :to="item.to">
            <v-icon class="ma-2" color="grey darken-2">{{ item.icon }}</v-icon>
            {{ item.title }}
            <v-icon class="ma-2" color="transparent">{{ item.icon }}</v-icon>
            <!-- dummy icon to center the text instead of the space between icon and text -->
          </v-tab>
        </template>
      </v-tabs>
    </v-app-bar>
    <v-main class="mb-8">
      <v-container fluid>
        <v-fade-transition mode="out-in" :hide-on-leave="true">
          <nuxt />
        </v-fade-transition>
      </v-container>
    </v-main>
    <v-footer
      absolute
      padless
      app
      :color="$vuetify.theme.dark ? '' : 'primary'"
    >
      <v-row justify="center" align="center" class="pa-0 ma-0">
        <v-col cols="12" class="pa-0 ma-0">
          <v-card
            flat
            tile
            class="text-center"
            :color="$vuetify.theme.dark ? '' : 'primary lighten-2'"
          >
            <v-card-text class="text-body-2 text-md-body-1">
              <v-icon> {{ icon }} </v-icon>
              {{ title }}
            </v-card-text>
            <v-card-text>
              <v-tooltip v-for="(item, index) in getSocial" :key="index" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    :href="item.href"
                    class="mx-4"
                    text
                  >
                    <v-icon class="mr-1" size="24px">
                      {{ item.icon }}
                    </v-icon>
                    <span>{{ item.alt }}</span>
                  </v-btn>
                </template>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="pa-0 ma-0">
          <v-card-text class="text-center">
            &copy; {{ new Date().getFullYear() }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({
    isMounted: false,
    drawer: false,
    title: "vagon.tech",
    trunc: "vagon",
    icon: "mdi-car"
  }),
  created() {
    // matts sketchy login fix :)
    this.$fire.auth.onAuthStateChanged(() => {
      const user = this.$fire.auth.currentUser;
      if (user) {
        this.login(user.toJSON());
      }
    });
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    ...mapGetters("modules/layout/routes", ["getRoutes"]),
    ...mapGetters("modules/layout/social", ["getSocial"]),
    ...mapGetters("modules/firebase/auth", ["getUser"]),
    mobile() {
      return (
        this.isMounted && ["xs", "sm"].includes(this.$vuetify.breakpoint.name)
      );
    },
    filteredRoutes() {
      const routes = this.getRoutes;
      const auth = this.getUser !== null;
      const filtered = routes.filter(function(value, index, arr) {
        return value.requireAuth === false || (auth && value.requireAuth);
      });
      return filtered;
    }
  },
  methods: {
    ...mapMutations("modules/firebase/auth", ["login"])
  }
};
</script>
