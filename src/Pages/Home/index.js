import styled from 'styled-components'
import React from 'react'
import { FaFilm as F } from "react-icons/fa";
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; 
  width: 100%;
`
const Card = styled.div`
  padding:10px;
  background-color: rgb(255, 255, 255,15%);
  display: flex;
  align-items: center;
  justify-content: center;
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
const Element2 = styled(Card)`grid-area: a2;
font-weight: 200;
text-align: center;
`


const GridContainer = styled.div`
padding: 15px;
height: 70%;
width: 70%;
display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2% 2%;
  grid-auto-flow: row;
  align-items: stretch;
  grid-template-areas:
    "a1 a1 a1"
    "a2 a2 a2"
    "a2 a2 a2";
  background-color: rgb(60, 60, 60, 100%);
  border: 4px rgb(13, 13, 13) solid;
  `

export default function Home() {
    return (
 <HomeContainer>
      <GridContainer>
            <Element1><F/>&nbsp;Strona główna</Element1>
            <Element2>Tutaj znajduje sie strona głowna</Element2>
        </GridContainer>
    </HomeContainer>
    )
  }
  