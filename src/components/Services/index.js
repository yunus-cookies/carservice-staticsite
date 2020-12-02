import React from "react"
import { Button } from "../ButtonElements"
import {
  ServiceSection,
  ServiceContainer,
  ServiceRow,
  ServiceCol,
  ServiceWrapper,
} from "./ServicesElements"

const Services = () => {
  return (
    <>
      <ServiceSection>
        <ServiceContainer>
          <ServiceRow>
            <ServiceCol>
              <ServiceWrapper style={{ transform: "scale(1.2)" }}>
                <h3>Ydelse 1</h3>
                <p>Hellooo det her er ydelse 1. Meget god ydelse.</p>
                <Button>Kontakt os</Button>
              </ServiceWrapper>
            </ServiceCol>
            <ServiceCol>
              <ServiceWrapper>
                <h3>Ydelse 2</h3>
                <p>Hellooo det her er ydelse 2. Meget god ydelse.</p>
                <Button>Kontakt os</Button>
              </ServiceWrapper>
            </ServiceCol>
            <ServiceCol>
              <ServiceWrapper style={{ transform: "scale(1.2)" }}>
                <h3>Ydelse 3</h3>
                <p>Hellooo det her er ydelse 3. Meget god ydelse.</p>
                <Button>Kontakt os</Button>
              </ServiceWrapper>
            </ServiceCol>
            <ServiceCol>
              <ServiceWrapper>
                <h3>Ydelse 4</h3>
                <p>Hellooo det her er ydelse 4. Meget god ydelse.</p>
                <Button>Kontakt os</Button>
              </ServiceWrapper>
            </ServiceCol>
          </ServiceRow>
          <ServiceRow>
            <ServiceCol>
              <ServiceWrapper>
                <h3>Ydelse 1</h3>
                <p>Hellooo det her er ydelse 1. Meget god ydelse.</p>
                <Button>Kontakt os</Button>
              </ServiceWrapper>
            </ServiceCol>
            <ServiceCol>
              <ServiceWrapper style={{ transform: "scale(1.2)" }}>
                <h3>Ydelse 2</h3>
                <p>Hellooo det her er ydelse 2. Meget god ydelse.</p>
                <Button>Kontakt os</Button>
              </ServiceWrapper>
            </ServiceCol>
            <ServiceCol>
              <ServiceWrapper>
                <h3>Ydelse 3</h3>
                <p>Hellooo det her er ydelse 3. Meget god ydelse.</p>
                <Button>Kontakt os</Button>
              </ServiceWrapper>
            </ServiceCol>
            <ServiceCol>
              <ServiceWrapper style={{ transform: "scale(1.2)" }}>
                <h3>Ydelse 4</h3>
                <p>Hellooo det her er ydelse 4. Meget god ydelse.</p>
                <Button>Kontakt os</Button>
              </ServiceWrapper>
            </ServiceCol>
          </ServiceRow>
        </ServiceContainer>
      </ServiceSection>
    </>
  )
}

export default Services
