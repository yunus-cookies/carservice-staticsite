import styled from "styled-components"

export const ServiceSection = styled.div`
  width: 100%;
  padding-top: 120px;
`
export const ServiceContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 2000px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`
export const ServiceRow = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`
export const ServiceCol = styled.div`
  width: 100%;
  margin: 0 10px 50px 10px;
`
export const ServiceWrapper = styled.div`
  display: grid;
  place-items: center;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 250px;
  height: 250px;
  margin: 0 auto;
  p {
    width: 80%;
  }
  h3 {
    width: 80%;
  }
  button {
    width: 80%;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    height: 200px;
    transform: scale(1) !important;
  }
`
