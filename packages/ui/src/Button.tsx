import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import './css/Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  size: 'sm' | 'md' | 'lg' | 'xl';
  priority: 'primary' | 'secondary' | 'thirtiory';
};

const Button = ({ children, onClick, size, priority, className, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} {...props} className={[size, className, priority].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
