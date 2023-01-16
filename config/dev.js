module.exports = {
  env: {
    NODE_ENV: '"development"',
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
    devServer: {
      host: "0.0.0.0",
      disableHostCheck: true,
      port: 8080,
    },
  },
};
