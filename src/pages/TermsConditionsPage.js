import './TermsConditionsPage.css';
function TermsAndConditionsPage() {
  return (
    <div className="terms-and-conditions-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to our store! By using this site, you agree to the following terms and conditions:</p>
      <div className="terms-list">
        <ul>
          <li><strong>Age Restriction:</strong> You must be at least 18 years old to make a purchase.</li>
          <li><strong>Sales Policy:</strong> All sales are final. Returns are accepted only for defective products.</li>
          <li><strong>Changes to Terms:</strong> We reserve the right to update these terms at any time without prior notice.</li>
          <li><strong>Shipping Delays:</strong> We are not responsible for any delays caused by shipping carriers or customs processing.</li>
          <li><strong>Intellectual Property:</strong> All intellectual property rights for the content on this site belong to the store, and any unauthorized use is prohibited.</li>
          <li><strong>Data Privacy:</strong> By making a purchase, you consent to us storing your personal information for order processing purposes only. We do not share this information with third parties.</li>
          <li><strong>Liability:</strong> We are not liable for any damages resulting from the use or misuse of products purchased through this site.</li>
          <li><strong>Order Cancellation:</strong> We reserve the right to cancel any order at our discretion, especially if fraudulent activity is detected.</li>
          <li><strong>Compliance with Laws:</strong> You agree to comply with all local laws and regulations regarding online purchases, including applicable tax laws in your jurisdiction.</li>
          <li><strong>Third-Party Links:</strong> Our website may contain links to third-party sites. We are not responsible for the content or practices of these third-party websites.</li>
        </ul>
      </div>
    </div>
  );
}

export default TermsAndConditionsPage;
