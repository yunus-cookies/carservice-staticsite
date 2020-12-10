import React, { useState } from "react"
import { FaPhone, FaAddressBook } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import {
  ContactSection,
  ContactWrapper,
  ContactForm,
  ContactOuterWrapper,
  Group,
  Header,
  HeaderWrap,
  Input,
  Submit,
  SubmitWrap,
  Textarea,
  InfoSection,
  InfoContainer,
  InfoBox,
  Spinner,
} from "./ContactElements"

const Contact = () => {
  const [mail, setMail] = useState(false)
  const [phone, setPhone] = useState(false)
  const [address, setAddress] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [text, setText] = useState("")

  const [status, setStatus] = useState("")
  const [spinner, setSpinner] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSpinner(true)
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
        setSpinner(false)
        setName("")
        setEmail("")
        setNumber("")
        setText("")
      } else {
        setStatus("ERROR")
        setSpinner(false)
      }
    }
    xhr.send(data)
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handleNumberChange = e => {
    setNumber(e.target.value)
  }
  const handleTextChange = e => {
    setText(e.target.value)
  }

  return (
    <>
      <InfoSection>
        <InfoContainer>
          <InfoBox
            onMouseEnter={() => setMail(true)}
            onMouseLeave={() => setMail(false)}
          >
            {mail ? <p>aj@autoservice.dk</p> : <IoMdMail />}
          </InfoBox>
          <InfoBox
            onMouseEnter={() => setPhone(true)}
            onMouseLeave={() => setPhone(false)}
          >
            {phone ? <p>+4571717171</p> : <FaPhone />}
          </InfoBox>
          <InfoBox
            onMouseEnter={() => setAddress(true)}
            onMouseLeave={() => setAddress(false)}
          >
            {address ? <p>Taastrup 2630</p> : <FaAddressBook />}
          </InfoBox>
        </InfoContainer>
      </InfoSection>
      <ContactSection>
        <ContactForm
          action="https://formspree.io/f/xoqpnvwb"
          method="POST"
          onSubmit={handleSubmit}
        >
          <Header>
            <HeaderWrap>
              <h1>Vi vil meget gerne høre fra dig!</h1>
            </HeaderWrap>
            <HeaderWrap>
              <p>Venligst udfyld nedenstående felter</p>
            </HeaderWrap>
          </Header>
          <ContactOuterWrapper>
            <ContactWrapper>
              <Group>
                <Input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Navn"
                  name="name"
                  required
                />
              </Group>
              <Group>
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  name="email"
                  required
                />
              </Group>
              <Group>
                <Input
                  type="tel"
                  value={number}
                  onChange={handleNumberChange}
                  placeholder="Nummer"
                  name="number"
                  required
                />
              </Group>
            </ContactWrapper>
            <ContactWrapper>
              <Group>
                <Textarea
                  value={text}
                  onChange={handleTextChange}
                  placeholder="Skriv en besked"
                  name="message"
                  required
                />
              </Group>
              <Group>
                <SubmitWrap>
                  {status === "SUCCESS" ? (
                    <p>Tak for din besked!</p>
                  ) : (
                    <Submit type="submit" disabled={spinner}>
                      {spinner ? <Spinner /> : <p>Send</p>}
                    </Submit>
                  )}
                  {status === "ERROR" && (
                    <p>Ooops! Der opstod en fejl. Venligst prøv igen.</p>
                  )}
                </SubmitWrap>
              </Group>
            </ContactWrapper>
          </ContactOuterWrapper>
        </ContactForm>
      </ContactSection>
    </>
  )
}

export default Contact
