import { contractAddress, abi } from "./constant.js";
import { ethers } from "./ethers-5.6.esm.min.js";

const connectButton = document.getElementById("Connect");
const transferEther = document.getElementById("transfer");
const initialSupply = document.getElementById("view");

connectButton.onclick = connect;
transferEther.onclick = transfer;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    connectButton.innerHTML = "Connected to metamask";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    connectButton.innerhtml = "please install metamask";
  }
}
async function transfer() {
  const address = document.getElementById("address").value;
  const amount = document.getElementById("value").value;

  console.log(`Transfering to ${address} with ${amount} ether`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.transfer(
        address,
        ethers.utils.parseEther(amount)
      );
      await transactionResponse.wait(1);
      console.log(`Transfer completed with hash:`, transactionResponse.hash);
    } catch (error) {
      console.log(error);
    }
  } else {
    transfer.innerHTML = "Please install metamask";
  }
}
