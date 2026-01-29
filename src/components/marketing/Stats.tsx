import React from 'react'

const stats = [
  {
    value: '100x',
    label: 'Faster Training',
  },
  {
    value: '100x',
    label: 'Cost Reduction on Data Collection',
  },
  {
    value: '99%',
    label: 'Real World Deployment Success',
  },
]

export function Stats() {
  return (
    <section className="py-16 bg-black border-y border-[#4D4D4D]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-5xl lg:text-6xl font-bold text-[#F2D8CD] mb-3"
                style={{ fontFamily: 'Chakra Petch, monospace' }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm lg:text-base text-gray-400"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
