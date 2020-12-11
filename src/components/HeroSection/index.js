import { useStaticQuery, graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import { homeObjOne, homeObjTwo } from "../../utils/Data_HeroSection"
import { Home__HeroSection, HeroContainer } from "./HeroSectionElements"
import HeroRow from "./HeroRow"

const HeroSection = ({ handleMultipleOnClick }) => {
  const [resize, setResize] = useState(true)

  const isResized = () => {
    if (window.innerWidth <= 991) {
      setResize(false)
    } else {
      setResize(true)
    }
  }

  useEffect(() => {
    isResized()
    window.addEventListener("resize", isResized)
    return () => {
      window.removeEventListener("resize", isResized)
    }
  }, [])

  const TOP_STYLE = {
    borderRadius: "25px 25px 0 0",
  }
  const TOP_IMG_STYLE = {
    borderRadius: resize ? "0 25px 0 0" : "0 0 0 0",
  }
  const BOTTOM_STYLE = {
    borderRadius: "0 0 25px 25px",
  }
  const BOTTOM_IMG_STYLE = {
    borderRadius: resize ? "0 0 0 25px" : "0 0 25px 25px",
  }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage1: file(relativePath: { eq: "image1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage3: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage4: file(relativePath: { eq: "image4.jpg" }) {
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
      <Home__HeroSection isBlueBg={homeObjTwo.blueBg}>
        <HeroContainer>
          <HeroRow
            ImgStart={homeObjOne.imgStart}
            lightText={homeObjOne.lightText}
            topline={homeObjOne.topLine}
            headline={homeObjOne.headline}
            description={homeObjOne.description}
            buttonLabel={homeObjOne.buttonLabel}
            handleMultipleOnClick={handleMultipleOnClick}
            styles={TOP_STYLE}
            imgStyles={TOP_IMG_STYLE}
            image={data.placeholderImage1.childImageSharp.fluid}
          />
          <HeroRow
            ImgStart={homeObjTwo.imgStart}
            lightText={homeObjTwo.lightText}
            topline={homeObjTwo.topLine}
            headline={homeObjTwo.headline}
            description={homeObjTwo.description}
            buttonLabel={homeObjTwo.buttonLabel}
            handleMultipleOnClick={handleMultipleOnClick}
            image={data.placeholderImage2.childImageSharp.fluid}
          />
          <HeroRow
            ImgStart={homeObjOne.imgStart}
            lightText={homeObjOne.lightText}
            topline={homeObjOne.topLine}
            headline={homeObjOne.headline}
            description={homeObjOne.description}
            buttonLabel={homeObjOne.buttonLabel}
            handleMultipleOnClick={handleMultipleOnClick}
            image={data.placeholderImage3.childImageSharp.fluid}
          />
          <HeroRow
            ImgStart={homeObjTwo.imgStart}
            lightText={homeObjTwo.lightText}
            topline={homeObjTwo.topLine}
            headline={homeObjTwo.headline}
            description={homeObjTwo.description}
            buttonLabel={homeObjTwo.buttonLabel}
            handleMultipleOnClick={handleMultipleOnClick}
            styles={BOTTOM_STYLE}
            imgStyles={BOTTOM_IMG_STYLE}
            image={data.placeholderImage4.childImageSharp.fluid}
          />
        </HeroContainer>
      </Home__HeroSection>
    </>
  )
}

export default HeroSection
