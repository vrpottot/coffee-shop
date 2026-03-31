interface ButtonProps {
  children: React.ReactNode;
  appearance?: 'primary' | 'secondary' | string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large' | string;
}

import './Button.css';

export const Button = ({
  children,
  appearance = 'primary',
  disabled = false,
  onClick,
  type = 'button',
  href,
  className,
  size = 'small'
}: ButtonProps) => {
  if (href) {
    return (
      
<a href={href}
   className={`root ${appearance} ${size} ${className || ''}`}
   onClick={onClick}
   aria-disabled={disabled}
   role="link"
   tabIndex={disabled ? -1 : undefined}
>
   {children}
</a>
    );
  }
  return (
    <button type={type} className={`root ${appearance} ${size} ${className || ''}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};