import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>
      <p className="intro-text">
        ✨ Welcome to <strong>Our Crystal Store</strong>! ✨
      </p>
      <p className="about-description">
        We proudly offer a wide variety of <strong>luxury cosmetics</strong> from world-renowned brands like <strong>Chanel</strong>, <strong>Gucci</strong>, and <strong>NARS</strong>.
      </p>
      <p className="about-mission">
        Our mission is simple: <em>bring you the finest beauty products</em> that enhance your natural glow and perfect your skincare rituals.
      </p>
      <img 
        src="https://thumbs.dreamstime.com/b/makeup-cosmetics-accessories-realistic-composition-poster-beauty-bag-lipstick-lip-gloss-eye-shadows-vector-illustration-79062836.jpg" 
        alt="Crystal Store"
        className="about-image"
      />
    </div>
  );
}

export default AboutPage;
