<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <!-- Login -->
      <v-col v-if="!isAuth" cols="12" sm="8" md="6">
        <v-window v-model="selectedItem">
          <v-window-item>
            <v-card v-scroll-reveal class="mx-2" elevation="5">
              <v-card-text class="text-overline pb-0">
                welcome back
              </v-card-text>
              <v-card-text
                class="text-h4 text-md-h3 py-0"
                :class="$vuetify.theme.dark ? 'white--text' : ''"
              >
                Login
              </v-card-text>
              <v-card-text class="text-body-2 text-md-body-1">
                Please enter your credentials below to login, or, press 'create
                an account' if you do not have one.
              </v-card-text>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :counter="10"
                    :rules="passwordRules"
                    label="Password"
                    required
                    type="password"
                  ></v-text-field>

                  <v-checkbox
                    v-model="checkbox"
                    label="Keep me signed in"
                  ></v-checkbox>
                  <v-btn color="info" class="mr-4" @click="reset()">
                    Clear
                  </v-btn>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="mx-0">
                <v-row dense>
                  <v-col>
                    <v-btn
                      :disabled="!valid"
                      :loading="loading"
                      color="success darken-2"
                      @click="validate()"
                    >
                      Login
                      <v-icon class="ml-2">mdi-login</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn color="secondary" @click="switchWindow()">
                      Create an account
                      <v-icon class="ml-2">mdi-account</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn @click="googleSignIn">
                      Sign in with Google
                      <v-icon class="ml-2">mdi-google</v-icon>
                    </v-btn>
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-window-item>
          <v-window-item>
            <v-card v-scroll-reveal class="mx-2" elevation="5">
              <v-card-text class="text-overline pb-0">
                welcome
              </v-card-text>
              <v-card-text
                class="text-h4 text-md-h3 py-0"
                :class="$vuetify.theme.dark ? 'white--text' : ''"
              >
                Create an account
              </v-card-text>
              <v-card-text class="text-body-2 text-md-body-1">
                Please fill out the form below and get started using ... today
              </v-card-text>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :counter="10"
                    :rules="passwordRules"
                    label="Password"
                    required
                    type="password"
                  ></v-text-field>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="I agree to create an account"
                    required
                  ></v-checkbox>
                  <v-btn color="info" @click="reset()"> Clear </v-btn>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-row dense>
                  <v-col>
                    <v-btn
                      :disabled="!valid"
                      :loading="loading"
                      color="success darken-2"
                      @click="validateSignUp()"
                    >
                      Create
                      <v-icon class="ml-2">mdi-pencil</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn color="secondary" @click="switchWindow()">
                      Switch to Login
                      <v-icon class="ml-2">mdi-login</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn @click="googleSignIn()">
                      Sign in with Google
                      <v-icon class="ml-2">mdi-google</v-icon>
                    </v-btn>
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>

      <!-- Logout -->
      <v-col v-if="isAuth" cols="12" sm="8" md="6">
        <v-card v-scroll-reveal class="mx-2" elevation="5">
          <v-card-text class="text-overline pb-0">
            goodbye
          </v-card-text>
          <v-card-text
            class="text-h4 text-md-h3 py-0"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            Logout
          </v-card-text>
          <v-card-text class="text-body-2 text-md-body-1">
            Please press the button below to logout
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="error" @click="logout()"
              >Logout <v-icon class="ml-1">mdi-logout</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn @click="getMeToken">
              Print the JWT to Console
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    valid: true,
    loading: false,
    loader: null,
    selectedItem: 0,
    name: "",
    form: [],
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length <= 20) || "Password must be less than 20 characters"
    ],
    password: "",
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    checkbox: false
  }),
  computed: {
    isAuth() {
      return this.$fire.auth.currentUser !== null;
    }
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
    ...mapActions("modules/firebase/auth", [
      "login",
      "logout",
      "signUp",
      "googleLogin"
    ]),
    validate() {
      if (this.$refs.form.validate()) {
        this.loader = "loading";
        const payload = {
          email: this.email,
          password: this.password
        };
        this.login(payload);
      }
    },
    validateSignUp() {
      if (this.$refs.form.validate()) {
        this.loader = "loading";
        const payload = {
          email: this.email,
          password: this.password,
          name: this.name
        };
        this.signUp(payload);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    switchWindow() {
      this.reset();
      if (this.selectedItem === 0) {
        this.selectedItem = 1;
      } else {
        this.selectedItem = 0;
      }
    },
    googleSignIn() {
      const payload = {
        name: this.name
      };
      this.googleLogin(payload);
    },
    async getMeToken() {
      const token = await this.$fire.auth.currentUser.getIdToken();
      console.log(token);
    }
  }
};
</script>

<style></style>
