import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children, handleMultipleOnClick }) => {
  return (
    <>
      <Navbar handleMultipleOnClick={handleMultipleOnClick} />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
