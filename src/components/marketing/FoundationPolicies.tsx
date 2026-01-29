import React from 'react'
import { PolicyCard } from './PolicyCard'
import { ROUTES } from '@/lib/constants/routes'

const policies = [
  {
    title: 'Warehouse Automation',
    description: 'Multi-agent fleet coordination with predictive collision avoidance for AMRs and forklifts in warehouse environments.',
    capabilities: [
      'Dynamic path planning',
      'Fleet coordination (100+ robots)',
      'Predictive collision avoidance (2-3s)',
      'Pedestrian detection & tracking',
    ],
    performance: {
      metric: 'Safety Improvement',
      value: '99.5%',
    },
    demoLink: ROUTES.FORKLIFT_DEMO,
    badge: 'Most Popular',
  },
  {
    title: 'Drone Inspection',
    description: 'GPS-denied navigation for infrastructure inspection with visual-only positioning and obstacle avoidance.',
    capabilities: [
      'Visual-inertial navigation',
      'GPS-denied operation',
      'Stability control in wind',
      'Adaptive mission planning',
    ],
    performance: {
      metric: 'Speed Improvement',
      value: '55%',
    },
    demoLink: ROUTES.DRONE_DEMO,
  },
  {
    title: 'Robotic Arm',
    description: 'Adaptive manipulation for variable objects with force control, bin picking, and precision grasping.',
    capabilities: [
      'Adaptive grasping (any orientation)',
      'Force-sensitive control',
      'Inverse kinematics',
      'Bin picking optimization',
    ],
    performance: {
      metric: 'Grasp Success Rate',
      value: '98%',
    },
    demoLink: ROUTES.ROBOTIC_ARM_DEMO,
  },
]

export function FoundationPolicies() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Foundation Policies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pre-trained on 500M+ hours of real-world data, ready to fine-tune for your specific use case
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {policies.map((policy, index) => (
            <PolicyCard key={index} {...policy} />
          ))}
        </div>
      </div>
    </section>
  )
}
