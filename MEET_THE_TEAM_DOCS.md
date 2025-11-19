# Meet the Team Section - Implementation Guide

## Overview
A premium team showcase section for the IM-All Stars JEE Main 2026 site, featuring the core team members with professional profile cards.

## Component: `MeetTheTeamSection.tsx`

### Location
`/app/components/MeetTheTeamSection.tsx`

### Features

#### 1. **Visual Design**
- ✨ Dark gradient background matching IM design system
- 🎨 Purple/violet glow effects in the background
- 💫 Glassmorphism cards with backdrop blur
- 🎯 Rounded-3xl cards matching Program Pillars style
- ⚡ Smooth hover animations with lift and glow effects

#### 2. **Team Data Structure**

```typescript
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}
```

Current team members (hardcoded, easily replaceable):
1. **Aditya "Adi bhaiya" Kumar Jha** - Head of Physics · IM-All Stars
2. **Team IM Mentor 1** - Doubt & test mentor
3. **Team IM Mentor 2** - Community & mindset coach

#### 3. **Layout & Responsive Design**
- **Container**: `max-w-6xl mx-auto` with proper padding
- **Grid**:
  - Mobile: 1 column
  - Tablet (md): 2 columns
  - Desktop (lg): 3 columns
- **Gap**: 8 units (2rem) between cards

#### 4. **Card Components**

Each team card includes:

##### Avatar Image
- Circular: `h-24 w-24` (mobile), `h-28 w-28` (desktop)
- Purple ring: `ring-2 ring-[#8C52FF]` with offset
- Hover effect: Ring expands to `ring-4` and changes to lighter purple
- Fallback: Purple gradient if image not found

##### Name
- Typography: `text-lg lg:text-xl font-semibold text-slate-50`
- Accommodates longer names with proper line height

##### Role
- Typography: `text-sm text-slate-400 font-medium`
- Descriptive job title and team

##### Bio
- Typography: `text-sm text-slate-300/80 leading-relaxed`
- Short, impactful description of responsibilities

#### 5. **Animations** (Framer Motion)

##### Container Animation
- Stagger children with 0.15s delay
- Fade in on scroll into view
- `viewport={{ once: true, margin: '-100px' }}`

##### Card Animation
- Initial state: `opacity: 0, y: 30`
- Animate to: `opacity: 1, y: 0`
- Duration: 0.6s with easeOut
- Smooth staggered reveal

##### Hover Effects
- **Transform**: `-translate-y-1` (4px lift)
- **Shadow**: `0_0_40px_rgba(140,82,255,0.45)` (purple glow)
- **Border**: Changes to `#8C52FF`
- **Ring**: Expands and lightens
- **Transition**: 300ms duration

#### 6. **Accessibility**
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Section labeled with `aria-labelledby`
- ✅ Proper alt text for images
- ✅ Image error handling with graceful fallback
- ✅ Keyboard navigable
- ✅ High contrast text on dark backgrounds

### Integration

#### Page Integration
Already integrated into `/app/im-all-stars/page.tsx`:

```typescript
import MeetTheTeamSection from '../components/MeetTheTeamSection';

// ... in the component return:
<CourseHero />
<ProgramPillars />
<RoadmapSection />
<PlanComparisonTable />
<MeetTheTeamSection />
```

#### Navigation Integration
Added to `VerticalDialNav.tsx` as the 5th section:
- ID: `team`
- Label: "Meet the team"

### Image Setup

#### Directory
`/public/team/`

#### Required Images
- `aditya.jpg` - Aditya's profile photo
- `mentor1.jpg` - Mentor 1's profile photo
- `mentor2.jpg` - Mentor 2's profile photo

#### Image Specifications
- **Format**: JPG, PNG, or WebP
- **Dimensions**: 400x400px (1:1 ratio recommended)
- **File size**: Under 200KB
- **Type**: Professional headshots or portraits

#### Fallback Behavior
If image fails to load, displays purple gradient placeholder (`linear-gradient(135deg, #8C52FF 0%, #5b21b6 100%)`)

### Customization Guide

#### Adding/Removing Team Members

Edit the `team` array in `MeetTheTeamSection.tsx`:

```typescript
const team: TeamMember[] = [
  {
    name: 'Full Name with "Nickname"',
    role: 'Job Title · Team/Program Name',
    bio: 'One-sentence description of what they do.',
    imageSrc: '/team/filename.jpg',
  },
  // Add more team members...
];
```

#### Styling Customization

**Colors**:
- Primary ring: `#8C52FF` (purple)
- Hover ring: `#A78BFA` (lighter purple)
- Background: `slate-900/60`
- Border: `white/5` → `#8C52FF` on hover

**Card Styling**:
```typescript
className="rounded-3xl bg-slate-900/60 border border-white/5 shadow-xl backdrop-blur p-6"
```

**Hover Shadow**:
```typescript
hover:shadow-[0_0_40px_rgba(140,82,255,0.45)]
```

### Typography Hierarchy
- **Section Heading**: `text-3xl sm:text-4xl lg:text-5xl font-bold`
- **Subtext**: `text-base sm:text-lg text-gray-400`
- **Name**: `text-lg lg:text-xl font-semibold text-slate-50`
- **Role**: `text-sm text-slate-400 font-medium`
- **Bio**: `text-sm text-slate-300/80 leading-relaxed`

### Performance Notes
- Uses Next.js `Image` component for optimized loading
- Lazy loads with intersection observer (via Framer Motion)
- Animations run only once (`viewport={{ once: true }}`)
- Efficient image error handling
- No external dependencies beyond React, Next.js, and Framer Motion

### Browser Support
- Modern browsers with CSS Grid support
- Fallback for images that fail to load
- Works without JavaScript (no animations, static content)

---

**Built for IM-All Stars JEE Main 2026**  
Premium team showcase matching the IM design language

