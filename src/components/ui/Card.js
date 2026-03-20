import React from 'react';

const Card = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  hover = false,
  ...props
}) => {
  const baseClasses = 'glass-panel rounded-[28px] border border-[var(--border)] text-[var(--foreground)]';
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-10'
  };
  const shadows = {
    none: '',
    sm: 'shadow-[var(--shadow-sm)]',
    md: 'shadow-[var(--shadow-md)]',
    lg: 'shadow-[var(--shadow-lg)]',
    xl: 'shadow-[var(--shadow-lg)]',
    '2xl': 'shadow-[var(--shadow-lg)]'
  };
  const hoverClasses = hover ? 'transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]' : '';

  return (
    <div className={`${baseClasses} ${paddings[padding]} ${shadows[shadow]} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-5 border-b border-[var(--border)] pb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`headline-display text-xl font-bold text-[var(--foreground)] ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`mt-2 text-sm text-[var(--foreground-muted)] ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`mt-5 flex items-center border-t border-[var(--border)] pt-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
