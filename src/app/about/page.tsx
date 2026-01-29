import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Technology & Approach"
        description="How General Intuition achieves zero sim-to-real gap with real-world data and inverse dynamics"
        badge="Our Technology"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Origin Story</h2>
              <Card>
                <p className="text-gray-300 mb-4">
                  General Intuition was born from Medal.tv, the world&apos;s largest gaming clip platform with
                  <span className="text-primary-cyan font-semibold"> 40 million users</span> capturing gameplay moments.
                </p>
                <p className="text-gray-300 mb-4">
                  While building Medal.tv, the founders noticed something remarkable: they were sitting on an unprecedented
                  dataset of <span className="text-primary-purple font-semibold">500 million+ hours</span> of recorded gameplay
                  with synchronized controller inputs—the exact data needed to train embodied AI policies.
                </p>
                <p className="text-gray-300 mb-4">
                  Unlike traditional robotics companies that painstakingly collect robot data at $100-$1,000 per hour,
                  or game companies with video but no action labels, Medal.tv uniquely captured both: millions of hours
                  of 3D environments with precise, synchronized human actions.
                </p>
                <p className="text-gray-300">
                  This insight sparked General Intuition: leveraging gaming data to train foundation policies for real-world
                  robots. What started as a gaming platform became the foundation for the next generation of industrial automation.
                </p>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Medal.tv Advantage</h2>
              <Card>
                <p className="text-gray-300 mb-4">
                  Medal.tv&apos;s unique position provides an insurmountable competitive moat:
                </p>
                <div className="space-y-4 mt-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-primary-cyan mb-2">Massive Scale</h3>
                    <p className="text-sm text-gray-400">
                      500M+ hours across 100+ 3D games, covering navigation, manipulation, obstacle avoidance,
                      and edge cases that no simulator can replicate
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-primary-cyan mb-2">Synchronized Actions</h3>
                    <p className="text-sm text-gray-400">
                      Every frame has precise controller inputs (WASD, joystick, buttons) synchronized with
                      visual observations—the critical data for inverse dynamics learning
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-primary-cyan mb-2">Continuous Growth</h3>
                    <p className="text-sm text-gray-400">
                      10,000+ hours of new gameplay data generated daily from Medal.tv&apos;s active user base,
                      creating a compounding data advantage
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-primary-cyan mb-2">Impossible to Replicate</h3>
                    <p className="text-sm text-gray-400">
                      Competitors starting today face a 500,000x data disadvantage in year one. The gap only widens
                      as we add robot deployment data and network effects kick in
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Inverse Dynamics</h2>
              <Card>
                <p className="text-gray-300 mb-4">
                  Traditional reinforcement learning requires millions of training episodes and often fails
                  to transfer from simulation to reality. Our approach is fundamentally different:
                </p>
                <ol className="space-y-3 text-gray-300 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary-cyan font-bold mr-3">1.</span>
                    <span>We observe state transitions in real-world footage (object moved from position A to B)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-cyan font-bold mr-3">2.</span>
                    <span>Use inverse dynamics to infer what actions caused those transitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-cyan font-bold mr-3">3.</span>
                    <span>Train policies directly on these state-action pairs from real physics</span>
                  </li>
                </ol>
                <div className="bg-primary-purple/10 border border-primary-purple/30 rounded-lg p-4 mt-6">
                  <p className="text-gray-300">
                    <span className="text-status-success font-semibold">Result: Zero sim-to-real gap</span> because
                    we never relied on simulation in the first place. Our policies learn from how things actually
                    move in the real world.
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Game-to-Robot Transfer Works</h2>
              <Card>
                <p className="text-gray-300 mb-4">
                  Game controls and robot controls share the same fundamental abstraction: continuous velocity and steering commands.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Game Controls</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• WASD keys → Forward/back/strafe</li>
                      <li>• Joystick → Continuous velocity</li>
                      <li>• Mouse → Camera/aiming</li>
                      <li>• Buttons → Discrete actions</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Robot Controls</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Motor commands → Forward/back/turn</li>
                      <li>• Velocity vectors → Continuous motion</li>
                      <li>• Camera/sensors → Observation</li>
                      <li>• Actuators → Discrete actions</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 mt-6">
                  A policy that learned &quot;avoid incoming NPC while reaching checkpoint&quot; in GTA applies
                  identical spatiotemporal reasoning to &quot;avoid pedestrian while reaching goal&quot; in a warehouse.
                  Fine-tuning adjusts for sensor and dynamics differences, but core reasoning transfers intact.
                </p>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Performance Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-400 font-semibold">Approach</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-semibold">Training Time</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-semibold">Cost</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-semibold">Sim-to-Real Gap</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Traditional RL</td>
                      <td className="py-3 px-4">6-12 months</td>
                      <td className="py-3 px-4">$500K-$2M</td>
                      <td className="py-3 px-4 text-status-danger">High (30-50%)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Sim-to-Real Transfer</td>
                      <td className="py-3 px-4">3-6 months</td>
                      <td className="py-3 px-4">$200K-$800K</td>
                      <td className="py-3 px-4 text-status-warning">Medium (10-20%)</td>
                    </tr>
                    <tr className="bg-primary-purple/10">
                      <td className="py-3 px-4 font-semibold text-white">SimLab (General Intuition)</td>
                      <td className="py-3 px-4 text-status-success font-semibold">&lt; 1 hour</td>
                      <td className="py-3 px-4 text-status-success font-semibold">$5K-$20K</td>
                      <td className="py-3 px-4 text-status-success font-semibold">Zero (0%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Data Flywheel</h2>
              <Card>
                <p className="text-gray-300 mb-6">
                  Our competitive advantage compounds over time through network effects:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-cyan/20 flex items-center justify-center text-primary-cyan font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Foundation Training</h4>
                      <p className="text-sm text-gray-400">
                        Train on 500M hours from Medal.tv → Baseline spatiotemporal reasoning
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-purple/20 flex items-center justify-center text-primary-purple font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Customer Deployment</h4>
                      <p className="text-sm text-gray-400">
                        Customers deploy policies → Generate 100K+ hours annually of real robot telemetry
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-status-success/20 flex items-center justify-center text-status-success font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Fleet Learning</h4>
                      <p className="text-sm text-gray-400">
                        Retrain on combined data → Improve performance for all customers simultaneously
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-cyan/20 flex items-center justify-center text-primary-cyan font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Compounding Cycle</h4>
                      <p className="text-sm text-gray-400">
                        Better policies → More customers → More data → Better policies (repeat)
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Roadmap</h2>
              <div className="space-y-4">
                <Card>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Q1 2026 - Foundation Policies</h3>
                    <span className="bg-status-success/20 text-status-success text-xs px-2 py-1 rounded-full">
                      Complete
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Launch 3 foundation policies: Warehouse Automation, Drone Inspection, Robotic Arm
                  </p>
                </Card>

                <Card>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Q2 2026 - Fine-Tuning Platform</h3>
                    <span className="bg-primary-cyan/20 text-primary-cyan text-xs px-2 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Web-based fine-tuning interface with custom environment upload and scenario testing
                  </p>
                </Card>

                <Card>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Q3 2026 - Multi-Agent Systems</h3>
                    <span className="bg-white/20 text-gray-400 text-xs px-2 py-1 rounded-full">
                      Planned
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Fleet coordination for 100+ robots with centralized policy management
                  </p>
                </Card>

                <Card>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Q4 2026 - Custom Policy Training</h3>
                    <span className="bg-white/20 text-gray-400 text-xs px-2 py-1 rounded-full">
                      Planned
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Upload your own video data to train fully custom policies for novel tasks
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-primary-purple/10 to-primary-cyan/10 border-primary-cyan/30">
                <h2 className="text-2xl font-bold text-white mb-4">About General Intuition</h2>
                <p className="text-gray-300 mb-4">
                  General Intuition spun out from Medal.tv with a singular mission: make embodied AI policies
                  accessible to every industrial robotics company.
                </p>
                <p className="text-gray-300 mb-4">
                  By leveraging Medal.tv&apos;s unprecedented dataset and inverse dynamics learning, we&apos;ve created
                  foundation policies that work immediately in the real world—no simulation required, no sim-to-real gap.
                </p>
                <p className="text-gray-300">
                  We&apos;re building the future where training a warehouse robot takes hours instead of months,
                  costs thousands instead of millions, and works the first time instead of the hundredth.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
