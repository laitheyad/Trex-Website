import React, { Component } from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import AgencyShape1 from "../../images/agency-image/agency-shape1.png"

class PricingStyleThree extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabs_item")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByTagName("li")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "")
    }

    document.getElementById(tabNmae).style.display = "block"
    evt.currentTarget.className += "current"
  }

  render() {
    return (
      <>
        <div className="pricing-area pb-50">
          <div className="container">
            <div className="section-title st-fs-28">
              <span className="sub-title">Pricing</span>
              <h2>T-Rex Pricing</h2>
              <div className="bar"></div>
              <p>Choose the plan that fits your creator journey. upgrade as you grow.</p>
            </div>

            <div className="tab pricing-tab bg-color">
              <ul className="tabs">
                <li
                  className="current"
                  onClick={e => this.openTabSection(e, "tab1")}
                  aria-hidden="true"
                >
                  Monthly Plan
                </li>

                <li
                  onClick={e => this.openTabSection(e, "tab2")}
                  aria-hidden="true"
                >
                  Yearly Plan <i data-feather="calendar"></i>
                </li>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <div className="row justify-content-center">
             
                    {/* <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Free Tier</h3>
                          <p>Accessible entry point for all creators</p>
                        </div>
                        <div className="price">$0 <span>/month</span></div>
                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">Get Started Free</Link>
                        </div>
                        <ul className="pricing-features">
                          <li><Icon.Check /> Get started with T-Rex</li>
                          <li><Icon.Check /> Accessible entry point for all creators</li>
                          <li><Icon.Check /> Basic analytics dashboard</li>
                          <li><Icon.Check /> Community support</li>
                        </ul>
                      </div>
                    </div> */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Standard</h3>
                          <p>Essential analytics and dashboards</p>
                        </div>
                        <div className="price">$15 <span>/month</span></div>
                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">Select Plan</Link>
                        </div>
                        <ul className="pricing-features">
                          <li><Icon.Check /> Unlocks growth insights</li>
                          <li><Icon.Check /> Essential analytics and dashboards</li>
                          <li><Icon.Check /> Multi-platform content management</li>
                          <li><Icon.Check /> Email support</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>AI</h3>
                          <p>Advanced insights and smart scheduling</p>
                        </div>
                        <div className="price">$35 <span>/month</span></div>
                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">Select Plan</Link>
                        </div>
                        <ul className="pricing-features">
                          <li><Icon.Check /> AI-powered recommendations</li>
                          <li><Icon.Check /> Advanced insights and smart scheduling</li>
                          <li><Icon.Check /> Automated content scheduling</li>
                          <li><Icon.Check /> Performance tracking</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Ultra AI</h3>
                          <p>Full access to GPT-based virtual mentor</p>
                        </div>
                        <div className="price">$75 <span>/month</span></div>
                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">Select Plan</Link>
                        </div>
                        <ul className="pricing-features">
                          <li><Icon.Check /> All premium features included</li>
                          <li><Icon.Check /> Full access to GPT-based virtual mentor</li>
                          <li><Icon.Check /> Personalized growth strategies</li>
                          <li><Icon.Check /> 1:1 virtual mentorship</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab2" className="tabs_item">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Standard</h3>
                          <p>Essential analytics and dashboards</p>
                        </div>
                        <div className="price">$180 <span>/year</span></div>
                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">Select Plan</Link>
                        </div>
                        <ul className="pricing-features">
                          <li><Icon.Check /> Unlocks growth insights</li>
                          <li><Icon.Check /> Essential analytics and dashboards</li>
                          <li><Icon.Check /> Multi-platform content management</li>
                          <li><Icon.Check /> Email support</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>AI</h3>
                          <p>Advanced insights and smart scheduling</p>
                        </div>
                        <div className="price">$420 <span>/year</span></div>
                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">Select Plan</Link>
                        </div>
                        <ul className="pricing-features">
                          <li><Icon.Check /> AI-powered recommendations</li>
                          <li><Icon.Check /> Advanced insights and smart scheduling</li>
                          <li><Icon.Check /> Automated content scheduling</li>
                          <li><Icon.Check /> Performance tracking</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Ultra AI</h3>
                          <p>Full access to GPT-based virtual mentor</p>
                        </div>
                        <div className="price">$900 <span>/year</span></div>
                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">Select Plan</Link>
                        </div>
                        <ul className="pricing-features">
                          <li><Icon.Check /> All premium features included</li>
                          <li><Icon.Check /> Full access to GPT-based virtual mentor</li>
                          <li><Icon.Check /> Personalized growth strategies</li>
                          <li><Icon.Check /> 1:1 virtual mentorship</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Image */}
          <div className="shape9 mobile-dnone">
            <img src={AgencyShape1} alt="Shape" />
          </div>
        </div>
      </>
    )
  }
}

export default PricingStyleThree
