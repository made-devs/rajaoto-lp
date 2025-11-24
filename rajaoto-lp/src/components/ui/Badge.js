import React from 'react';

const Badge = ({ badgeText }) => {
  return (
    <span className="inline-block bg-yellow-500 text-black font-bold text-xs px-2 py-1 rounded-full">
      {badgeText}
    </span>
  );
};

export default Badge;