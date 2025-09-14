import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { arbitrum, mainnet } from "@reown/appkit/networks";

// 1. Get projectId
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID; // Replace with your actual project ID

// 2. Set the networks
// const networks = [mainnet, OG];

// 3. Create a metadata object - optional
const metadata = {
  name: "Lumen",
  description: "Lumen Dapp",
  url: "https://lumen-0g.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create a AppKit instance
// createAppKit({
//   adapters: [new EthersAdapter()],
//   networks,
//   metadata,
//   projectId,
//   features: {
//     analytics: true, // Optional - defaults to your Cloud configuration
//   },
// });

// export default function App() {
//   return <YourApp />; // Configure the <appkit-button> or a similar button inside
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
