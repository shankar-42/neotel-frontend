import { cn } from '@/utils/classnames';
import type { ComponentProps } from 'react';

function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-neutral-300/10 animate-pulse rounded-md dark:bg-neutral-50/10', className)}
      {...props}
    />
  );
}

export { Skeleton };
