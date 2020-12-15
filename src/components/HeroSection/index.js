import { AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import {
  Home__HeroSection,
  HeroImage,
  Overlay,
  Content,
} from "./HeroSectionElements"

const HeroSection = () => {
  /** I couldn't find a setting that would work for both mobile and desktop,
   * so I queried two images instead.
   */
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2935, maxHeight: 1651, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroImageMobile: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1935, maxHeight: 1651, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [mobile, setMobile] = useState(true)

  const checkMobile = () => {
    if (window.innerWidth <= 991) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }

  useEffect(() => {
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <>
      <Home__HeroSection id="home">
        <HeroImage
          fluid={
            mobile
              ? data.heroImageMobile.childImageSharp.fluid
              : data.heroImage.childImageSharp.fluid
          }
          fadeIn
        >
          <Overlay>
            <AnimatePresence exitBeforeEnter>
              <Content
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1>A.J Autoservice</h1>
                <p>
                  Vi kan garantere kvalitet gennem vores mange års erfaring, og
                  kundetilfredshed.
                </p>
              </Content>
            </AnimatePresence>
          </Overlay>
        </HeroImage>
      </Home__HeroSection>
    </>
  )
}

export default HeroSection
