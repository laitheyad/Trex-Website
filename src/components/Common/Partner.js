import React from "react"
import { Link } from "gatsby"

import PartnerImg2 from "../../images/partner-img/partner-2.png"
import PartnerHoverImg2 from "../../images/partner-img/partner-hover2.png"
import PartnerImg3 from "../../images/partner-img/partner-3.png"
import PartnerHoverImg3 from "../../images/partner-img/partner-hover3.png"
import PartnerImg4 from "../../images/partner-img/partner-4.png"
import PartnerHoverImg4 from "../../images/partner-img/partner-hover4.png"
import PartnerImg5 from "../../images/partner-img/partner-5.png"
import PartnerHoverImg5 from "../../images/partner-img/partner-hover5.png"
import PartnerImg6 from "../../images/partner-img/partner-6.png"
import PartnerHoverImg6 from "../../images/partner-img/partner-hover6.png"
import PartnerImg7 from "../../images/partner-img/partner-7.png"
import PartnerHoverImg7 from "../../images/partner-img/partner-hover7.png"
import facebook from "../../images/logo's/facebook.png"
import facebookGrey from "../../images/logo's/facebook-gray.png"
import youtube from "../../images/logo's/youtube.png"
import youtubeGrey from "../../images/logo's/youtube-gray.png"
import x from "../../images/logo's/x.png"
import xGray from "../../images/logo's/x-gray.png"
import ticktok from "../../images/logo's/ticktok.png"
import ticktokGray from "../../images/logo's/ticktok-gray.png"
import snapchat from "../../images/logo's/snapchat.png"
import snapchatGray from "../../images/logo's/snapchat-gray.png"
const Partner = () => {
  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <h3>Why Partner With T-Rex Now?</h3>
          <p>The creator economy is maturing rapidly. Creators need smarter tools, not more tools. T-Rex is seeking partners who share our vision – who understand the value of being early, precise, and bold. Join us to shape the future of creator growth.</p>
          <Link to="/contact" className="btn btn-primary">
            Partner With T-Rex
          </Link>
          <span>
            {/* <a href="/" rel="noreferrer">
              Or, get started now with a free trial
            </a> */}
          </span>
        </div>
      </div>

      <div className="partner-area partner-section">
        <div className="container">
          <h5>More that 1.5 million businesses and organizations use Spet</h5>

          <div className="partner-inner">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-6">
                <a href="/" target="_balnk" rel="noreferrer">
                  <img src={facebookGrey} alt="partner" style={{width: 35,marginTop:4}} />
                  <img src={facebook} alt="partner" style={{width: 40}} />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a href="/" target="_balnk" rel="noreferrer">
                  <img src={youtubeGrey} alt="partner" style={{width: 150}}/>
                  <img src={youtube} alt="partner" style={{width: 150}}/>
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a href="/" target="_balnk" rel="noreferrer">
                  <img src={xGray} alt="partner" style={{width: 35}} />
                  <img src={x} alt="partner" style={{width: 35}}  />
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-6">
                <a href="/" target="_balnk" rel="noreferrer">
                  <img src={ticktokGray} alt="partner" style={{width: 60,marginTop: -10}} />
                  <img src={ticktok} alt="partner" style={{width: 60,marginTop: -10}}  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a href="/" target="_balnk" rel="noreferrer">
                  <img src={snapchatGray} alt="partner" style={{width: 60}} />
                  <img src={snapchat} alt="partner"  style={{width: 60}} />
                </a>
              </div>

          
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partner
