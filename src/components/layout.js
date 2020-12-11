import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./NavBar"
import Footer from "./Footer"
import { AnimatePresence, motion } from "framer-motion"
import Portal from "./Portal.js"
import Modal from "./Modal"
import Contact from "./Contact"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  // When Modal component is rendered,
  // controlModal is always true, but closeModal only re-renders,
  // when portal re-renders, which only happens,
  // when Modal is re-rendered.
  // Bit hacky, but works.
  const [controlModal, setControlModal] = useState(false)

  const handleMultipleOnClick = () => {
    setOpen(true)
    setControlModal(true)
  }
  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { handleMultipleOnClick })
  })

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Navbar handleMultipleOnClick={handleMultipleOnClick} />
          <main className="main">{childrenWithProps}</main>
          <Footer />
        </motion.div>
      </AnimatePresence>
      <Portal>
        <Modal
          controlModal={controlModal}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Contact />
        </Modal>
      </Portal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
