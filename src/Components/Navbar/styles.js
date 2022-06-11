import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
height: 60px;
display:flex;
justify-content: space-between;
padding:0.5rem;
background-color: rgb(13,13,13);
`
export const NavLink=styled(Link)`
font-size: 1rem;
text-transform: uppercase;
width: 20%;
color:rgb(255, 255, 255,70%);
align-items:center;
text-decoration:none;
font-weight: 400;
height:100%;
cursor:pointer;
display: flex;
justify-content: center;

align-content: center;
transition: background-color ease-in 0.2s ;
&.active{
  color:rgb(205, 30, 30,90%);
  font-weight: 400;
}
&:hover{
background-color: rgb(255, 255, 255,6%);

}
@media (max-width: 650px) {
font-size: 0.6rem;
}
`

export const NavMenu =styled.div`
align-items:center;
width:100%;
background-position: center;
display: flex;
`