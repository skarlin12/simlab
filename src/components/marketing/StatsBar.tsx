import React from 'react'
import { Card } from '@/components/ui/Card'

const stats = [
  { label: 'Workplace injuries annually', value: '34,900+', color: 'text-status-danger' },
  { label: 'Cost per forklift incident', value: '$48,000+', color: 'text-status-warning' },
  { label: 'Traditional training time', value: '6-12 months', color: 'text-gray-400' },
  { label: 'General Intuition training time', value: '< 1 hour', color: 'text-status-success' },
]

export function StatsBar() {
  return (
    <section className="py-12 bg-background-darker">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
