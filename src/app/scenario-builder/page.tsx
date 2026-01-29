import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { ScenarioBuilder } from '@/features/scenario-builder/ScenarioBuilder'

export default function ScenarioBuilderPage() {
  return (
    <>
      <PageHeader
        title="Scenario Builder"
        description="Create custom test scenarios for your policy agents"
        badge="Interactive Tool"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <ScenarioBuilder />
        </div>
      </section>

      <section className="py-8 bg-background-darker">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-4">How to Use the Scenario Builder</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex gap-3">
                <span className="text-primary-cyan font-bold">1.</span>
                <span><strong>Add Objects:</strong> Click objects from the palette to add them to the canvas</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-cyan font-bold">2.</span>
                <span><strong>Configure:</strong> Select objects to edit their properties in the right panel</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-cyan font-bold">3.</span>
                <span><strong>Position:</strong> Adjust X/Y coordinates manually or drag objects visually</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-cyan font-bold">4.</span>
                <span><strong>Save/Load:</strong> Save scenarios to localStorage and reload them anytime</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-cyan font-bold">5.</span>
                <span><strong>Run:</strong> Click &quot;Run Scenario&quot; to execute the test (demo mode)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
