import firebase from "firebase";
import axios from "axios";

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
      .then(() => {
        commit("login", this.$fire.auth.currentUser.toJSON());
        this.$fire.auth.currentUser.getIdToken().then(idToken => {
          console.log(idToken);
        });
        console.log(this.$fire.auth.currentUser);
        this.$router.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
  },
  async googleLogin({ commit }) {
    this.provider = new firebase.auth.GoogleAuthProvider();
    await this.$fire.auth
      .signInWithPopup(this.provider)
      .then(() => {
        commit("login", this.$fire.auth.currentUser.toJSON());
        this.$fire.auth.currentUser.getIdToken().then(idToken => {
          console.log(idToken);
        });
        this.$router.push("/");
      })
      .catch(e => {
        this.$notify.error(e.message);
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
      .then(() => {
        commit("login", this.$fire.auth.currentUser.toJSON());
        this.$router.replace("/");
      })
      .catch(err => {
        console.log(err);
      });

    const body = {
      name: payload.name
    };
    const domain = "https://vagon-backend-my7m42cgfa-uc.a.run.app";
    // const domain = "https://api.vagon.tech";
    const token = await this.$fire.auth.currentUser.getIdToken();
    await axios
      .put(domain + "/user", body, {
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
};

export const mutations = {
  login: (state, user) => {
    state.user = user;
  },
  logout: state => {
    state.user = null;
  }
};
