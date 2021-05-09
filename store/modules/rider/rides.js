import axios from "axios";

export const state = () => ({
  myRides: []
});

export const getters = {
  getRides: state => {
    return state.myRides;
  }
};

export const actions = {
  async setRides({ commit }, payload) {
    const domain = "https://vagon-backend-my7m42cgfa-uc.a.run.app";
    // const domain = "https://api.vagon.tech";
    const endpoint = "/rides";
    const token = await this.$fire.auth.currentUser.getIdToken();
    await axios
      .get(domain + endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.data = res.data;
        commit("setRides", res.data);
        console("set rides ran");
      })
      .catch(err => {
        console.log("unable to load data: " + err);
      });
  }
};

export const mutations = {
  setRides: (state, payload) => {
    state.myRides = payload;
  }
};
