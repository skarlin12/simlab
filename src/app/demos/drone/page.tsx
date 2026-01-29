'use client'

import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'

export default function DroneDemoPage() {
  return (
    <>
      <PageHeader
        title="Drone Inspection Demo"
        description="Watch autonomous bridge inspection with GPS-denied navigation"
        badge="Live Demo"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <iframe
              src="/drone_demo"
              className="w-full h-[900px] border-0"
              title="Drone Inspection Demo"
            />
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">About This Demo</h3>
              <p className="text-gray-300 mb-4">
                This simulation demonstrates autonomous drone navigation for bridge inspection in GPS-denied
                environments, comparing traditional and GI-enabled approaches.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Traditional Navigation</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• GPS-dependent positioning</li>
                    <li>• Manual waypoint following</li>
                    <li>• Slower coverage</li>
                    <li>• Limited obstacle avoidance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-purple mb-2">GI-Enabled Navigation</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Visual-only navigation</li>
                    <li>• Adaptive path planning</li>
                    <li>• 55% faster coverage</li>
                    <li>• Dynamic obstacle avoidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
