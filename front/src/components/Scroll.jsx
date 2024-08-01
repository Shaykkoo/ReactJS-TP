// SmoothScrollComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SmoothScrollComponent = ({ children, delay = 0.3 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScrollComponent;