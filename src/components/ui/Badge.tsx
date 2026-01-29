import React from 'react'
import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'neutral'
  className?: string
}

export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  const variants = {
    success: 'bg-[rgba(242,216,205,0.15)] text-[#F2D8CD] border-[rgba(242,216,205,0.3)]',
    danger: 'bg-[rgba(139,115,85,0.15)] text-[#8B7355] border-[rgba(139,115,85,0.3)]',
    warning: 'bg-[rgba(212,165,116,0.15)] text-[#D4A574] border-[rgba(212,165,116,0.3)]',
    info: 'bg-[rgba(242,216,205,0.15)] text-[#F2D8CD] border-[rgba(242,216,205,0.3)]',
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
