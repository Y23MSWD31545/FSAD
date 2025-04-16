import React, { useState } from "react";
import "../styles/Payment.css";

const PaymentForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardName || !cardNumber || !expiryDate || !cvv || !amount) {
      setError("All fields are required.");
      return;
    }
    setError("");
    console.log("Payment successful with", {
      cardName,
      cardNumber,
      expiryDate,
      cvv,
      amount,
    });
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div>
          <input
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
            className="payment-input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="payment-input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            className="payment-input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            className="payment-input"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="payment-input"
          />
        </div>
        <button type="submit" className="payment-button">Pay Now</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PaymentForm;
