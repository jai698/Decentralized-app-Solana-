import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js'; 


export const ReqAirdrop = () => {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendReq(){
        const publicKey = wallet.publicKey;
        const amount = document.getElementById('amount').value;
        await connection.requestAirdrop(publicKey,amount*LAMPORTS_PER_SOL);
    }    

  return (
    <div>
        <input type='text' id='amount'></input>
        <button onClick={sendReq}>Request Airdrop</button>
    </div>
  )
}   
