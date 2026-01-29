import React from 'react'

interface PageHeaderProps {
  title: string
  description: string
  badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-primary-purple/10 to-transparent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary-purple/20 to-primary-cyan/20 border border-primary-purple/30 rounded-full px-4 py-2 text-sm">
                {badge}
              </span>
            </div>
          )}
          <h1 className="text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
