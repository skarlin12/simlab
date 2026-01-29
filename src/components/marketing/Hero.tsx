'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/lib/constants/routes'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary-purple/20 to-primary-cyan/20 border border-primary-purple/30 rounded-full px-4 py-2 text-sm">
              Powered by 500M Hours of Real-World Data
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-cyan to-primary-purple bg-clip-text text-transparent">
            Industrial AI That Actually Works
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Train policy agents for forklifts, drones, and robotic arms in minutes.
            <span className="text-primary-cyan font-semibold"> 100x faster, 100x cheaper</span>, with
            <span className="text-primary-purple font-semibold"> zero sim-to-real gap</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-primary-cyan mb-1">100x</div>
              <div className="text-sm text-gray-400">Faster Training</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-purple mb-1">100x</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-status-success mb-1">0%</div>
              <div className="text-sm text-gray-400">Sim-to-Real Gap</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
