import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"

import TeamImg1 from "../images/team-image/team1.jpg"
import TeamImg2 from "../images/team-image/team2.jpg"
import TeamImg3 from "../images/team-image/team3.jpg"

const TeamPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Team" />

    <div className="team-area pt-80 pb-50 bg-f9f6f6">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>Meet the T-Rex Founders</h2>
          <div className="bar"></div>
          <p>Three passionate technologists united by a vision to empower creators in the digital economy.</p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg1} alt="Ayman Balawi" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Ayman Balawi</h3>
                  <span>Operations & Finance</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                </ul>

                <p>
                  Transforming vision into scalable structure, disciplined execution, and sustainable growth. Expert in operations and financial strategy for tech startups.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg2} alt="Mohammad Nabil" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Mohammad Nabil</h3>
                  <span>Technical Director</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Builder at heart, specializing in backend systems, scalable APIs, and advanced machine learning. Creates robust, real-world solutions for creators.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg3} alt="Laith Al-Obaiyat" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Laith Al-Obaiyat</h3>
                  <span>Senior Software Engineer</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Architecting clean, scalable codebases and intuitive user experiences. Focused on performance, reliability, and delivering seamless digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
