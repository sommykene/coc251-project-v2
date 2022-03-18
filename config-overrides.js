const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@api": "src/api",
    "@assets": "src/assets",
    "@components": "src/components",
    "@firebase": "src/firebase",
    "@routes": "src/routes",
    "@screens": "src/screens",
    "@store": "src/store",
    "@utils": "src/utils",
    "@config": "src/config",
  })(config);

  return config;
};
