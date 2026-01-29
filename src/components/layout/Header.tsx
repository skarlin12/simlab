'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/lib/constants/routes'
import { cn } from '@/lib/utils/cn'

const navigation = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Demos', href: ROUTES.DEMOS },
  { name: 'Policies', href: ROUTES.POLICIES },
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
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">
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
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary-cyan bg-primary-cyan/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <span className="hidden lg:block text-sm text-gray-400">
              Demo Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
