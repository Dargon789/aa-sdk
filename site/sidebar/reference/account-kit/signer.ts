// This file is autogenerated, see scripts/prebuild.ts
import { SidebarItem } from "vocs";

export const accountKitSignerReferenceSidebar: SidebarItem[] = [
  {
    text: "@account-kit/signer",
    items: [
      {
        text: "Overview",
        link: "/reference/account-kit/signer",
      },
    ],
  },
  {
    text: "Classes",
    items: [
      {
        text: "AlchemySignerWebClient",
        items: [
          {
            text: "completeAuthWithBundle",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/completeAuthWithBundle",
          },
          {
            text: "constructor",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/constructor",
          },
          {
            text: "createAccount",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/createAccount",
          },
          {
            text: "disconnect",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/disconnect",
          },
          {
            text: "exportWallet",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/exportWallet",
          },
          {
            text: "initEmailAuth",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/initEmailAuth",
          },
          {
            text: "lookupUserWithPasskey",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/lookupUserWithPasskey",
          },
          {
            text: "oauthWithPopup",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/oauthWithPopup",
          },
          {
            text: "oauthWithRedirect",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/oauthWithRedirect",
          },
          {
            text: "submitOtpCode",
            link: "/reference/account-kit/signer/classes/AlchemySignerWebClient/submitOtpCode",
          },
        ],
      },
      {
        text: "AlchemyWebSigner",
        items: [
          {
            text: "constructor",
            link: "/reference/account-kit/signer/classes/AlchemyWebSigner/constructor",
          },
        ],
      },
      {
        text: "BaseAlchemySigner",
        items: [
          {
            text: "addPasskey",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/addPasskey",
          },
          {
            text: "authenticate",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/authenticate",
          },
          {
            text: "constructor",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/constructor",
          },
          {
            text: "disconnect",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/disconnect",
          },
          {
            text: "exportWallet",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/exportWallet",
          },
          {
            text: "getAddress",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/getAddress",
          },
          {
            text: "getAuthDetails",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/getAuthDetails",
          },
          {
            text: "getUser",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/getUser",
          },
          {
            text: "on",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/on",
          },
          {
            text: "preparePopupOauth",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/preparePopupOauth",
          },
          {
            text: "signMessage",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/signMessage",
          },
          {
            text: "signTransaction",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/signTransaction",
          },
          {
            text: "signTypedData",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/signTypedData",
          },
          {
            text: "toViemAccount",
            link: "/reference/account-kit/signer/classes/BaseAlchemySigner/toViemAccount",
          },
        ],
      },
      {
        text: "BaseSignerClient",
        items: [
          {
            text: "addPasskey",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/addPasskey",
          },
          {
            text: "constructor",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/constructor",
          },
          {
            text: "getUser",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/getUser",
          },
          {
            text: "initOauth",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/initOauth",
          },
          {
            text: "lookupUserByEmail",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/lookupUserByEmail",
          },
          {
            text: "on",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/on",
          },
          {
            text: "request",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/request",
          },
          {
            text: "signRawMessage",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/signRawMessage",
          },
          {
            text: "stampWhoami",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/stampWhoami",
          },
          {
            text: "whoami",
            link: "/reference/account-kit/signer/classes/BaseSignerClient/whoami",
          },
        ],
      },
      {
        text: "OauthCancelledError",
        items: [
          {
            text: "constructor",
            link: "/reference/account-kit/signer/classes/OauthCancelledError/constructor",
          },
        ],
      },
    ],
  },
  {
    text: "Resources",
    items: [
      {
        text: "React Native",
        items: [
          {
            text: "Overview",
            link: "/react-native/overview",
          },
          {
            text: "Getting Started",
            items: [
              {
                text: "Getting started on Expo",
                link: "/react-native/getting-started/getting-started-expo",
              },
              {
                text: "Getting started on Bare React Native",
                link: "/react-native/getting-started/getting-started-rn-bare",
              },
            ],
          },
          {
            text: "Using the Signer",
            items: [
              {
                text: "Overview",
                link: "/react-native/signer/overview",
              },
              {
                text: "Setup",
                link: "/react-native/signer/setup-guide",
              },
              {
                text: "Authenticating Users",
                items: [
                  {
                    text: "Authenticating Users via Magic Link",
                    link: "/react-native/signer/authenticating-users/authenticating-with-magic-link",
                  },
                  {
                    text: "Authenticating Users via One-Time Password (OTP)",
                    link: "/react-native/signer/authenticating-users/authenticating-with-otp",
                  },
                ],
                collapsed: true,
              },
            ],
          },
        ],
        collapsed: true,
      },
      {
        text: "Third Party",
        items: [
          {
            text: "Bundlers",
            link: "/third-party/bundlers",
          },
          {
            text: "Chains",
            link: "/third-party/chains",
          },
          {
            text: "Paymasters",
            link: "/third-party/paymasters",
          },
          {
            text: "Signers",
            link: "/third-party/signers",
          },
          {
            text: "Smart Contracts",
            link: "/third-party/smart-contracts",
          },
        ],
        collapsed: true,
      },
      {
        text: "Terms",
        link: "/resources/terms",
      },
      {
        text: "Types",
        link: "/resources/types",
      },
      {
        text: "FAQs",
        link: "/resources/faqs",
      },
      {
        text: "Contact us",
        link: "/resources/contact-us",
      },
    ],
  },
];
