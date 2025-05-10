import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      setLoading(false);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (loading) {
    return <div className="profile-loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.username?.charAt(0).toUpperCase() || "U"}
          </div>
          <h2>Welcome, {user?.username || "User"}!</h2>
        </div>

        <div className="profile-details">
          <div className="profile-section">
            <h3>Account Information</h3>
            <div className="profile-info-row">
              <span className="info-label">Username:</span>
              <span className="info-value">{user?.username}</span>
            </div>
            {user?.email && (
              <div className="profile-info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{user.email}</span>
              </div>
            )}
            {user?.role && (
              <div className="profile-info-row">
                <span className="info-label">Role:</span>
                <span className="info-value">{user.role}</span>
              </div>
            )}
            <div className="profile-info-row">
              <span className="info-label">Member Since:</span>
              <span className="info-value">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
              </span>
            </div>
          </div>

          <div className="profile-section">
            <h3>Actions</h3>
            <div className="profile-buttons">
              <button className="profile-btn edit-profile-btn">
                Edit Profile
              </button>
              <button className="profile-btn bookings-btn">
                My Bookings
              </button>
              <button className="profile-btn password-btn">
                Change Password
              </button>
              <button 
                className="profile-btn logout-btn"
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;