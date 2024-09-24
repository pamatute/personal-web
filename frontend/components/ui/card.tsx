import React from 'react';

export interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="bg-white rounded-md shadow-md p-4">{children}</div>;
};

export interface CardHeaderProps {
  title: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title }) => {
  return <h3 className="text-lg font-semibold mb-2">{title}</h3>;
};

export interface CardContentProps {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="text-gray-700">{children}</div>;
};
