module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-framework-compare`
  extends: [ "framework-compare" ],
  settings: {
    next: {
      rootDir: [ "apps/*/" ],
    },
  },
};
