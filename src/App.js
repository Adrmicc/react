import React from "react";
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Layout from "./Components/Layout";
import Home from './Pages/Home'
import Akcja from './Pages/Akcja'
import Horror from './Pages/Horror'
import Scifi from './Pages/Scifi'
import Kontakt from './Pages/Kontakt'
import Login from './Pages/Login'
function App() {
  return (
<div className="App">
  <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Layout Page={Home}/>}/>
    <Route exact path='/akcja' element={<Layout Page={Akcja}/>}/>
    <Route exact path='/horror' element={<Layout Page={Horror}/>}/>
    <Route exact path='/sci-fi' element={<Layout Page={Scifi}/>}/>
    <Route exact path='/kontakt' element={<Layout Page={Kontakt}/>}/>
    <Route exact path='/login' element={<Layout Page={Login}/>}/>
    </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
