import { copySync, existsSync, rmSync, rmdirSync } from "fs-extra";

type OutputFramework = "react" | "vue" | "qwik";

type Target = {
  baseFolder: string;
  componentFolder?: string;
  outputDestinations: string[];
};

const targets: Record<OutputFramework, Target> = {
  vue: {
    baseFolder: "./vue",
    componentFolder: "/vue3",
    outputDestinations: ["../../apps/nuxt-app/components/"],
  },
  react: { baseFolder: "./react", outputDestinations: ["../../apps/create-react-app/src/"] },
  qwik: { baseFolder: "./qwik", outputDestinations: ["../../apps/qwik-app/src/"] },
};

const target = process.argv[process.argv.length - 1] as OutputFramework;

if (!target) {
  cleanup();
  throw new Error("missing target at the end of build command");
}

const baseFolder = targets[target]?.baseFolder;

if (!baseFolder) {
  cleanup();
  throw new Error(`missing baseFolder for target: ${target}`);
}

if (!existsSync(baseFolder)) {
  cleanup();
  throw new Error(`Missing Mitosis components in ${baseFolder}`);
}

const { componentFolder, outputDestinations } = targets[target];

outputDestinations.forEach((destination) => {
  copySync(`${baseFolder}${componentFolder ?? ""}`, `${destination}/mitosis`);
});

cleanup();

function cleanup() {
  // remove all output components
  Object.keys(targets).forEach((target) => {
    const { baseFolder } = targets[target as OutputFramework];
    if (existsSync(baseFolder)) {
      rmSync(baseFolder, { recursive: true });
    }
  });
}
