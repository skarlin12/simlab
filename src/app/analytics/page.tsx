import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { AnalyticsDashboard } from '@/features/analytics/AnalyticsDashboard'

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="Analytics Dashboard"
        description="Track performance metrics and simulation results across all your policy agents"
        badge="Real-Time Data"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <AnalyticsDashboard />
        </div>
      </section>

      <section className="py-8 bg-background-darker">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold text-white mb-2">📊 Performance Tracking</h4>
              <p className="text-sm text-gray-400">
                Monitor success rates, collision avoidance, and efficiency metrics across all simulations
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold text-white mb-2">🔍 Incident Analysis</h4>
              <p className="text-sm text-gray-400">
                Review and replay incidents to identify patterns and improve policy performance
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold text-white mb-2">📈 Continuous Improvement</h4>
              <p className="text-sm text-gray-400">
                Track improvements over time as policies learn from production telemetry
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
