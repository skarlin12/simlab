'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/lib/constants/routes'
import { cn } from '@/lib/utils/cn'

const navigation = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Policy Models', href: ROUTES.DEMOS },
  { name: 'Scenario Builder', href: ROUTES.SCENARIO_BUILDER },
  { name: 'Analytics', href: ROUTES.ANALYTICS },
  { name: 'Use Cases', href: ROUTES.USE_CASES },
  { name: 'About', href: ROUTES.ABOUT },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={ROUTES.HOME} className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              SimLab
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-500',
                    isActive
                      ? 'text-[#F2D8CD] bg-[rgba(242,216,205,0.1)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href={ROUTES.DEMOS} className="hidden lg:block text-sm text-gray-400 hover:text-[#F2D8CD] transition-colors duration-500"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Demo Mode
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
