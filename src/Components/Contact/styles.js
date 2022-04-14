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
`
export const Textarea=styled.textarea`
max-width:300px;
resize: none;
margin-top:6px;
`
export const Button=styled.button`
width:200px;
margin-top:6px;
`