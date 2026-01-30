import './SearchBtn.css';

interface SearchFilterButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  className?: string;
}

export const SearchFilterButton = ({
  children,
  disabled = false,
  onClick,
  type = 'button',
  href,
  className,
}: SearchFilterButtonProps) => {
  if (href) {
    return (
      
<a
  href={disabled ? undefined : href}
  className={`root ${className || ''}`}
  onClick={onClick}
  aria-disabled={disabled}
  tabIndex={disabled ? -1 : 0}
>
  {children}
</a>
    );
  }
  return (
    <button
      type={type}
      className={`root ${className || ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};