// src/components/Objective.js
import React from 'react';
import { motion } from 'framer-motion';
import './Objective.css';

const Objective = () => {
    return (
        <motion.section
            id="objective"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Objective</h2>
            <p>
                Ingénieur spécialisé en systèmes embarqués et objets connectés, avec une solide formation en intelligence artificielle et développement logiciel. Expérience en STM32, FreeRTOS, Node-RED, et TensorFlow.
            </p>
        </motion.section>
    );
};

export default Objective;
