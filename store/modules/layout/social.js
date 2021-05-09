export const state = () => ({
  items: [
    {
      icon: "mdi-github",
      href: "https://github.com/TOHacks-Team-Alpha",
      alt: "Github"
    },
    {
      icon: "mdi-dev-to",
      href: "https://devpost.com/software/vagon-tech",
      alt: "Devpost"
    },
    {
      icon: "mdi-api",
      href: "https://api.vagon.tech/ping",
      alt: "vagon api"
    }
  ]
});

export const getters = {
  getSocial: state => {
    return state.items;
  }
};
