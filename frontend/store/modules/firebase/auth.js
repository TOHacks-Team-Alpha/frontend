export const state = () => ({
  auth: false
});

export const getters = {
  isAuth: state => {
    return state.auth;
  }
};

export const actions = {
  login({ commit }) {
    commit("login");
  },
  logout({ commit }) {
    commit("logout");
  }
};

export const mutations = {
  login: state => {
    state.auth = true;
  },
  logout: state => {
    state.auth = false;
  }
};
