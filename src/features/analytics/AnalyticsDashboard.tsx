'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Mock data for demonstrations
const performanceData = [
  { date: 'Jan 20', ruleBase: 87, giEnabled: 96, incidents: 12 },
  { date: 'Jan 21', ruleBase: 89, giEnabled: 97, incidents: 8 },
  { date: 'Jan 22', ruleBase: 85, giEnabled: 98, incidents: 6 },
  { date: 'Jan 23', ruleBase: 88, giEnabled: 97, incidents: 7 },
  { date: 'Jan 24', ruleBase: 90, giEnabled: 99, incidents: 3 },
  { date: 'Jan 25', ruleBase: 86, giEnabled: 98, incidents: 5 },
  { date: 'Jan 26', ruleBase: 91, giEnabled: 99, incidents: 2 },
]

const robotTypeData = [
  { name: 'AMR', simulations: 145, avgSuccess: 98.2 },
  { name: 'Forklift', simulations: 128, avgSuccess: 99.5 },
  { name: 'Drone', simulations: 89, avgSuccess: 96.8 },
  { name: 'Robotic Arm', simulations: 67, avgSuccess: 97.9 },
]

const incidentTypeData = [
  { name: 'Near Miss', value: 45, color: '#fbbf24' },
  { name: 'Collision', value: 12, color: '#ef4444' },
  { name: 'Path Deviation', value: 28, color: '#a855f7' },
  { name: 'Timeout', value: 15, color: '#06b6d4' },
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
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="text-sm text-gray-400 mb-1">Total Simulations</div>
          <div className="text-3xl font-bold text-white mb-2">429</div>
          <Badge variant="success">+12% this week</Badge>
        </Card>

        <Card>
          <div className="text-sm text-gray-400 mb-1">Success Rate</div>
          <div className="text-3xl font-bold text-primary-cyan mb-2">98.2%</div>
          <Badge variant="success">+2.1% improvement</Badge>
        </Card>

        <Card>
          <div className="text-sm text-gray-400 mb-1">Total Incidents</div>
          <div className="text-3xl font-bold text-status-warning mb-2">100</div>
          <Badge variant="warning">-8% vs last week</Badge>
        </Card>

        <Card>
          <div className="text-sm text-gray-400 mb-1">Avg Efficiency</div>
          <div className="text-3xl font-bold text-primary-purple mb-2">94.7%</div>
          <Badge variant="info">+3.2% improvement</Badge>
        </Card>
      </div>

      {/* Performance Over Time */}
      <Card>
        <h3 className="text-xl font-bold text-white mb-6">Success Rate Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" domain={[80, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(10, 10, 15, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="ruleBase"
              stroke="#ef4444"
              strokeWidth={2}
              name="Rule-Based"
              dot={{ fill: '#ef4444', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="giEnabled"
              stroke="#667eea"
              strokeWidth={2}
              name="GI-Enabled"
              dot={{ fill: '#667eea', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Robot Performance by Type */}
        <Card>
          <h3 className="text-xl font-bold text-white mb-6">Performance by Robot Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={robotTypeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(10, 10, 15, 0.95)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Legend />
              <Bar dataKey="simulations" fill="#06b6d4" name="Simulations" />
              <Bar dataKey="avgSuccess" fill="#667eea" name="Avg Success %" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Incident Distribution */}
        <Card>
          <h3 className="text-xl font-bold text-white mb-6">Incident Distribution</h3>
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
                  backgroundColor: 'rgba(10, 10, 15, 0.95)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Incidents Table */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Recent Incidents</h3>
          <button className="text-sm text-primary-cyan hover:text-primary-purple transition-colors">
            View All →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Timestamp</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Robot</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Type</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Severity</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Details</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentIncidents.map((incident) => (
                <tr key={incident.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 text-sm text-primary-cyan font-mono">{incident.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-300">{incident.timestamp}</td>
                  <td className="py-3 px-4 text-sm text-white font-medium">{incident.robot}</td>
                  <td className="py-3 px-4 text-sm text-gray-300">{incident.type}</td>
                  <td className="py-3 px-4">
                    <Badge variant={incident.severity as any}>
                      {incident.severity}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-400">{incident.details}</td>
                  <td className="py-3 px-4">
                    <button className="text-sm text-primary-cyan hover:text-primary-purple transition-colors">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="text-sm text-gray-400 mb-2">Avg Response Time</div>
          <div className="text-2xl font-bold text-white">28ms</div>
          <div className="text-xs text-gray-500 mt-1">Target: &lt;50ms</div>
        </Card>

        <Card>
          <div className="text-sm text-gray-400 mb-2">Collision Avoidance</div>
          <div className="text-2xl font-bold text-status-success">99.5%</div>
          <div className="text-xs text-gray-500 mt-1">vs 95% rule-based</div>
        </Card>

        <Card>
          <div className="text-sm text-gray-400 mb-2">Uptime</div>
          <div className="text-2xl font-bold text-primary-cyan">99.97%</div>
          <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
        </Card>
      </div>
    </div>
  )
}
