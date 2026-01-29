import React from 'react'
import { Card } from '@/components/ui/Card'

const steps = [
  {
    number: '01',
    title: 'Select Foundation Policy',
    description: 'Choose from general domain inverse dynamics model or pre-trained policies for AMRs, forklifts, drones, or robotic arms',
  },
  {
    number: '02',
    title: 'Generate Your Needed Environment',
    description: 'Utilize General Intuition world models to generate your immersive training environment',
  },
  {
    number: '03',
    title: 'Fine-Tune Within Hours',
    description: 'Tailor your environment with CAD files, maps, and robotic video footage. Our platform adapts the policy to your requirements',
  },
  {
    number: '04',
    title: 'Deploy with Confidence',
    description: 'Generalizable policy agents that can accommodate varied environments',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Policy agents that go from simulation to production in days
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full">
                <div className="text-5xl font-bold text-[#F2D8CD]/20 mb-4" style={{ fontFamily: 'Chakra Petch, monospace' }}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.description}
                </p>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="text-[#F2D8CD] text-2xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
