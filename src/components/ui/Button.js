import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-55';

  const variants = {
    primary:
      'bg-[linear-gradient(135deg,var(--primary-500),var(--accent-500))] text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:brightness-105 focus:ring-[var(--primary-300)]',
    secondary:
      'bg-[rgba(39,118,91,0.12)] text-[var(--secondary-500)] border border-[rgba(39,118,91,0.18)] hover:bg-[rgba(39,118,91,0.18)] focus:ring-[var(--secondary-200)]',
    success:
      'bg-[var(--success-500)] text-white shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:brightness-105 focus:ring-[rgba(36,154,99,0.2)]',
    outline:
      'bg-white/50 text-[var(--foreground)] border border-[var(--border-strong)] hover:border-[var(--primary-300)] hover:bg-white focus:ring-[var(--primary-200)]',
    ghost:
      'text-[var(--foreground-soft)] hover:bg-white/60 hover:text-[var(--foreground)] focus:ring-[var(--primary-200)]',
    danger:
      'bg-[var(--danger-500)] text-white shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:brightness-105 focus:ring-[rgba(212,79,69,0.2)]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm sm:text-base',
    lg: 'px-6 py-3 text-base',
    xl: 'px-7 py-3.5 text-base sm:text-lg'
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
          <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
