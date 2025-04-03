import React, { useState } from 'react';
import './Home.css';

const FAQ = () => {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle the expanded state of a FAQ item
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: "How do I place an order?",
      answer: "To place an order, browse our collection, add items to your cart, and proceed to checkout. You'll need to log in or create an account, provide shipping information, and complete the payment process."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI, and digital wallets such as PayPal and Google Pay. We also offer Cash on Delivery (COD) for eligible orders."
    },
    {
      id: 3,
      question: "How long will it take to receive my order?",
      answer: "Standard delivery typically takes 3-5 business days for most locations in India. Express delivery options are available for 1-2 business days delivery in metro cities. Delivery times may vary for international orders."
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of delivery for new, unopened books in original condition. For damaged or defective items, we offer replacements or refunds. Please contact our customer service team to initiate a return."
    },
    {
      id: 5,
      question: "How can I sell my pre-owned books on BookHaven?",
      answer: "To sell your pre-owned books, create an account, navigate to the 'Sell Your Book' section, and follow the guidelines to list your books. Our team will review your listing, and once approved, your books will be available for purchase by other users."
    },
    {
      id: 6,
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary based on the destination. You can see the shipping options and costs during checkout."
    },
    {
      id: 7,
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
    },
    {
      id: 8,
      question: "Are e-books and audiobooks available?",
      answer: "Yes, we offer e-books for many titles in our collection. Look for the e-book option on the product page. We're currently expanding our audiobook collection as well."
    },
    {
      id: 9,
      question: "How do I contact customer service?",
      answer: "You can reach our customer service team via email at support@bookhaven.com, through the contact form on our website, or by calling our toll-free number: 1800-XXX-XXXX from 9 AM to 6 PM, Monday through Saturday."
    },
    {
      id: 10,
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer gift wrapping services for a nominal fee. You can select this option during checkout and even include a personalized message for the recipient."
    }
  ];

  return (
    <div className="page-container faq-page">
      <div className="content-wrapper">
        <h1 className="page-title">Frequently Asked Questions</h1>
        
        <div className="faq-container">
          {faqItems.map(item => (
            <div key={item.id} className="faq-item">
              <div 
                className={`faq-question ${expandedItems[item.id] ? 'active' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                <h3>{item.question}</h3>
                <span className="faq-toggle">{expandedItems[item.id] ? '−' : '+'}</span>
              </div>
              
              {expandedItems[item.id] && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="faq-contact-section">
          <h2 style={{color: "#e67e22"}}>Still have questions?</h2>
          <p>If you couldn't find the answer to your question, please feel free to contact our customer support team.</p>
          <div className="contact-options">
            <a href="mailto:tahermt13@gmail.com" className="contact-button">Email Us</a>
            <a href="tel:+911354853289" className="contact-button">Call Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 