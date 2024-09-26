
import './App.css'
// import { TokenLaunchpad } from './components/TokenLaunchPad';
// import {ReqAirdrop} from './components/ReqAirdrop'
import {SendToken} from './components/SendToken'
import { SignMessage } from './components/SignMessage';
// import {ShowBallance} from './components/ShowBallance'

// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
function App() {
  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
              }}>
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>

              
              {/* <TokenLaunchpad></TokenLaunchpad> */}
              {/* <ReqAirdrop></ReqAirdrop> */}
              {/* <ShowBallance></ShowBallance> */}
              <SendToken></SendToken>
              <SignMessage></SignMessage>

              
            </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
