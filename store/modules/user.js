import axios from "axios";

export const state = () => ({
  name: null,
  coins: 0,
  tripsDriven: 0,
  tripsRidden: 0,
  totalDistance: 0,
  id: null
});

export const getters = {
  getName: state => {
    return state.name;
  },
  getID: state => {
    return state.id;
  },
  getCoins: state => {
    return state.coins;
  },
  getTripsDriven: state => {
    return state.tripsDriven;
  },
  getTripsRidden: state => {
    return state.tripsRidden;
  },
  getTotalDistance: state => {
    return state.totalDistance;
  }
};

export const actions = {
  async getData({ commit }) {
    const domain = "https://vagon-backend-my7m42cgfa-uc.a.run.app";
    // const domain = "https://api.vagon.tech";
    const token = await this.$fire.auth.currentUser.getIdToken();
    const endpoint = "/user";
    await axios
      .get(domain + endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        commit("setData", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const mutations = {
  setData: (state, payload) => {
    state.name = payload.name;
    state.id = payload.id;
    state.coins = payload.coins;
    state.tripsDriven = parseInt(payload.num_trips_driven);
    state.tripsRidden = parseInt(payload.num_trips_ridden);
    state.totalDistance = parseFloat(payload.total_distance);
  }
};
