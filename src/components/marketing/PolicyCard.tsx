import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface PolicyCardProps {
  title: string
  description: string
  capabilities: string[]
  performance: { metric: string; value: string }
  demoLink: string
  badge?: string
}

export function PolicyCard({
  title,
  description,
  capabilities,
  performance,
  demoLink,
  badge,
}: PolicyCardProps) {
  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {badge && <Badge variant="info">{badge}</Badge>}
      </div>

      <p className="text-gray-400 text-sm mb-4 flex-grow">
        {description}
      </p>

      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
          Key Capabilities
        </div>
        <ul className="space-y-1">
          {capabilities.map((cap, index) => (
            <li key={index} className="text-sm text-gray-300 flex items-start">
              <span className="text-primary-cyan mr-2">•</span>
              {cap}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/5 rounded-lg p-3 mb-4">
        <div className="text-xs text-gray-500 mb-1">{performance.metric}</div>
        <div className="text-2xl font-bold text-primary-cyan">{performance.value}</div>
      </div>

      <Link href={demoLink} className="mt-auto">
        <Button variant="outline" className="w-full">
          View Demo
        </Button>
      </Link>
    </Card>
  )
}
