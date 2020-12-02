import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import BackgroundImage from "gatsby-background-image"

export const Overlay = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  color: #fff;
`

export const StyledBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  overflow: hidden;
  height: 50vh;
  &::before,
  &::after {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

export const Home__HeroSection = styled.div`
  color: #fff;
  padding: 120px 0 120px 0;
  ${props => props.isBlueBg && css``}
`

export const HeroContainer = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 2000px;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const HeroSectionRow = styled(motion.div)`
  display: flex;
  flex-direction: ${({ isImgStart }) => (isImgStart ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  align-content: stretch;
  border-radius: 4px 40px 4px 40px;
  padding: 5px;
  @media screen and (max-width: 991px) {
  }
`
export const HeroSectionCol = styled(motion.div)`
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 991px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`
export const HeroSectionWrapper = styled.div`
  padding-left: 90px;
  @media screen and (max-width: 991px) {
    padding-bottom: 65px;
    max-width: 100%;
    border: none;
    padding: 40px 1px;
  }
`
export const TopLine = styled.div`
  color: #f00946;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  background-color: #242424;
  border-radius: 4px;
  width: max-content;
  padding: 10px;
  ${props =>
    props.isLightText &&
    css`
      background-color: #242424;
      color: #f00946;
    `}
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 80px;
  line-height: 1.1;
  font-weight: 600;
  color: rgba(36, 36, 36, 0.75);
  @media screen and (max-width: 1800px) {
    font-size: 50px;
  }
  @media screen and (max-width: 1150px) {
    font-size: 40px;
  }
  @media screen and (max-width: 601px) {
    font-size: 30px;
  }
  ${props =>
    props.isLightText &&
    css`
      color: #fff;
    `}
`
export const Subtitle = styled.p`
  max-width: 450px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.8);
  ${props =>
    props.isLightText &&
    css`
      color: #fff;
    `}
`
export const ImgWrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    max-width: 100%;
    padding-bottom: 5px;
    max-width: 540px;
  }
`
