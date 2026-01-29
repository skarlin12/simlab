import React from 'react'
import { Card } from '@/components/ui/Card'

const steps = [
  {
    number: '01',
    title: 'Select Foundation Policy',
    description: 'Choose from pre-trained policies for AMRs, forklifts, drones, or robotic arms',
  },
  {
    number: '02',
    title: 'Upload Your Environment',
    description: 'Provide CAD files, maps, or video footage of your specific operational space',
  },
  {
    number: '03',
    title: 'Fine-Tune in Minutes',
    description: 'Our platform adapts the policy to your constraints and requirements',
  },
  {
    number: '04',
    title: 'Deploy with Confidence',
    description: 'Zero sim-to-real gap means what works in simulation works in production',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From simulation to production in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full">
                <div className="text-5xl font-bold text-primary-purple/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="text-primary-cyan text-2xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
