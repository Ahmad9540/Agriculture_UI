import React from 'react';
import './OrganicStatsSection.css';

const CircularProgress = ({ percent }) => {
  return (
    <div className="progress-circle" style={{ background: `conic-gradient(#7bb441 ${percent * 3.6}deg, #e0e0e0 ${percent * 3.6}deg)` }}>
      <div className="inner-circle">
        <span className="percent-text">{percent}%</span>
      </div>
    </div>
  );
};

const OrganicStatsSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
      
        <div className="col-lg-4 text-center mb-4 mb-lg-0">
          <div className="image-box">
            <img src="/assets/banner18.png" alt="Organic" className="img-fluid" />
          </div>
        </div>

        
        <div className="col-lg-4">
          <h5 className="fw-bold">Pure & Organic</h5>
          <p className="text-muted">
            Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
          </p>

          <h5 className="fw-bold mt-4">Always Fresh</h5>
          <p className="text-muted">
            Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
          </p>
        </div>

      
        <div className="col-lg-4 d-flex flex-column align-items-center gap-4">
          <div className="text-center">
            <CircularProgress percent={83} />
            <h6 className="mt-2 fw-bold">Organic Solutions</h6>
          </div>
          <div className="text-center">
            <CircularProgress percent={60} />
            <h6 className="mt-2 fw-bold">Quality Agriculture</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicStatsSection;
