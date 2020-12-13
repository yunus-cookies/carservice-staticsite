import React from "react"
import ServiceSection from "../components/ServiceSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Ydelser" />
        <ServiceSection />
      </Layout>
    </>
  )
}

export default ServicesPage
