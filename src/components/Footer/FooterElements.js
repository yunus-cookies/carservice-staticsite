import { Link } from "gatsby"
import { GiAutoRepair } from "react-icons/gi"
import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: #242424;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0;
  position: relative;
  bottom: 0;
  width: 100%;
`
export const FooterSection = styled.section`
  width: 100%;
`

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`

export const FooterRights = styled.small`
  color: #fff;
  font-size: 12px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
  @media screen and (max-width: 820px) {
    margin-bottom: 10px;
  }
`

export const Icon = styled(GiAutoRepair)`
  color: #fff;
  font-size: 1.5rem;
  margin-right: 5px;
  margin-left: 5px;
`

export const WebsiteName = styled(Link)`
  margin: 5px 0;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
`
