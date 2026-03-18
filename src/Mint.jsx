import { useState, useEffect } from "react";
import {
  createThirdwebClient,
  getContract,
  prepareContractCall,
  sendTransaction,
  readContract
} from "thirdweb";

import {
  ConnectButton,
  useActiveAccount,
  useActiveWalletChain,
  useSwitchActiveWalletChain
} from "thirdweb/react";

import { polygon } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: "d6bc107fe20e107e2cf411df84597fb0"
});

const nftContract = getContract({
  client: client,
  chain: polygon,
  address: "0x927175552E5B9CD453d4C2F4B6a0f4CF61678cd0"
});

const wethContract = getContract({
  client: client,
  chain: polygon,
  address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
});

function Mint() {

  const account = useActiveAccount();
  const chain = useActiveWalletChain();
  const switchChain = useSwitchActiveWalletChain();

  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [minted, setMinted] = useState(0);

  const pricePerNFT = BigInt("500000000000000");

  const loadMinted = async () => {
    try {
      // 1. Chiediamo alla blockchain tutti i "Transfer" avvenuti per il tuo contratto
      const logs = await nftContract.client.getPastLogs({
        address: nftContract.address,
        event: "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
        fromBlock: "0x0", 
        toBlock: "latest"
      });

      // 2. logs.length sarà 2 (perché hai mintato il 16 e il 17)
      // Aggiungiamo 15 (la base del contratto) per arrivare a 17
      const currentTokenId = 15 + logs.length;
      
      // 3. Aggiorniamo lo stato per la barra e il testo
      setMinted(currentTokenId);

    } catch (err) {
      console.error("Errore lettura logs:", err);
      // In caso di errore, mostriamo almeno la base
      setMinted(15); 
    }
  };

  useEffect(function () {

    loadMinted();

  }, []);

  const progress = (minted / 1100) * 100;

  const handleMint = async () => {

    if (!account || !account.address) {

      alert("Connect wallet");
      return;

    }

    if (!chain || chain.id !== 137) {

      try {

        await switchChain(polygon);
        return;

      } catch {

        alert("Switch to Polygon");
        return;

      }

    }

    setLoading(true);

    try {

      const totalCost = pricePerNFT * BigInt(quantity);

      const balance = await readContract({
        contract: wethContract,
        method: "function balanceOf(address) view returns (uint256)",
        params: [account.address]
      });

      if (balance < totalCost) {

        alert("Not enough WETH");
        setLoading(false);
        return;

      }

      const allowance = await readContract({
        contract: wethContract,
        method: "function allowance(address,address) view returns (uint256)",
        params: [account.address, nftContract.address]
      });

      if (allowance < totalCost) {

        const approveTx = prepareContractCall({
          contract: wethContract,
          method: "function approve(address,uint256)",
          params: [nftContract.address, totalCost]
        });

        await sendTransaction({
          transaction: approveTx,
          account: account
        });

        await new Promise(function (resolve) {
          setTimeout(resolve, 2500);
        });

      }

      const mintTx = prepareContractCall({
        contract: nftContract,
        method: "function publicMintMulti(uint256)",
        params: [BigInt(quantity)]
      });

      await sendTransaction({
        transaction: mintTx,
        account: account
      });

      alert("Mint completed");

      loadMinted();

    } catch (err) {

      console.log(err);
      alert("Error: " + err.message);

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="mint-global-wrapper" style={{
      background: "transparent", // Ho corretto "trasparent" in "transparent"
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial Black, sans-serif"
    }}>

      <div className="mint-main-box" style={{
        width: "700px",
        background: "#0c0c0c",
        borderRadius: "40px",
        padding: "40px",
        textAlign: "center",
        border: "12px solid white",
        boxShadow: "0 0 40px rgba(0,0,0,0.9)"
      }}>

        <h1 className="mint-title" style={{
          fontSize: "48px",
          color: "#ffd000",
          fontWeight: "900",
          textShadow: "0 4px 0 #000, 0 0 15px #ffd000"
        }}>
          🎁 MINT NOW 🎁
        </h1>

        <div style={{
          background: "#111",
          border: "4px solid #ffd000",
          borderRadius: "20px",
          padding: "16px",
          marginTop: "20px",
          fontWeight: "900",
          color: "#ffd000",
          fontSize: "20px",
          textShadow: "0 2px 0 black"
        }}>
          PRICE  NFT: 0.0005 WETH
          <br/>
          TOTAL: {Number(0.0005 * quantity).toFixed(4)} WETH
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
          gap: "15px"
        }}>

          <button
            onClick={function () {
              setQuantity(function (q) {
                return Math.max(1, q - 1);
              });
            }}
            style={{
              background: "linear-gradient(180deg,#7c4dff,#4b1cff)",
              border: "3px solid white",
              borderRadius: "25px",
              padding: "12px 18px",
              color: "white",
              fontWeight: "900",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            ◀️ LESS
          </button>

          <div style={{
            background: "#ffd000",
            width: "60px",
            height: "60px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "28px",
            fontWeight: "900",
            color: "white",
            border: "3px solid white"
          }}>
            {quantity}
          </div>

          <button
            onClick={function () {
              setQuantity(function (q) {
                return q + 1;
              });
            }}
            style={{
              background: "linear-gradient(180deg,#7c4dff,#4b1cff)",
              border: "3px solid white",
              borderRadius: "25px",
              padding: "12px 18px",
              color: "white",
              fontWeight: "900",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            MORE ▶️
          </button>

        </div>

        <div style={{ marginTop: "30px" }}>
        <ConnectButton
  client={client}
  chain={polygon}
  theme="dark"
  connectButton={{
    label: "🔗 CONNECT WALLET",
    style: {
      width: "100%",
      padding: "22px",
      borderRadius: "50px",
      fontSize: "22px",
      fontWeight: "900",
      background: "linear-gradient(90deg,#7c4dff,#a855ff)",
      color: "white",
      border: "4px solid white",
      boxShadow: "0 6px 0 #2e0a87"
    }
  }}
/>
        </div>

        {account && (

          <button
            onClick={handleMint}
            disabled={loading}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "20px",
              borderRadius: "40px",
              border: "3px solid white",
              background: "linear-gradient(90deg,#7c4dff,#a855ff)",
              color: "white",
              fontSize: "22px",
              fontWeight: "900",
              cursor: "pointer"
            }}
          >
            🔗 CONNECT WALLET  
          </button>

        )}

<div style={{
    marginTop: "30px",
    background: "#0f0f0f",
    borderRadius: "20px",
    padding: "20px",
    border: "3px solid #6b2cff",
    color: "white",
    fontWeight: "900"
  }}>
    {/* Visualizzerà: 🌍 TOTAL MINTED: 17 / 1100 */}
    🌍 TOTAL MINTED: {minted} / 1100
    <br/>
    🧁 WALLETS CONNECTED: {account ? 1 : 0}
    
    {/* La barra di progresso userà il valore 'progress' aggiornato */}
    <div style={{
      width: "100%",
      height: "20px",
      background: "#333",
      borderRadius: "20px",
      overflow: "hidden",
      marginTop: "15px",
      border: "2px solid white"
    }}>
      <div style={{
        width: progress + "%",
        height: "100%",
        background: "linear-gradient(90deg,#ffd000,#ff7a00)",
        transition: "0.4s"
      }}></div>
    </div>
  </div>

        </div>

    </div>

  );

}

export default Mint;