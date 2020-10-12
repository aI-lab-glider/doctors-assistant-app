module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          "transform-remove-console",
          [
            "inline-dotenv",
            {
              path: ".env.production",
            },
          ],
        ],
      },
      development: {
        plugins: [
          [
            "inline-dotenv",
            {
              path: ".env.development",
            },
          ],
        ],
      },
    },
  };
};
