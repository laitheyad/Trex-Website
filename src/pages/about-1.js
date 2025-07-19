import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import Partner from "../components/Common/Partner"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"

import AboutOne from "../images/about-one.png"

const AboutUsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="About Us" />

    <div className="about-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src={AboutOne} alt="About" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="section-title">
                <h2>About T-Rex</h2>
                <div className="bar"></div>
                <p>
                  Empowering creators in the digital economy through AI-driven insights and unified platform solutions.
                </p>
              </div>

              <p>
                T-Rex was born from a simple observation: creators were drowning in tools. With 200 million active creators globally and 70% using at least three separate tools daily, the creator economy was fragmented and inefficient. We saw an opportunity to build something different - a unified platform that combines analytics, content management, and AI-powered insights.
              </p>

              <p>
                Our founders - Ayman Balawi, Mohammad Nabil, and Laith Al-Obaiyat - brought together expertise in operations, technical architecture, and software engineering to create a solution that truly serves creators. We validated the problem, finalized the plan, and built T-Rex to be the all-in-one platform creators actually need.
              </p>

              <p>
                Today, T-Rex serves creators across multiple platforms with our tiered approach: Standard for essential analytics, AI for smart scheduling and insights, and Ultra AI for GPT-powered virtual mentorship. We're not just another tool - we're the platform that helps creators grow, optimize, and monetize their content effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Story</h3>
                <p>
                  Founded by three passionate technologists who saw the chaos in the creator economy. We started with a simple question: "Why do creators need 5+ tools to do what should be simple?" This led to T-Rex - a platform that unifies analytics, scheduling, and AI insights into one powerful solution.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                  To democratize creator success through AI-driven insights and unified tools. We believe every creator deserves access to enterprise-level analytics and growth strategies, regardless of their current audience size or revenue. T-Rex levels the playing field.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Vision</h3>
                <p>
                  To become the essential platform for every creator in the digital economy. We envision a future where creators focus on creating, not managing tools. T-Rex will be the backbone that powers creator growth, monetization, and success across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <Team /> */}

    {/* <Partner /> */}

    {/* <FunFactsArea /> */}

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="About Us" />

export default AboutUsPage
