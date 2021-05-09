export const state = () => ({
  routes: [
    {
      icon: "mdi-apps",
      title: "Welcome",
      to: "/",
      requireAuth: false
    },

    {
      icon: "mdi-car",
      title: "Driver",
      to: "/driver",
      requireAuth: true
    },
    {
      icon: "mdi-car",
      title: "Rider",
      to: "/rider",
      requireAuth: true
    },
    {
      icon: "mdi-circle-multiple",
      title: "Redeem",
      to: "/redeem",
      requireAuth: true
    },
    {
      icon: "mdi-account",
      title: "Account",
      to: "/account",
      requireAuth: true
    },
    {
      icon: "mdi-lock",
      title: "Login/Logout",
      to: "/login",
      requireAuth: false
    }
  ]
});

export const getters = {
  getRoutes: state => {
    return state.routes;
  }
};
