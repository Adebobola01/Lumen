import { useAppKit } from "@reown/appkit/react";
import { ethers } from "ethers";
// import { useWalletConnect } from "./WalletConnect.jsx";
let provider;
let signer;

async function requestSwitch() {
  // chainId for 0G-Galileo = 16601
  const zeroGGalileoChainId = 16601; // Hexadecimal representation of 16601
  console.log(provider);
  try {
    const res = await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${zeroGGalileoChainId.toString(16)}` }],
    });
    console.log(res);
  } catch (error) {
    // If the chain isn’t added, ask the wallet to add it
    console.log(error);
    if (error.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${zeroGGalileoChainId.toString(16)}`, // Convert to hexadecimal
            chainName: "0G-Galileo-Testnet",
            // // rpcUrls: ["https://goerli.infura.io/v3/YOUR_KEY"],
            // rpcUrls: ["evmrpc-testnet.0g.ai"],
            // nativeCurrency: { name: "OG", symbol: "OG", decimals: 18 },
          },
        ],
      });
    } else {
      console.error("Switch failed", error);
    }
  }
}

const ConnectWallet = ({ setConnected, setAddress }) => {
  const connect = async () => {
    if (window.ethereum) {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const address = await signer.getAddress();
      console.log("Connected address:", address);
      try {
        await requestSwitch();
      } catch (error) {
        console.log("Error switching network:", error);
      }
      setConnected(true);
      setAddress(address);
      // Now you can use this provider to interact with the blockchain
    } else {
      console.log("MetaMask not detected");
    }
  };

  return (
    <div>
      <button
        className="bg-[#33A0FF] py-3 px-10 rounded-4xl text-white font-semibold cursor-pointer hover:bg-[#1E90FF] "
        onClick={connect}
      >
        Connect Wallet
      </button>
      {/* <button onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button> */}
    </div>
  );
};

export default ConnectWallet;
