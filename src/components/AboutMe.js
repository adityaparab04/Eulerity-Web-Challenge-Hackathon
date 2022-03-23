import React from "react";
import '../App.css'

const AboutMe = () => {
    return (
        <div className="aboutMe-container">
            <h1 className="headingName">About Me</h1>
            <p className="intro-p">I am a Graduate student at Stevens Institute of Technology pursuing masters in Computer Science. My interests lie in Web Development, frontend, backend and full stack as well. I have done MERN stack projects. Please feel free to check my github account and go through them. I am open to work and eager for oprotunities in the web dev related fields. I also document my daily coding journey on twitter.</p>
            <p className="more-intro">Apart from my projects I use javascript to solve leet code problems. I really enjoy learning data structures in javascript. Recently I also started diving deep in react because of my web programming course in Stevens. This position for react developer made me compulsive and I feel I could do a better job.</p>
            <div class="bottom-container">
                <a class="footer-link" href="https://www.linkedin.com/in/adityaparab04/">LinkedIn</a>
                <a class="footer-link" href="https://twitter.com/AdityaParab4">Twitter</a>
                <a class="footer-link" href="https://github.com/adityaparab04">Github</a>
                <p class="copyright">© Aditya Parab.</p>
            </div>
        </div>
    )
}

export default AboutMe;