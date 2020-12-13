import { FaTimes } from "react-icons/fa"
import styled from "styled-components"

export const OpenModal = styled.div`
  background: #242424;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  z-index: 1000;
  overflow: scroll;

  animation-name: openModal;
  animation-timing-function: ease-in;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  @keyframes openModal {
    0% {
      background-color: rgb(240, 240, 240);
      height: 0;
      width: 0;
    }
    50% {
      background-color: rgb(240, 240, 240);
      height: 1px;
      width: 100%;
    }
    100% {
      height: 100%;
      width: 100%;
    }
  }
`

export const CloseModal = styled.div`
  background: rgb(240, 240, 240);
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  animation-name: closeModal;
  animation-timing-function: ease-out;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  @keyframes closeModal {
    0% {
      height: 100%;
      width: 100%;
    }
    50% {
      height: 1px;
      width: 100%;
    }
    75% {
      width: 0;
      height: 1px;
    }
    100% {
      width: 0;
      height: 0;
    }
  }
`

export const Exit = styled(FaTimes)`
  height: 40px;
  opacity: 1;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
  width: 40px;
  transition: ease 0.5s all;
  color: #fff;
  background-color: white;
  border-radius: 4px;
  &:hover {
    transition: ease 0.5s all;
    transform: scale(1.3);
  }
`
