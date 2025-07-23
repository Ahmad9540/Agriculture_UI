import React from "react";
const ServicesSection = () => {
  return (
    <div className="services-section position-relative text-center py-5">
      <style>
        {`
        .services-section {
          background-color: #f3f8f7;
          position: relative;
          overflow: hidden;
        }

        .hut-background {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 300px;
          opacity: 0.5;
          z-index: 0;
        }

        .service-card {
          border-radius: 20px;
          background-color: #fff;
          padding: 30px;
          text-align: left;
          position: relative;
          height: 100%;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }

        .service-card h5 {
          font-weight: bold;
          margin-top: 20px;
        }

        .service-card p {
          font-size: 14px;
          color: #444;
        }

        .service-button {
          background-color: #fdd85d;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          margin-top: 15px;
        }

        .section-title {
          font-weight: bold;
          font-size: 32px;
          margin-bottom: 40px;
        }
        `}
      </style>

 
      <img src='/assets/9.png' alt="Hut" className="hut-background" />

      
      <h4 className="text-dark fw-bold">What We Do</h4>
      <h2 className="section-title">Currently we are<br />selling organic food</h2>

    
      <div className="container">
        <div className="row g-4">
        
          <div className="col-md-4">
            <div className="service-card">
              <img src="/assets/banner6.png" width="200px" alt="tractor" />
              <h5>AGRICULTURE</h5>
              <p className="text-success">PRODUCTS</p>
              <p>
                Seeing rather her you not esteem men settle genius excuse. Deal say over means age from.
                Comparison new melancholy son devonshire to the dispatched.
              </p>
              <button className="service-button">
                
              </button>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="service-card">
              <img src="/assets/banner7.png" width="200px" alt="vegetables" />
              <h5>FRESH</h5>
              <p className="text-success">VEGETABLES</p>
              <p>
                Perming rather her you not esteem men settle genius excuse. Deal say over means age from.
                Comparison new melancholy son devonshire to the dispatched.
              </p>
              <button className="service-button">
                
              </button>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="service-card">
              <img src="/assets/banner8.png" width="200px" alt="dairy" />
              <h5>DAIRY</h5>
              <p className="text-success">PRODUCTS</p>
              <p>
                Seeing rather her you not esteem men settle genius excuse. Deal say over means age from.
                Comparison new melancholy son devonshire to the dispatched.
              </p>
              <button className="service-button">
           
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;