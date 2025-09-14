import { useState } from "react";
import "./App.css";
import ConnectWallet from "./components/Wallet.jsx";
import lumenLogo from "./assets/lumen.svg";
import Script from "./components/script.jsx";
// import backgroundImg from "../";
function App() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  return (
    <div>
      {connected && (
        <header className="flex justify-between p-4 bg-gray-700 ">
          <img src={lumenLogo} alt="lumen-logo" className="h-8" />
          <div className="flex gap-8 ">
            <p className="text-[#33A0FF] border-b-2 border-b-[#33A0FF] font-semibold cursor-pointer ">
              Ignite
            </p>
            <p className="text-white font-semibold cursor-pointer">Gallery</p>
          </div>
          <div className="rounded-md border-1 border-[#33A0FF] cursor-pointer hover:bg-gray-600 flex items-center justify-between gap-3 py-1 px-3">
            <span className="bg-[#05df72] !h-3 !w-3 rounded-full"></span>
            <p className="text-white font-mono text-sm bg-gray-700">
              Connected:{" "}
              {`${address.substring(0, 6)}...${address.substring(
                address.length - 4
              )}`}
            </p>
          </div>
        </header>
      )}
      <main className="flex bg-[url(./assets/lumen-background.png)] w-[100dvw] h-[100dvh]  items-center justify-center ">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={lumenLogo} alt="lumen logo" className="w-80" />
          <p className="text-2xl font-bold text-white">
            Illuminating On-Chain Intelligence
          </p>
          <ConnectWallet setConnected={setConnected} setAddress={setAddress} />
        </div>
      </main>
    </div>
  );
}

export default App;
