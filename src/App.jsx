import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ConnectWallet from "./components/Wallet.jsx";
import lumenLogo from "./assets/lumen.svg";
import Script from "./components/script.jsx";
// import backgroundImg from "../";

function App() {
  return (
    <div>
      <header></header>
      <main className="flex bg-[url(./assets/lumen-background.png)] w-[100dvw] h-[100dvh]  items-center justify-center ">
        <div className="flex flex-col justify-center items-center">
          <img src={lumenLogo} alt="lumen logo" className="w-65" />
          <ConnectWallet />
          <Script />
        </div>
      </main>
    </div>
  );
}

export default App;
