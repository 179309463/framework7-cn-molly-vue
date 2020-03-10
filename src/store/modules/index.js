import camelCase from "lodash/camelCase";

const requireModule = require.context(".", false, /^((?!index|dm-).)*\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default
  };
});
export default modules;
