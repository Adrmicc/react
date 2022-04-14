import React from 'react'
import styled from 'styled-components'
import Contact from '../../Components/Contact'
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`
const Card = styled.div`
  padding:10px;
  background-color: rgb(40,40,40,60%);
  align-items: center;
  display: flex;
  flex-direction: column;

`
const Element1 = styled(Card)`grid-area: a1;
font-size: 50px;
font-weight: 200;
@media (max-width: 608px) {
  font-size: 30px;
}
@media (max-width: 398px) {
  font-size: 26px;
}
`


const GridContainer = styled.div`
padding: 15px;
height: 70%;
width: 50%;
min-height: 500px;
flex-direction: column;
display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 2% 2%;
  grid-auto-flow: row;
  align-items: stretch;
  grid-template-areas:
    "a1";
    background-color: rgb(40,40,40,60%);
    border: 4px rgb(13,13,13) solid;
  @media (max-width: 600px) {
  width: 90%;
}
@media (max-height: 780px) {
  height: 90%;
}
  `
const KontaktContainer = styled.div`
display: flex;
height: max-content;
justify-content: center;
text-align: center;
color:white;
max-width:320px;
`
const FormContainer = styled.div`
height: fit-content;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export default function Kontakt() {
  return (
  <HomeContainer>
    <GridContainer>
          <Element1><KontaktContainer>Kontakt</KontaktContainer><FormContainer><Contact/></FormContainer></Element1>
      </GridContainer>
  </HomeContainer>
  )
}
