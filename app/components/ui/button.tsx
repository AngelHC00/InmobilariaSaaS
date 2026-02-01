import Link from 'next/link';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
};

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800',
  outline: 'border border-slate-200 text-slate-900 hover:bg-slate-50'
};

export function Button({ href, variant = 'primary', className, ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold transition ${variants[variant]} ${className ?? ''}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props} />
  );
}
