import React from "react"
import About from "../components/About"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Om" />
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <About />
    </div>
  </Layout>
)

export default AboutPage
