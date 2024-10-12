// src/components/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    return (
        <motion.section
            id="education"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Education</h2>
            <ul>
                <li><strong>Grenoble INP-Phelma (2021 - Present)</strong> - Systèmes Embarqués et Objets Connectés (SEOC)</li>
                <li><strong>Classes Préparatoires (2019 - 2021)</strong> - Mathématiques, Physique (MP)</li>
                <li><strong>Baccalauréat (2018 - 2019)</strong> - Sciences Mathématiques, avec mention</li>
            </ul>
        </motion.section>
    );
};

export default Education;
