import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import { homeObjTwo, homeObjThree } from "../utils/Data_HeroSection"
import Services from "../components/Services"
import Portal from "../components/Portal"
import Modal from "../components/Modal"
import Contact from "../components/Contact"

const IndexPage = () => {
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

  return (
    <>
      <Layout handleMultipleOnClick={handleMultipleOnClick}>
        <SEO title="Home" />
        <HeroSection
          handleMultipleOnClick={handleMultipleOnClick}
          {...homeObjTwo}
        />
      </Layout>
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

export default IndexPage
