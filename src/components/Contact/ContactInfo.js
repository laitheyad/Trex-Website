import React from "react"
import * as Icon from "react-feather"

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:info@trex.services">info@trex.services</a>
                </p>
            
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Our Location</h3>
                <p>
                  Mecca street, Amman, Jordan
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:+962798239865">+962 798 239 865</a>
                </p>
                <p>
                  <a href="tel:+962798985775">+962 798 239 866</a>
                </p>
                <p>
                  <a href="tel:+962787107088">+962 787 107 088</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
