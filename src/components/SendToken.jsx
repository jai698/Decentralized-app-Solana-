import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, SystemProgram, PublicKey, Transaction } from "@solana/web3.js";


export const SendToken = () => {
  const wallet = useWallet();
  const {connection} = useConnection();
  
  async function sendTokens() {
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    const key = wallet.publicKey;

    const transaction = new Transaction();

    transaction.add(SystemProgram.transfer({
        fromPubkey:key,
        toPubkey:new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
    }));

    await wallet.sendTransaction(transaction,connection);
    alert("Sent " + amount + " SOL to " + to);
  }

  return (
    <div>
        <input id="to" type="text" placeholder="To" />
        <input id="amount" type="text" placeholder="Amount" />
        <button onClick={sendTokens}>Send</button>
    </div>
  )
}

