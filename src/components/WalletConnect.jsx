// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useCallback,
// } from "react";
// import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// // 1. Get projectId from https://cloud.walletconnect.com
// const projectId = "process.env.VITE_WALLETCONNECT_PROJECT_ID"; // Replace with your actual project ID

// // 2. Set up chains and providers
// // const mainnet = {
// //   chainId: 1,
// //   name: "Ethereum",
// //   currency: "ETH",
// //   explorerUrl: "https://etherscan.io",
// //   rpcUrl: "https://cloudflare-eth.com",
// // };

// const Galileo = {
//   chainId: 16601,
//   name: "0G-Galileo",
//   currency: "OG",
//   explorerUrl: "https://explorer.0g.ai",
//   rpcUrl: "https://evmrpc-testnet.0g.ai",
// };

// // 3. Create modal
// const metadata = {
//   name: "My React Web App",
//   description:
//     "An awesome Web3 application built with React and WalletConnect.",
//   url: "https://my-react-app.com", // origin must match your domain & subdomain
//   icons: ["https://avatars.my-react-app.com/"],
// };

// const ethersConfig = defaultConfig({
//   metadata,
//   /* Optional - Override default alchemy sdk configuration */
//   //   rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_ID', // Replace with your preferred RPC
// });

// createWeb3Modal({
//   ethersConfig,
//   chains: [Galileo],
//   projectId,
//   enableAnalytics: true, // Optional - defaults to your Cloud configuration
// });

// // Create a context to provide WalletConnect state and functions
// const WalletConnectContext = createContext(null);

// // Custom hook to use the WalletConnect context
// export const useWalletConnect = () => {
//   const context = useContext(WalletConnectContext);
//   if (!context) {
//     throw new Error(
//       "useWalletConnect must be used within a WalletConnectProvider"
//     );
//   }
//   return context;
// };

// // The provider component that wraps your app

// // A simple button component to demonstrate usage
// function ConnectButton() {
//   const { open } = createWeb3Modal();
//   return (
//     <button
//       onClick={() => open()}
//       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//     >
//       Open Connect Modal
//     </button>
//   );
// }

// // Main App component demonstrating the provider and button usage
// export default function App() {
//   return (
//     <WalletConnectProvider>
//       <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
//           <h1 className="text-3xl font-bold mb-2 text-cyan-400">
//             WalletConnect Integration
//           </h1>
//           <p className="text-gray-400 mb-6">
//             Connect your wallet to get started.
//           </p>

//           <div className="mb-8">
//             {/* This button is from Web3Modal and is the easiest way to get started */}
//             <w3m-button />
//           </div>

//           <div className="border-t border-gray-700 pt-6">
//             <h2 className="text-xl font-semibold mb-4">Or Use Custom Hooks</h2>
//             <CustomConnectUI />
//           </div>
//         </div>
//       </div>
//     </WalletConnectProvider>
//   );
// }

// // A component that uses our custom hook to show wallet info and connect/disconnect
// function CustomConnectUI() {
//   const { address, isConnected, connectWallet, disconnectWallet } =
//     useWalletConnect();

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       {isConnected ? (
//         <>
//           <p className="text-green-400 font-mono text-sm bg-gray-700 px-3 py-1 rounded-md">
//             Connected:{" "}
//             {`${address.substring(0, 6)}...${address.substring(
//               address.length - 4
//             )}`}
//           </p>
//           <button
//             onClick={disconnectWallet}
//             className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-transform transform hover:scale-105"
//           >
//             Disconnect
//           </button>
//         </>
//       ) : (
//         <>
//           <p className="text-yellow-400">Status: Not Connected</p>
//           <button
//             onClick={connectWallet}
//             className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-transform transform hover:scale-105"
//           >
//             Connect with Custom Button
//           </button>
//         </>
//       )}
//     </div>
//   );
// }
