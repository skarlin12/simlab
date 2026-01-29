import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/lib/constants/routes'

const useCases = [
  {
    title: 'Warehouse Automation',
    description: 'Coordinate 100+ AMRs and forklifts with predictive collision avoidance in dynamic warehouse environments',
    roi: '$10M+ annual savings',
    metrics: [
      { label: 'Safety improvement', value: '95% → 99.5%' },
      { label: 'Throughput increase', value: '+18%' },
      { label: 'Training time', value: '< 1 hour' },
    ],
    demoLink: ROUTES.FORKLIFT_DEMO,
  },
  {
    title: 'Infrastructure Inspection',
    description: 'Autonomous drone inspection for bridges, power lines, and industrial sites with GPS-denied navigation',
    roi: '30-50% faster inspections',
    metrics: [
      { label: 'Coverage improvement', value: '+55%' },
      { label: 'Human risk reduction', value: '100%' },
      { label: 'Cost per inspection', value: '-70%' },
    ],
    demoLink: ROUTES.DRONE_DEMO,
  },
  {
    title: 'Adaptive Manufacturing',
    description: 'Robotic arms that handle variable parts without reprogramming, with 98% success on novel orientations',
    roi: '$250K-$1M per line',
    metrics: [
      { label: 'Success rate', value: '80% → 98%' },
      { label: 'Setup time', value: '-90%' },
      { label: 'Flexibility', value: '+10x' },
    ],
    demoLink: ROUTES.ROBOTIC_ARM_DEMO,
  },
]

export function UseCases() {
  return (
    <section className="py-20 bg-background-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real-World Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how leading companies are deploying GI policies in production
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} hover className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">
                {useCase.title}
              </h3>

              <p className="text-gray-400 mb-4 flex-grow">
                {useCase.description}
              </p>

              <div className="bg-gradient-to-r from-primary-purple/20 to-primary-cyan/20 rounded-lg p-4 mb-4">
                <div className="text-sm text-gray-400 mb-1">ROI</div>
                <div className="text-xl font-bold text-primary-cyan">
                  {useCase.roi}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {useCase.metrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">{metric.label}</span>
                    <span className="font-semibold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>

              <Link href={useCase.demoLink} className="mt-auto">
                <Button variant="outline" className="w-full">
                  View Demo
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={ROUTES.USE_CASES}>
            <Button variant="primary" size="lg">
              Explore All Use Cases
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
