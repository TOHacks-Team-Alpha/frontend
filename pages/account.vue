<template>
  <v-row v-if="!isAuth" justify="center" align="center">
    <!-- Login -->
    <v-col  cols="12" sm="8" md="6">
      <v-card>
        <v-card-text class="text-overline pb-5">
          Account
        </v-card-text>
       <v-container
    fluid
    style="height: 300px"
  >
    <v-row justify="center" class="pb-5">
      <v-menu
        bottom
        min-width="300px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="brown"
              size="70"
            >
              <span class="white--text headline">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>

        <v-card  >
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  <v-row justify="center" align="center"  class="pa-md-4 mx-lg-auto">

 <v-text-field     class="mx-2"

            value="John Doe"
            label="Name"
            outlined
            disabled
          ></v-text-field>

 <v-text-field class="mx-2"
            value="123 Apple rd"
            label="Address"
            outlined
            disabled
          ></v-text-field>


    </v-row>
     
<v-row no-gutters>
      <v-col 
      justify="center" align="center" 
        cols="12"
        sm="4"
      >
        <v-card
        justify="center" align="center" 
          class="pa-2"
          tile
        >
        <v-icon
        large
        color="green darken-2"
        >
        mdi-circle-multiple-outline
       </v-icon>
        </v-card>
        <v-text>Coins</v-text>
      </v-col>
      <v-col
      justify="center" align="center" 
        cols="12"
        sm="4"
      >
        <v-card
        justify="center" align="center" 
          class="pa-2"
          tile
        >
           <v-icon
        large
        color="yellow darken-2"
        >
        mdi-car
       </v-icon>
        </v-card>
        <v-text>Number of Rides</v-text>
      </v-col>
      <v-col
      justify="center" align="center" 
        cols="12"
        sm="4"
      >
        <v-card
        justify="center" align="center" 
          class="pa-2"
          tile
        >
       <v-icon
        large
        color="red darken-2"
        >
        mdi-road-variant
       </v-icon>
        </v-card>
          <v-text>Distance</v-text>
      </v-col>
    </v-row>

  </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {


   data: () => ({
      user: {
        initials: 'AK',
        fullName: 'Allen Kaplan',
        email: 'john.doe@doe.com',
        coins: '100', 
        distance: '1000 km',
        drives: '22',
      },
    }),
  computed: {
    isAuth() {
      return this.$fire.auth.currentUser !== null;
    }
  }
};
</script>

<style></style>