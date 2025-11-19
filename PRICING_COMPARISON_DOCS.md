# Pricing Comparison Table Component

## Overview
A premium, responsive pricing comparison table component for the IM-All Stars JEE Main 2026 site. Built with React, TypeScript, and Tailwind CSS.

## Component: `PlanComparisonTable.tsx`

### Features

#### 1. **Visual Design**
- ✨ Dark gradient background matching IM design system
- 🎨 Glassmorphism effect with backdrop blur
- 💫 Subtle glow effects (violet/indigo gradients)
- 🎯 Rounded-3xl container with border highlights
- ⚡ Smooth hover transitions on rows and tabs

#### 2. **Two Plans**
- **Standard Plan**: ₹999
  - All core learning features
  - Basic community support
  
- **Elite Plan**: ₹1999 ⭐ (Recommended)
  - All core learning features
  - Full personalization, guidance & mentorship
  - Priority support & test analysis

#### 3. **Filter Tabs**
Three interactive filter options:
- **All**: Shows all features (12 total)
- **Core learning**: Shows 5 core educational features
- **Mentorship & support**: Shows 7 support/mentorship features

Active tab has gradient fill, inactive tabs have outlined style.

#### 4. **Feature Comparison**

##### Core Learning (5 features)
All included in both Standard and Elite:
1. 20 live Physics sessions (concept + problems)
2. Complete JEE Main formula sheet + revision notes
3. Printable formula workbook (blank fill-in)
4. All chapters covered at JEE Main level
5. Weekly JEE Main-style tests

##### Mentorship & Support (7 features)
Standard has 2, Elite has all 7:
1. ✅ Telegram doubt community (both)
2. ✅ Daily / alternate-day live doubt-solving sessions (both)
3. ⭐ Personalised 45-day study roadmap (Elite only)
4. ⭐ Small-group / 1-1 mentorship calls (Elite only)
5. ⭐ Detailed test analysis + exam strategy breakdown (Elite only)
6. ⭐ Weekly mindset & talk sessions with mentors (Elite only)
7. ⭐ Priority doubt resolution & question pick-ups (Elite only)

#### 5. **Icons**
- ✅ Green check icon (emerald-400) for included features
- ➖ Grey dash icon for excluded features
- Custom SVG icons for consistent rendering

#### 6. **Responsive Design**
- **Desktop**: Full table layout with 3 columns
- **Tablet**: Horizontal scroll for table
- **Mobile**: Sticky first column, scrollable plan columns
- Fluid typography scaling (sm:text-base, lg:text-lg)

#### 7. **Accessibility**
- ✅ Proper semantic HTML (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`)
- ✅ ARIA labels (`aria-labelledby`, `aria-pressed`)
- ✅ Keyboard navigation support
- ✅ Focus states on all interactive elements
- ✅ High contrast text on dark backgrounds

#### 8. **Interactive Elements**
- Filter tabs with state management
- Hover effects on table rows
- CTA buttons at the bottom ("Get Elite Plan", "Get Standard Plan")
- Smooth transitions (200ms duration)

### TypeScript Types

```typescript
type FeatureCategory = 'core' | 'support';

interface Feature {
  id: string;
  name: string;
  category: FeatureCategory;
  standardIncluded: boolean;
  eliteIncluded: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  recommended?: boolean;
}

type FilterOption = 'all' | FeatureCategory;
```

### Usage

```tsx
import PlanComparisonTable from '../components/PlanComparisonTable';

export default function YourPage() {
  return (
    <main>
      {/* Other content */}
      <PlanComparisonTable />
      {/* More content */}
    </main>
  );
}
```

### Customization

To modify plans or features, edit the static arrays inside the component:

```typescript
// Add/remove/modify plans
const plans: Plan[] = [
  { id: 'standard', name: 'Standard', price: 999 },
  { id: 'elite', name: 'Elite', price: 1999, recommended: true },
];

// Add/remove/modify features
const features: Feature[] = [
  {
    id: 'unique-id',
    name: 'Feature description',
    category: 'core', // or 'support'
    standardIncluded: true,
    eliteIncluded: true,
  },
  // ... more features
];
```

### Integration
Already integrated into `/app/im-all-stars/page.tsx` after the RoadmapSection.

### Styling Highlights
- Background: `bg-gradient-to-b from-[#0B0B10] via-[#020617] to-[#0B0B10]`
- Card: `rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02]`
- Border: `border border-white/10`
- Shadow: `shadow-2xl`
- Backdrop: `backdrop-blur-xl`
- Active tab: `bg-gradient-to-r from-violet-600 to-indigo-600`
- Check icon: `text-emerald-400`
- Elite column highlight: `bg-gradient-to-br from-violet-600/5 to-indigo-600/5`

### Performance Notes
- Uses React hooks (`useState`) for filter state
- Efficient array filtering based on category
- No external dependencies beyond React
- Lightweight SVG icons
- CSS transitions (no animation library overhead)

---

**Built for IM-All Stars JEE Main 2026**  
Showcasing Standard vs Elite plans with premium UI/UX

