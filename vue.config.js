module.exports = {
  pwa: {
    name: "Financeasy",
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/scss/_variables.scss";
        @import "@/scss/_utility.scss";
        `,
      },
    },
  },
};
