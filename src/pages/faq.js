import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const FAQPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="FAQ" />

    <div className="faq-area ptb-80">
      <div className="container">
        <div className="faq-accordion">
          <Accordion allowZeroExpanded preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>What is T-Rex and how does it help creators?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  T-Rex is an AI-driven platform designed specifically for the creator economy. We solve the problem of tool fragmentation by providing a unified dashboard that combines analytics, content management, and AI-powered insights across multiple platforms. Our platform helps creators grow their audience, optimize content performance, and make data-driven decisions to increase their revenue.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>What platforms does T-Rex integrate with?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  T-Rex integrates with all major social media and content platforms including YouTube, TikTok, Instagram, Twitter, LinkedIn, and more. Our multi-platform approach allows creators to manage their content, track performance, and receive unified analytics across all their channels from a single dashboard. We're constantly adding new platform integrations based on creator needs.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    How does the AI-powered virtual mentor work in Ultra AI?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Our GPT-based virtual mentor analyzes your content performance, audience engagement, and growth patterns to provide personalized recommendations. It suggests optimal posting times, content strategies, and growth opportunities specific to your niche. The AI learns from your data and provides actionable insights to help you scale your creator business more effectively.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Can I switch between pricing plans?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll only pay the prorated difference for the remainder of your billing cycle. When downgrading, the new rate will apply at your next billing date. All your data and settings are preserved when switching between plans. We recommend starting with Standard to see the value, then upgrading as your needs grow.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>What kind of analytics and insights does T-Rex provide?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  T-Rex provides comprehensive analytics including audience growth trends, content performance metrics, engagement rates, revenue tracking, and cross-platform comparisons. Our AI features offer predictive insights about optimal posting times, content recommendations, and audience behavior patterns. The Standard plan includes basic analytics, while AI and Ultra AI plans provide advanced insights and automated recommendations.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Is there a free trial available?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Currently, we offer a 7-day free trial for all paid plans (Standard, AI, and Ultra AI). This allows you to experience the full features of each tier before committing. No credit card is required to start your trial. You can cancel anytime during the trial period without any charges. We're also working on a free tier for basic analytics and limited features.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="g">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How does T-Rex handle data privacy and security?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We take data privacy and security seriously. All data is encrypted in transit and at rest. We only access the data you explicitly authorize through platform APIs, and we never store sensitive information like passwords. Our platform complies with GDPR and other relevant privacy regulations. You have full control over your data and can request deletion at any time.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="h">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>What support options are available?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Standard plan users receive email support with 24-hour response times. AI and Ultra AI plans include priority email support with 12-hour response times. Ultra AI subscribers also get access to our virtual mentor for personalized guidance. We also maintain an extensive knowledge base and community forum where creators can share tips and best practices.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="i">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How does the smart scheduling feature work?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Our smart scheduling feature analyzes your audience's online behavior patterns, engagement history, and platform-specific optimal posting times. It automatically suggests the best times to post content for maximum reach and engagement. You can set up content queues and let the AI handle the scheduling, or review and approve suggestions before posting. This feature is available in AI and Ultra AI plans.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="j">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Can T-Rex help me monetize my content?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Yes! T-Rex provides revenue tracking across multiple monetization streams including ad revenue, sponsorships, merchandise sales, and affiliate marketing. Our AI analyzes your audience demographics and engagement patterns to suggest monetization opportunities. We also help you identify potential brand partnerships and optimize your content for better revenue generation. These features are available in AI and Ultra AI plans.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="faq-contact">
          <h3>Still Have Questions?</h3>
          <p>Can't find the answer you're looking for? Our team is here to help creators succeed.</p>
          <form>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Creator Name"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Question Topic (e.g., Pricing, Features, Integration)"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Tell us about your creator journey and how we can help..."
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default FAQPage
