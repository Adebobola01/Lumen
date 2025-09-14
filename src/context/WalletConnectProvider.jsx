// import { createContext, useState, useEffect, useCallback } from "react";
// import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// export function WalletConnectProvider({ children }) {
//   const [address, setAddress] = useState(null);
//   const [isConnected, setIsConnected] = useState(false);

//   // Web3Modal's hooks can be used here to get address, connection status, etc.
//   // However, to show a complete custom provider pattern, we'll manage some state manually.
//   // For a simpler setup, you can directly use hooks from `@web3modal/ethers5/react` in your components.

//   const { open } = createWeb3Modal();

//   // Example of subscribing to modal events
//   useEffect(() => {
//     const modal = createWeb3Modal();

//     const unsubscribe = modal.subscribeProvider((newState) => {
//       setIsConnected(newState.isConnected);
//       setAddress(newState.address || null);
//     });

//     // Cleanup subscription on component unmount
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const connectWallet = useCallback(async () => {
//     try {
//       await open();
//     } catch (error) {
//       console.error("Failed to open WalletConnect modal", error);
//     }
//   }, [open]);

//   const disconnectWallet = useCallback(async () => {
//     try {
//       const modal = createWeb3Modal();
//       await modal.disconnect();
//       setAddress(null);
//       setIsConnected(false);
//     } catch (error) {
//       console.error("Failed to disconnect wallet", error);
//     }
//   }, []);

//   const value = {
//     connectWallet,
//     disconnectWallet,
//     address,
//     isConnected,
//   };

//   return (
//     <WalletConnectContext.Provider value={value}>
//       {children}
//     </WalletConnectContext.Provider>
//   );
// }
