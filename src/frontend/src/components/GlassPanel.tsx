import { type ReactNode, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className, ...props }: GlassPanelProps) {
  return (
    <div className={cn('glass-panel', className)} {...props}>
      {children}
    </div>
  );
}
