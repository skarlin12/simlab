'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/lib/constants/routes'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(242,216,205,0.05)] via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-12 text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Frontier Models for Industrial AI
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.DEMOS}>
              <Button size="lg" variant="primary">
                View Live Demos
              </Button>
            </Link>
            <Link href={ROUTES.SCENARIO_BUILDER}>
              <Button size="lg" variant="outline">
                Try Scenario Builder
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
