import React from 'react'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/lib/constants/routes'

const demos = [
  {
    title: 'Autonomous Navigation Policy',
    description: 'Foundation model fine-tuned for wheeled ground vehicles. Handles warehouse AMRs, forklifts, and delivery robots through shared navigation primitives.',
    features: [
      'Real-time pedestrian detection',
      'Predictive collision avoidance',
      'Dynamic path replanning',
      'Multi-agent coordination',
      'Transfer learning from gameplay data',
    ],
    href: ROUTES.FORKLIFT_DEMO,
  },
  {
    title: 'Aerial Flight Policy',
    description: 'Foundation model specialized for aerial dynamics. Adapts to drones and UAVs for inspection and monitoring through transfer learning from game flight mechanics.',
    features: [
      'GPS-denied visual navigation',
      'Obstacle avoidance',
      'Optimized coverage areas',
      'Goal-directed behavior',
      'Adaptive mission planning',
    ],
    href: ROUTES.DRONE_DEMO,
  },
  {
    title: 'Manipulation Policy',
    description: 'Foundation model adapted for robotic arms. Handles pick-and-place, assembly, and adaptive grasping through learned object interaction principles.',
    features: [
      'Adaptive force control',
      'Variable object handling',
      'Precision grasping',
      'Path optimization',
      'Learned contact dynamics',
    ],
    href: ROUTES.ROBOTIC_ARM_DEMO,
  },
]

export default function DemosPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section - Foundation Model */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Universal Inverse Dynamics Foundation Model
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            One foundational model trained on millions of hours of gameplay data that learns fundamental
            principles of spatial reasoning, obstacle avoidance, and goal-directed behavior. This model
            generalizes across all robotic domains through transfer learning, eliminating the need for
            domain-specific training from scratch.
          </p>

          <div className="bg-gradient-to-br from-[#2C3E50]/50 to-[#34495E]/50 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Core Capabilities
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <li className="text-gray-300 flex items-start">
                <span className="text-[#F2D8CD] mr-3 text-xl">→</span>
                <span><strong>Spatiotemporal reasoning:</strong> Understand how actions move agents through space over time</span>
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-[#F2D8CD] mr-3 text-xl">→</span>
                <span><strong>Transfer learning:</strong> 100x better sample efficiency than training from scratch</span>
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-[#F2D8CD] mr-3 text-xl">→</span>
                <span><strong>Cross-domain generalization:</strong> Navigation, manipulation, and flight policies from one model</span>
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-[#F2D8CD] mr-3 text-xl">→</span>
                <span><strong>Imitation learning:</strong> Trained on expert demonstrations, not random exploration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Policy Agent Demonstrations */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Specialized Policy Agents
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our foundation model generates domain-specific policy agents through fine-tuning with 100-1000 hours
            of environment data. Each agent inherits the foundational spatial reasoning while adapting to specific
            hardware and task requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <Card key={index} hover className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                {demo.title}
              </h3>

              <p className="text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                {demo.description}
              </p>

              <div className="mb-6 flex-grow">
                <div className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Features
                </div>
                <ul className="space-y-2">
                  {demo.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="text-[#F2D8CD] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={demo.href} className="mt-auto">
                <Button variant="outline" className="w-full">
                  View Interactive Demo
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
