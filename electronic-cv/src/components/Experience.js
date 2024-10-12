// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Experience</h2>
            <div>
                <h4>Stagiaire Assistant Ingénieur - OCP GROUP (Jun - Sep 2023)</h4>
                <p>Développement de solutions Node-RED et algorithmes TensorFlow pour les prévisions de puissance.</p>

                <h4>Stagiaire de Fin d'Étude - Enedis (Apr - Sep 2024)</h4>
                <p>Développement de générateurs de signaux autonomes avec STM32H7 et interfaces graphiques utilisateur.</p>
            </div>
        </motion.section>
    );
};

export default Experience;
