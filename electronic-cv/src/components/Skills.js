// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Skills</h2>
            <ul>
                <li>Programming: Python, Java, C, SQL, HTML5, CSS3, JavaScript, React</li>
                <li>Tools: STM32, Node-RED, TensorFlow, Git, VHDL, FPGA</li>
                <li>Languages: Français, Anglais (B2), Arabe Littéraire</li>
            </ul>
        </motion.section>
    );
};

export default Skills;
