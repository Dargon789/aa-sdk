import type { Chain, Hash, Transport } from "viem";
import type { SmartContractAccount } from "../../account/smartContractAccount.js";
import type { BaseSmartAccountClient } from "../../client/smartAccountClient.js";
import { sendUserOperation } from "./sendUserOperation.js";
import type { UpgradeAccountParams } from "./types.js";
import { waitForUserOperationTransaction } from "./waitForUserOperationTransacation.js";

export const upgradeAccount: <
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined
>(
  client: BaseSmartAccountClient<TTransport, TChain, TAccount>,
  args: UpgradeAccountParams<TAccount>
) => Promise<Hash> = async (client, args) => {
  const { account = client.account, upgradeTo, overrides, waitForTx } = args;

  if (!account) {
    throw new Error("No account set on client");
  }

  const { implAddress: accountImplAddress, initializationData } = upgradeTo;

  const encodeUpgradeData = await account.encodeUpgradeToAndCall({
    upgradeToAddress: accountImplAddress,
    upgradeToInitData: initializationData,
  });

  const result = await sendUserOperation(client, {
    uo: {
      target: account.address,
      data: encodeUpgradeData,
    },
    account,
    overrides,
  });

  let hash = result.hash;
  if (waitForTx) {
    hash = await waitForUserOperationTransaction(client, result);
  }

  return hash;
};