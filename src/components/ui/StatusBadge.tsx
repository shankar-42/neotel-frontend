import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  label: string
  color?: 'secondary' | 'primary'
  className?: string
}

export function StatusBadge({ label, color = 'secondary', className }: StatusBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/20',
        className
      )}
    >
      <span
        className={cn(
          'w-2 h-2 rounded-full animate-pulse',
          color === 'secondary' ? 'bg-secondary' : 'bg-primary'
        )}
      />
      <span className='text-secondary text-[10px] uppercase tracking-[0.2em] font-bold'>
        {label}
      </span>
    </div>
  )
}
