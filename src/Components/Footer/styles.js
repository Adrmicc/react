import styled from 'styled-components'
import { SiInstagram as I } from "react-icons/si";
import { SiFacebook as  F} from "react-icons/si";
import { SiTwitter as T } from "react-icons/si";
export const Stopka = styled.div`
height: 50px;
width: 100%;
padding-inline: 20px;
background-color: rgb(13,13,13);
display: flex;
`
export const Copy = styled.div`
display: flex;
flex-grow: 1;
height: 100%;
font-size: 16px;
color: rgb(128,128,128);
align-items: center;
`
export const Social = styled.div`
height: 100%;
align-items: center;
justify-content: space-between;
display: flex;
width: 120px;

@keyframes colorRotate {
  from {
    color: #ff3399;
  }
  10% {
    color: #0099ff;
  }
  50% {
    color: #00ff00;
  }
  75% {

    color: #6666ff;
  }
  100% {
    color: #ff3399;
  }
}
`
export const Instagram =styled(I)`
color:rgb(255, 0, 0,35%);
display: flex;
height: 100%;
&:hover{
    animation: colorRotate 3s linear 0s infinite;
}
`
export const Facebook =styled(F)`
color:rgb(255, 0, 0,35%);
height: 100%;
display: flex;
&:hover{
    animation: colorRotate 3s linear 0s infinite;
}
`
export const Twitter =styled(T)`
color:rgb(255, 0, 0,35%);
height: 100%;
display: flex;

&:hover{
    animation: colorRotate 3s linear 0s infinite;
}
`