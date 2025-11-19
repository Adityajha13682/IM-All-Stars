# IM-All Stars - JEE Mains 2026 Physics Flagship Course Landing Page

A modern, dark-themed landing page for the IM-All Stars JEE Mains 2026 Physics course, built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The main course page is available at [http://localhost:3000/im-all-stars](http://localhost:3000/im-all-stars).

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
IM-All Stars/
├── app/
│   ├── components/
│   │   └── CourseHero.tsx      # Hero section component
│   ├── im-all-stars/
│   │   └── page.tsx             # Course landing page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page (redirects to /im-all-stars)
│   └── globals.css              # Global styles with Tailwind
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies
```

## Features

### CourseHero Component

The hero section (`app/components/CourseHero.tsx`) includes:

- **Responsive Design**: Mobile-first approach with stacked layout on mobile and 2-column on desktop
- **Dark Theme**: Deep background (#0B0B10, #020617) with violet accent (#8C52FF)
- **Brand Badge**: "Invisible Mechanics Presents" pill badge
- **Main Heading**: Course title with large, bold typography
- **CTAs**: Primary gradient button and secondary outline button
- **Social Proof**: Student result badges showing JEE Advanced 2025 achievements
- **Visual Card**: Interactive course card with target score, progress bars, and floating animations
- **Accessibility**: Proper ARIA labels, keyboard focus states, and sufficient color contrast

### Design Highlights

- **Color Palette**:
  - Background: Very dark (#0B0B10, #020617)
  - Primary accent: Violet (#8C52FF)
  - Gradients: Violet to indigo
  - Text: White with muted gray for secondary content

- **Animations**:
  - Subtle floating animations on the hero card
  - Hover effects on buttons (scale, shadow)
  - Glowing background effects

- **Typography**:
  - Responsive text sizing (mobile → desktop)
  - Clean hierarchy with bold headings
  - Comfortable line lengths for readability

## Customization

To customize the hero section, edit `app/components/CourseHero.tsx`. Key customization points:

- **Colors**: Modify Tailwind classes (violet-X, indigo-X)
- **Content**: Update text strings directly in the component
- **Layout**: Adjust grid columns and spacing with Tailwind utilities
- **Animations**: Modify keyframes in the `<style jsx>` section

## Course Details

- **Course Name**: IM-All Stars — JEE Mains 2026 Physics Flagship
- **Target**: 100/100 in JEE Mains Physics
- **Format**: 25 problem-solving sessions, mock tests, ranker mentorship
- **Audience**: JEE Mains 2026 aspirants (16-18 years old)

## License

Private - All rights reserved.

