function AboutPage() {
  return (
    <div className="about-page" style={{ padding: "40px", textAlign: "center", backgroundColor: "#f8f9fa" }}>
      <h1 style={{ fontSize: "3rem", color: "#c2185b", marginBottom: "20px" }}>About Us</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "15px", lineHeight: "1.6" }}>
        ✨ Welcome to <strong>Our Crystal Store</strong>! ✨
      </p>
      <p style={{ fontSize: "1.1rem", color: "#777", marginBottom: "10px", lineHeight: "1.6" }}>
        We proudly offer a wide variety of <strong>luxury cosmetics</strong> from world-renowned brands like <strong>Chanel</strong>, <strong>Gucci</strong>, and <strong>NARS</strong>.
      </p>
      <p style={{ fontSize: "1.1rem", color: "#777", lineHeight: "1.6" }}>
        Our mission is simple: <em>bring you the finest beauty products</em> that enhance your natural glow and perfect your skincare rituals.
      </p>
      <img 
        src="https://thumbs.dreamstime.com/b/makeup-cosmetics-accessories-realistic-composition-poster-beauty-bag-lipstick-lip-gloss-eye-shadows-vector-illustration-79062836.jpg" 
        alt="Crystal Store"
        style={{ width: "80%", marginTop: "30px", borderRadius: "20px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
      />
    </div>
  );
}

export default AboutPage;
