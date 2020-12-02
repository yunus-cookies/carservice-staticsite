import React from "react"
import { FaPhone, FaAddressBook } from "react-icons/fa"
import { BsDot } from "react-icons/bs"
import { IoMdMail } from "react-icons/io"
import {
  FooterContainer,
  FooterSection,
  FooterWrap,
  FooterRights,
  WebsiteName,
  FooterSocialIcons,
  Icon,
  IconInfo,
} from "./FooterElements"

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSection>
          <FooterWrap>
            <FooterRights>
              Copyright © 2020 |{" "}
              <WebsiteName to="/">
                <Icon />
                A.J Autoservice
              </WebsiteName>
            </FooterRights>
            {/* So far not going to use
            <FooterSocialIcons>
              <IconInfo>
                <IoMdMail />
                <p>aj@autoservice.dk</p>
                <BsDot />
                <FaPhone />
                <p>+4571717171</p>
                <BsDot />
                <FaAddressBook />
                <p style={{ width: "200px" }}> Taastrup 2630</p>
              </IconInfo>
            </FooterSocialIcons>  */}
          </FooterWrap>
        </FooterSection>
      </FooterContainer>
    </>
  )
}

export default Footer
