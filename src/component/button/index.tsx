import React from 'react';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ElementType;
  position: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  icon: Icon,
  position,
}) => {
  const posClass = position === 'left' ? 'left-4' : 'right-4';

  return (
    <button
      onClick={onClick}
      type="button"
      className={`absolute ${posClass} top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-700 bg-opacity-50 text-white rounded-full p-2 hover:bg-white hover:text-gray-800`}
    >
      <Icon />
    </button>
  );
};
