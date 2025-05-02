import React, { useState } from 'react';
import './PrivacyPolicyPage.css';

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect personal information you provide when placing an order, creating an account, or signing up for newsletters. This includes your name, email address, shipping details, and payment information.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your data to process transactions, deliver products, provide support, send promotional messages, and improve our services through internal analytics.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "We use cookies and similar technologies to enhance your experience, analyze site traffic, and serve personalized content. You may adjust cookie settings through your browser.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell your personal data. Your information may be shared with trusted third-party services strictly for order fulfillment, payment processing, or improving site functionality.",
  },
  {
    title: "Data Security",
    content:
      "We use encryption and other safeguards to protect your data. However, no online transmission is ever completely secure.",
  },
  {
    title: "Your Rights",
    content:
      "You may request access to, correction of, or deletion of your personal information at any time by contacting us.",
  },
  {
    title: "External Links",
    content:
      "Our site may link to third-party websites. We are not responsible for their privacy practices and recommend reviewing their policies separately.",
  },
  {
    title: "Policy Updates",
    content:
      "We may revise this policy from time to time. Changes will be posted on this page with the latest revision date.",
  },
  {
    title: "Contact Us",
    content: (
      <>
        For any privacy-related concerns, please reach out to us at{" "}
        <a href="mailto:privacy@example.com">privacy@example.com</a>.
      </>
    ),
  },
];

function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This Privacy Policy describes how we collect, use, and protect your information when you visit our store.
      </p>

      {sections.map((section, index) => (
        <div key={index} className="policy-section">
          <h2 onClick={() => toggleSection(index)}>
            {section.title}
            <span className="toggle-icon">{openSection === index ? '−' : '+'}</span>
          </h2>
          {openSection === index && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default PrivacyPolicyPage;
