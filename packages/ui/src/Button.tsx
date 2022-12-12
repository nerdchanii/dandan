import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}


const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button;