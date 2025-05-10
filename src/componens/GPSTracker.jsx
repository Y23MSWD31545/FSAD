import React, { useState, useEffect } from 'react';
import './GPSTracker.css';

const GPSTrackerPage = () => {
  const [cars, setCars] = useState([
    { id: 1, name: 'BMW X5', lat: 17.385044, lng: 78.486671, status: 'Available', price: '$85/day' },
    { id: 2, name: 'Audi A4', lat: 17.393185, lng: 78.496785, status: 'On Rent', price: '$75/day' },
    { id: 3, name: 'Mercedes C-Class', lat: 17.375912, lng: 78.474561, status: 'Available', price: '$90/day' },
    { id: 4, name: 'Toyota Fortuner', lat: 17.380522, lng: 78.486112, status: 'In Maintenance', price: '$65/day' },
    { id: 5, name: 'Honda City', lat: 17.387150, lng: 78.491230, status: 'Available', price: '$50/day' }
  ]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the callback function globally
    window.initMap = () => {
      setMapLoaded(true);
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Clean up the script and global function
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      // Initialize the map
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 17.385044, lng: 78.486671 },
        zoom: 13,
      });
      
      setMap(mapInstance);
      
      // Create markers for filtered cars
      const filteredCars = filterStatus === 'All' 
        ? cars 
        : cars.filter(car => car.status === filterStatus);
      
      // Clear existing markers
      if (markers.length) {
        markers.forEach(marker => marker.setMap(null));
      }
      
      // Create new markers
      const newMarkers = filteredCars.map(car => {
        const marker = new window.google.maps.Marker({
          position: { lat: car.lat, lng: car.lng },
          map: mapInstance,
          title: car.name,
          icon: getMarkerIcon(car.status),
        });
        
        // Add click event to marker
        marker.addListener('click', () => {
          setSelectedCar(car);
        });
        
        return marker;
      });
      
      setMarkers(newMarkers);
    }
  }, [mapLoaded, filterStatus]);

  const getMarkerIcon = (status) => {
    switch(status) {
      case 'Available':
        return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
      case 'On Rent':
        return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
      case 'In Maintenance':
        return 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
      default:
        return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
    }
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const centerOnCar = (car) => {
    if (map) {
      map.setCenter({ lat: car.lat, lng: car.lng });
      map.setZoom(15);
      setSelectedCar(car);
    }
  };

  const handleBookNow = (car) => {
    // Navigate to booking page with car details
    window.location.href = `/buyacar?id=${car.id}`;
  };

  return (
    <div className="gps-tracker-page">
      <div className="gps-header-section">
        <h1>Car GPS Tracker</h1>
        <p>Track and book available cars in real-time</p>
        
        <div className="filter-controls">
          <label htmlFor="status-filter">Filter by status:</label>
          <select 
            id="status-filter" 
            value={filterStatus} 
            onChange={handleFilterChange}
            className="status-filter-select"
          >
            <option value="All">All Cars</option>
            <option value="Available">Available</option>
            <option value="On Rent">On Rent</option>
            <option value="In Maintenance">In Maintenance</option>
          </select>
        </div>
      </div>
      
      <div className="gps-main-content">
        <div className="car-list-panel">
          <h2>Available Cars</h2>
          {cars
            .filter(car => filterStatus === 'All' || car.status === filterStatus)
            .map(car => (
              <div 
                key={car.id} 
                className={`car-card ${selectedCar?.id === car.id ? 'selected' : ''}`}
                onClick={() => centerOnCar(car)}
              >
                <div className="car-header">
                  <h3>{car.name}</h3>
                  <span className={`status-badge ${car.status.toLowerCase().replace(' ', '-')}`}>
                    {car.status}
                  </span>
                </div>
                <div className="car-details">
                  <p className="car-price">{car.price}</p>
                  <p className="car-location">
                    <span className="location-icon">📍</span>
                    {car.lat.toFixed(3)}, {car.lng.toFixed(3)}
                  </p>
                </div>
                {car.status === 'Available' && (
                  <button 
                    className="book-now-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookNow(car);
                    }}
                  >
                    Book Now
                  </button>
                )}
              </div>
            ))}
        </div>
        
        <div className="map-container">
          {!mapLoaded && <div className="map-loading">Loading map...</div>}
          <div id="map" style={{ height: '100%', width: '100%' }}></div>
          
          {selectedCar && (
            <div className="car-detail-panel">
              <h3>{selectedCar.name}</h3>
              <div className="detail-row">
                <span className="detail-label">Status:</span>
                <span className={`status-value ${selectedCar.status.toLowerCase().replace(' ', '-')}`}>
                  {selectedCar.status}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Price:</span>
                <span className="price-value">{selectedCar.price}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Location:</span>
                <span className="location-value">
                  {selectedCar.lat.toFixed(6)}, {selectedCar.lng.toFixed(6)}
                </span>
              </div>
              {selectedCar.status === 'Available' && (
                <button 
                  className="book-now-btn full-width"
                  onClick={() => handleBookNow(selectedCar)}
                >
                  Book This Car
                </button>
              )}
              <button 
                className="close-detail-btn"
                onClick={() => setSelectedCar(null)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GPSTrackerPage;