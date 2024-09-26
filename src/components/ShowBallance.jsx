import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export const ShowBallance = () => {

  const wallet = useWallet();     
  const {connection} = useConnection();
  
  async function getBalance(){
    const publicKey = wallet.publicKey;
    const balance = await connection.getBalance(publicKey)
    document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
  }
  getBalance();
  return (
    <div>
        <p>SOL Balance:</p> <div id="balance"></div>
    </div>
  )
}
