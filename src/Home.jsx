import React from 'react';

const TheDevilsGift = () => {
  return (
    <div className="dg-main-wrapper">
      {/* --- IL TUO CSS ORIGINALE --- */}
      <style>{`
        @import url('https://googleapis.com');
        @import url('https://cloudflare.com');

        :root {
            --giallo-sfondo: #fdbb2d;
            --marrone-scuro: #5d4037;
            --colore-barra: rgba(0,0,0,0.75);
            --giallo-icone: #fdbb2d;
            --blu-opensea: #2081e2;
            --nero-x: #000000;
        }

        * { margin:0; padding:0; box-sizing:border-box; text-transform: uppercase; font-style: normal !important; }
        
        .dg-main-wrapper {
            background-color: var(--giallo-sfondo);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow-x: hidden;
            font-family: 'Montserrat', sans-serif;
        }

        /* TOP BAR SCORREVOLE */
        #topBar {
            width:100%; background:rgba(0,0,0,0.85); color:#fff; display:flex;
            justify-content:space-between; align-items:center; padding:5px 20px;
            position:fixed; top:0; z-index:1100; font-family:'Luckiest Guy',cursive;
            font-size:1.2rem; gap:10px; overflow:hidden; white-space:nowrap;
        }
        #topBar .lore { flex:1; text-align:center; overflow:hidden; position:relative; }
        #topBar .lore span {
            display:inline-block; padding-left:100%; animation:scrollLore 20s linear infinite;
        }
        @keyframes scrollLore {
            0% {transform:translateX(0);}
            100% {transform:translateX(-100%);}
        }

        /* NAVBAR TRASPARENTE CON SFOCATURA */
        nav {
            width:95%; max-width:1400px; margin: 0 auto;
            padding:10px 40px; background:var(--colore-barra); 
            display:flex; justify-content:space-between; align-items:center; 
            position:fixed; top:35px; left:50%; transform:translateX(-50%);
            z-index:1000; height:75px; backdrop-filter:blur(10px); 
            border-bottom:3px solid rgba(255,255,255,0.3); border-radius: 20px;
            box-shadow:0 0 15px rgba(0,0,0,0.4);
        }

        .nav-logo { height:55px; width:auto; filter:drop-shadow(0px 0 8px #fdbb2d); }
        
        .nav-links { display:flex; gap:45px; flex-grow:1; justify-content:center; align-items:center; }
        .nav-links a {
            color:#fff; text-decoration:none; font-family:'Luckiest Guy',cursive; 
            font-size:1.8rem; display:flex; align-items:center; gap:12px; transition:0.2s;
            text-shadow: 3px 3px 0px #000;
        }
        .nav-links a i { color:var(--giallo-icone); font-size: 1.6rem; }
        .nav-links a:hover { transform:scale(1.15); color:var(--giallo-icone); }

        /* HERO SECTION */
        .hero {
            min-height:100vh; display:flex; flex-direction:column; 
            align-items:center; justify-content:center; text-align:center; 
            padding:120px 20px 40px 20px; position:relative; z-index:10;
        }
        .welcome-text {
            font-family:'Luckiest Guy',cursive; font-size: clamp(5rem, 15vw, 10rem); 
            color:#fff; text-shadow:10px 10px 0 #000; animation:glow 2.5s infinite alternate;
        }
        @keyframes glow {
            from {filter:drop-shadow(0 0 5px #fff);} 
            to {filter:drop-shadow(0 0 15px #ffe47a);}
        }
        .brand-text {
            font-family:'Montserrat',sans-serif; font-weight:900; 
            font-size: clamp(1.5rem, 5vw, 3rem); color:var(--marrone-scuro); 
            margin-top:10px; letter-spacing: 3px;
        }

        /* DIAVOLI DECORATIVI */
        .devil { position:fixed; width:200px; height:auto; z-index:1; pointer-events:none; filter:drop-shadow(0 0 12px #ff0000); opacity: 0.8; }
        .pos-1 { top:150px; left:2%; transform:rotate(-10deg); }
        .pos-2 { top:150px; right:2%; transform:rotate(10deg); }
      `}</style>

      {/* --- STRUTTURA JSX --- */}

      {/* Top Bar Scorrevole */}
      <div id="topBar">
        <div className="lore">
          <span>IL TUO TESTO BOMBATO SCORRE QUI 🔥 IL TUO TESTO BOMBATO SCORRE QUI 🔥</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8247e5' }}>
          <span>POLYGON</span>
          <span style={{ fontSize: '1.5rem' }}>⬢</span>
        </div>
      </div>

      {/* Navbar con icone gialle */}
      <nav>
        <img src="URL_TUO_LOGO" className="nav-logo" alt="LOGO" />
        <div className="nav-links">
          <a href="#home"><i className="fa-solid fa-house"></i> HOME</a>
          <a href="#mint"><i className="fa-solid fa-credit-card"></i> MINT</a>
          <a href="#story"><i className="fa-solid fa-scroll"></i> STORY</a>
        </div>
        <div style={{ width: '50px' }}></div> {/* Spacer per bilanciare il logo */}
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1 className="welcome-text">WELCOME</h1>
        <p className="brand-text">THE DEVIL'S GIFT</p>
      </section>

      {/* Immagini decorative (Diavoli) */}
      <img src="URL_DIAVOLO" className="devil pos-1" alt="devil decor" />
      <img src="URL_DIAVOLO" className="devil pos-2" alt="devil decor" />

    </div>
  );
};

export default TheDevilsGift;

