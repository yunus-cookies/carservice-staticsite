import styled from "styled-components"

export const Spinner = styled.div`
  content: " ";
  margin: 0 auto;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const InfoSection = styled.div`
  width: 100%;
`
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`
export const InfoBox = styled.div`
  display: grid;
  place-items: center;
  width: 250px;
  color: #fff;
  height: 150px;
  font-size: 3rem;
  cursor: alias;
  p {
    display: block;
    color: #fff;
    font-size: 2rem;
  }
  @media screen and (max-width: 991px) {
    font-size: 2rem;
    width: 150px;
    height: 100px;
    p {
      font-size: 1rem;
    }
  }
`

export const Header = styled.div`
  width: 100%;
`

export const HeaderWrap = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  p {
    width: 90%;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  h1 {
    width: 90%;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    p {
      font-size: 1rem;
    }
    h1 {
      font-size: 2rem;
    }
  }
`

export const ContactSection = styled.div`
  padding-top: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin: 0 auto;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
`
export const ContactOuterWrapper = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`

export const ContactForm = styled.form`
  width: 100%;
  height: 100%;
  border-radius: 50px 50px 0 0;
  background: #fff;
  padding: 25px;
  margin: 0 auto;
  @media screen and (min-width: 991px) {
  }
`

export const Group = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 0 25px;
  width: 90%;
  border-radius: 4px;
  border: none;
  font-size: 2rem;
  transition: ease 0.3s all;
  cursor: pointer;
  &:focus {
    cursor: text;
    background-color: rgba(0, 0, 0, 0.3);
    &::placeholder {
      color: rgb(36, 36, 36);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    &::placeholder {
      color: rgb(36, 36, 36);
    }
  }
  &:not(:placeholder-shown) {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const Submit = styled.button`
  background-color: #242424;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
  float: right;
  border: none;
  color: #f9f9f9;
  margin: 0 0 5px;
  padding: 15px;
  font-size: 2rem;
  transition: 0.3s all ease;
  margin: 0 auto;
  &:hover {
    background-color: #f00946;
    transition: 0.3s all ease;
    border: none;
    color: #f9f9f9;
    transform: scale(1.01);
  }
  p {
    width: 100%;
    height: 40px;
  }
`

export const SubmitWrap = styled.div`
  width: 90%;
`

export const Textarea = styled.textarea`
  background-color: rgba(0, 0, 0, 0.1);
  height: 350px;
  max-width: 90%;
  resize: none;
  width: 90%;
  font-size: 2rem;
  padding: 10px;
  margin: 0 0 15px;
  border: none;
  border-radius: 4px;
  transition: ease 0.3s all;
  cursor: pointer;
  &:focus {
    cursor: text;
    background-color: rgba(0, 0, 0, 0.3);
    &::placeholder {
      color: rgb(36, 36, 36);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    &::placeholder {
      color: rgb(36, 36, 36);
    }
  }
  &:not(:placeholder-shown) {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
