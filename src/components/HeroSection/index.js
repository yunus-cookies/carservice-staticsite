import React, { useState, useEffect } from "react"
import { Button } from "../ButtonElements"
import { AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Home__HeroSection,
  HeroContainer,
  HeroSectionRow,
  HeroSectionCol,
  HeroSectionWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  StyledBackground,
  Overlay,
} from "./HeroSectionElements"
import Portal from "../Portal"
import Modal from "../Modal"
import Contact from "../Contact"

const HeroSection = ({
  blueBg,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  lightText,
  img,
  handleMultipleOnClick,
}) => {
  const [button, setButton] = useState(true)

  const [click, setClick] = useState(false)

  const showButton = () => {
    if (window.innerWidth <= 991) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  const handleClick = () => {
    setClick(!click)
  }

  useEffect(() => {
    showButton()
    window.addEventListener("resize", showButton)
    return () => {
      window.removeEventListener("resize", showButton)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "png-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Home__HeroSection isBlueBg={blueBg}>
        <HeroContainer>
          <AnimatePresence>
            <HeroSectionRow
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleClick}
              isImgStart={imgStart}
            >
              <HeroSectionCol
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <HeroSectionWrapper>
                  <TopLine isLightText={lightText}>{topLine}</TopLine>
                  <Heading isLightText={lightText}>{headline}</Heading>
                  <Subtitle isLightText={lightText}>{description}</Subtitle>
                  {button ? (
                    <div>
                      <Button primary nav onClick={handleMultipleOnClick}>
                        {buttonLabel}
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button mobile blue onClick={handleMultipleOnClick}>
                        {buttonLabel}
                      </Button>
                    </div>
                  )}
                </HeroSectionWrapper>
              </HeroSectionCol>
              <HeroSectionCol
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ImgWrapper>
                  <Img
                    fluid={data.placeholderImage.childImageSharp.fluid}
                    fadeIn
                  />
                </ImgWrapper>
              </HeroSectionCol>
            </HeroSectionRow>
          </AnimatePresence>
        </HeroContainer>
      </Home__HeroSection>
    </>
  )
}

export default HeroSection
