# GI SimLab Web Application

A full-featured SimLab web platform showcasing GI's policy agents for industrial automation.

## Overview

GI SimLab demonstrates next-generation policy agents trained on 500M+ hours of real-world data from Medal.tv. This platform showcases:

- **3 Interactive Demos**: Forklift navigation, drone inspection, and robotic arm manipulation
- **Foundation Policies**: Pre-trained models ready for fine-tuning
- **Scenario Builder**: Create and test custom scenarios
- **Analytics Dashboard**: Track performance metrics across simulations
- **Use Cases**: Real-world ROI examples from leading companies

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS 3.4
- **State Management**: Zustand 4.5
- **Animations**: Framer Motion 11
- **Charts**: Recharts 2.10

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The build creates a static export in the /out directory
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
gi-simlab/
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   ├── components/             # Reusable components
│   │   ├── layout/            # Header, Footer
│   │   ├── ui/                # Button, Card, Badge, etc.
│   │   ├── demo-shared/       # Demo-specific components
│   │   └── marketing/         # Landing page sections
│   ├── features/              # Feature modules
│   │   ├── forklift-demo/    # Forklift simulation
│   │   ├── drone-demo/       # Drone simulation
│   │   └── robotic-arm-demo/ # Robotic arm simulation
│   ├── lib/                   # Utilities
│   │   ├── simulation-engine/ # Physics, pathfinding, collision
│   │   ├── storage/          # LocalStorage helpers
│   │   └── utils/            # General utilities
│   ├── stores/               # Zustand state stores
│   ├── hooks/                # Custom React hooks
│   └── types/                # TypeScript type definitions
└── public/                    # Static assets
```

## Implementation Status

### Phase 1: Foundation (Complete ✓)
- [x] Project setup with Next.js 14 + TypeScript + Tailwind
- [x] Core layout (Header, Footer)
- [x] UI primitives (Button, Card, Badge, etc.)
- [x] Landing page with all sections
- [x] All route pages created
- [x] Design system established
- [x] Full navigation working

### Phase 2: Forklift Demo (Next)
- [ ] Extract simulation logic from HTML demo
- [ ] Create ForkliftSimulation.ts class
- [ ] Implement pathfinding and collision detection
- [ ] Build Canvas renderer
- [ ] Create demo-shared components
- [ ] Setup Zustand store
- [ ] Implement 60fps animation loop
- [ ] Build interactive demo page

### Phase 3: Drone & Robotic Arm (Planned)
- [ ] Drone simulation and demo
- [ ] Robotic arm simulation and demo
- [ ] Demo hub with all 3 demos

### Phase 4: Platform Features (Planned)
- [ ] Scenario Builder interface
- [ ] Analytics Dashboard with charts
- [ ] Enhanced Use Cases page
- [ ] Foundation Policies details

### Phase 5: Polish & Deployment (Planned)
- [ ] Mobile responsiveness
- [ ] Animations and transitions
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Deploy to Vercel

## Key Features

### Landing Page
- Hero section with CTAs
- Industry statistics bar
- Foundation policies grid (4 policies)
- "How It Works" flow
- Use cases with ROI
- Responsive design

### Interactive Demos
Each demo features:
- Side-by-side comparison (rule-based vs GI-enabled)
- Live Canvas simulation at 60fps
- Real-time metrics display
- Play/Pause/Reset controls
- Performance comparisons

### Foundation Policies
- AMR Navigation (99.5% collision avoidance)
- Forklift Operations (98.2% safety score)
- Drone Inspection (55% speed improvement)
- Robotic Arm (98% success rate)

### Use Cases
- Warehouse Automation ($10M+ annual savings)
- Infrastructure Inspection (30-50% faster)
- Adaptive Manufacturing ($250K-$1M per line)

## Development Notes

### Static Export
This application is configured for static export (no backend required):
- All pages are pre-rendered at build time
- Uses LocalStorage for data persistence
- Can be deployed to any static hosting (Vercel, Netlify, S3, etc.)

### Performance
- 60fps Canvas animations using requestAnimationFrame
- Zustand for efficient state management
- Code splitting and lazy loading
- Optimized build output

### Type Safety
- Strict TypeScript configuration
- Type-safe state management
- Comprehensive type definitions

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `out`
4. Deploy

### Other Hosting Options
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static file hosting

## Contributing

This is a demonstration application. For production use:
1. Implement actual simulation engines (Phase 2-3)
2. Add backend API for fine-tuning platform
3. Integrate real analytics data
4. Add user authentication
5. Implement scenario execution engine

## License

Proprietary - GI SimLab © 2026

## Contact

For more information about GI's policy agents and industrial automation solutions, visit the platform or contact the GI team.
