import React from 'react'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-darker mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              SimLab
            </div>
            <p className="text-gray-400 text-sm">
              Next-generation policy agents for industrial automation by General Intuition
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.DEMOS} className="text-gray-400 hover:text-[#F2D8CD] transition-colors duration-500"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  Policy Models
                </Link>
              </li>
              <li>
                <Link href={ROUTES.USE_CASES} className="text-gray-400 hover:text-[#F2D8CD] transition-colors duration-500"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SCENARIO_BUILDER} className="text-gray-400 hover:text-[#F2D8CD] transition-colors duration-500"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  Scenario Builder
                </Link>
              </li>
              <li>
                <Link href={ROUTES.ANALYTICS} className="text-gray-400 hover:text-[#F2D8CD] transition-colors duration-500"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.ABOUT} className="text-gray-400 hover:text-[#F2D8CD] transition-colors duration-500"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2026 SimLab by General Intuition. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
