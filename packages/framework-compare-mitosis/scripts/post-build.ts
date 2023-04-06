import { copySync, existsSync, rmdirSync } from "fs-extra";

const targets = ["vue", "solid", "svelte", "react", "qwik"];

const outputDestinations: { [key: string]: string } = {
  react: "../../apps/create-react-app/src/",
  qwik: "../../apps/qwik-app/src/",
};

const target = process.argv[process.argv.length - 1];

if (!target || !targets.includes(target)) {
  cleanup();
  throw new Error("missing target at the end of build command");
}

const destination = outputDestinations[target];

if (!destination) {
  cleanup();
  throw new Error(`missing destination for target: ${target}`);
}

if (!existsSync(`./${target}`)) {
  cleanup();
  throw new Error("missing Mitosis components");
}

copySync(`./${target}`, `${destination}/mitosis`);

cleanup();

function cleanup() {
  // remove all output components
  targets.forEach((target) => {
    if (existsSync(`./${target}`)) {
      rmdirSync(`./${target}`, { recursive: true });
    }
  });
}
