import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceSection from "../components/ServiceSection"
import About from "../components/About"
import HeroSection from "../components/HeroSection"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <HeroSection />
        <ServiceSection />
        <About />
      </Layout>
    </>
  )
}

export default IndexPage
