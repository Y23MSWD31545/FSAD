import React, { useState, useEffect } from "react";
import "../styles/Payment.css";

const PaymentForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [otpLoading, setOtpLoading] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false); // New state for QR code display

  // Function to generate a random 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // OTP resend timer countdown
  useEffect(() => {
    let interval;
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer(otpTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  // Function to send OTP
  const sendOTP = (isResend = false) => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }
    
    setError("");
    setOtpLoading(true);
    
    // Simulate API call to send OTP with a slight delay
    setTimeout(() => {
      const generatedOtp = generateOTP();
      setOtp(generatedOtp);
      setOtpSent(true);
      setOtpLoading(false);
      setOtpTimer(30); // Set 30-second timer for resend
      
      // In a real application, you would send the OTP via SMS API
      console.log(`OTP ${generatedOtp} sent to ${phoneNumber}`);
      
      if (isResend) {
        setSuccessMessage("OTP resent successfully! Please check your phone.");
      } else {
        setSuccessMessage(`OTP sent successfully to ${phoneNumber}`);
      }
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }, 1500);
  };

  // Function to handle OTP delivery issues
  const handleOtpNotReceived = () => {
    setError("If you didn't receive the OTP, please check your phone signal and try resending.");
  };

  // Function to verify OTP
  const verifyOTP = () => {
    if (!enteredOtp) {
      setError("Please enter the OTP");
      return;
    }
    
    setOtpLoading(true);
    
    // Simulate verification delay
    setTimeout(() => {
      setOtpLoading(false);
      
      if (enteredOtp === otp) {
        setOtpVerified(true);
        setError("");
        setSuccessMessage("Phone number verified successfully!");
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setError("Invalid OTP. Please try again.");
      }
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!cardName || !cardNumber || !expiryDate || !cvv || !amount || !phoneNumber) {
      setError("All fields are required.");
      return;
    }
    
    if (!otpVerified) {
      setError("Please verify your phone number with OTP before proceeding.");
      return;
    }
    
    // Show loading state
    setOtpLoading(true);
    
    // Simulate payment processing and show QR code instead of completing the payment
    setTimeout(() => {
      setOtpLoading(false);
      setShowQrCode(true); // Show QR code instead of success message
      
      console.log("Showing QR code for payment", {
        cardName,
        cardNumber,
        expiryDate,
        cvv,
        amount,
        phoneNumber
      });
    }, 2000);
  };

  // Function to handle cancellation of QR code payment
  const handleCancelQrPayment = () => {
    setShowQrCode(false);
  };

  // Function to simulate successful QR code payment
  const handleQrPaymentSuccess = () => {
    setShowQrCode(false);
    setSuccessMessage("Payment successful! Thank you for your payment.");
    
    // Clear form fields after successful submission
    setCardName("");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setAmount("");
    setPhoneNumber("");
    setEnteredOtp("");
    setOtpSent(false);
    setOtpVerified(false);
  };

  // QR Code Component with option to use external image
  const QrCodeDisplay = () => {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "350px",
          width: "100%",
          textAlign: "center"
        }}>
          <h3 style={{ marginTop: 0 }}>Scan QR Code to Pay</h3>
          <p>Amount: ${amount}</p>
          
          {/* QR Code Image */}
          <div style={{ 
            margin: "20px auto", 
            width: "200px", 
            height: "200px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            
            <img 
              src="./imgs/QR.jpg" 
              alt="Payment QR Code"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            
            {/* OPTION 2: Use this if you want to import the QR code from public folder */}
            {/* 
            <img 
              src={process.env.PUBLIC_URL + '/qrcode.png'} 
              alt="Payment QR Code"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            */}
            
            {/* OPTION 3: Use a placeholder image for testing */}
            {/* 
            <img 
              src="/api/placeholder/200/200" 
              alt="Payment QR Code (placeholder)"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            */}
          </div>
          
          <p style={{ fontSize: "14px", color: "#666" }}>
            Please keep this page open until payment is confirmed
          </p>
          
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button 
              onClick={handleCancelQrPayment}
              style={{ 
                flex: 1,
                padding: "10px", 
                backgroundColor: "#f44336", 
                color: "white", 
                border: "none", 
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Cancel
            </button>
            <button 
              onClick={handleQrPaymentSuccess}
              style={{ 
                flex: 1,
                padding: "10px", 
                backgroundColor: "#4CAF50", 
                color: "white", 
                border: "none", 
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              I've Paid
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="payment-container" style={{ 
      maxWidth: "500px", 
      margin: "0 auto", 
      padding: "20px", 
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Payment</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
            className="payment-input"
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="payment-input"
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            className="payment-input"
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            className="payment-input"
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="payment-input"
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        
        {/* Phone number verification section */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="payment-input"
            style={{ 
              flex: 1, 
              padding: "12px", 
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
            disabled={otpVerified}
          />
          <button 
            type="button" 
            onClick={() => sendOTP(false)} 
            className="otp-button"
            disabled={otpVerified || otpLoading || otpTimer > 0}
            style={{ 
              padding: "0 15px", 
              backgroundColor: (otpVerified || otpLoading || otpTimer > 0) ? "#ccc" : "#4CAF50", 
              color: "white", 
              border: "none", 
              borderRadius: "4px",
              cursor: (otpVerified || otpLoading || otpTimer > 0) ? "default" : "pointer"
            }}
          >
            {otpLoading ? "Sending..." : otpTimer > 0 ? `Wait (${otpTimer}s)` : "Send OTP"}
          </button>
        </div>
        
        {otpSent && !otpVerified && (
          <div style={{ marginBottom: "15px" }}>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                className="payment-input"
                style={{ 
                  flex: 1, 
                  padding: "12px", 
                  borderRadius: "4px",
                  border: "1px solid #ddd"
                }}
              />
              <button 
                type="button" 
                onClick={verifyOTP} 
                className="verify-button"
                disabled={otpLoading}
                style={{ 
                  padding: "0 15px", 
                  backgroundColor: otpLoading ? "#ccc" : "#2196F3", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px",
                  cursor: otpLoading ? "default" : "pointer"
                }}
              >
                {otpLoading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <button
                type="button"
                onClick={() => sendOTP(true)}
                disabled={otpTimer > 0 || otpLoading}
                style={{ 
                  background: "none",
                  border: "none",
                  color: otpTimer > 0 || otpLoading ? "#999" : "#4CAF50",
                  cursor: otpTimer > 0 || otpLoading ? "default" : "pointer",
                  padding: 0,
                  textDecoration: "underline"
                }}
              >
                {otpTimer > 0 ? `Resend OTP in ${otpTimer}s` : "Resend OTP"}
              </button>
              
              <button
                type="button"
                onClick={handleOtpNotReceived}
                style={{ 
                  background: "none",
                  border: "none",
                  color: "#F44336",
                  cursor: "pointer",
                  padding: 0,
                  textDecoration: "underline"
                }}
              >
                Didn't receive OTP?
              </button>
            </div>
          </div>
        )}
        
        {otpVerified && (
          <div style={{ 
            backgroundColor: "#e8f5e9", 
            padding: "10px 12px", 
            borderRadius: "4px", 
            marginBottom: "15px", 
            display: "flex",
            alignItems: "center"
          }}>
            <span style={{ color: "#2e7d32" }}>✓ Phone number verified</span>
          </div>
        )}
        
        <button 
          type="submit" 
          className="payment-button"
          disabled={otpLoading}
          style={{ 
            backgroundColor: otpLoading ? "#ccc" : "#4CAF50",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "4px",
            cursor: otpLoading ? "default" : "pointer",
            width: "100%",
            fontSize: "16px",
            marginTop: "10px"
          }}
        >
          {otpLoading ? "Processing..." : "Pay Now"}
        </button>
      </form>
      
      {error && (
        <p className="error-message" style={{ 
          color: "#f44336", 
          marginTop: "15px", 
          padding: "10px", 
          backgroundColor: "#ffebee", 
          borderRadius: "4px",
          textAlign: "center"
        }}>
          {error}
        </p>
      )}
      
      {successMessage && (
        <p className="success-message" style={{ 
          color: "#2e7d32", 
          marginTop: "15px", 
          padding: "10px", 
          backgroundColor: "#e8f5e9", 
          borderRadius: "4px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
          {successMessage}
        </p>
      )}
      
      {/* Render QR Code modal when showQrCode is true */}
      {showQrCode && <QrCodeDisplay />}
    </div>
  );
};

export default PaymentForm;