# Team Images

This directory contains team member profile photos for the "Meet the team" section.

## Required Images

Place the following images in this directory:

- `aditya.jpg` - Profile photo for Aditya "Adi bhaiya" Kumar Jha
- `mentor1.jpg` - Profile photo for Team IM Mentor 1
- `mentor2.jpg` - Profile photo for Team IM Mentor 2

## Image Specifications

- **Format**: JPG, PNG, or WebP
- **Dimensions**: Recommended 400x400px (square, 1:1 aspect ratio)
- **File size**: Keep under 200KB for optimal loading
- **Quality**: High-quality headshots or professional photos work best

## Fallback Behavior

If an image is not found, the component will display a gradient placeholder with the IM brand colors (purple gradient).

## Updating Team Members

To update team member information, edit the `team` array in:
`/app/components/MeetTheTeamSection.tsx`

```typescript
const team: TeamMember[] = [
  {
    name: "Full Name",
    role: "Role Title",
    bio: "Brief bio description...",
    imageSrc: "/team/filename.jpg",
  },
  // ... more team members
];
```

