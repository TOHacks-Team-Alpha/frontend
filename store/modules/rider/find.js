import axios from "axios";

export const state = () => ({
  drives: []
});

export const getters = {
  getDrives: state => {
    return state.drives;
  }
};
export const actions = {
  async setDrives({ commit }, payload) {
    let startLat, startLng, destLat, destLng;
    const gmapsStart = "https://maps.googleapis.com/maps/api/geocode/json?address=" + payload.start + "&key=AIzaSyAT6Mm06MYqEBBnwBXmnlufyeLNuNEb1cY"
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
    const gmapsEnd = "https://maps.googleapis.com/maps/api/geocode/json?address=" + payload.end + "&key=AIzaSyAT6Mm06MYqEBBnwBXmnlufyeLNuNEb1cY"
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

 
    const domain = "https://vagon-backend-my7m42cgfa-uc.a.run.app";
    // const domain = "https://api.vagon.tech";
    const endpoint =
      "/drive?start_lat=" +
      startLat +
      "&start_lng=" +
      startLng +
      "&start_radius=" +
      payload.startRadius +
      "&dest_lat=" +
      destLat +
      "&dest_lng=" +
      destLng +
      "&dest_radius=" +
      payload.endRadius;
    const token = await this.$fire.auth.currentUser.getIdToken();
    await axios
      .get(domain + endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.data = res.data;
        console.log(res.data)
        commit("setDrives", res.data);
      })
      .catch(err => {
        console.log("unable to load data: " + err);
      });
  }
};

export const mutations = {
  setDrives: (state, payload) => {
    state.drives = payload;
  }
};
