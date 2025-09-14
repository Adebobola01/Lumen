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
    <div className="w-[100vw] h-[100vh] ">
      {connected && (
        <header className="flex justify-between p-4 bg-gray-700 w-full">
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
      <main className="flex bg-[url(./assets/lumen-background.png)] h-[calc(100vh-64px)] items-center justify-center ">
        {connected ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-white">Ignite a New Lumen</h2>
            <input
              type="text"
              className="p-3 w-full border-1 border-[#33A0FF] rounded-[4px] bg-gray-800 h-20 outline-0 text-white"
            />
            <button className="bg-[#33A0FF] py-3 px-10 rounded-4xl text-white font-semibold cursor-pointer hover:bg-[#1E90FF] ">
              Ignite
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={lumenLogo} alt="lumen logo" className="w-80" />
            <p className="text-2xl font-bold text-white">
              Illuminating On-Chain Intelligence
            </p>
            <ConnectWallet
              setConnected={setConnected}
              setAddress={setAddress}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
