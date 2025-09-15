import { useEffect, useState } from "react";
import "./App.css";
import ConnectWallet from "./components/Wallet.jsx";
import lumenLogo from "./assets/lumen.svg";
import Script from "./components/script.jsx";
import Backdrop from "./components/backdrop.jsx";
// import backgroundImg from "../";
function App() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [addressBarHovered, setAddressBarHovered] = useState(false);
  const [addressBarClicked, setAddressBarClicked] = useState(false);

  const disconnectWallet = async () => {
    await window.ethereum.request({
      method: "wallet_revokePermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    setConnected(false);
    setAddress("");
  };

  const handleMouseEnter = () => {
    setAddressBarHovered(true);
  };

  const handleMouseLeave = () => {
    if (addressBarClicked) {
      return;
    }
    setAddressBarHovered(false);
  };

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setConnected(true);
          setAddress(accounts[0]);
        } else {
          setConnected(false);
          setAddress("");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("error: metamask is not installed!");
    }
  };
  useEffect(() => {
    checkConnection();
  }, []);
  return (
    <div className="w-[100vw] h-[100vh] relative">
      {addressBarHovered ? (
        <Backdrop
          className={"bg-transparent"}
          onClick={() => {
            setAddressBarHovered(false);
            setAddressBarClicked(!addressBarClicked);
          }}
        />
      ) : null}
      {connected && (
        <header className="flex justify-between p-4 bg-gray-700 w-full">
          <img src={lumenLogo} alt="lumen-logo" className="h-8" />
          <div className="flex gap-8 ">
            <p className="text-[#33A0FF] border-b-2 border-b-[#33A0FF] font-semibold cursor-pointer ">
              Ignite
            </p>
            <p className="text-white font-semibold cursor-pointer">Gallery</p>
          </div>
          <div
            className="rounded-md border-1 border-[#33A0FF] z-150 cursor-pointer hover:bg-gray-600 flex items-center justify-between gap-3 py-1 px-3 relative"
            onClick={() => setAddressBarClicked(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="bg-[#05df72] !h-3 !w-3 rounded-full"></span>
            <p className="text-white font-mono text-sm">
              Connected:{" "}
              {`${address.substring(0, 6)}...${address.substring(
                address.length - 4
              )}`}
            </p>
            <div
              className={`absolute w-full p-4 top-[31px] left-0 bg-white rounded-[8px] ${
                addressBarHovered ? "flex" : "hidden"
              } `}
              onMouseEnter={handleMouseEnter}
            >
              <button
                className="bg-[#ff0000ad] text-white p-2 w-full rounded-2xl cursor-pointer hover:bg-[red] "
                onClick={disconnectWallet}
              >
                Disconnect
              </button>
            </div>
          </div>
        </header>
      )}
      <main
        className={`flex bg-[url(./assets/lumen-background.png)] ${
          connected ? "h-[calc(100vh-64px)]" : "h-[100dvh]"
        } items-center justify-center `}
      >
        {connected ? (
          <div className="flex flex-col gap-8 items-center">
            <h2 className="text-4xl text-white font-bold">
              Ignite a New Lumen
            </h2>
            <input
              type="text"
              className="px-3 w-80 border-1 border-[#33A0FF] rounded-[8px] bg-[#1e2939a8] h-18 outline-0 text-white"
              placeholder={
                "A radiant crystal city, huming with cosmic energy, painted in style digital impressionism...."
              }
            />
            <button className="bg-[#33A0FF] py-2 px-20 rounded-4xl text-white font-semibold cursor-pointer hover:bg-[#1E90FF] ">
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
