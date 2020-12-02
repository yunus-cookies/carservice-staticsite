import React, { useEffect } from "react"
import { OpenModal, CloseModal, Exit } from "./ModalElements"

const Modal = ({ children, open, onClose, controlModal }) => {
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset")
  }, [open])
  if (!controlModal) return null

  return (
    <>
      {open ? (
        <OpenModal>
          <Exit style={{ color: "black" }} onClick={onClose} />
          {children}
        </OpenModal>
      ) : (
        <CloseModal />
      )}
    </>
  )
}
export default Modal
