import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded transition duration-300 ease-in-out';
  const variantStyles = variant === 'primary' 
    ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
    : 'bg-black text-white hover:bg-gray-800';

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;