// src/App.js
import React from 'react';
import Header from './components/Header';
import Objective from './components/Objective';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interests from './components/Interests';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Objective />
            <Education />
            <Projects />
            <Experience />
            <Skills />
            <Interests />
        </div>
    );
}

export default App;
