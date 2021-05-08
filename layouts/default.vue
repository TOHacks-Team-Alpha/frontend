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
      <v-spacer />
      <v-tabs v-if="!mobile" color="white">
        <v-spacer></v-spacer>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab v-for="item in filteredRoutes" :key="item.id" :to="item.to">
          <v-icon class="ma-2" color="grey darken-2">{{ item.icon }}</v-icon>
          {{ item.title }}
          <v-icon class="ma-2" color="transparent">{{ item.icon }}</v-icon>
          <!-- dummy icon to center the text instead of the space between icon and text -->
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-fade-transition mode="out-in" :hide-on-leave="true">
          <nuxt />
        </v-fade-transition>
      </v-container>
    </v-main>
    <v-footer height="227" absolute dark padless app>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-card flat tile class="white--text text-center">
            <v-card-text class="text-body-2 text-md-body-1 white--text">
              <v-icon> {{ icon }} </v-icon>
              {{ title }}
            </v-card-text>
            <v-card-text>
              <v-tooltip v-for="(item, index) in getSocial" :key="index" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn :href="item.href" class="mx-4 white--text" text>
                    <v-icon class="mr-1" size="24px" v-bind="attrs" v-on="on">
                      {{ item.icon }}
                    </v-icon>
                    <span>{{ item.alt }}</span>
                  </v-btn>
                </template>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card-text class="text-center">
            &copy; {{ new Date().getFullYear() }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    isMounted: false,
    drawer: false,
    title: "carpool.tech",
    trunc: "carpool",
    icon: "mdi-car"
  }),
  mounted() {
    this.isMounted = true;
  },
  computed: {
    ...mapGetters("modules/layout/routes", ["getRoutes"]),
    ...mapGetters("modules/layout/social", ["getSocial"]),
    mobile() {
      return (
        this.isMounted && ["xs", "sm"].includes(this.$vuetify.breakpoint.name)
      );
    },
    isAuth() {
      return this.$fire.auth.currentUser !== null;
    },
    filteredRoutes() {
      const auth = this.isAuth;
      const unfiltered = this.getRoutes;
      const filtered = [];
      if (auth) {
        return unfiltered;
      } else {
        for (let i = 0; i < unfiltered.length; i++) {
          const route = unfiltered[i];
          if (!route.requireAuth) {
            filtered.push(route);
          }
        }
        return filtered;
      }
    }
  }
};
</script>
