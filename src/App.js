import './App.css';
import React from 'react';
import Nav1 from './components/navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import Artists from './pages/artists';
import Piercers from './pages/piercers';
import About from './pages/about';
import Footer from './components/footer';
import PhotoLibrary from './pages/photolibrary';
import Contact from './pages/contact';
import TattooRodeo from './pages/tattoorodeo';
import Party from './pages/party';
import Events from './pages/events';


function App() {
  return (
    <div className="App">
      <Nav1/>
      <div className='header1'>  
        <Header/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Routes>
          <Route path='/artists' element={<Artists />}/>
        </Routes>
        <Routes>
          <Route path='/piercers' element={<Piercers/>}/>
        </Routes>
        <Routes>
          <Route path='/aboutus' element={<About/>}/>
        </Routes>
        <Routes>
          <Route path='/photolibrary' element={<PhotoLibrary/>}/>
        </Routes>
        <Routes>
          <Route path = '/contactus' element={<Contact/>}/>
        </Routes>
        <Routes>
          <Route path = '/tattooRodeo' element={<TattooRodeo/>}/>
        </Routes>
        <Routes>
          <Route path='/afterParty' element={<Party/>}/>
        </Routes>
        <Routes>
          <Route path='/events' element={<Events/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
