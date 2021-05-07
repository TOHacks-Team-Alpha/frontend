export const state = () => ({
  items: [
    {
      icon: "mdi-github",
      alt: "Github"
    }
  ]
});

export const getters = {
  getSocial: state => {
    return state.items;
  }
};
