import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const AnimatedLogo = () => {
  return (
    <motion.div 
      className="flex items-center gap-2 cursor-pointer terminal-logo"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Terminal className="text-[#00ff00] w-6 h-6 animate-pulse" />
      <div className="relative">
        <span className="text-[#00ff00] font-bold text-xl">&gt;_</span>
        <span className="absolute -right-3 top-0 h-full w-[2px] bg-[#00ff00] animate-blink"></span>
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;