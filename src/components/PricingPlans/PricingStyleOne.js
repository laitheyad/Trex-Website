import React from "react"
import { Link } from "gatsby"

// Shape Images
import Shape1 from "../../images/shape2.svg"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape4.svg"
import Shape4 from "../../images/shape4.svg"

const PricingStyleOne = () => {
  return (
    <>
      <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>T-Rex Pricing</h2>
            <div className="bar"></div>
            <p>Choose the plan that fits your creator journey. Start free, upgrade as you grow.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Free Tier</h3>
                </div>
                <div className="content">
                  <div className="price">
                    <span>$0 <span>/month</span></span>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li className="active">Accessible entry point for all creators</li>
                      <li>Get started with T-Rex</li>
                      <li>Basic analytics dashboard</li>
                      <li>Community support</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link to="/login" className="btn btn-primary">Select Plan</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Standard</h3>
                </div>
                <div className="content">
                  <div className="price">
                    <span>$15 <span>/month</span></span>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li className="active">Essential analytics and dashboards</li>
                      <li>Unlocks growth insights</li>
                      <li>Multi-platform content management</li>
                      <li>Email support</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link to="/login" className="btn btn-primary">Select Plan</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>AI</h3>
                </div>
                <div className="content">
                  <div className="price">
                    <span>$35 <span>/month</span></span>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li className="active">Advanced insights and smart scheduling</li>
                      <li>AI-powered recommendations</li>
                      <li>Automated content scheduling</li>
                      <li>Performance tracking</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link to="/login" className="btn btn-primary">Select Plan</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Ultra AI</h3>
                </div>
                <div className="content">
                  <div className="price">
                    <span>$75 <span>/month</span></span>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li className="active">Full access to GPT-based virtual mentor</li>
                      <li>All premium features included</li>
                      <li>Personalized growth strategies</li>
                      <li>1:1 virtual mentorship</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link to="/login" className="btn btn-primary">Select Plan</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default PricingStyleOne
