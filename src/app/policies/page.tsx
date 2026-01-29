import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { FoundationPolicies } from '@/components/marketing/FoundationPolicies'

export default function PoliciesPage() {
  return (
    <>
      <PageHeader
        title="Foundation Policies"
        description="Pre-trained on 500M hours of real-world data, ready to fine-tune for your use case"
        badge="Foundation Models"
      />

      <FoundationPolicies />

      <section className="py-16 bg-background-darker">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Foundation Policies?
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-World Data Advantage</h3>
              <p>
                Trained on 500M+ hours of gameplay footage from Medal.tv, our policies understand
                real physics, edge cases, and human behavior patterns that simulators miss.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Zero Sim-to-Real Gap</h3>
              <p>
                By learning from real-world data using inverse dynamics, our policies eliminate the
                traditional sim-to-real transfer problem that plagues conventional RL approaches.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Fine-Tuning</h3>
              <p>
                Start with a pre-trained foundation policy and fine-tune for your specific environment
                in under 1 hour instead of 6-12 months of traditional training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
