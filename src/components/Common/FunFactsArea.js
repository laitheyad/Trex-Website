import React from "react"
import { Link } from "gatsby"

import MapImg from "../../images/map.png"

const FunFactsArea = () => {
  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Market Opportunity</h2>
            <div className="bar"></div>
            <p>
              200M active creators globally. 70% use at least three separate tools daily. $104B+ market size in 2023, growing 20% year-over-year.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>200M</h3>
                <p>Active Creators</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>70%</h3>
                <p>Tool Fragmentation</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>$104B+</h3>
                <p>Market Size</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>20% YoY</h3>
                <p>Growth Rate</p>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3>Have Any Questions About Us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="map-bg">
            <img src={MapImg} alt="map" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFactsArea
