import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/MachineLearning/MainBanner"
import FunFactsArea from "../components/Common/FunFactsArea"
import Partner from "../components/Common/Partner"
import Footer from "../components/_App/Footer"
import WhatWeOffer from "../components/DigitalAgency/WhatWeOffer"
import AboutUsContent from "../components/DigitalAgency/AboutUsContent"
import PricingStyleOne from "../components/PricingPlans/PricingStyleOne"
import PricingStyleTwo from "../components/PricingPlans/PricingStyleTwo"
import PricingStyleThree from "../components/PricingPlans/PricingStyleThree"
import PricingStyleFour from "../components/PricingPlans/PricingStyleFour"
import OurServices from "../components/DigitalAgency/OurServices"

const IndexPage = () => (
  <Layout>
  <Navbar />
  <MainBanner />
  <WhatWeOffer />
  <Partner />

  <AboutUsContent />
  {/* <OurServices /> */}
  <PricingStyleThree />

  <FunFactsArea />
  {/* <Projects /> */}
  {/* <PricingStyleOne /> */}
  {/* <PricingStyleTwo /> */}
  {/* <PricingStyleFour /> */}
  {/* <FeedbackStyleFour /> */}
  {/* <BlogCard /> */}
  {/* <Newsletter /> */}
  <Footer />
</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
