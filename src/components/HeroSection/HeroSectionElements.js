import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Home__HeroSection = styled.div`
  padding: 120px 0 25px 0;
  width: 100%;
`
export const HeroImage = styled(BackgroundImage)`
  height: 550px;
`

export const Overlay = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  @media screen and (max-width: 991px) {
    display: grid;
    place-items: center;
  }
`
export const Content = styled.div`
  width: 50%;
  margin-top: 150px;
  margin-left: 100px;

  h1 {
    color: #fff;
    font-weight: 400;
    font-size: 4rem;
    margin-bottom: 20px;
  }
  p {
    color: #fff;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    text-align: center;
    padding: 33px;
    margin: 0;
    h1 {
      font-size: 2rem;
    }
  }
`
