import { pascalCase } from "change-case";
import dedent from "dedent";
import type { Phase } from "../../../types";
import { extractExecutionAbi } from "../../../utils.js";

export const ViemAccountDecoratorPhase: Phase = async (input) => {
  const { plugin, contract, addImport } = input;
  const { executionFunctions } = await plugin.read.pluginManifest();
  const executionAbiConst = `${contract.name}ExecutionFunctionAbi`;
  const executionAbi = extractExecutionAbi(executionFunctions, contract.abi);

  addImport("viem", { name: "GetFunctionArgs", isType: true });
  addImport("viem", { name: "encodeFunctionData" });
  addImport("../../types.js", { name: "IMSCA", isType: true });

  const accountFunctions = executionAbi.map((n) => {
    const methodContent = [];
    const argsParamString =
      n.inputs.length > 0
        ? `{ args }: GetFunctionArgs<typeof ${executionAbiConst}, "${n.name}">`
        : "";
    const argsEncodeString = n.inputs.length > 0 ? "args," : "";
    const isViewFunction = n.stateMutability === "view";

    methodContent.push(dedent`
      encode${pascalCase(n.name)}Data: (${argsParamString}) => {
          return encodeFunctionData({
              abi: ${executionAbiConst},
              functionName: "${n.name}",
              ${argsEncodeString}
          });
      }
    `);

    const readArgsParamString =
      n.inputs.length > 0
        ? `{ args, account = client.account }: GetFunctionArgs<typeof ${executionAbiConst}, "${n.name}"> & GetAccountParameter<TAccount>`
        : "{ account = client.account }: GetAccountParameter<TAccount>";
    if (isViewFunction) {
      methodContent.push(dedent`
        read${pascalCase(n.name)}: async (${readArgsParamString}) => {
          if (!account) {
            throw new Error("account is required");
          }

          return client.readContract({
            address: account.address,
            abi: ${executionAbiConst},
            functionName: "${n.name}",
            ${argsEncodeString}
          });
        }
      `);
    }

    return methodContent.join(",\n\n");
  });

  input.content.push(...accountFunctions);

  return input;
};