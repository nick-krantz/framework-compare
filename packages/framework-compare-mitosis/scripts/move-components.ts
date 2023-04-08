import { copySync, existsSync, rmSync, moveSync } from "fs-extra";

type OutputFramework = "react" | "vue" | "qwik";

type Target = {
  baseFolder: string;
  componentFolder?: string;
  outputDestinations: string[];
  callback?: () => void;
};

const targets: Record<OutputFramework, Target> = {
  vue: {
    baseFolder: "./vue",
    componentFolder: "/vue3",
    outputDestinations: ["../../apps/nuxt-app/"],
    callback: () => {
      // remove index.ts not applicable to nuxt
      rmSync("../../apps/nuxt-app/index.ts");
    },
  },
  react: { baseFolder: "./react", outputDestinations: ["../../apps/create-react-app/src/mitosis"] },
  qwik: { baseFolder: "./qwik", outputDestinations: ["../../apps/qwik-app/src/mitosis"] },
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

const { componentFolder, outputDestinations, callback } = targets[target];

outputDestinations.forEach((destination) => {
  copySync(`${baseFolder}${componentFolder ?? ""}`, `${destination}`);
});

callback?.();
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
