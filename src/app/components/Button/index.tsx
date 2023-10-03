import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'link';
  onClick?: VoidFunction;
  href?: string; // Adicione a prop "href" opcional
  children: React.ReactNode;
  className?: string;
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
  variant = 'primary',
  type = 'button',
  onClick,
  children,
  href,
  className,
  ...rest
}) => {
  return href ? (
    <Link
      href={href}
      className={cn(className, styles[type], styles[variant])}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <button
      className={cn(className, styles[type], styles[variant])}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
