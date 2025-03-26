import React from 'react';
import { motion } from 'framer-motion';

interface ProfileHeaderProps {
  name: string;
  title: string;
  imageUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, title, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative mb-6 rounded-full overflow-hidden"
        style={{
          width: '200px',
          height: '200px',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 border-2 border-[#00ff00] rounded-full"></div>
      </motion.div>
      
      <h1 
        className="text-5xl md:text-7xl font-bold mb-6 text-[#ccd6f6] glitch" 
        data-text={name}
      >
        {name}
      </h1>
      
      <div className="flex items-center gap-2 text-xl md:text-2xl mb-8 text-[#8892b0]">
        <span className="text-[#00ff00]">&gt;</span>
        <span>{title}</span>
        <span className="cursor">|</span>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;