import { defineConfig } from "vocs";
import { coreSidebar } from "./sidebar/core.js";
import { infraSidebar } from "./sidebar/infra.js";
import { introSidebar } from "./sidebar/intro.js";
import { reactSidebar } from "./sidebar/react.js";
import { signerSidebar } from "./sidebar/signer.js";
import { smartContractsSidebar } from "./sidebar/smart-contracts.js";

const pkg = require("../lerna.json");

export default defineConfig({
  title: "Account Kit",
  description: "Account Abstraction Legos",
  logoUrl: {
    light: "/account-kit-light-mode.svg",
    dark: "/account-kit-dark-mode.svg",
  },
  iconUrl: "/kit-icon.svg",
  rootDir: "./",
  ogImageUrl: "/images/og-image.jpg",
  head: () => (
    <>
      <script
        src="https://static.alchemyapi.io/scripts/anayltics/alchemy-analytics.js"
        defer
      />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="google-site-verification"
        content="W4pmFb0Oe26_OndBLdy5uqNrsl_gfmKfTlHwlHPd4Co"
      />
      {/* Open Graph Tags */}
      <meta property="og:title" content="Account Kit"></meta>
      <meta
        property="og:description"
        content="Account Kit is a framework to embed smart accounts in your web3 app, unlocking powerful features like email/social login, gas sponsorship, batched transactions, and more."
      ></meta>
      <meta property="og:image:type" content="image/jpeg"></meta>
      <meta property="og:image:width" content="2400"></meta>
      <meta property="og:image:height" content="1260"></meta>
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content="Account Kit"></meta>
      <meta
        name="twitter:description"
        content="Account Kit is a framework to embed smart accounts in your web3 app, unlocking powerful features like email/social login, gas sponsorship, batched transactions, and more."
      ></meta>
    </>
  ),
  topNav: [
    { text: "React", link: "/react/overview" },
    { text: "Core", link: "/core/overview" },
    {
      text: "More",
      items: [
        {
          text: "Infra",
          link: "/infra/overview",
        },
        {
          text: "Signer",
          link: "/signer/overview",
        },
        {
          text: "Smart Contracts",
          link: "/smart-contracts/overview",
        },
      ],
    },
    {
      text: "SDK Reference",
      items: [
        { text: "@account-kit/react", link: "/reference/account-kit/react" },
        { text: "@account-kit/core", link: "/reference/account-kit/core" },
        { text: "@account-kit/infra", link: "/reference/account-kit/infra" },
        { text: "@account-kit/signer", link: "/reference/account-kit/signer" },
        {
          text: "@account-kit/smart-contracts",
          link: "/reference/account-kit/smart-contracts",
        },
        { text: "@aa-sdk/core", link: "/reference/aa-sdk/core" },
        { text: "@aa-sdk/ethers", link: "/reference/aa-sdk/ethers" },
      ],
    },
    {
      text: pkg.version,
      items: [
        {
          text: "Migrating to 4.x.x",
          link: "/migration-guide",
        },
        {
          text: "Changelog",
          link: "https://github.com/alchemyplatform/aa-sdk/blob/main/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/alchemyplatform/aa-sdk/blob/main/CONTRIBUTING.md",
        },
      ],
    },
  ],
  sidebar: {
    "/": introSidebar,
    "/react": reactSidebar,
    "/core": coreSidebar,
    "/infra": infraSidebar,
    "/signer": signerSidebar,
    "/smart-contracts": smartContractsSidebar,
    "/reference/account-kit/react": [],
    "/reference/account-kit/core": [],
    "/reference/account-kit/infra": [],
    "/reference/account-kit/signer": [],
    "/reference/account-kit/smart-contracts": [],
    "/reference/aa-sdk/core": [],
    "/reference/aa-sdk/ethers": [],
  },
  socials: [
    { icon: "github", link: "https://github.com/alchemyplatform/aa-sdk" },
  ],
  theme: {
    accentColor: "#ce26a2",
  },
  // This is not supported in vocs
  // sitemap: {
  //   hostname: "https://accountkit.alchemy.com",
  // },
});
