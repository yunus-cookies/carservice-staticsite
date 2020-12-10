import React, { useState, useEffect } from "react"
import { Button } from "../ButtonElements"
import Img from "gatsby-image"
import {
  HeroSectionRow,
  HeroSectionCol,
  HeroSectionWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
} from "./HeroSectionElements"

const HeroRows = ({
  handleMultipleOnClick,
  lightText,
  topline,
  headline,
  description,
  buttonLabel,
  ImgStart,
  styles,
  image,
  imgStyles,
}) => {
  const [button, setButton] = useState(true)

  const showButton = () => {
    if (window.innerWidth <= 991) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
    window.addEventListener("resize", showButton)
    return () => {
      window.removeEventListener("resize", showButton)
    }
  }, [])

  return (
    <>
      <HeroSectionRow isImgStart={ImgStart} style={styles}>
        <HeroSectionCol>
          <HeroSectionWrapper>
            <TopLine isLightText={lightText}>{topline}</TopLine>
            <Heading isLightText={lightText}>{headline}</Heading>
            <Subtitle isLightText={lightText}>{description}</Subtitle>
            {button ? (
              <Button outlineWhite nav onClick={handleMultipleOnClick}>
                {buttonLabel}
              </Button>
            ) : (
              <Button mobile blue onClick={handleMultipleOnClick}>
                {buttonLabel}
              </Button>
            )}
          </HeroSectionWrapper>
        </HeroSectionCol>
        <HeroSectionCol>
          <ImgWrapper>
            <Img fluid={image} imgStyle={imgStyles} fadeIn />
          </ImgWrapper>
        </HeroSectionCol>
      </HeroSectionRow>
    </>
  )
}

export default HeroRows
