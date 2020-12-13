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

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 991) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
    window.addEventListener("resize", showButton)
    return () => {
      window.removeEventListener("resize", showButton)
    }
  }, [])

  return (
    <>
      <IconContext.Provider
        value={click ? { color: "#fff" } : { color: "#242424" }}
      >
        <Nav isClick={click}>
          <NavContainer container>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              <p style={click ? { color: "#fff" } : { color: "#242424" }}>
                A.J Autoservice
              </p>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes style={{ color: "#fff" }} /> : <RiMenu3Line />}
            </MobileIcon>
            <NavMenu isClick={click} active>
              <NavItem>
                <NavLink to="/om">Om</NavLink>
                {click}
              </NavItem>
              <NavItem>
                <NavLink to="/ydelser">Ydelser</NavLink>
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
