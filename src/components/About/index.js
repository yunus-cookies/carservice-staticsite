import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { AboutSection, AboutContainer, ImageWrapper } from "./AboutElements"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <AboutSection id="about">
        <AboutContainer>
          <h1>Om os</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ImageWrapper>
            <Img fluid={data.about.childImageSharp.fluid} fadeIn />
          </ImageWrapper>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default About
