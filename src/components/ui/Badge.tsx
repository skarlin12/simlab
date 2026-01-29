import React from 'react'
import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'neutral'
  className?: string
}

export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  const variants = {
    success: 'bg-status-success/20 text-status-success border-status-success/30',
    danger: 'bg-status-danger/20 text-status-danger border-status-danger/30',
    warning: 'bg-status-warning/20 text-status-warning border-status-warning/30',
    info: 'bg-primary-cyan/20 text-primary-cyan border-primary-cyan/30',
    neutral: 'bg-white/10 text-gray-300 border-white/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
