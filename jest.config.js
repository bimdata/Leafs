module.exports = {
  modulePathIgnorePatterns: ["cypress"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    "^.*\\.(vue)$": "vue-jest",
  },
};
