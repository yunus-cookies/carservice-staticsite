import React, { useState, useEffect } from "react"
import { Button } from "../ButtonElements"
import Img from "gatsby-image"
import {
  ServiceSectionRow,
  ServiceSectionCol,
  ServiceSectionWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
} from "./ServiceSectionElements"

const Service = ({
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
      <ServiceSectionRow isImgStart={ImgStart} style={styles}>
        <ServiceSectionCol>
          <ServiceSectionWrapper>
            <TopLine isLightText={lightText}>{topline}</TopLine>
            <Heading isLightText={lightText}>{headline}</Heading>
            <Subtitle isLightText={lightText}>{description}</Subtitle>
            {button ? (
              <Button outlineWhite nav onClick={handleMultipleOnClick}>
                {buttonLabel}
              </Button>
            ) : (
              <Button mobile outlineWhite onClick={handleMultipleOnClick}>
                {buttonLabel}
              </Button>
            )}
          </ServiceSectionWrapper>
        </ServiceSectionCol>
        <ServiceSectionCol>
          <ImgWrapper>
            <Img fluid={image} imgStyle={imgStyles} fadeIn />
          </ImgWrapper>
        </ServiceSectionCol>
      </ServiceSectionRow>
    </>
  )
}

export default Service
