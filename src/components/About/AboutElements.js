import styled from "styled-components"

export const AboutSection = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-bottom: 100px;
`

export const AboutContainer = styled.div`
  width: 100%;
  padding: 25px 100px 0 100px;
  max-width: 1440px;
  border-radius: 25px;
  text-align: center;
  h1 {
    font-weight: 400;
    font-size: 50px;
    margin-bottom: 5px;
  }
  p {
    line-height: 1.5;
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 991px) {
    padding: 25px 50px 0 50px;
    p {
      width: 100%;
      font-size: 14px;
    }
  }
`

export const ImageWrapper = styled.div`
  width: 25%;
  padding: 25px 50px 25px 50px;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    width: 75%;
  }
`
