<template>
  <v-container fluid class="mb-8">
    <v-row justify="center" align="center" class="mx-2">
      <v-col cols="12" sm="6" md="4">
        <v-card
          v-scroll-reveal="{ delay: 250 }"
          class="text-center"
          elevation="5"
        >
          <v-card-text
            class="text-h4 text-md-h3"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            My Coins
            <v-chip medium color="orange">
              <v-icon class="mr-2">mdi-circle-multiple</v-icon>
              {{ getCoins }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-2">
      <v-col cols="12">
        <v-card v-scroll-reveal="{ delay: 450 }">
          <v-card-text
            class="text-h5 text-md-h4"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            Redemption Options
          </v-card-text>
          <v-card-subtitle>
            Redeem your coins for <i class="orange--text"> sweet </i> rewards
          </v-card-subtitle>
          <v-divider class="mx-2"></v-divider>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(item, index) in items"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <v-hover v-slot="{ hover }">
                  <v-card color="info darken-2" :elevation="hover ? 16 : 2">
                    <v-img :src="item.img" height="350">
                      <v-row class="pa-2" justify="center">
                        <v-col cols="12" sm="10" md="8">
                          <v-card color="rgb(0,0,0,0.75)">
                            <v-card-text
                              class="text-h5 text-md-h4 text-center white--text"
                            >
                              {{ item.title }}
                              <v-chip color="secondary" class="ml-4">
                                <v-icon class="mr-2"
                                  >mdi-circle-multiple</v-icon
                                >
                                {{ item.cost }}
                              </v-chip>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-img>
                    <v-card-subtitle
                      class="text-body-2 text-md-body-1 white--text"
                    >
                      {{ item.subtitle }}
                    </v-card-subtitle>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-dialog
                        transition="dialog-top-transition"
                        max-width="600"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            v-bind="attrs"
                            v-on="on"
                            color="secondary"
                            class="mx-2"
                            >Redeem Now</v-btn
                          >
                        </template>
                        <template v-slot:default="dialog">
                          <v-card>
                            <v-toolbar color="info darken-2" dark
                              >Redeem</v-toolbar
                            >
                            <v-card-text class="text-h5 text-md-h4 mt-12">
                              Are you sure you want to redeem this offer?
                            </v-card-text>
                            <v-card-text
                              class="text-body-2 text-md-body-1 my-4"
                            >
                              It will cost you:
                              <v-chip color="orange" class="ml-4">
                                <v-icon class="mr-2"
                                  >mdi-circle-multiple</v-icon
                                >
                                {{ item.cost }}
                              </v-chip>
                            </v-card-text>
                            <v-card-actions>
                              <v-btn
                                outlined
                                color="success"
                                @click="dialog.value = false"
                              >
                                Yes
                              </v-btn>
                              <v-btn
                                text
                                color="error"
                                @click="dialog.value = false"
                                >No</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                      <v-btn> Learn More</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    items: [
      {
        title: "Gas Gift Card",
        subtitle: "Why not treat yourself to some free gas?",
        img: "/img/redeem/gas.png",
        cost: 34
      },
      {
        title: "Plant a Tree",
        subtitle: "Help the environment and spend your coins planting a tree.",
        img: "/img/redeem/tree.png",
        cost: 21
      },
      {
        title: "Amazon Gift Card",
        subtitle: "Want to buy something off Amazon? We got you covered.",
        img: "/img/redeem/amazon.png",
        cost: 50
      },
      {
        title: "Donate to a charity",
        subtitle: "Pick a charity and we'll donate your $value in coins to it!",
        img: "/img/redeem/charity.png",
        cost: 15
      },
      {
        title: "Buy the developers a coffee",
        subtitle: "Do you feel like thanking us? Buy us a coffee!",
        img: "/img/redeem/coffee.png",
        cost: 5
      },
      {
        title: "Purchase Swag",
        subtitle: "Use your coins to puchase an official CarPool T-Shirt! Wow!",
        img: "/img/redeem/t-shirt.png",
        cost: 23
      }
    ]
  }),
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters("modules/user", ["getCoins"])
  },
  methods: {
    ...mapActions("modules/user", ["getData"])
  }
};
</script>
