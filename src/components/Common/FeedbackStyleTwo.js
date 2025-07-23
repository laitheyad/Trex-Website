import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Client Images
import FasterCapitalLogo from "../../images/FasterCapitalLogo.png"


// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const FeedbackStyleTwo = () => {
  return (
    <>
      <div className="feedback-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Investors</h2>
            <div className="bar"></div>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="client-info align-items-center">
                  <div className="image">
                    <img src={FasterCapitalLogo} alt="client" height={70} width={50} style={{objectFit: "contain" }} />
                  </div>

                  <div className="title">
                    <h3>Faster Capital</h3>
                    {/* <span>Lead Developer at Envato</span> */}
                  </div>
                </div>

                <p>
                FasterCapital supported us during our first investment campaign with strategic guidance, technical insight, and genuine commitment to our vision playing a key role in our early journey.
                </p>
              </div>
            </SwiperSlide>

      
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape5">
          <img src={Shape5} alt="shape" />
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
      </div>
    </>
  )
}

export default FeedbackStyleTwo
