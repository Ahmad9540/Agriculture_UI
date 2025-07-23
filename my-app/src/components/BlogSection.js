
import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <section className="blog-section py-5">
      <div className="text-center mb-5">
        <h6 className="blog-subtitle">Latest News</h6>
        <h2 className="blog-heading">Check out our blog posts</h2>
      </div>

      <div className="container">
        <div className="row g-4">

          
          <div className="col-lg-6">
            <div className="blog-card big-card text-white position-relative overflow-hidden rounded">
              <img
                src="https://agrica-react.vercel.app/assets/img/blog/1.jpg"
                className="w-100 h-100 object-fit-cover rounded"
                alt="blog1"
              />
              <div className="overlay position-absolute bottom-0 p-4 w-100">
                <h4 className="fw-bold">Miscovery incommode earnestly commanded if.</h4>
                <p className="small">
                  Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                </p>
                <a href="/blog-details" className="text-white fw-bold text-decoration-none">
                  CONTINUE READING →
                </a>
              </div>
            </div>
          </div>

         
          <div className="col-lg-3 col-md-6">
            <div className="blog-card small-card position-relative">
              <div className="position-relative">
                <img src="/assets/banner21.jpg" className="w-100 mb-4 rounded" alt="blog2" />
                <div className="date-box bg-warning text-center text-dark rounded">
                  <h5 className="mb-0">26</h5>
                  <small>Aug, 2025</small>
                </div>
              </div>
              <div className="mt-5">
              <p className="text-muted mb-1 mt-3">Md Sohag • 26 Aug, 2025</p>
              <h6 className="fw-bold">Minuter him own clothes but observe as country.</h6>
              <a href="/blog-details" className="text-white fw-bold text-decoration-none">
                CONTINUE READING →
              </a>
              </div>
            </div>
          </div>

       
          <div className="col-lg-3 col-md-6">
            <div className="blog-card small-card position-relative">
              <div className="position-relative">
                <img src="/assets/banner22.jpg" className="w-100 mb-4 rounded" alt="blog3" />
                <div className="date-box bg-warning text-center text-dark rounded">
                  <h5 className="mb-0">08</h5>
                  <small>Dec, 2025</small>
                </div>
              </div>
              <div className="mt-5">
              <p className="text-muted mb-1 mt-3">Md Sohag • 08 Dec, 2025</p>
              <h6 className="fw-bold">Minuter him own clothes but observe as country.</h6>
              <a href="/blog-details" className="text-white fw-bold text-decoration-none">
                CONTINUE READING →
              </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default BlogSection;




