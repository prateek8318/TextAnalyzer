import React from 'react';

const Input = ({
  label,
  error,
  helperText,
  icon,
  iconPosition = 'left',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const baseInputClasses =
    'w-full rounded-[20px] border border-[var(--border)] bg-white/70 px-4 py-3 text-[var(--foreground)] shadow-[var(--shadow-sm)] outline-none transition duration-200 placeholder:text-[var(--foreground-muted)] focus:border-[rgba(217,91,30,0.4)] focus:bg-white focus:ring-4 focus:ring-[rgba(217,91,30,0.08)]';
  const iconClasses = icon ? (iconPosition === 'left' ? 'pl-11' : 'pr-11') : '';
  const errorClasses = error ? 'border-[rgba(212,79,69,0.45)] focus:ring-[rgba(212,79,69,0.08)]' : '';

  return (
    <div className={`space-y-2 ${containerClassName}`}>
      {label && <label className="block text-sm font-medium text-[var(--foreground)]">{label}</label>}
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[var(--foreground-muted)]">
            {icon}
          </span>
        )}
        <input className={`${baseInputClasses} ${iconClasses} ${errorClasses} ${className}`} {...props} />
        {icon && iconPosition === 'right' && (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--foreground-muted)]">
            {icon}
          </span>
        )}
      </div>
      {error && <p className="text-sm text-[var(--danger-500)]">{error}</p>}
      {helperText && !error && <p className="text-sm text-[var(--foreground-muted)]">{helperText}</p>}
    </div>
  );
};

export const Textarea = ({
  label,
  error,
  helperText,
  className = '',
  containerClassName = '',
  rows = 4,
  ...props
}) => {
  const baseClasses =
    'w-full rounded-[24px] border border-[var(--border)] bg-white/72 px-5 py-4 text-[var(--foreground)] shadow-[var(--shadow-sm)] outline-none transition duration-200 placeholder:text-[var(--foreground-muted)] focus:border-[rgba(217,91,30,0.4)] focus:bg-white focus:ring-4 focus:ring-[rgba(217,91,30,0.08)]';
  const errorClasses = error ? 'border-[rgba(212,79,69,0.45)] focus:ring-[rgba(212,79,69,0.08)]' : '';

  return (
    <div className={`space-y-2 ${containerClassName}`}>
      {label && <label className="block text-sm font-medium text-[var(--foreground)]">{label}</label>}
      <textarea className={`${baseClasses} ${errorClasses} ${className}`} rows={rows} {...props} />
      {error && <p className="text-sm text-[var(--danger-500)]">{error}</p>}
      {helperText && !error && <p className="text-sm text-[var(--foreground-muted)]">{helperText}</p>}
    </div>
  );
};

export default Input;
