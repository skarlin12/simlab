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
    videoSrc: '/videos/warehouse-forklift-pov.mp4',
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
    videoSrc: '/videos/drone-inspection-pov.mp4',
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
    videoSrc: '/videos/robotic-arm-picking.mp4',
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
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Real-World Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            See how leading companies are deploying General Intuition policies in production
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="flex flex-col overflow-hidden p-0">
              {/* Video Container with Overlay */}
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-[#2C3E50] to-[#34495E]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={useCase.videoSrc} type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Title and ROI Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {useCase.title}
                  </h3>
                  <div className="inline-block bg-[#F2D8CD] text-[#2C3E50] px-4 py-1.5 rounded-full font-bold text-sm">
                    {useCase.roi}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 mb-4 flex-grow">
                  {useCase.description}
                </p>

                <div className="space-y-2 mb-6">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className="font-semibold text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <Link href={useCase.demoLink} className="mt-auto text-[#F2D8CD] hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                  View Interactive Demo →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
