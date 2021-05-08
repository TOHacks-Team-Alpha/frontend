<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="mx-2">
      <v-col cols="12" sm="6" md="4">
        <v-card
          v-scroll-reveal="{ delay: 250 }"
          class="text-center"
          elevation="10"
          color="info darken-2"
        >
          <v-card-text class="text-h4 text-md-h3 white--text">
            My Coins
            <v-chip medium color="orange">
              <v-icon class="mr-2">mdi-circle-multiple</v-icon> 23</v-chip
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-2">
      <v-col cols="12">
        <v-card v-scroll-reveal="{ delay: 450 }">
          <v-card-text class="text-h5 text-md-h4 white--text">
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
                <v-card elevation="5">
                  <v-img :src="item.img" height="350">
                    <v-row class="pa-2" justify="center">
                      <v-col cols="8">
                        <v-card color="rgb(0,0,0,0.75)">
                          <v-card-text
                            class="text-h5 text-md-h4 white--text text-center"
                          >
                            {{ item.title }}
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-img>
                  <v-card-subtitle class="text-body-2 text-md-body-1">
                    {{ item.subtitle }}
                  </v-card-subtitle>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn outlined color="orange">Redeem Now</v-btn>
                    <v-btn plain color="info"> Learn More</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Gas Gift Card",
        subtitle: "Why not treat yourself to some free gas?",
        img: "/img/redeem/gas.png"
      },
      {
        title: "Plant a Tree",
        subtitle: "Help the environment and spend your coins planting a tree.",
        img: "/img/redeem/tree.png"
      },
      {
        title: "Amazon Gift Card",
        subtitle: "Want to buy something off Amazon? We got you covered.",
        img: "/img/redeem/amazon.png"
      },
      {
        title: "Donate to a charity",
        subtitle: "Pick a charity and we'll donate your $value in coins to it!",
        img: "/img/redeem/charity.png"
      },
      {
        title: "Buy the developers a coffee",
        subtitle: "Do you feel like thanking us? Buy us a coffee!",
        img: "/img/redeem/coffee.png"
      },
      {
        title: "Purchase Swag",
        subtitle: "Use your coins to puchase an official CarPool T-Shirt! Wow!",
        img: "/img/redeem/t-shirt.png"
      }
    ]
  })
};
</script>

<style></style>
