import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PetsList from './components/PetsList';
import Home from './components/Home';
import logo from './img/eulerity-logo.png';
import './App.css';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
        </header>
        <div className='App-body'>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/pets' element={<PetsList/>}/>
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
