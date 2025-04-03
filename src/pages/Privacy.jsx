import React from 'react';
import './Home.css';

const Privacy = () => {
  return (
    <div className="page-container privacy-page">
      <div className="content-wrapper">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="last-updated">Last Updated: March 27, 2025</p>
        
        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            At BookHaven, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you visit our website or use our services.
          </p>
          <p>
            By accessing or using our platform, you agree to the terms outlined in this Privacy Policy. 
            If you do not agree with our policies and practices, please do not use our services.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect the following personal information when you register, place an order, or interact with our platform:</p>
          <ul>
            <li>Name, email address, phone number, and billing/shipping address</li>
            <li>Payment information (credit card details, UPI ID, etc.)</li>
            <li>Account credentials (username and password)</li>
            <li>User preferences and purchase history</li>
            <li>Communication records when you contact our customer service</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and settings</li>
            <li>Browsing patterns and interaction with our website</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Processing and fulfilling your orders</li>
            <li>Managing your account and providing customer support</li>
            <li>Sending transaction confirmations and order updates</li>
            <li>Personalizing your shopping experience</li>
            <li>Sending promotional offers and newsletters (with your consent)</li>
            <li>Improving our website, products, and services</li>
            <li>Detecting and preventing fraud and unauthorized access</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information with the following third parties:</p>
          <ul>
            <li>Service providers who assist us in operating our business (payment processors, shipping partners, etc.)</li>
            <li>Business partners with your consent</li>
            <li>Legal authorities when required by law or to protect our rights</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third parties for their marketing purposes 
            without your explicit consent.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, loss, or alteration. However, no method of transmission over the internet 
            or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Withdrawal of consent</li>
            <li>Opting out of marketing communications</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
            and personalize content. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal 
            information from children. If you believe we have inadvertently collected information from a child, 
            please contact us immediately.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
            updated policy on this page with a new "Last Updated" date.
          </p>
        </section>

        <section className="policy-section">
          <h2 style={{color: "#e67e22"}}>10. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
            please contact us at:
          </p>
          <div className="contact-info">
            <p>Email: privacy@bookhaven.com</p>
            <p>Phone: 1800-XXX-XXXX</p>
            <p>Address: BookHaven Headquarters, 123 Reading Lane, Booktown, BT 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 