import * as React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = {
  default: 'bg-primary text-white hover:bg-secondary',
  ghost: 'bg-transparent text-tertiary hover:bg-rose/30',
  outline: 'bg-transparent border border-accent/50 text-tertiary hover:bg-rose/30',
  secondary: 'bg-accent text-tertiary hover:bg-accent/80',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof sizes;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild: _asChild, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wider rounded-full transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        buttonVariants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'relative bg-white/80 backdrop-blur-sm border border-accent/30 rounded-elegant shadow-soft p-6 lg:p-8 overflow-hidden',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full px-4 py-3 bg-rose/30 border border-accent/30 rounded-elegant text-tertiary placeholder:text-taupe/60',
        'focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition',
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn('block text-sm font-medium text-tertiary mb-2 tracking-wide', className)}
      {...props}
    />
  );
}

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'w-full px-4 py-3 bg-rose/30 border border-accent/30 rounded-elegant text-tertiary',
        'focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-rose/40 text-tertiary',
        className,
      )}
    >
      {children}
    </span>
  );
}
