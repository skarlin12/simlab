# Quick Start Guide

## View the Application

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Then open: **http://localhost:3000**

## Navigation

The application has 11 pages accessible via the top navigation:

1. **Home** (`/`) - Landing page with hero, stats, policies, use cases
2. **Demos** (`/demos`) - Demo hub with 3 demo cards
   - Forklift Demo (`/demos/forklift`) - Placeholder (Phase 2)
   - Drone Demo (`/demos/drone`) - Placeholder (Phase 3)
   - Robotic Arm Demo (`/demos/robotic-arm`) - Placeholder (Phase 3)
3. **Policies** (`/policies`) - Foundation policies overview
4. **Scenario Builder** (`/scenario-builder`) - Placeholder (Phase 4)
5. **Analytics** (`/analytics`) - Placeholder (Phase 4)
6. **Use Cases** (`/use-cases`) - Detailed case studies with ROI
7. **About** (`/about`) - Technology explanation and roadmap

## Build for Production

```bash
# Create static export
npm run build

# Output is in /out directory
# Deploy the /out folder to any static hosting
```

## Project Structure Overview

```
src/
├── app/                  # Pages (Next.js App Router)
│   ├── page.tsx         # Landing page
│   ├── layout.tsx       # Root layout with Header/Footer
│   ├── demos/           # Demo pages
│   ├── policies/        # Foundation policies
│   ├── scenario-builder/
│   ├── analytics/
│   ├── use-cases/
│   └── about/
│
├── components/
│   ├── layout/          # Header, Footer
│   ├── ui/             # Button, Card, Badge, PageHeader
│   ├── marketing/      # Landing page sections
│   └── demo-shared/    # (Empty - Phase 2)
│
├── features/           # (Empty - Phases 2-4)
│   ├── forklift-demo/
│   ├── drone-demo/
│   ├── robotic-arm-demo/
│   ├── scenario-builder/
│   └── analytics/
│
└── lib/
    ├── constants/      # Routes
    └── utils/          # Helpers
```

## Key Features Implemented

### ✅ Working Now
- Full navigation with 11 pages
- Responsive header with active route highlighting
- Landing page with multiple sections
- Foundation policies grid (4 policies)
- Use cases with detailed case studies
- About page with technology explanation
- Professional design system (purple/cyan gradients)
- Static export ready

### 🚧 Coming Next (Phase 2)
- Interactive forklift demo with Canvas simulation
- Side-by-side comparison (rule-based vs GI)
- Real-time metrics display
- 60fps animation

## Development Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production (static export)
npm run build

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## Design System

### Colors
- **Primary Purple**: `#667eea`
- **Primary Cyan**: `#06b6d4`
- **Primary Magenta**: `#a855f7`
- **Success**: `#22c55e`
- **Danger**: `#ef4444`
- **Warning**: `#fbbf24`

### Components
- `<Button>` - 4 variants (primary, secondary, outline, ghost), 3 sizes
- `<Card>` - Glassmorphism effect with optional hover
- `<Badge>` - 5 color variants
- `<PageHeader>` - Consistent page headers

## Adding New Pages

1. Create file in `src/app/your-page/page.tsx`
2. Add route to `src/lib/constants/routes.ts`
3. Add navigation link to `src/components/layout/Header.tsx`
4. Add footer link to `src/components/layout/Footer.tsx` (optional)

Example:
```tsx
import { PageHeader } from '@/components/ui/PageHeader'

export default function YourPage() {
  return (
    <>
      <PageHeader
        title="Your Page"
        description="Your description"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Your content */}
        </div>
      </section>
    </>
  )
}
```

## Tailwind Classes Reference

Common patterns used throughout:
```tsx
// Gradient text
className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent"

// Glass card
className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10"

// Section padding
className="py-16 lg:py-20"

// Container
className="container mx-auto px-4"

// Grid layout
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### TypeScript errors
```bash
# Check for type errors
npx tsc --noEmit

# Many errors auto-fix on file save in VS Code
```

## VS Code Recommended Extensions

- ESLint
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- Prettier

## What to Work on Next

**Phase 2: Forklift Demo** (Starting point for implementation)

1. **Read the original demo**
   - Open `/demos/forklift_demo.html`
   - Identify simulation logic (lines 474-1552)
   - Extract grid system, pathfinding, collision detection

2. **Create simulation engine**
   - `src/lib/simulation-engine/grid.ts`
   - `src/lib/simulation-engine/pathfinding.ts`
   - `src/lib/simulation-engine/collision.ts`

3. **Build forklift demo**
   - `src/features/forklift-demo/ForkliftSimulation.ts`
   - `src/features/forklift-demo/ForkliftRenderer.ts`
   - `src/features/forklift-demo/ForkliftDemo.tsx`

4. **Create demo components**
   - `src/components/demo-shared/ComparisonPanel.tsx`
   - `src/components/demo-shared/MetricsDisplay.tsx`
   - `src/components/demo-shared/SimulationControls.tsx`

5. **Add state management**
   - `src/stores/demo-store.ts`
   - `src/hooks/useAnimationFrame.ts`

6. **Update demo page**
   - Replace placeholder in `src/app/demos/forklift/page.tsx`

See `IMPLEMENTATION_STATUS.md` for detailed Phase 2 plan.

## Questions?

- Check `README.md` for overview
- Check `IMPLEMENTATION_STATUS.md` for detailed status
- Review original plan in `/PRD/` directory
