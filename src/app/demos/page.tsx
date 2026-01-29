import React from 'react'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/lib/constants/routes'

const demos = [
  {
    title: 'Autonomous Navigation',
    description: 'Multi-agent coordination for warehouses and industrial facilities with predictive collision avoidance and real-time pedestrian detection.',
    features: [
      'Real-time pedestrian detection',
      'Predictive collision avoidance',
      'Dynamic path replanning',
      'Multi-agent coordination',
    ],
    href: ROUTES.FORKLIFT_DEMO,
  },
  {
    title: 'Aerial Systems',
    description: 'GPS-denied navigation for infrastructure inspection and surveillance with adaptive mission planning.',
    features: [
      'Visual-only navigation',
      'Obstacle avoidance',
      'Optimized coverage areas',
      'Goal seeking',
      'Adaptive mission planning',
    ],
    href: ROUTES.DRONE_DEMO,
  },
  {
    title: 'Manipulation',
    description: 'Adaptive grasping and force control for variable objects in manufacturing and logistics environments.',
    features: [
      'Adaptive force control',
      'Object variability handling',
      'Precision grasping',
      'Path optimization',
      'Palletizing',
    ],
    href: ROUTES.ROBOTIC_ARM_DEMO,
  },
]

export default function DemosPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
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
                  Launch Demo
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
