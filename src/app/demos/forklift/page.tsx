'use client'

import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'

export default function ForkliftDemoPage() {
  return (
    <>
      <PageHeader
        title="Forklift Navigation Demo"
        description="Compare rule-based vs General Intuition-enabled collision avoidance in warehouse environments"
        badge="Live Demo"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <iframe
              src="/forklift_demo"
              className="w-full h-[900px] border-0"
              title="Forklift Navigation Demo"
            />
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">About This Demo</h3>
              <p className="text-gray-300 mb-4">
                This interactive simulation compares traditional rule-based forklift navigation with General Intuition-enabled
                autonomous navigation in a warehouse environment.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Rule-Based System</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Fixed navigation rules</li>
                    <li>• Reactive collision avoidance</li>
                    <li>• ~95% safety rate</li>
                    <li>• Frequent near-misses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-purple mb-2">GI-Enabled System</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Predictive path planning</li>
                    <li>• Proactive hazard detection</li>
                    <li>• 99.5% safety rate</li>
                    <li>• Smooth, efficient routes</li>
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
