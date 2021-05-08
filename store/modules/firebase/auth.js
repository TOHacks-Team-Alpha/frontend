export const state = () => ({
  user: null
});

export const getters = {
  getUser: state => {
    return state.user;
  }
};

export const actions = {
  async login({ commit }, payload) {
    await this.$fire.auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        commit("login", this.$fire.auth.currentUser.toJSON());
        this.$fire.auth.currentUser.getIdToken().then((idToken) => {
          console.log(idToken)
        })
        this.$router.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
  },
  async logout({ commit }) {
    await this.$fire.auth
      .signOut()
      .then(() => {
        commit("logout");
        this.$router.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
  },
  async signUp({ commit }, payload) {
    await this.$fire.auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        commit("login", this.$fire.auth.currentUser.toJSON());
        this.$router.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const mutations = {
  login: (state, user) => {
    state.user = user;
  },
  logout: state => {
    state.user = null;
  }
};
