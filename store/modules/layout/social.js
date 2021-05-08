export const state = () => ({
  items: [
    {
      icon: "mdi-github",
      href: "https://github.com/TOHacks-Team-Alpha",
      alt: "Github"
    }
  ]
});

export const getters = {
  getSocial: state => {
    return state.items;
  }
};
