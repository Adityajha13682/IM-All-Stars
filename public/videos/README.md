# Video Files

Place your video files in this directory.

## Current Usage

The AmbiLight Video Player in the hero section is looking for:
- `/videos/sample.mp4`

## To Add Your Video

1. Add your MP4, WebM, or MOV file to this directory
2. Update the `videoUrl` prop in `app/components/CourseHero.tsx` to point to your video file
3. Or use a YouTube video by changing `sourceType` to `'youtube'` and providing a `youtubeId`

## Example YouTube Usage

```tsx
<AmbiLightVideo
  sourceType="youtube"
  youtubeId="YOUR_YOUTUBE_ID"
  // ... other props
/>
```

## Supported Video Formats

- MP4 (recommended for best compatibility)
- WebM
- MOV

## Recommended Video Specifications

- Resolution: 1920x1080 (1080p) or 1280x720 (720p)
- Aspect Ratio: 16:9
- Duration: 30-90 seconds for hero section
- File Size: < 50MB for optimal loading

