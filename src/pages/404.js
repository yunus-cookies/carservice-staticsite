import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Ikke fundet" />
    <h1>404: Ikke fundet</h1>
    <p>Du har desværre prøvet at få adgang til en side som ikke eksisterer.</p>
  </Layout>
)

export default NotFoundPage
