# ransom-text

A React component that renders text as ransom letter-style cut-out images.

## Installation

```bash
npm install ransom-text
```

React 17 or later is required as a peer dependency.

## Usage

```tsx
import { RansomText } from "ransom-text";

export default function App() {
  return <RansomText text="Hello World" size={48} />;
}
```

## Props

| Prop               | Type     | Default | Description                                                                |
| ------------------ | -------- | ------- | -------------------------------------------------------------------------- |
| `text`             | `string` | —       | The text to render as ransom letters                                       |
| `size`             | `number` | `40`    | Width and height of each letter in pixels                                  |
| `wrapperClassName` | `string` | —       | Optional class name applied to the wrapper `div`                           |
| `assetUrl`         | `string` | —       | Base URL for letter images. Overrides the built-in default CDN             |

Supported characters: `A–Z`, `0–9`, and spaces. Accented characters are normalized to their base form (e.g. `é` → `E`). Unsupported characters are silently dropped.

## Custom asset URL

Letter images are loaded from a hosted CDN by default. To use your own hosted assets, pass the `assetUrl` prop:

```tsx
<RansomText text="Hello" assetUrl="https://your-cdn.example.com/letters/" />
```

The URL must end with a trailing slash. Images are expected at `{assetUrl}{LETTER}/{index}.webp` (e.g. `letters/A/0.webp`).

## Accessibility

The wrapper `div` has `role="img"` and an `aria-label` with the original text. The visible letter images are marked `aria-hidden` to avoid redundant screen reader output.

## License

MIT
