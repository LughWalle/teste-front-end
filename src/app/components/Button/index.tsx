import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  onClick?: VoidFunction;
  href?: string; // Adicione a prop "href" opcional
  children: React.ReactNode;
}

const buttonStyles: { [key: string]: React.CSSProperties } = {
  primary: {
    backgroundColor: 'blue',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'gray',
    color: 'white',
  },
  danger: {
    backgroundColor: 'red',
    color: 'white',
  },
};

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  href,
  ...rest
}) => {
  return href ? (
    <Link
      href={href}
      {...rest}
      style={{
        ...buttonStyles[variant],
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none', // Remova a sublinhado do link
        display: 'inline-block', // Garante que o link se comporte como um botão
      }}
    >
      {children}
    </Link>
  ) : (
    <button
      style={{
        ...buttonStyles[variant],
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
