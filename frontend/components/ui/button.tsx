import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
}) => {
  const buttonClasses = `
    px-4 py-2 rounded-md
    ${variant === 'primary' ? 'bg-blue-500 text-white' : ''}
    ${variant === 'secondary' ? 'bg-gray-500 text-white' : ''}
    ${variant === 'ghost' ? 'bg-transparent text-gray-500' : ''}
  `;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
