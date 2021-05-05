export const state = () => ({
  routes: [
    {
      icon: "mdi-apps",
      title: "Welcome",
      to: "/"
    },
    {
      icon: "mdi-chart-bubble",
      title: "Inspire",
      to: "/inspire"
    }
  ]
});

export const getters = () => ({
  getRoutes() {
    return state.routes;
  }
});
