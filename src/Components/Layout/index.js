import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer"
import styled from 'styled-components'
import bgimage from '../../img/shee.avif'
const AppInside = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`
const App = styled.div`
height: 100vh;
    min-height: 700px;
    max-height: 1070px;
  position: relative;
  background-image: url(${bgimage});
  background-size: cover;
  background-position: center;
  background-size: cover;
  &::before{
    content:"";
    height: 100%;
    width: 100%;  
    position: absolute;
    backdrop-filter: blur(1.5px) brightness(100%);
    top:0;
  }
`
const Layout = ({Page}) => {
  return (
    <>
    <App>
    <AppInside>
    <Navbar/>
    <Page/>
    <Footer/>
    </AppInside>
    </App>
    </>
  );
};

export default Layout;
