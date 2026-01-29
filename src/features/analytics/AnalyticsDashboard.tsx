'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Mock data for demonstrations
const performanceData = [
  { date: 'Jan 20', ruleBase: 87, generalIntuitionEnabled: 96, incidents: 12 },
  { date: 'Jan 21', ruleBase: 89, generalIntuitionEnabled: 97, incidents: 8 },
  { date: 'Jan 22', ruleBase: 85, generalIntuitionEnabled: 98, incidents: 6 },
  { date: 'Jan 23', ruleBase: 88, generalIntuitionEnabled: 97, incidents: 7 },
  { date: 'Jan 24', ruleBase: 90, generalIntuitionEnabled: 99, incidents: 3 },
  { date: 'Jan 25', ruleBase: 86, generalIntuitionEnabled: 98, incidents: 5 },
  { date: 'Jan 26', ruleBase: 91, generalIntuitionEnabled: 99, incidents: 2 },
]

const robotTypeData = [
  { name: 'AMR', simulations: 145, avgSuccess: 98.2 },
  { name: 'Forklift', simulations: 128, avgSuccess: 99.5 },
  { name: 'Drone', simulations: 89, avgSuccess: 96.8 },
  { name: 'Robotic Arm', simulations: 67, avgSuccess: 97.9 },
]

const incidentTypeData = [
  { name: 'Near Miss', value: 45, color: '#D4A574' },
  { name: 'Collision', value: 12, color: '#8B7355' },
  { name: 'Path Deviation', value: 28, color: '#F2D8CD' },
  { name: 'Timeout', value: 15, color: '#A69080' },
]

const recentIncidents = [
  { id: 'INC-2401', timestamp: '2026-01-26 14:32', robot: 'AMR-042', type: 'Near Miss', severity: 'warning', details: 'Pedestrian detected 2.1s ahead' },
  { id: 'INC-2402', timestamp: '2026-01-26 11:18', robot: 'Fork-015', type: 'Collision', severity: 'danger', details: 'Low-speed contact with shelf' },
  { id: 'INC-2403', timestamp: '2026-01-25 16:45', robot: 'Drone-08', type: 'Path Deviation', severity: 'info', details: 'Wind compensation adjusted route' },
  { id: 'INC-2404', timestamp: '2026-01-25 09:22', robot: 'AMR-031', type: 'Near Miss', severity: 'warning', details: 'Dynamic obstacle avoidance' },
  { id: 'INC-2405', timestamp: '2026-01-24 13:55', robot: 'Arm-003', type: 'Timeout', severity: 'info', details: 'Grasp attempt exceeded time limit' },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Summary Cards - Amplitude style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="flex items-start justify-between mb-3">
            <div className="text-sm font-medium text-gray-400">Total Simulations</div>
          </div>
          <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Chakra Petch, monospace' }}>429</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#F2D8CD]">↑ 12%</span>
            <span className="text-xs text-gray-500">vs last week</span>
          </div>
        </Card>

        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="flex items-start justify-between mb-3">
            <div className="text-sm font-medium text-gray-400">Success Rate</div>
          </div>
          <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Chakra Petch, monospace' }}>98.2%</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#F2D8CD]">↑ 2.1%</span>
            <span className="text-xs text-gray-500">improvement</span>
          </div>
        </Card>

        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="flex items-start justify-between mb-3">
            <div className="text-sm font-medium text-gray-400">Total Incidents</div>
          </div>
          <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Chakra Petch, monospace' }}>100</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#F2D8CD]">↓ 8%</span>
            <span className="text-xs text-gray-500">vs last week</span>
          </div>
        </Card>

        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="flex items-start justify-between mb-3">
            <div className="text-sm font-medium text-gray-400">Avg Efficiency</div>
          </div>
          <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Chakra Petch, monospace' }}>94.7%</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#F2D8CD]">↑ 3.2%</span>
            <span className="text-xs text-gray-500">improvement</span>
          </div>
        </Card>
      </div>

      {/* Performance Over Time */}
      <Card className="bg-white/[0.02] border-[#4D4D4D]">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            Success Rate Comparison
          </h3>
          <p className="text-sm text-gray-400">Performance trends over the last 7 days</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(77,77,77,0.3)" />
            <XAxis dataKey="date" stroke="#888888" style={{ fontSize: '12px' }} />
            <YAxis stroke="#888888" domain={[80, 100]} style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                border: '1px solid #4D4D4D',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '14px' }} />
            <Line
              type="monotone"
              dataKey="ruleBase"
              stroke="#888888"
              strokeWidth={2}
              name="Rule-Based"
              dot={{ fill: '#888888', r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="generalIntuitionEnabled"
              stroke="#F2D8CD"
              strokeWidth={2}
              name="General Intuition-Enabled"
              dot={{ fill: '#F2D8CD', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Robot Performance by Type */}
        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              Performance by Robot Type
            </h3>
            <p className="text-sm text-gray-400">Simulation counts and success rates</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={robotTypeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(77,77,77,0.3)" />
              <XAxis dataKey="name" stroke="#888888" style={{ fontSize: '12px' }} />
              <YAxis stroke="#888888" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  border: '1px solid #4D4D4D',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '14px' }} />
              <Bar dataKey="simulations" fill="#888888" name="Simulations" radius={[4, 4, 0, 0]} />
              <Bar dataKey="avgSuccess" fill="#F2D8CD" name="Avg Success %" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Incident Distribution */}
        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              Incident Distribution
            </h3>
            <p className="text-sm text-gray-400">Breakdown by incident type</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={incidentTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {incidentTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  border: '1px solid #4D4D4D',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Incidents Table */}
      <Card className="bg-white/[0.02] border-[#4D4D4D]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              Recent Incidents
            </h3>
            <p className="text-sm text-gray-400">Latest incident reports from your fleet</p>
          </div>
          <button className="text-sm text-[#F2D8CD] hover:text-white transition-colors duration-500"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            View All →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#4D4D4D]">
                <th className="text-left py-3 px-4 font-semibold text-gray-400">ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-400">Timestamp</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-400">Robot</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-400">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-400">Severity</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-400">Details</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentIncidents.map((incident) => (
                <tr key={incident.id} className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4 font-mono text-[#F2D8CD]">{incident.id}</td>
                  <td className="py-3 px-4 text-gray-300">{incident.timestamp}</td>
                  <td className="py-3 px-4 text-white font-medium">{incident.robot}</td>
                  <td className="py-3 px-4 text-gray-300">{incident.type}</td>
                  <td className="py-3 px-4">
                    <Badge variant={incident.severity as any}>
                      {incident.severity}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{incident.details}</td>
                  <td className="py-3 px-4">
                    <button className="text-[#F2D8CD] hover:text-white transition-colors duration-500"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      View Replay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="text-sm text-gray-400 mb-2">Avg Response Time</div>
          <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Chakra Petch, monospace' }}>28ms</div>
          <div className="text-xs text-gray-500">Target: &lt;50ms</div>
        </Card>

        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="text-sm text-gray-400 mb-2">Collision Avoidance</div>
          <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Chakra Petch, monospace' }}>99.5%</div>
          <div className="text-xs text-gray-500">vs 95% rule-based</div>
        </Card>

        <Card className="bg-white/[0.02] border-[#4D4D4D]">
          <div className="text-sm text-gray-400 mb-2">Uptime</div>
          <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Chakra Petch, monospace' }}>99.97%</div>
          <div className="text-xs text-gray-500">Last 30 days</div>
        </Card>
      </div>
    </div>
  )
}
