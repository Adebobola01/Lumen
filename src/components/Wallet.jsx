import { useAppKit } from "@reown/appkit/react";
import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);

async function requestSwitch() {
  // chainId for 0G-Galileo = 16601
  const zeroGGalileoChainId = "16601";
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: zeroGChainId }],
    });
  } catch (error) {
    // If the chain isn’t added, ask the wallet to add it
    if (error.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: zeroGGalileoChainId,
            chainName: "0G-Galileo-Testnet",
            // rpcUrls: ["https://goerli.infura.io/v3/YOUR_KEY"],
            rpcUrls: ["https://evmrpc-testnet.0g.ai"],
            nativeCurrency: { name: "OG", symbol: "OG", decimals: 18 },
          },
        ],
      });
    } else {
      console.error("Switch failed", error);
    }
  }
}

const ConnectWallet = () => {
  const { open } = useAppKit();

  return (
    <div>
      <button
        className="bg-[#33A0FF] py-4 px-8 rounded-3xl text-white font-semibold cursor-pointer hover:bg-[#1E90FF] "
        onClick={() => open()}
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
