// src/components/Interests.js
import React from 'react';
import { motion } from 'framer-motion';
import './Interests.css';

const Interests = () => {
    return (
        <motion.section
            id="interests"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Interests</h2>
            <ul>
                <li>Sports: Football, Natation</li>
                <li>Associatif: Participation aux examens préparatoires pour CPGE et Baccalauréat</li>
            </ul>
        </motion.section>
    );
};

export default Interests;
