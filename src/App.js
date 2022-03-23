import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PetsList from './components/PetsList';
import Home from './components/Home';
import logo from './img/eulerity-logo.png';
import './App.css';
import NotFound from './components/NotFound';
import Pet from './components/Pet';
import AboutMe from './components/AboutMe'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
          <br/>
          <br/>
          <Link className='navLink' to='/pets'>Pets</Link>
          <Link className='navLink' to='/about-me'>About Me</Link>
        </header>
        <div className='App-body'>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/pets' element={<PetsList/>}/>
            <Route path='/pets/:title' element={<Pet/>}/>
            <Route path='/about-me' element={<AboutMe/>}/>
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
