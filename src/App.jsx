// App.jsx
import React from "react";          // ❌ Manca questo
import "./App.css";
import Mint from "./Mint";

function App() {
  return (
    <>
    <audio src="/background.mp3" autoPlay loop />
    {/* Tutte le sezioni: Home, Mint, Attributes, Story...*/}
      {/* DIAVOLETTI DECORATIVI */}
      <img src="/1.png" className="devil pos-1" alt="" />
      <img src="/2.png" className="devil pos-2" alt="" />
      <img src="/3.png" className="devil pos-3" alt="" />
      <img src="/4.png" className="devil pos-4" alt="" />
      <img src="/5.png" className="devil pos-5" alt="" />
      <img src="/6.png" className="devil pos-6" alt="" />
      <img src="/7.png" className="devil pos-7" alt="" />
      <img src="/8.png" className="devil pos-8" alt="" />

      {/* TOP BAR SCORREVOLE */}
      <div id="topBar">
        <div className="lore">
          <span>🔥 1100 Devils, each with a cursed gift. Every 20 mints an Airdrop awaits! Dare to mint… 🔥</span>
        </div>
        <div className="polygonWrapper">
          <i className="fa-brands fa-ethereum"></i>
          <span>Polygon</span>
        </div>
      </div>

      {/* NAVIGAZIONE */}
      <nav>
        <img src="/logo.png" className="nav-logo" alt="" />
        <div className="nav-links">
          <a href="#home">🏠 Home</a>
          <a href="#mint">🎁 Mint</a>
          <a href="#attributes">🎨 Attributes</a>
          <a href="#story">📖 Story</a>
        </div>
        {/* Simbolo Polygon (usando svg corretto) */}
        <div className="polygon-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 417"
            width="36"
            height="36"
            fill="#8247e5"
          >
            <path d="M127.6 0L123.3 14.1V283.5L127.6 287.8L255.2 209.2L127.6 0Z" />
            <path d="M127.6 0L0 209.2L127.6 287.8V150.5V0Z" />
            <path d="M127.6 308.5L124.1 311.9V414.5L127.6 417L256 240.3L127.6 308.5Z" />
            <path d="M127.6 417V308.5L0 240.3L127.6 417Z" />
          </svg>
        </div>
      </nav>

      {/* SEZIONE HOME */}
      <section id="home">
        <h1 className="welcome-text">WELCOME</h1>
        <p className="brand-text">The Devil's Gift</p>
        <div className="story-container">
          <p className="story-text">
            Behind the bright colors and the irresistible smile, every creature holds a cursed gift.<br />
            His gaze enchants, the gift fascinates...<br />
            but be careful: accepting the Devil's gift can change everything!
          </p>
        </div>
        <div className="btn-social-wrapper">
    <a href="https://opensea.io/collection/the-devils-gift-455567840" className="btn-social opensea-btn">👀 Look on OpenSea</a>
    <a href="https://x.com/the__drinkers?s=21&t=xns0V8hd-CUp7BPu4ErJmQ" className="btn-social x-btn">𝕏  Look on X</a>
  </div>
      </section>

      {/* SEZIONE MINT (SOSPESA) */}
      <section id="mint">
  <Mint />
</section>

      {/* SEZIONE ATTRIBUTES */}
      <section id="attributes">
        <h2 className="attributes-title">Attributes</h2>
        <img src="/IMG_6171.PNG" className="central-image" alt="" />
        <p className="lore-extra">DISCOVER THE DEVILS AND THEIR GIFTS! 🎁</p>
        <div className="slider-container">
          <div className="slider-title">Featured NFTs</div>
          <div className="nft-slider">
            <div className="nft-track">
              <img src="/thedevilsgift1013.png" alt="" />
              <img src="/thedevilsgift52.png" alt="" />
              <img src="/thedevilsgift40.png" alt="" />
              <img src="/thedevilsgift25.png" alt="" />
              <img src="/thedevilsgift32.png" alt="" />
              <img src="/thedevilsgift26.png" alt="" />
              <img src="/thedevilsgift1013.png" alt="" />
              <img src="/thedevilsgift52.png" alt="" />
              <img src="/thedevilsgift40.png" alt="" />
              <img src="/thedevilsgift25.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE STORY */}
      <section id="story">
        <h2 className="attributes-title">OUR STORY</h2>
        <div className="story-container">
          <p className="story-text">
            In a world where everything has a price, The Devil's Gift represents the ultimate temptation.<br />
            Born from the shadows but dressed in neon colors, these 1100 unique devils are here to remind you<br />
            that beauty can be deceptive. Each devil is a piece of a larger puzzle, a gift that carries<br />
            both power and a curse. Will you dare to open yours?
          </p>
        </div>
        <p className="lore-extra">Smart contract ERC721, continuously growing collection.</p>
      </section>
      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-logo-text">THE DEVIL'S GIFT</h2>
            <p className="footer-sub">Dark NFT Collection on Polygon</p>
          </div>
          
          <div className="footer-center">
            <div className="contract-box">
              <span className="contract-tag">CONTRACT</span>
              <code className="contract-addr">0xd8dBdFdFb43b3Ca997F33F4A617B89dE36eE76E0</code>
              <button className="copy-icon" onClick={() => navigator.clipboard.writeText("0xd8dBdFdFb43b3Ca997F33F4A617B89dE36eE76E0")}>
                📋
              </button>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-nav-simple">
              <a href="#home">Collection</a>
              <a href="#mint">Mint</a>
              <a href="#story">About</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-line">
          <p>©️ 2026 TheDevilsGift. All rights reserved.</p>
          <p>Built on 🟣 Polygon</p>
        </div>
      </footer>
    </>
  );
}

export default App;