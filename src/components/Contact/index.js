import React, { useState, useEffect, useRef } from "react"
import { FaTimes, FaPhone, FaAddressBook } from "react-icons/fa"
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
  Checkboxes,
  ErrorMessage,
} from "./ContactElements"

const Contact = () => {
  /** Init All services and inputs  */
  const initialServices = [
    { id: 1, value: "Optjek", isChecked: false },
    { id: 2, value: "Dæk", isChecked: false },
    { id: 3, value: "Motorfejl", isChecked: false },
    { id: 4, value: "Interior", isChecked: false },
    { id: 5, value: "Elektronik", isChecked: false },
    { id: 6, value: "Andet", isChecked: false },
  ]
  const initialInputs = {
    name: "",
    email: "",
    number: "",
    message: "",
  }

  /** ref each input box to watch if invalid or not (empty) */
  const contactRef = useRef()

  const [services, setServices] = useState(initialServices)
  const [inputs, setInputs] = useState(initialInputs)

  /** Since useeffect doesn't fire when nested object are changed
   * I added a state to the useeffect to handle the gun fire.
   */
  const [checkObjChange, setCheckObjChange] = useState(0)

  /** For infoboxes in contact */
  const [mail, setMail] = useState(false)
  const [phone, setPhone] = useState(false)
  const [address, setAddress] = useState(false)

  /** Status and spinner for submit */
  const [status, setStatus] = useState("")
  const [spinner, setSpinner] = useState(false)

  /** State for handling whether one or more checkbox is set or not */
  const [oneCheckbox, setOneCheckbox] = useState(false)

  /** State for handling error message if user input fields are missing */
  const [showError, setShowError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (!oneCheckbox || !contactRef.current.value) {
      setShowError(true)
    } else {
      setShowError(false)
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
          setInputs(initialInputs)
          setServices(initialServices)
        } else {
          setStatus("ERROR")
          setSpinner(false)
        }
      }
      xhr.send(data)
    }
  }

  useEffect(() => {
    services.some(service => service.isChecked)
      ? setOneCheckbox(true)
      : setOneCheckbox(false)
  }, [services, checkObjChange])

  /** [name] works as a dynamic key in object. */
  const handleInputElements = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleCheckElements = e => {
    let updatedServices = services
    updatedServices.forEach(service => {
      if (Number(service.id) === Number(e.target.id)) {
        service.isChecked = e.target.checked
        setCheckObjChange(checkObjChange + 1)
      }
    })
    setServices(updatedServices)
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
              {showError && (
                <ErrorMessage>
                  Et eller flere felter mangler
                  <FaTimes
                    onClick={() => setShowError(false)}
                    style={{ cursor: "pointer" }}
                  />
                </ErrorMessage>
              )}
            </HeaderWrap>
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
                  value={inputs.name}
                  onChange={handleInputElements}
                  placeholder="Navn*"
                  name="name"
                  ref={contactRef}
                />
              </Group>
              <Group>
                <Input
                  type="email"
                  value={inputs.email}
                  onChange={handleInputElements}
                  placeholder="Email*"
                  name="email"
                  ref={contactRef}
                />
              </Group>
              <Group>
                <Input
                  type="tel"
                  value={inputs.number}
                  onChange={handleInputElements}
                  placeholder="Nummer*"
                  name="number"
                  ref={contactRef}
                />
              </Group>
              <p
                style={{
                  width: "90%",
                  margin: "0 auto",
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                }}
              >
                Vælg ydelse/ydelser*:
              </p>
              {services.map(service => {
                return (
                  <Checkboxes key={service.id}>
                    <label htmlFor={service.value}>{service.value}</label>
                    <input
                      type="checkbox"
                      id={service.id}
                      value="Ja"
                      name={service.value}
                      defaultChecked={service.isChecked}
                      onClick={handleCheckElements}
                      style={{
                        width: "max-content",
                      }}
                    />
                  </Checkboxes>
                )
              })}
            </ContactWrapper>
            <ContactWrapper>
              <Group>
                <Textarea
                  value={inputs.texts}
                  onChange={handleInputElements}
                  placeholder="Skriv en besked*"
                  name="message"
                  ref={contactRef}
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
