import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

const Card3D = ({ children, className = '' }: Card3DProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-navy-500/20 rounded-2xl blur-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card3D;
