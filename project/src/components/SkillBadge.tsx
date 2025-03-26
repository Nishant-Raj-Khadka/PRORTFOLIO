import React from 'react';

interface SkillBadgeProps {
  text: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ text }) => {
  return (
    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium transform hover:scale-110 transition-transform duration-300">
      {text}
    </span>
  );
};

export default SkillBadge;