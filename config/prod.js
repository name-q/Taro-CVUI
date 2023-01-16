module.exports = {
  env: {
    NODE_ENV: '"production"',
  },
  mini: {
    postcss: {
      url: {
        enable: true,
        config: {
          limit: 2046,
        },
      },
    },
  },
  h5: {
    publicPath: "./",
  },
};
