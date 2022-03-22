import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import NotFound from './NotFound';

const Home = () => {
    return(
        <div>
        <h2 className='App-title'>
            Welcome to Eulerity Pawstagram.
        </h2>
        <p>Here you can browse through different furry little friends. Check out their photos and have a good time.
        </p>
        <p>The pictures are uploaded on daily basis and you can click below to check the latest uploads of your..
        </p>
        <Link className='navLink' to='/pets'>Click me</Link>
        </div>
    )
}

export default Home;