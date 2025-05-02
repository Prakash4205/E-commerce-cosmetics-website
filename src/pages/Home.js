import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [activeTab, setActiveTab] = useState('skincare');

  const images = {
    heroBg: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    skincare: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    makeup: "https://t4.ftcdn.net/jpg/05/69/26/87/360_F_569268722_lHqfuGdkuaT0SZEDovg89q5igCqoEWF8.jpg",
    fragrance: "https://secrettemptation.in/cdn/shop/files/3-1.jpg?v=1703487130",
    editorial: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  };

  return (
    <div className="cosmetic-home">
      <div className="luxury-hero" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="hero-content">
          <h1>Elevate Your Beauty Ritual</h1>
          <p>Where science meets luxury in every formulation</p>
          <button className="discover-btn">Discover Our Philosophy</button>
        </div>
      </div>
      <div className="pillars-section">
        <div className="pillar">
          <div className="icon">✧</div>
          <h3>Clean Ingredients</h3>
          <p>Ethically sourced, scientifically proven</p>
        </div>
        <div className="pillar">
          <div className="icon">♡</div>
          <h3>Luxury Experience</h3>
          <p>Transformative sensory journey</p>
        </div>
        <div className="pillar">
          <div className="icon">✦</div>
          <h3>Visible Results</h3>
          <p>Clinical efficacy meets beauty</p>
        </div>
      </div>
      <div className="beauty-tabs">
        <div className="tab-buttons">
          <button 
            className={activeTab === 'skincare' ? 'active' : ''} 
            onClick={() => setActiveTab('skincare')}
          >
            Skincare Alchemy
          </button>
          <button 
            className={activeTab === 'makeup' ? 'active' : ''} 
            onClick={() => setActiveTab('makeup')}
          >
            Color Artistry
          </button>
          <button 
            className={activeTab === 'fragrance' ? 'active' : ''} 
            onClick={() => setActiveTab('fragrance')}
          >
            Scent Symphony
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'skincare' && (
            <div className="skincare-showcase" style={{ backgroundImage: `url(${images.skincare})` }}>
              <div className="skincare-text">
                <h2>Skin Transcendence</h2>
                <p>Our biotech formulas work at cellular level to reveal your most luminous skin</p>
                <button className="shop-btn">Shop Skincare</button>
              </div>
            </div>
          )}
          {activeTab === 'makeup' && (
            <div className="makeup-showcase" style={{ backgroundImage: `url(${images.makeup})` }}>
              <div className="makeup-text">
                <h2>Color as Self-Expression</h2>
                <p>Pigments that enhance rather than mask your natural beauty</p>
                <button className="shop-btn">Shop Makeup</button>
              </div>
            </div>
          )}
          {activeTab === 'fragrance' && (
            <div className="fragrance-showcase" style={{ backgroundImage: `url(${images.fragrance})` }}>
              <div className="fragrance-text">
                <h2>Olfactory Poetry</h2>
                <p>Perfumes that evolve with your chemistry to create a signature scent</p>
                <button className="shop-btn">Shop Fragrance</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="editorial-section">
        <div className="editorial-image" style={{ backgroundImage: `url(${images.editorial})` }}></div>
        <div className="editorial-content">
          <h2>The Art of Slow Beauty</h2>
          <p>In a world of instant gratification, we champion the transformative power of ritual. Each product is designed to turn your daily routine into a moment of self-care and intention.</p>
          <button className="editorial-btn">Read Our Journal</button>
        </div>
      </div>
      <div className="gallery-section">
        <h2>#OurBeautyCommunity</h2>
        <div className="gallery-grid">
          {images.gallery.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item" 
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
