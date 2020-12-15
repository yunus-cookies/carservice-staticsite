import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { motion } from "framer-motion"

export const Home__HeroSection = styled.div`
  width: 100%;
`
export const HeroImage = styled(BackgroundImage)`
  height: 100vh;
`

export const Overlay = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  justify-content: flex-start;

  @media screen and (max-width: 991px) {
    display: grid;
    place-items: center;
  }
`
export const Content = styled(motion.div)`
  width: 50%;
  margin-top: 150px;
  margin-left: 100px;

  h1 {
    color: #fff;
    font-weight: 400;
    font-size: 4rem;
    border-bottom: 2px solid #fff;
    width: max-content;
    margin-bottom: 20px;
  }
  p {
    color: #fff;
    font-size: 1.3rem;
    width: fit-content;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    text-align: center;
    padding: 33px;
    margin: 0;
    h1 {
      width: 100%;
      font-size: 2rem;
    }
    p {
      width: 100%;
      font-size: 1.2rem;
    }
  }
`
