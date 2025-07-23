import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Banner = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/bnner.jpg" className="d-block w-100" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="/banner2.jpg" className="d-block w-100" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="/banner3.jpg" className="d-block w-100" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div class="circle-text-wrapper z-1">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <path
                            id="circlePath"
                            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                            fill="none"
                        />
                    </defs>
                    <text>
                        <textPath href="#circlePath" startOffset="0%">
                            100% Organic Product
                        </textPath>
                    </text>
                </svg>
                <div class="center-icon">
                    🥬
                </div>
            </div>
            
            <div className="position-absolute top-0 leaf">
                <img src="/assets/leaf.png" alt="" className='w-50' />
            </div>
            
        </>
    );
};

export default Banner;

