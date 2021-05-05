export const state = () => ({
  items: [
    {
      icon: "mdi-github",
      alt: "Github"
    }
  ]
});

export const getters = () => ({
  getSocial() {
    return state.items;
  }
});
