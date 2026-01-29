'use client'

import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'

export default function RoboticArmDemoPage() {
  return (
    <>
      <PageHeader
        title="Robotic Arm Demo"
        description="Experience adaptive manipulation for variable objects"
        badge="Live Demo"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <iframe
              src="/robotic_arm_demo.html"
              className="w-full h-[900px] border-0"
              title="Robotic Arm Manipulation Demo"
            />
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">About This Demo</h3>
              <p className="text-gray-300 mb-4">
                This interactive simulation showcases adaptive robotic arm manipulation, comparing traditional
                fixed programming with GI-enabled adaptive control for variable objects.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Fixed Programming</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Pre-programmed paths</li>
                    <li>• Requires exact positioning</li>
                    <li>• ~80% success rate</li>
                    <li>• Fails with variability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-purple mb-2">GI Adaptive Control</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Real-time adaptation</li>
                    <li>• Handles object variability</li>
                    <li>• 98% success rate</li>
                    <li>• Force-sensitive grasping</li>
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
