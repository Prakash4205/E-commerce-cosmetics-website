import './PrivacyPolicyPage.css';
function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This Privacy Policy describes how we collect, use, and protect your information when you visit our store.
      </p>
      <div className="policy-section">
        <h2>Information We Collect</h2>
        <p>
          We collect personal information you provide when placing an order, creating an account, or signing up for newsletters. This includes your name, email address, shipping details, and payment information.
        </p>
      </div>

      <div className="policy-section">
        <h2>How We Use Your Information</h2>
        <p>
          We use your data to process transactions, deliver products, provide support, send promotional messages, and improve our services through internal analytics.
        </p>
      </div>

      <div className="policy-section">
        <h2>Cookies & Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, analyze site traffic, and serve personalized content. You may adjust cookie settings through your browser.
        </p>
      </div>

      <div className="policy-section">
        <h2>Information Sharing</h2>
        <p>
          We do not sell your personal data. Your information may be shared with trusted third-party services strictly for order fulfillment, payment processing, or improving site functionality.
        </p>
      </div>

      <div className="policy-section">
        <h2>Data Security</h2>
        <p>
          We use encryption and other safeguards to protect your data. However, no online transmission is ever completely secure.
        </p>
      </div>

      <div className="policy-section">
        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information at any time by contacting us.
        </p>
      </div>

      <div className="policy-section">
        <h2>External Links</h2>
        <p>
          Our site may link to third-party websites. We are not responsible for their privacy practices and recommend reviewing their policies separately.
        </p>
      </div>

      <div className="policy-section">
        <h2>Policy Updates</h2>
        <p>
          We may revise this policy from time to time. Changes will be posted on this page with the latest revision date.
        </p>
      </div>

      <div className="policy-section">
        <h2>Contact Us</h2>
        <p>
          For any privacy-related concerns, please reach out to us at <a href="mailto:privacy@example.com">privacy@example.com</a>.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
