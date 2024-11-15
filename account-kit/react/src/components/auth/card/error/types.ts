import type { KnownAuthProvider } from "@account-kit/signer";
import type { Connector } from "@wagmi/core";

export type CustomErrorMessage = {
  heading?: string;
  body?: string;
  tryAgainCTA?: string;
  useAnotherMethodCTA?: string;
};

export enum EOAWallets {
  COINBASE_WALLET = "com.coinbase.wallet",
  METAMASK = "io.metamask",
  WALLET_CONNECT = "WalletConnect",
}

export type ConnectionErrorProps = {
  connectionType: "passkey" | "oauth" | "wallet" | "timeout";
  oauthProvider?: KnownAuthProvider; // TO DO: extend for BYO auth provider
  EOAConnector?: Connector | EOAWallets.WALLET_CONNECT;
  customErrorMessage?: CustomErrorMessage | null;
  handleTryAgain?: () => void;
  handleUseAnotherMethod?: () => void;
};
