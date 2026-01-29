import React from 'react'
import { cn } from '@/lib/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-6',
        hover && 'transition-all duration-300 hover:border-primary-purple/50 hover:shadow-lg hover:shadow-primary-purple/20 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
