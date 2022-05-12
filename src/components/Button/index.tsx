import React from 'react';

interface ButtonCommon {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  color?: 'white' | 'primary' | 'red' | 'gray' | 'dark' | 'link' | 'pink';
  style?: object;
  onClick?: () => void;

  outline?: boolean;
  rounded?: boolean;

  block?: boolean;
  size?: 'lg' | 'sm';
}

const ButtonCommon: React.FC<ButtonCommon> = ({
  type = 'button',
  children,
  color,
  style,
  onClick,
  outline,
  rounded,
  disabled,
  size,
  block,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
      btn 
      btn${outline ? '-outline' : ''}-${color}
    `}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
    // <button type="button" className="btn btn-outline-primary">
    //   {children}
    // </button>
  );
};
export default ButtonCommon;
