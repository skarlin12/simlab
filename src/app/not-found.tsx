import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/lib/constants/routes'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-darker flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Header */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#F2D8CD] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Page Not Found
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            The simulation you&apos;re looking for doesn&apos;t exist in this environment.
          </p>
        </div>

        {/* Helpful Navigation */}
        <div className="bg-background-dark border border-white/10 rounded-lg p-8 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Try one of these destinations:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Link
              href={ROUTES.HOME}
              className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors text-left"
            >
              <div className="font-semibold">Home</div>
              <div className="text-sm text-gray-400">Return to main page</div>
            </Link>

            <Link
              href={ROUTES.DEMOS}
              className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors text-left"
            >
              <div className="font-semibold">Policy Models</div>
              <div className="text-sm text-gray-400">View foundation model demos</div>
            </Link>

            <Link
              href={ROUTES.USE_CASES}
              className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors text-left"
            >
              <div className="font-semibold">Use Cases</div>
              <div className="text-sm text-gray-400">See real-world applications</div>
            </Link>

            <Link
              href={ROUTES.SCENARIO_BUILDER}
              className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors text-left"
            >
              <div className="font-semibold">Scenario Builder</div>
              <div className="text-sm text-gray-400">Create custom simulations</div>
            </Link>
          </div>

          <Link href={ROUTES.HOME}>
            <Button variant="primary" className="w-full md:w-auto">
              Return to Home
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <p className="text-sm text-gray-500">
          Looking for interactive demos? Visit{' '}
          <Link href={ROUTES.FORKLIFT_DEMO} className="text-[#F2D8CD] hover:underline">
            Forklift
          </Link>
          {', '}
          <Link href={ROUTES.DRONE_DEMO} className="text-[#F2D8CD] hover:underline">
            Drone
          </Link>
          {', or '}
          <Link href={ROUTES.ROBOTIC_ARM_DEMO} className="text-[#F2D8CD] hover:underline">
            Robotic Arm
          </Link>
          {' '}demos.
        </p>
      </div>
    </div>
  )
}
