import axios from 'axios';

export const state = () => ({
  StartAddress: null,
  EndAddress: null,
  Time: null,
  SpaceAvailable: null,
  confirmed: false,
  reqs: []
});

export const getters = {
  getData: state => {
    return [
      state.Time,
      state.SpaceAvailable,
      state.StartAddress,
      state.EndAddress
    ];
  },
  getConfirmed: state => {
    return state.confirmed;
  },
  getReqs: state => {
    return state.reqs;
  }
};

export const actions = {
  async setData({ commit }, payload) {
    commit("setData", payload);
      let startLat, startLng, destLat, destLng;
      const gmapsStart = "https://maps.googleapis.com/maps/api/geocode/json?address=" + payload.StartAddress + "&key=AIzaSyAT6Mm06MYqEBBnwBXmnlufyeLNuNEb1cY"
      await axios
      .get(gmapsStart)
      .then(res => {
          startLat = res.data.results[0].geometry.location.lat
          startLng = res.data.results[0].geometry.location.lng
          console.log(res.data.results[0])
      })
      .catch(err => {
        console.log("unable to load data: " + err);
      });
      const gmapsEnd = "https://maps.googleapis.com/maps/api/geocode/json?address=" + payload.EndAddress + "&key=AIzaSyAT6Mm06MYqEBBnwBXmnlufyeLNuNEb1cY"
      await axios
      .get(gmapsEnd)
      .then(res => {
          destLat = res.data.results[0].geometry.location.lat
          destLng = res.data.results[0].geometry.location.lng
          console.log(res.data.results[0])
      })
      .catch(err => {
        console.log("unable to load data: " + err);
      });
  
  
      const body = {
        "time": payload.Time,
        "space_available": payload.SpaceAvailable,
        "start_address": payload.StartAddress,
        "dest_address": payload.EndAddress,
        "start_lat": startLat,
        "start_lng": startLng,
        "dest_lat": destLat, 
        "dest_lng": destLng
      }
      const domain = "https://vagon-backend-my7m42cgfa-uc.a.run.app";
      // const domain = "https://api.vagon.tech";
      const endpoint = "/drive";
      const token = await this.$fire.auth.currentUser.getIdToken();
      await axios
        .post(domain + endpoint, body, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          this.data = res.data;
          console.log(res.data)
        })
        .catch(err => {
          console.log("unable to load data: " + err);
        });
  },
  setConfirmed({ commit }, payload) {
    commit("setConfirmed", payload);
  },
  async setReqs({ commit }){
    const domain = "https://vagon-backend-my7m42cgfa-uc.a.run.app";
    // const domain = "https://api.vagon.tech";
    const token = await this.$fire.auth.currentUser.getIdToken();
    await axios
      .get(domain + "/req", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.data = res.data;
        commit("setReqs", res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log("unable to load data: " + err);
      });
  }
};

export const mutations = {
  setData: (state, payload) => {
    state.StartAddress = payload.StartAddress;
    state.EndAddress = payload.EndAddress;
    state.Time = payload.Time;
    state.SpaceAvailable = payload.SpaceAvailable;
  },
  setConfirmed: (state, payload) => {
    state.confirmed = payload;
  },
  setReqs: (state, payload) => {
    state.reqs = payload
  }
};
