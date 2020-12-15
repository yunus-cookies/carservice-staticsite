import React, { useState, useEffect } from "react"
import { FaTimes } from "react-icons/fa"
import { RiMenu3Line } from "react-icons/ri"
import { IconContext } from "react-icons/lib"
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  LogoContainer,
  NavMenu,
  NavButtonContainer,
  NavButton,
} from "./NavbarElements"
import { Button } from "../ButtonElements"

const Navbar = ({ handleMultipleOnClick }) => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)

  const showButton = () => {
    if (window.innerWidth <= 991) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  const isScrolling = () => {
    if (window.pageYOffset > 0) {
      setScroll(true)
      setClick(false)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    showButton()
    isScrolling()
    window.addEventListener("resize", showButton)
    window.addEventListener("scroll", isScrolling)
    return () => {
      window.removeEventListener("resize", showButton)
      window.removeEventListener("scroll", isScrolling)
    }
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav isClick={click} isScroll={scroll}>
          <NavContainer container>
            <LogoContainer onClick={() => setClick(false)}>
              <NavLogo to="/#home">
                <NavIcon />
                <p>A.J Autoservice</p>
              </NavLogo>
            </LogoContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <RiMenu3Line />}
            </MobileIcon>
            <NavMenu isClick={click}>
              <NavItem onClick={() => setClick(false)}>
                <NavLink to="/#services" stripHash>
                  Ydelser
                </NavLink>
              </NavItem>
              <NavItem onClick={() => setClick(false)}>
                <NavLink to="/#about" stripHash>
                  Om
                </NavLink>
              </NavItem>
              <NavButtonContainer>
                {button ? (
                  <NavButton>
                    <Button outline nav onClick={handleMultipleOnClick}>
                      KONTAKT OS
                    </Button>
                  </NavButton>
                ) : (
                  <NavButton>
                    <Button mobile onClick={handleMultipleOnClick}>
                      KONTAKT OS
                    </Button>
                  </NavButton>
                )}
              </NavButtonContainer>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
