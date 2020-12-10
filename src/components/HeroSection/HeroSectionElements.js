import styled, { css } from "styled-components"

export const Home__HeroSection = styled.div`
  color: #fff;
  ${props => props.isBlueBg && css``}
  padding-bottom: 100px;
`

export const HeroContainer = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1440px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const HeroSectionRow = styled.div`
  display: flex;

  flex-direction: ${({ isImgStart }) => (isImgStart ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  align-content: stretch;
  background-color: ${({ isImgStart }) => (isImgStart ? "#26629f" : "#242424")};
`
export const HeroSectionCol = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  flex-wrap: wrap;

  @media screen and (max-width: 991px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`
export const HeroSectionWrapper = styled.div`
  padding: 0 50px 0 50px;
  @media screen and (max-width: 991px) {
    max-width: 100%;
    border: none;
    padding: 40px 30px;
  }
`
export const TopLine = styled.div`
  color: #fff;
  font-size: 15px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
  border-radius: 4px;
  ${props =>
    props.isLightText &&
    css`
      color: #fff;
    `}
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 25px;
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
  font-size: 17px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.8);
  ${props =>
    props.isLightText &&
    css`
      color: #fff;
    `}
`
export const ImgWrapper = styled.div`
  max-width: 100%;
  @media screen and (max-width: 991px) {
  }
`
