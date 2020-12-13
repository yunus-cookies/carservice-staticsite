import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import {
  Home__HeroSection,
  HeroImage,
  Overlay,
  Content,
} from "./HeroSectionElements"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 4770, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Home__HeroSection>
        <HeroImage fluid={data.heroImage.childImageSharp.fluid} fadeIn>
          <Overlay>
            <Content>
              <h1>A.J Autoservice</h1>
              <p>
                Vi kan garantere kvalitet gennem vores mange års erfaring, og
                kundetilfredshed.
              </p>
            </Content>
          </Overlay>
        </HeroImage>
      </Home__HeroSection>
    </>
  )
}

export default HeroSection
