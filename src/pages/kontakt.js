import React from "react"
import Contact from "../components/Contact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { homeObjFour } from "../utils/Data_HeroSection"

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <Contact {...homeObjFour} />
  </Layout>
)

export default ContactPage
