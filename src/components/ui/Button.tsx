import React from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-all duration-500',
    secondary: 'bg-[#F2D8CD] text-black hover:bg-black hover:text-[#F2D8CD] border-2 border-[#F2D8CD] transition-all duration-500',
    outline: 'border-2 border-[#4D4D4D] text-white hover:bg-white hover:text-black transition-all duration-500',
    ghost: 'text-gray-300 hover:text-[#F2D8CD] hover:bg-white/5 transition-all duration-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      {...props}
    >
      {children}
    </button>
  )
}
