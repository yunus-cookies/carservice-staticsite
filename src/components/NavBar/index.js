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
  NavMenu,
  NavButtonContainer,
  NavButton,
} from "./NavbarElements"
import { Button } from "../ButtonElements"

const Navbar = ({ handleMultipleOnClick }) => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 991) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  const onScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    showButton()
    onScroll()
    window.addEventListener("resize", showButton)
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("resize", showButton)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#242424" }}>
        <Nav isScroll={scroll} isClick={click}>
          <NavContainer container>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              <p>A.J Autoservice</p>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <RiMenu3Line />}
            </MobileIcon>
            <NavMenu isClick={click} active>
              <NavItem>
                <NavLink to="om">Om</NavLink>
                {click}
              </NavItem>
              <NavItem>
                <NavLink to="service">Ydelser</NavLink>
              </NavItem>
              <NavButtonContainer>
                {button ? (
                  <NavButton>
                    <Button primary nav onClick={handleMultipleOnClick}>
                      KONTAKT OS
                    </Button>
                  </NavButton>
                ) : (
                  <NavButton>
                    <Button
                      outlineWhite
                      mobile
                      outlineNav
                      onClick={handleMultipleOnClick}
                    >
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
