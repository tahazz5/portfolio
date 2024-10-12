// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Taha Aubouhan</h1>
            <p>Grenoble, France | <a href="mailto:taha.aubouhan@grenoble-inp.org">taha.aubouhan@grenoble-inp.org</a></p>
            <p><a href="https://linkedin.com/in/taha-aubouhan-234a9326a" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </motion.header>
    );
};

export default Header;
