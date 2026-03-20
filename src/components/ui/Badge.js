import React from 'react';

const Badge = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full border font-semibold tracking-[0.01em]';
  const variants = {
    primary: 'border-[rgba(217,91,30,0.14)] bg-[rgba(255,240,218,0.88)] text-[var(--primary-600)]',
    secondary: 'border-[rgba(39,118,91,0.14)] bg-[rgba(231,244,238,0.92)] text-[var(--secondary-500)]',
    success: 'border-[rgba(36,154,99,0.14)] bg-[rgba(218,245,232,0.92)] text-[var(--success-500)]',
    accent: 'border-[rgba(106,57,216,0.14)] bg-[rgba(239,230,255,0.92)] text-[var(--accent-500)]',
    outline: 'border-[var(--border-strong)] bg-white/35 text-[var(--foreground-soft)]'
  };
  const sizes = {
    sm: 'px-2.5 py-1 text-[11px]',
    md: 'px-3 py-1.5 text-xs',
    lg: 'px-3.5 py-1.5 text-sm'
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
