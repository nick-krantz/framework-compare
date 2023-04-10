module.exports = {
  files: ["index.ts", "components/**"],
  targets: ["vue3", "react", "qwik", "svelte"],
  dest: ".",
  options: {
    vue3: {
      typescript: true,
    },
    solid: {
      typescript: true,
    },
    svelte: {
      typescript: true,
    },
    react: {
      typescript: true,
      stateType: "useState",
      type: "dom",
    },
    qwik: {
      typescript: true,
    },
  },
};
