import { camelCase } from "change-case";
import dedent from "dedent";
import fs from "fs-extra";
import path from "node:path";
import { format } from "prettier";

const referencePackages = [
  "@account-kit/core",
  "@account-kit/infra",
  "@account-kit/react",
  "@account-kit/signer",
  "@account-kit/smart-contracts",
  "@aa-sdk/core",
];

referencePackages.forEach(async (pkg) => {
  const cleanPkg = pkg.replace("@", "");
  const referencePath = `./reference/${cleanPkg}`;
  const functionFiles = await fs
    .readdir(path.resolve("./pages", referencePath, "./functions"))
    .catch(() => []);

  const functionItems = functionFiles.map((file) => {
    const functionName = file.split(".")[0];
    return {
      text: functionName,
      link: `${referencePath.replace(".", "")}/functions/${functionName}`,
    };
  });

  const sidebarConst = `${camelCase(
    cleanPkg.split("/").join("-")
  )}ReferenceSidebar`;
  const sidebarContent = dedent`
  // This file is autogenerated, see scripts/prebuild.ts
  import { SidebarItem } from "vocs";

  export const ${sidebarConst}: SidebarItem[] = [
    {
        text: "${pkg}",
        items: [{
            text: "Overview",
            link: "${referencePath.replace(".", "")}"
        }],
    },
    {
        text: "Functions",
        items: ${JSON.stringify(functionItems, null, 2)}
    }
  ];
  `;

  fs.outputFileSync(
    path.resolve("./sidebar", `${referencePath}.ts`),
    format(sidebarContent)
  );
});
