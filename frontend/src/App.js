import './App.css';
import React, { useEffect, useState } from "react";
import contractAddress from "./contracts/contract-address.json"; // address generated from the deploy script
import LockArtifact from "./contracts/Lock.json"; // Change to contract's name
import { ethers } from "ethers";

function App() {

  const [contract, setContract] = useState(undefined);
  const [selectedAddress, setSelectedAddress] = useState(undefined);

  const connectWallet = async () => {

      const [selectedAddress] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setSelectedAddress(selectedAddress);
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      const lock = new ethers.Contract(
        contractAddress.Lock,
        LockArtifact.abi,
        provider.getSigner(0)
      );
      setContract(lock);

  };

  useEffect(() => {
    connectWallet();
  }, []);

}

export default App;
