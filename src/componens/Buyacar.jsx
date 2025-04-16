import React, { useState } from "react";
import "../componens/Buyacar.css";
import Carcards from "../Pages/Carcards";
import car1 from "../imgs/car1.avif";
import { useNavigate } from "react-router-dom";

const Buyacar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const carData = [
    {
      company: "Toyota",
      model: "Hyryder",
      image: car1,
      customPickup: true,
      speed: "120 Km/h",
      seating: "8 Seater",
      luggage: "10 luggage",
      price: "#22k/day"
    },
    {
      company: "Honda",
      model: "City",
      image: car1,
      customPickup: true,
      speed: "110 Km/h",
      seating: "5 Seater",
      luggage: "6 luggage",
      price: "#18k/day"
    },
    {
      company: "Hyundai",
      model: "Creta",
      image: car1,
      customPickup: true,
      speed: "115 Km/h",
      seating: "5 Seater",
      luggage: "8 luggage",
      price: "#20k/day"
    },
    {
      company: "Maruti Suzuki",
      model: "Swift",
      image: car1,
      customPickup: true,
      speed: "100 Km/h",
      seating: "5 Seater",
      luggage: "4 luggage",
      price: "#15k/day"
    }
  ];


  const handleBookNow = () => {
    navigate("/payment");
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filteredCars = carData.filter(
      car => car.company.toLowerCase().includes(query) || 
             car.model.toLowerCase().includes(query)
    );
    
    setSearchResults(filteredCars);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderCarCards = (cars) => {
    return cars.map((car, index) => (
      <div key={index}>
        <Carcards
          one={car.customPickup ? "Custom picking available" : "Standard pickup"}
          two={`${car.company} ${car.model}`}
          three={car.image}
          four1={<ion-icon name="speedometer-outline"></ion-icon>}
          four2={<ion-icon name="people-outline"></ion-icon>}
          four3={<ion-icon name="bag-remove-outline"></ion-icon>}
          five1={car.speed}
          five2={car.seating}
          five3={car.luggage}
          six1={car.price}
          six2={<button onClick={handleBookNow}>Book Now</button>}
        />
      </div>
    ));
  };

  return (
    <section className="buyacar">
      <div className="head">
        <h2>Which Vehicle Do You Want For Your Journey?</h2>
      </div>
      <div className="div1">
        <span>
          <span>
            <ion-icon name="diamond-outline"></ion-icon>
          </span>{" "}
          PRE-
        </span>{" "}
        <h3>
          Start Your Week In Style: Book Now & Save up to 10% on midweek
          bookings <a href="#" onClick={handleOpenModal}>Terms and conditions apply</a>
        </h3>{" "}
      </div>
      
      <div className="search-container">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search for car company or model..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div>
        {searchResults !== null ? (
          searchResults.length > 0 ? (
            <div className="carrow">
              {renderCarCards(searchResults)}
            </div>
          ) : (
            <div className="no-results">
              <h3>No cars available from "{searchQuery}"</h3>
              <p>Please try searching for a different car company or model.</p>
            </div>
          )
        ) : (
          <>
            <div className="carrow">
              {renderCarCards(carData.slice(0, 3))}
            </div>
            <div className="carrow">
              {renderCarCards(carData.slice(0, 3))}
            </div>
            <div className="carrow">
              {renderCarCards(carData.slice(0, 3))}
            </div>
            <div className="carrow">
              {renderCarCards(carData.slice(0, 3))}
            </div>
          </>
        )}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Terms and Conditions</h3>
            <ul>
              <li>1. Renters must be at least 21 years old with a valid driving license.</li>
              <li>2. A refundable security deposit is required before the rental period.</li>
              <li>3. Cars must be returned with the same fuel level as at pickup.</li>
              <li>4. Late returns will incur additional charges.</li>
              <li>5. Smoking inside the rental cars is strictly prohibited.</li>
              <li>6. Any damages to the vehicle must be reported immediately.</li>
              <li>7. Rental prices are subject to availability and seasonal changes.</li>
              <li>8. The company reserves the right to cancel bookings under unforeseen circumstances.</li>
            </ul>
          </div>
        </div>
      )}

      <div className="footer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div className="footerheadings">About Us</div>
            <div className="footerele">
              Lorem ipsum dolor sit amet consectetur <br /> adipis distinctio ac
              harum perspiciatis non eius. <br /> harum perspiciatis non eius.
              harum perspiciatis <br /> non eius. perspiciatis non eius. <br />
              harum perspiciatis non eius. harum
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "7.5rem",
                paddingTop: "2rem",
                color: "#fff",
                fontSize: "2rem",
              }}
            >
              <ion-icon name="logo-facebook"></ion-icon>{" "}
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </div>
          <div>
            <div className="footerheadings">Quick Links</div>
            <div className="footerele">Book A Ride</div>
            <div className="footerele">Become A driver</div>
            <div className="footerele">Our Services</div>
            <div className="footerele">About Us</div>
            <div className="footerele">Contact Us</div>
          </div>
          <div>
            <div className="footerheadings">Product</div>
            <div className="footerele">My Account </div>
            <div className="footerele">Blog</div>
            <div className="footerele">Invest Your Car</div>
            <div className="footerele">Become A Partner</div>
            <div className="footerele">FAQ</div>
          </div>
          <div>
            <img
              style={{
                width: "10rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "2rem",
                borderRadius: "13px",
              }}
              src="https://media.istockphoto.com/id/1147099395/vector/car-icon-vector.jpg?s=612x612&w=0&k=20&c=qWxJ9r5yL8xOdlU9s2LyX-pWZ0tP_khynf0VhQwG4eg="
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buyacar;