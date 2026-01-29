'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

interface ScenarioObject {
  id: string
  type: 'robot' | 'obstacle' | 'waypoint' | 'pedestrian'
  x: number
  y: number
  label: string
}

const objectTemplates = [
  { type: 'robot' as const, label: 'AMR Robot', icon: '🤖', color: '#667eea' },
  { type: 'obstacle' as const, label: 'Obstacle', icon: '📦', color: '#ef4444' },
  { type: 'waypoint' as const, label: 'Waypoint', icon: '📍', color: '#22c55e' },
  { type: 'pedestrian' as const, label: 'Pedestrian', icon: '🚶', color: '#fbbf24' },
]

const scenarioTemplates = {
  warehouse: [
    { id: '1', type: 'robot' as const, x: 100, y: 100, label: 'AMR-1' },
    { id: '2', type: 'robot' as const, x: 100, y: 200, label: 'AMR-2' },
    { id: '3', type: 'obstacle' as const, x: 300, y: 150, label: 'Shelf A' },
    { id: '4', type: 'obstacle' as const, x: 300, y: 300, label: 'Shelf B' },
    { id: '5', type: 'pedestrian' as const, x: 450, y: 200, label: 'Worker 1' },
    { id: '6', type: 'waypoint' as const, x: 600, y: 400, label: 'Loading Zone' },
  ],
  factory: [
    { id: '1', type: 'robot' as const, x: 150, y: 250, label: 'Forklift-1' },
    { id: '2', type: 'obstacle' as const, x: 350, y: 150, label: 'Machine 1' },
    { id: '3', type: 'obstacle' as const, x: 350, y: 350, label: 'Machine 2' },
    { id: '4', type: 'pedestrian' as const, x: 500, y: 250, label: 'Operator' },
    { id: '5', type: 'waypoint' as const, x: 650, y: 250, label: 'Assembly' },
  ],
  inspection: [
    { id: '1', type: 'robot' as const, x: 100, y: 250, label: 'Drone-1' },
    { id: '2', type: 'obstacle' as const, x: 300, y: 200, label: 'Structure' },
    { id: '3', type: 'waypoint' as const, x: 200, y: 100, label: 'Point A' },
    { id: '4', type: 'waypoint' as const, x: 400, y: 150, label: 'Point B' },
    { id: '5', type: 'waypoint' as const, x: 500, y: 300, label: 'Point C' },
    { id: '6', type: 'waypoint' as const, x: 600, y: 400, label: 'Point D' },
  ],
}

export function ScenarioBuilder() {
  const [objects, setObjects] = useState<ScenarioObject[]>([
    { id: '1', type: 'robot', x: 100, y: 100, label: 'Robot 1' },
    { id: '2', type: 'waypoint', x: 600, y: 400, label: 'Goal' },
  ])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [scenarioName, setScenarioName] = useState('Warehouse Navigation Test')
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isRunning, setIsRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggingId && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        const x = Math.max(20, Math.min(rect.width - 20, e.clientX - rect.left))
        const y = Math.max(20, Math.min(rect.height - 20, e.clientY - rect.top))

        setObjects(objects.map(obj =>
          obj.id === draggingId ? { ...obj, x, y } : obj
        ))
      }
    }

    const handleMouseUp = () => {
      setDraggingId(null)
    }

    if (draggingId) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [draggingId, objects])

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('canvas-area')) {
      setSelectedId(null)
    }
  }

  const handleDragObject = (template: typeof objectTemplates[0]) => {
    const newObject: ScenarioObject = {
      id: Date.now().toString(),
      type: template.type,
      x: 350,
      y: 250,
      label: `${template.label} ${objects.filter(o => o.type === template.type).length + 1}`,
    }
    setObjects([...objects, newObject])
    setSelectedId(newObject.id)
  }

  const handleObjectMouseDown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedId(id)
    setDraggingId(id)

    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const obj = objects.find(o => o.id === id)
      if (obj) {
        setDragOffset({
          x: e.clientX - rect.left - obj.x,
          y: e.clientY - rect.top - obj.y,
        })
      }
    }
  }

  const handleDeleteSelected = () => {
    if (selectedId) {
      setObjects(objects.filter(obj => obj.id !== selectedId))
      setSelectedId(null)
    }
  }

  const handleSave = () => {
    const scenario = {
      name: scenarioName,
      objects,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('gi-simlab-scenario', JSON.stringify(scenario))
    alert('✅ Scenario saved successfully!')
  }

  const handleLoad = () => {
    const saved = localStorage.getItem('gi-simlab-scenario')
    if (saved) {
      const scenario = JSON.parse(saved)
      setObjects(scenario.objects)
      setScenarioName(scenario.name)
      alert('✅ Scenario loaded successfully!')
    } else {
      alert('⚠️ No saved scenario found')
    }
  }

  const handleLoadTemplate = (templateKey: keyof typeof scenarioTemplates, name: string) => {
    setObjects(scenarioTemplates[templateKey])
    setScenarioName(name)
    setSelectedId(null)
  }

  const handleRunScenario = () => {
    setIsRunning(true)

    // Simulate running the scenario
    setTimeout(() => {
      setIsRunning(false)
      setShowResults(true)
    }, 2000)
  }

  const handleCloseResults = () => {
    setShowResults(false)
  }

  const selectedObject = objects.find(obj => obj.id === selectedId)

  // Calculate mock results
  const robotCount = objects.filter(o => o.type === 'robot').length
  const obstacleCount = objects.filter(o => o.type === 'obstacle').length
  const pedestrianCount = objects.filter(o => o.type === 'pedestrian').length
  const waypointCount = objects.filter(o => o.type === 'waypoint').length
  const complexity = Math.min(100, (obstacleCount * 10 + pedestrianCount * 15 + waypointCount * 5))
  const successRate = Math.max(85, 100 - complexity * 0.15)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Object Palette */}
        <div className="lg:col-span-1">
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">Object Palette</h3>
            <div className="space-y-2">
              {objectTemplates.map((template, index) => (
                <button
                  key={index}
                  onClick={() => handleDragObject(template)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left"
                >
                  <span className="text-2xl">{template.icon}</span>
                  <span className="text-white text-sm">{template.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full text-sm" onClick={handleSave}>
                  💾 Save Scenario
                </Button>
                <Button variant="outline" className="w-full text-sm" onClick={handleLoad}>
                  📂 Load Scenario
                </Button>
                {selectedId && (
                  <Button variant="outline" className="w-full text-sm text-status-danger border-status-danger" onClick={handleDeleteSelected}>
                    🗑️ Delete Selected
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Canvas */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                value={scenarioName}
                onChange={(e) => setScenarioName(e.target.value)}
                className="text-lg font-bold text-white bg-transparent border-b border-white/20 focus:border-primary-cyan outline-none"
              />
              <Badge variant="info">{objects.length} objects</Badge>
            </div>

            <div
              ref={canvasRef}
              className="canvas-area relative bg-gradient-to-br from-background-darker to-background-dark rounded-lg border-2 border-white/10 cursor-default"
              style={{ height: '500px', userSelect: 'none' }}
              onClick={handleCanvasClick}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }}
              />

              {/* Objects */}
              {objects.map((obj) => {
                const template = objectTemplates.find(t => t.type === obj.type)
                const isSelected = obj.id === selectedId
                const isDragging = obj.id === draggingId

                return (
                  <div
                    key={obj.id}
                    onMouseDown={(e) => handleObjectMouseDown(obj.id, e)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                      isDragging ? 'cursor-grabbing scale-110 z-20' : 'cursor-grab hover:scale-105'
                    } ${isSelected && !isDragging ? 'scale-110 z-10' : ''}`}
                    style={{
                      left: `${obj.x}px`,
                      top: `${obj.y}px`,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                          isSelected ? 'ring-4 ring-primary-cyan' : 'ring-2 ring-white/30'
                        }`}
                        style={{ backgroundColor: template?.color }}
                      >
                        {template?.icon}
                      </div>
                      <span className="text-xs text-white mt-1 bg-black/50 px-2 py-0.5 rounded whitespace-nowrap">
                        {obj.label}
                      </span>
                    </div>
                  </div>
                )
              })}

              {/* Instructions overlay when minimal objects */}
              {objects.length <= 3 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-gray-500">
                    <p className="text-lg mb-2">🎯 Click objects from palette to add</p>
                    <p className="text-sm">🖱️ Drag objects to move • Click to select • Delete to remove</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex gap-2">
              <Button
                variant="primary"
                className="flex-1"
                onClick={handleRunScenario}
                disabled={isRunning || robotCount === 0}
              >
                {isRunning ? '⏳ Running...' : '▶️ Run Scenario'}
              </Button>
              <Button variant="outline" onClick={() => setObjects([])}>
                🔄 Clear Canvas
              </Button>
            </div>
          </Card>
        </div>

        {/* Property Panel */}
        <div className="lg:col-span-1">
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">Properties</h3>

            {selectedObject ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400">Object Type</label>
                  <div className="mt-1 text-white font-medium capitalize">{selectedObject.type}</div>
                </div>

                <div>
                  <label className="text-sm text-gray-400">Label</label>
                  <input
                    type="text"
                    value={selectedObject.label}
                    onChange={(e) => {
                      setObjects(objects.map(obj =>
                        obj.id === selectedId ? { ...obj, label: e.target.value } : obj
                      ))
                    }}
                    className="mt-1 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:border-primary-cyan outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-gray-400">X Position</label>
                    <input
                      type="number"
                      value={Math.round(selectedObject.x)}
                      onChange={(e) => {
                        setObjects(objects.map(obj =>
                          obj.id === selectedId ? { ...obj, x: parseInt(e.target.value) || 0 } : obj
                        ))
                      }}
                      className="mt-1 w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-primary-cyan outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Y Position</label>
                    <input
                      type="number"
                      value={Math.round(selectedObject.y)}
                      onChange={(e) => {
                        setObjects(objects.map(obj =>
                          obj.id === selectedId ? { ...obj, y: parseInt(e.target.value) || 0 } : obj
                        ))
                      }}
                      className="mt-1 w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-primary-cyan outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Type-Specific Settings</h4>
                  {selectedObject.type === 'robot' && (
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2 text-gray-300">
                        <input type="checkbox" defaultChecked className="rounded" />
                        Enable collision avoidance
                      </label>
                      <label className="flex items-center gap-2 text-gray-300">
                        <input type="checkbox" defaultChecked className="rounded" />
                        Predictive path planning
                      </label>
                    </div>
                  )}
                  {selectedObject.type === 'obstacle' && (
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2 text-gray-300">
                        <input type="checkbox" className="rounded" />
                        Static obstacle
                      </label>
                      <label className="flex items-center gap-2 text-gray-300">
                        <input type="checkbox" defaultChecked className="rounded" />
                        Dynamic obstacle
                      </label>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>Select an object to view properties</p>
                <p className="text-sm mt-2">or drag to reposition</p>
              </div>
            )}
          </Card>

          <Card className="mt-6">
            <h3 className="text-lg font-bold text-white mb-3">Scenario Templates</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleLoadTemplate('warehouse', 'Warehouse Navigation')}
                className="w-full text-left px-3 py-2 rounded bg-white/5 hover:bg-white/10 text-sm text-white transition-colors"
              >
                📦 Warehouse Navigation
              </button>
              <button
                onClick={() => handleLoadTemplate('factory', 'Factory Floor')}
                className="w-full text-left px-3 py-2 rounded bg-white/5 hover:bg-white/10 text-sm text-white transition-colors"
              >
                🏭 Factory Floor
              </button>
              <button
                onClick={() => handleLoadTemplate('inspection', 'Inspection Route')}
                className="w-full text-left px-3 py-2 rounded bg-white/5 hover:bg-white/10 text-sm text-white transition-colors"
              >
                🚁 Inspection Route
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Results Modal */}
      {showResults && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={handleCloseResults}>
          <div className="bg-gradient-to-br from-background-dark to-background-darker border-2 border-primary-cyan rounded-xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-white mb-2">Scenario Complete!</h2>
              <p className="text-gray-400">Simulation results for: {scenarioName}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                <div className="text-3xl font-bold text-status-success">{successRate.toFixed(1)}%</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Avg Time to Goal</div>
                <div className="text-3xl font-bold text-primary-cyan">12.3s</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Collisions Avoided</div>
                <div className="text-3xl font-bold text-primary-purple">{obstacleCount + pedestrianCount}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-1">Efficiency</div>
                <div className="text-3xl font-bold text-white">94.2%</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
              <h3 className="font-bold text-white mb-3">Scenario Details</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Robots:</span>
                  <span className="text-white font-medium">{robotCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Obstacles:</span>
                  <span className="text-white font-medium">{obstacleCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pedestrians:</span>
                  <span className="text-white font-medium">{pedestrianCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Waypoints:</span>
                  <span className="text-white font-medium">{waypointCount}</span>
                </div>
                <div className="flex justify-between col-span-2">
                  <span className="text-gray-400">Complexity:</span>
                  <span className="text-white font-medium">{complexity}%</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" className="flex-1" onClick={handleCloseResults}>
                Close
              </Button>
              <Button variant="outline" onClick={() => { handleCloseResults(); handleRunScenario(); }}>
                🔄 Run Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
