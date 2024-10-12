// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projectList = [
        { name: "Projet Réseau (ODB)", description: "Optimisation des transferts de données dans les applications multi-niveaux (Sept - Dec 2023)." },
        { name: "Projet Full Stack", description: "Application pour connecter les salons de coiffure aux consommateurs (Mar - Mai 2023)." },
        { name: "Compilateur Java", description: "Développement d’un compilateur utilisant ANTLR4 (Jan - Feb 2023)." }
    ];

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for each project item
                    >
                        <strong>{project.name}</strong>: {project.description}
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Projects;
