import React from 'react';

interface CardProps {
  color: string;
  height: string | number;
  width: string | number;
  borderRadius: string | number;
  x?: number;
  y?: number;
  children?: React.ReactNode; // Corrected to include children
}

const Card: React.FC<CardProps> = ({
  color,
  height,
  width,
  borderRadius,
  x = 0,
  y = 0,
  children,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: color,
    height,
    width,
    borderRadius,
    position: 'absolute',
    left: x,
    top: y,
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
