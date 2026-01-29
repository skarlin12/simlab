import React from 'react'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/lib/constants/routes'

const demos = [
  {
    title: 'Forklift Navigation',
    description: 'See how GI-enabled forklifts achieve 99.5% collision avoidance compared to 95% with rule-based systems.',
    features: [
      'Real-time pedestrian detection',
      'Predictive collision avoidance',
      'Dynamic path replanning',
      'Multi-agent coordination',
    ],
    href: ROUTES.FORKLIFT_DEMO,
  },
  {
    title: 'Drone Inspection',
    description: 'Watch autonomous drones navigate GPS-denied environments 55% faster than traditional methods.',
    features: [
      'Visual-only navigation',
      'Obstacle avoidance',
      'Stability in wind',
      'Adaptive mission planning',
    ],
    href: ROUTES.DRONE_DEMO,
  },
  {
    title: 'Robotic Arm Manipulation',
    description: 'Experience adaptive grasping that improves success rates from 80% to 98% for variable objects.',
    features: [
      'Adaptive force control',
      'Object variability handling',
      'Precision grasping',
      'Path optimization',
    ],
    href: ROUTES.ROBOTIC_ARM_DEMO,
  },
]

export default function DemosPage() {
  return (
    <>
      <PageHeader
        title="Interactive Demos"
        description="Experience GI policy agents in action with live simulations"
        badge="Live Simulations"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <Card key={index} hover className="flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {demo.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {demo.description}
                </p>

                <div className="mb-6 flex-grow">
                  <div className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    Features
                  </div>
                  <ul className="space-y-2">
                    {demo.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start">
                        <span className="text-primary-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={demo.href} className="mt-auto">
                  <Button variant="primary" className="w-full">
                    Launch Demo
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
