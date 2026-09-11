import React from 'react';
import { Link } from 'react-router-dom';

export function Button({
  to,
  href,
  variant = 'default', // 'default', 'ghost', 'onnavy', 'ghostlight'
  className = '',
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  let variantClass = 'btn';
  if (variant === 'ghost') variantClass += ' btn--ghost';
  else if (variant === 'onnavy') variantClass += ' btn--onnavy';
  else if (variant === 'ghostlight') variantClass += ' btn--ghostlight';

  const combinedClass = `${variantClass} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClass} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
