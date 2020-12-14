import React from "react"
import {
  FooterContainer,
  FooterSection,
  FooterWrap,
  FooterRights,
  WebsiteName,
  Icon,
} from "./FooterElements"

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSection>
          <FooterWrap>
            <FooterRights>
              Copyright © 2020 |{" "}
              <WebsiteName to="/#home">
                <Icon />
                A.J Autoservice
              </WebsiteName>
            </FooterRights>
          </FooterWrap>
        </FooterSection>
      </FooterContainer>
    </>
  )
}

export default Footer
