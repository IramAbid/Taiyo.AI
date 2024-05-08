import React, { ReactNode } from 'react';

interface CardProps {
  color: string;
  height: string | number;
  width: string | number;
  borderRadius: string | number;
  style?: React.CSSProperties;
  children?: ReactNode; // Define children prop
}

const Card: React.FC<CardProps> = ({
  color,
  height,
  width,
  borderRadius,
  style,
  children // Include children prop
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: color,
    height,
    width,
    borderRadius,
    position: 'absolute',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    ...style // Spread the style prop
  };

  return (
    <div className="flex justify-center items-center h-screen w-full sm:w-5/6 mt-8 mb-4 p-4 ml-auto sm:pr-20 sm:pl-20 pb:10 sm:pb-20">
      <div style={cardStyle}>{children}</div>
    </div>
  );
};

export default Card;
