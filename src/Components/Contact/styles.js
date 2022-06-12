import styled from 'styled-components'

export const Container=styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: left;
font-size: 20px;
min-height:80px;
color:rgb(255,255,255,90%); 
`
export const ContainerButton=styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
text-align: center;
font-size: 15px;
min-height: 80px;
color:rgb(255,255,255,90%); 
`

export const Form=styled.form`
width:100%;
height:100%;
max-width:320px;
padding: 10px;
background-color: rgb(20,20,20,70%);
`
export const Input=styled.input`
max-width:300px;
height: 1.6rem;
margin-top:6px;
transition-duration: .2s;
`
export const Textarea=styled.textarea`
max-width:300px;
resize: none;
margin-top:6px;
`
export const Button=styled.button`
  min-width: 200px;
  margin-top: 4%;
  margin-bottom: 7%;
  height: 1.6rem;
  max-width: 280px;
  background-color: #2c4882;
  border: 1px solid transparent;
  border-radius: .75rem;
  color: #FFFFFF;
  cursor: pointer;
  text-align: center;
  transition-duration: .2s;

  
  &:focus{
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  }
  &:hover{
    background-color: #374151;
  }
  @media (max-width: 880px) {
    max-width: 180px;
  }
  @media (max-width: 540px) {
    max-width: 140px;
  }
  @media (max-width: 375px) {
    max-width: 100px;
  }
`