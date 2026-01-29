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
        'bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-xl border border-[#4D4D4D] p-6',
        hover && 'transition-all duration-500 hover:border-[#F2D8CD]/50 hover:shadow-lg hover:shadow-[#F2D8CD]/10 hover:-translate-y-1',
        className
      )}
      style={hover ? { transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' } : undefined}
    >
      {children}
    </div>
  )
}
