# AmbiLight Video Player Component

A reusable React component for displaying videos with an ambient glow effect (AmbiLight) around the player. Perfect for hero sections and promotional content.

## Features

- ✅ Support for direct video URLs (MP4, WebM, MOV)
- ✅ YouTube embed support
- ✅ Customizable ambilight glow effect
- ✅ Responsive 16:9 aspect ratio
- ✅ Play/pause state detection for dynamic glow
- ✅ Fully typed with TypeScript
- ✅ Built with Tailwind CSS
- ✅ Accessible with ARIA labels

## Usage

### Basic Example

```tsx
import AmbiLightVideo from './components/AmbiLightVideo';

export default function MyComponent() {
  return (
    <AmbiLightVideo
      videoUrl="/videos/my-video.mp4"
    />
  );
}
```

### YouTube Video

```tsx
<AmbiLightVideo
  sourceType="youtube"
  youtubeId="dQw4w9WgXcQ"
  autoplay={false}
  muted={false}
/>
```

### Advanced Configuration

```tsx
<AmbiLightVideo
  sourceType="url"
  videoUrl="/videos/sample.mp4"
  autoplay={false}
  muted={false}
  loop={false}
  showControls={true}
  objectFit="cover"
  blur={50}
  glowScale={1.2}
  intensity={0.7}
  saturation={1.2}
  brightness={1.1}
  borderRadius="rounded-[32px]"
  shadowPreset="xl"
/>
```

## Props

### Video Source Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sourceType` | `'url' \| 'youtube' \| 'upload'` | `'url'` | Type of video source |
| `videoUrl` | `string` | `'/videos/sample.mp4'` | Direct URL to video file (MP4, WebM, MOV) |
| `youtubeId` | `string` | `undefined` | YouTube video ID (only used when `sourceType='youtube'`) |
| `startTime` | `number` | `0` | Start time in seconds (YouTube only) |

### Playback Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoplay` | `boolean` | `false` | Auto-play video on load |
| `muted` | `boolean` | `false` | Mute video audio |
| `loop` | `boolean` | `false` | Loop video playback |
| `showControls` | `boolean` | `true` | Show video controls |
| `objectFit` | `'cover' \| 'contain' \| 'fill'` | `'cover'` | How video fits in container |

### AmbiLight Effect Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blur` | `number` | `50` | Blur amount in pixels (0-100 recommended) |
| `glowScale` | `number` | `1.2` | Scale multiplier for glow (1.0-1.5 recommended) |
| `intensity` | `number` | `0.7` | Opacity/intensity of glow (0-1) |
| `saturation` | `number` | `1.2` | Color saturation multiplier |
| `brightness` | `number` | `1.1` | Brightness multiplier |

### Style Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `borderRadius` | `string` | `'rounded-[32px]'` | Tailwind border radius class |
| `shadowPreset` | `'none' \| 'soft' \| 'xl'` | `'xl'` | Shadow preset |

## How It Works

### Ambilight Effect

The AmbiLight effect is created using a layered approach:

1. **Background Glow Layer**: An absolutely positioned element behind the video with:
   - Radial gradient from violet to transparent
   - CSS filters: `blur()`, `saturate()`, `brightness()`
   - Transform `scale()` to extend beyond video bounds

2. **Dynamic Intensity**: The glow opacity changes based on play state:
   - Playing: Full intensity (as specified by `intensity` prop)
   - Paused: 40% of intensity
   - Smooth transition with CSS `transition-opacity`

3. **Video Container**: The main video sits in a card with:
   - Rounded corners
   - Border and shadow
   - Backdrop blur for depth

### Responsive Design

- Container maintains 16:9 aspect ratio using padding-bottom trick
- Max width of 560px (can be customized with wrapper div)
- Video scales appropriately on all screen sizes
- Works in both portrait and landscape orientations

## Styling Customization

### Custom Border Radius

```tsx
<AmbiLightVideo
  borderRadius="rounded-lg"
  // or
  borderRadius="rounded-[24px]"
/>
```

### Custom Colors

To customize the glow colors, modify the component source:

```tsx
// In AmbiLightVideo.tsx, line ~60
background: 'radial-gradient(ellipse at center, 
  rgba(140, 82, 255, 0.6) 0%,   // Your primary color
  rgba(99, 102, 241, 0.4) 40%,  // Your secondary color
  rgba(99, 102, 241, 0.2) 70%, 
  transparent 100%)'
```

### Wrapper Styling

Wrap the component to add additional styling:

```tsx
<div className="max-w-[800px] mx-auto my-12">
  <AmbiLightVideo videoUrl="/videos/sample.mp4" />
</div>
```

## Performance Considerations

1. **Video Size**: Keep video files under 50MB for optimal loading
2. **Resolution**: Use 1080p or 720p for best quality/performance balance
3. **Format**: MP4 with H.264 codec offers best browser compatibility
4. **Lazy Loading**: Component uses `playsInline` for mobile optimization
5. **Blur Performance**: Higher blur values (>80px) may impact performance on lower-end devices

## Accessibility

- Videos include `aria-label` attributes
- YouTube embeds have proper `title` attributes
- Supports keyboard navigation for native video controls
- Works with screen readers

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ iOS Safari (iOS 12+)
- ✅ Chrome Android (latest)

## Examples

### Hero Section (Current Implementation)

```tsx
<div className="flex flex-col lg:flex-row gap-10">
  <div className="lg:flex-1">
    {/* Text content */}
  </div>
  <div className="lg:flex-1">
    <AmbiLightVideo
      sourceType="url"
      videoUrl="/videos/sample.mp4"
      autoplay={false}
      showControls={true}
      blur={50}
      intensity={0.7}
    />
  </div>
</div>
```

### Fullscreen Background Video

```tsx
<div className="fixed inset-0 z-0">
  <AmbiLightVideo
    videoUrl="/videos/background.mp4"
    autoplay={true}
    muted={true}
    loop={true}
    showControls={false}
    objectFit="cover"
    blur={60}
    glowScale={1.5}
  />
</div>
```

## Troubleshooting

### Video Not Loading

1. Check video file path is correct
2. Ensure video is in `/public` directory
3. Verify video format is supported (MP4 recommended)
4. Check browser console for errors

### Glow Not Visible

1. Increase `intensity` prop
2. Ensure video is playing (glow is less visible when paused)
3. Check `blur` and `glowScale` values
4. Verify background color contrast

### Performance Issues

1. Reduce `blur` value
2. Lower video resolution
3. Compress video file
4. Consider using `poster` attribute for initial frame

## Future Enhancements

- [ ] Custom glow color props
- [ ] Poster image support
- [ ] Progress bar customization
- [ ] Volume control UI
- [ ] Multiple video sources (quality selection)
- [ ] Analytics integration
- [ ] Picture-in-picture support

## License

Part of the IM-All Stars 2026 project.

