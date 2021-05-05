<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item
          v-for="(item, i) in getRoutes"
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
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      />
      <!-- toolbar title wont truncate -->
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-icon class="mx-1"> {{ icon }} </v-icon>
          {{ $vuetify.breakpoint.mdAndUp ? title : trunc }}
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-tabs v-if="$vuetify.breakpoint.mdAndUp" color="white">
        <v-spacer></v-spacer>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab v-for="item in getRoutes" :key="item.id" :to="item.to">
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
    <v-footer absolute dark padless app>
      <v-card flat tile width="100%" class="white--text text-center">
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
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col align="center" justify="center">
            &copy; {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      title: "Vuetify.js",
      trunc: "Vue",
      icon: "mdi-home"
    };
  },
  computed: {
    getRoutes() {
      return this.$store.state.modules.routes.routes;
    },
    getSocial() {
      return this.$store.state.modules.social.items;
    }
  }
};
</script>
