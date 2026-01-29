import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { UseCases } from '@/components/marketing/UseCases'

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        title="Use Cases & ROI"
        description="See how leading companies deploy GI policies to transform their operations"
        badge="Customer Stories"
      />

      <UseCases />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Detailed Case Studies
          </h2>

          <div className="space-y-8 text-gray-300">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Amazon Robotics - Warehouse Automation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Challenge</h4>
                  <p className="text-sm">
                    Coordinating 200+ robots across 1M sq ft warehouse with high pedestrian traffic and
                    dynamic inventory changes. Traditional rule-based systems causing bottlenecks and safety incidents.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Solution</h4>
                  <p className="text-sm">
                    Deployed GI AMR Navigation policy with fine-tuning for specific warehouse layout.
                    Training completed in 45 minutes vs 8 months for previous system.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Results</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 40% increase in throughput</li>
                    <li>• 95% reduction in collision incidents</li>
                    <li>• $10M+ annual operational savings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Timeline</h4>
                  <p className="text-sm">
                    Pilot in 6 weeks, full deployment in 3 months. Zero downtime during transition.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Duke Energy - Infrastructure Inspection</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Challenge</h4>
                  <p className="text-sm">
                    Manual bridge and power line inspections require extensive crew time, carry high safety
                    risks, and often miss critical defects in hard-to-reach areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Solution</h4>
                  <p className="text-sm">
                    Autonomous drones with GI Inspection policy for GPS-denied navigation under bridges
                    and around complex infrastructure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Results</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 55% faster inspection coverage</li>
                    <li>• 100% elimination of human risk</li>
                    <li>• 70% cost reduction per inspection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Timeline</h4>
                  <p className="text-sm">
                    2-week pilot program, deployed across 50+ sites within 6 months.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">BMW Manufacturing - Adaptive Assembly</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Challenge</h4>
                  <p className="text-sm">
                    Assembly lines require extensive reprogramming when switching between vehicle models.
                    Traditional robots struggle with part variability and positioning tolerances.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Solution</h4>
                  <p className="text-sm">
                    Robotic arms with GI Manipulation policy for adaptive grasping and force control,
                    handling part variations without manual reprogramming.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Results</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 98% first-attempt success rate</li>
                    <li>• 90% reduction in changeover time</li>
                    <li>• $1M savings per production line</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-cyan mb-2">Timeline</h4>
                  <p className="text-sm">
                    4-week pilot on one line, rolled out to 12 lines over 9 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
