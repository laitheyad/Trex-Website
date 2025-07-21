import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/logo.png"
import MapImg from "../../images/map.png"
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link to="/T-Rex">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                <p>
                  T-Rex is an AI-driven platform empowering creators in the digital economy. We solve tool fragmentation by providing unified analytics, smart scheduling, and AI-powered insights across multiple platforms. Our mission is to help creators grow their audience, optimize content performance, and build sustainable revenue streams through data-driven decisions.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="list">
                  <li>
                    <Link to="/about-1">About Us</Link>
                  </li>
                  {/* <li>
                    <Link to="/services-1">Services</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/features">Features</Link>
                  </li> */}
                  <li>
                    <Link to="/pricing">Our Pricing</Link>
                  </li>
                  {/* <li>
                    <Link to="/blog-1">Latest News</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li>
                    <Link to="/faq">FAQ's</Link>
                  </li>
                  {/* <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/term-condition">Terms & Condition</Link>
                  </li> */}
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    Mecca street, Amman, Jordan 
                  </li>
                  <li>
                    <Icon.Mail />
                    Email: <a href="mailto:info@trex.services">info@trex.services</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Phone:       <p>
                  <a href="tel:+962798239865">+962 798 239 865</a>
                </p>
                <p>
                  <a href="tel:+962798985775">+962 798 239 866</a>
                </p>
                <p>
                  <a href="tel:+962787107088">+962 787 107 088</a>
                </p>
                  </li>
                </ul>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61578260952857&mibextid=LQQJ4d"
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://twitter.com"
                      className="twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.instagram.com/trex20254?igsh=Y2N0N3NwNnkweXZt"
                      className="instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/t-rex-ai-solutions/"
                      className="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear}. All rights reserved by{" "}
                 
                    T-Rex
                
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={MapImg} className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </footer>
    </>
  )
}

export default Footer
