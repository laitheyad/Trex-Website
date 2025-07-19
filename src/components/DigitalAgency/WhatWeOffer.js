import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import AgencyIconBG from "../../images/agency-image/agency-icon-bg.png"
import AgencyShape1 from "../../images/agency-image/agency-shape1.png"

const WhatWeOffer = () => {
  return (
    <>
      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">Our Tiered Solution</span>
            <h2>Modular Tiers for Every Creator</h2>
            <div className="bar"></div>
            <p>
              Performance, analytics, and AI in a multi-platform dashboard. Choose your growth path.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-landscape"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">T-Rex Standard</Link>
                </h3>
                <p>
                  Performance analytics and multi-platform dashboards. Gain deep insights across all your channels.
                </p>

                {/* <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">T-Rex AI</Link>
                </h3>
                <p>
                  Predictive insight, smart scheduling, and context-timed launches. AI-powered recommendations for creators.
                </p>

                {/* <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">T-Rex Ultra AI</Link>
                </h3>
                <p>
                  Our advanced tier: GPT-powered virtual mentor. Each creator receives growth strategies and next-step guidance.
                </p>

                {/* <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link> */}
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-chalkboard"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">Branding & Marketing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div> */}
          </div>
        </div>

        <div className="shape9 slow mobile-dnone">
          <img
            src={AgencyShape1}
            className="animate__animated animate__fadeInLeft animate__delay-0.7s"
            alt="Icon"
          />
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
