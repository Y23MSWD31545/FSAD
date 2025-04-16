import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCar.css"; 

const AddCar = ({ onAddCar }) => {
  const navigate = useNavigate();
  const [newCar, setNewCar] = useState({
    company: "",
    model: "",
    customPickup: true,
    speed: "",
    seating: "",
    luggage: "",
    price: "",
    image: null
  });
  
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewCar({
      ...newCar,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCar({
        ...newCar,
        image: file
      });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      
      // Clear error if it exists
      if (errors.image) {
        setErrors({
          ...errors,
          image: null
        });
      }
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!newCar.company.trim()) newErrors.company = "Company name is required";
    if (!newCar.model.trim()) newErrors.model = "Model name is required";
    if (!newCar.speed.trim()) newErrors.speed = "Speed is required";
    if (!newCar.seating.trim()) newErrors.seating = "Seating capacity is required";
    if (!newCar.luggage.trim()) newErrors.luggage = "Luggage capacity is required";
    if (!newCar.price.trim()) newErrors.price = "Price is required";
    if (!newCar.image) newErrors.image = "Car image is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Create a complete car object
      const carToAdd = {
        ...newCar,
        id: Date.now().toString(), // Generate a unique ID
        imageUrl: previewUrl // In a real app, you'd upload the image to a server
      };
      
      // Simulate API call or state update
      setTimeout(() => {
        if (onAddCar) {
          onAddCar(carToAdd);
        }
        
        setSuccess(true);
        setIsSubmitting(false);
        
        // Reset form after short delay
        setTimeout(() => {
          setNewCar({
            company: "",
            model: "",
            customPickup: true,
            speed: "",
            seating: "",
            luggage: "",
            price: "",
            image: null
          });
          setPreviewUrl(null);
          setSuccess(false);
        }, 2000);
      }, 1000);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate("/buyacar");
  };

  return (
    <div className="add-car-container">
      <h2>Add New Car</h2>
      
      {success && (
        <div className="success-message">
          <ion-icon name="checkmark-circle-outline"></ion-icon>
          Car added successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="add-car-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company">Car Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={newCar.company}
              onChange={handleInputChange}
              placeholder="e.g. Toyota"
              className={errors.company ? "error" : ""}
            />
            {errors.company && <span className="error-message">{errors.company}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="model">Car Model</label>
            <input
              type="text"
              id="model"
              name="model"
              value={newCar.model}
              onChange={handleInputChange}
              placeholder="e.g. Hyryder"
              className={errors.model ? "error" : ""}
            />
            {errors.model && <span className="error-message">{errors.model}</span>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="speed">Speed</label>
            <input
              type="text"
              id="speed"
              name="speed"
              value={newCar.speed}
              onChange={handleInputChange}
              placeholder="e.g. 120 Km/h"
              className={errors.speed ? "error" : ""}
            />
            {errors.speed && <span className="error-message">{errors.speed}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="seating">Seating Capacity</label>
            <input
              type="text"
              id="seating"
              name="seating"
              value={newCar.seating}
              onChange={handleInputChange}
              placeholder="e.g. 8 Seater"
              className={errors.seating ? "error" : ""}
            />
            {errors.seating && <span className="error-message">{errors.seating}</span>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="luggage">Luggage Capacity</label>
            <input
              type="text"
              id="luggage"
              name="luggage"
              value={newCar.luggage}
              onChange={handleInputChange}
              placeholder="e.g. 10 luggage"
              className={errors.luggage ? "error" : ""}
            />
            {errors.luggage && <span className="error-message">{errors.luggage}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={newCar.price}
              onChange={handleInputChange}
              placeholder="e.g. #22k/day"
              className={errors.price ? "error" : ""}
            />
            {errors.price && <span className="error-message">{errors.price}</span>}
          </div>
        </div>
        
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="customPickup"
              checked={newCar.customPickup}
              onChange={handleInputChange}
            />
            Custom Pickup Available
          </label>
        </div>
        
        <div className="form-group image-upload">
          <label htmlFor="carImage">Car Image</label>
          <div className="upload-area">
            <input
              type="file"
              id="carImage"
              accept="image/*"
              onChange={handleImageChange}
              className={errors.image ? "error" : ""}
            />
            <div className="upload-button">
              <ion-icon name="cloud-upload-outline"></ion-icon>
              <span>Choose Image</span>
            </div>
          </div>
          {errors.image && <span className="error-message">{errors.image}</span>}
          
          {previewUrl && (
            <div className="image-preview">
              <img src={previewUrl} alt="Car preview" />
            </div>
          )}
        </div>
        
        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <ion-icon name="refresh-outline" className="spin"></ion-icon>
                Adding...
              </>
            ) : (
              "Add Car"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;