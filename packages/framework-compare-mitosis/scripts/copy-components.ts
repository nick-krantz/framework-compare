import { copySync, existsSync } from "fs-extra";

const outputDestinations = [["react", "../../apps/create-react-app/src/"]];

if (!existsSync("./dist")) {
  throw new Error("missing Mitosis components");
}

outputDestinations.forEach(([target, destination]) => {
  copySync(`./dist/${target}`, `${destination}/mitosis`);
});
