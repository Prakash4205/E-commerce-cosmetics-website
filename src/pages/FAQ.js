import React, { useState } from "react";
import "./FAQPage.css";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>❓ {question}</span>
        <span className={`arrow ${open ? "open" : ""}`}>▾</span>
      </div>
      <div className={`faq-answer ${open ? "show" : ""}`}>{answer}</div>
    </div>
  );
}


function FAQPage() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase, provided the product is unopened and in original condition.",
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and navigating to the 'Order History' section.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship internationally. Shipping rates will vary based on your location.",
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team by email at support@example.com or by phone at (123) 456-7890.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, American Express, and PayPal.",
    },
    {
      question: "Can I change my order after it’s been placed?",
      answer: "Once an order is placed, it cannot be modified. However, you can cancel the order within 24 hours and place a new one.",
    },
    {
      question: "How do I return an item?",
      answer: "Visit our returns page and fill out the return request form. Instructions on how to send it back will be provided.",
    },
    {
      question: "What if I receive a damaged or defective item?",
      answer: "Please contact us within 7 days of receiving your order. We'll help with a return or exchange.",
    },
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
