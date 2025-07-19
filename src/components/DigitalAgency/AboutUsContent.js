import React from "react"
import { Link } from "gatsby"

import AgencyAboutImg from "../../images/agency-image/agency-about-img.jpg"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/agency-image/agency-shape2.png"

const AboutUsContent = () => {
  return (
    <>
      <div className="agency-about-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="agency-about-img">
                <img src={AgencyAboutImg} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="agency-about-content">
                <span className="sub-title">Meet The Founders</span>
                <h2>T-Rex: The Visionary Team</h2>
                <div className="bar"></div>
                <p>
                  Ayman Balawi: Operations & Finance. Transforming vision into scalable structure, disciplined execution, and sustainable growth.
                </p>
                <p>
                  Mohammad Nabil: Technical Director. Builder at heart, specializing in backend systems, scalable APIs, and advanced machine learning. Robust, real-world solutions for creators.
                </p>
                <p>
                Laith Al-Obaiyat: Senior Software Engineer.
Architecting clean, scalable codebases and intuitive user experiences. Focused on performance, reliability, and delivering seamless digital products from concept to deployment.
                </p>
                <p>
                  Together, we validated the problem, finalized the plan, and built the T-Rex platform to empower creators everywhere.
                </p>
                <Link to="/about" className="btn btn-secondary">
                  Discover the T-Rex Story
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape10">
          <img src={Shape5} alt="Shap" />
        </div>
      </div>
    </>
  )
}

export default AboutUsContent
