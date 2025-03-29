import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import "../styles/Main.css";

const Main = () => {
    return (
        <div className="hero-container">
          <motion.p
            className="created-by"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Creador por <strong>Josue de Jesús</strong>, <strong>Dessire Ochoa</strong>, <strong>Lizzie Juarez</strong>, y <strong>Nelson</strong>
          </motion.p>
    
          <motion.h1
            className="hero-title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Proyecto: Sistemas Operativos 2
          </motion.h1>
    
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Modulos a evaluar
          </motion.p>
    
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Button type="default" size="large">
            <a href="/moodle">Moodle</a>
            </Button>
            <Button type="default" size="large">
              <a href="/squirrelmail">Squirrelmail</a>
            </Button>
          </motion.div>
        </div>
      );
};

export default Main;
