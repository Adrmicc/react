import styled from "styled-components";

const Card = styled.div`
  background-color: rgb(0, 0, 0, 100%);
  display: flex;
  color: white;
  align-content: center;
  justify-content: center;
  text-align: left;
  transition: all 0.1s linear;
  &:hover
  {
    transform: scale(1.1);

  }
  @media (max-height: 690px) {
    min-width: 245px;
  }
  @media (max-width: 768px) and (max-height: 911px) {
    min-width: 245px;
  }
`;
export const Element1 = styled(Card)`
  grid-area: a1;
`;
export const Element2 = styled(Card)`
  grid-area: a2;
`;
export const Element3 = styled(Card)`
  grid-area: a3;
`;
export const Element4 = styled(Card)`
  grid-area: a4;
`;
export const Element5 = styled(Card)`
  grid-area: a5;
`;
export const Element6 = styled(Card)`
  grid-area: a6;
`;

export const GridContainer = styled.div`
  padding: 15px;
  height: 70%;
  width: 70%;
  min-height: 220px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3% 2%;
  grid-auto-flow: row;
  align-items: stretch;
  grid-template-areas:
    "a1 a2 a3"
    "a4 a5 a6";
  background-color: rgb(40, 40, 40, 60%);
  border: 4px rgb(13, 13, 13) solid;
  @media (max-width: 605px) {
      width:80%
  }
  
  @media (max-width: 768px) {
    grid-template-areas:
      "a1 a2"
      "a3 a4"
      "a5 a6";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media (max-height: 690px) {
    grid-template-areas:
      "a1 a2 a3 a4 a5 a6";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    overflow: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar-thumb{
        background: rgb(60, 60, 60, 100%);
        border-radius: 99px;
    }
    ::-webkit-scrollbar{
        background: rgb(40, 40, 40, 60%);

    }
  }


  @media (max-width: 768px) and (max-height: 911px) {
    grid-template-areas:
      "a1 a2 a3 a4 a5 a6";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    overflow: scroll;
    overflow-y: hidden;
    height: 50%;
    ::-webkit-scrollbar-thumb{
        background: rgb(60, 60, 60, 100%);
        border-radius: 99px;
    }
    ::-webkit-scrollbar{
        background: rgb(40, 40, 40, 60%);
    }
  }
 
`;

export const MovieContainer=styled.div`
height: 100%;
width: 100%;
display: flex;
justify-items: center;
align-items: center;
flex-direction: column;
`
export const MovieImageContainer=styled.div`
height: 80%;
width: 100%;
display:flex;
justify-items: center;
align-items: center;
`
export const MovieImage=styled.div`
width: 100%;
background: url(${(props)=>props.img});
height: 100%;
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
@media (max-width: 768px) {
  background-size: contain;
}
text-align: center;
color:transparent;
transition: all 0.3s ease-in-out;
  &:hover
  {
    color:white;
    background: none;
  }
  overflow: hidden;
`
export const MovieRatingContainer=styled.div`
display: flex;
align-items: center;
width: 100%;
height: 20%;
font-size: 0.9rem;
justify-items: space-between;
padding-inline: 10px;
`

export const MovieRating=styled.p`
width: fit-content;
color:gold;
opacity: 70%;
`
export const MovieTitle=styled.p`
display: flex;
flex-grow: 1;
font-size: 14px;
font-weight: bold;
`
export const MovieDescription=styled.p`
padding: 1%;
overflow: scroll;
overflow-x: hidden;
max-height: 100%;
font-size: 16px;
font-weight: 300;
@media (max-width: 1100px) {
font-size: 12px;
}
::-webkit-scrollbar{
    width: 0%;
}

`