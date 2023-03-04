import './App.css';
import React, { useEffect, useState } from "react";
import contractAddress from "./contracts/contract-address.json"; // address generated from the deploy script
import LockArtifact from "./contracts/Lock.json"; // Change to contract's name
import { ethers } from "ethers";

function App() {

  const [contract, SetContract] = useState(undefined);
  const [selectedAddress, setSelectedAddress] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

}

export default App;
