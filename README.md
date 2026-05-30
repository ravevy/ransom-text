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

| Prop               | Type     | Default | Description                                      |
| ------------------ | -------- | ------- | ------------------------------------------------ |
| `text`             | `string` | —       | The text to render as ransom letters             |
| `size`             | `number` | `40`    | Width and height of each letter in pixels        |
| `wrapperClassName` | `string` | —       | Optional class name applied to the wrapper `div` |

Supported characters: `A–Z`, `0–9`, and spaces. Accented characters are normalized to their base form (e.g. `é` → `E`). Unsupported characters are silently dropped.

## Asset URL

Letter images are loaded from a hosted CDN by default. To use your own hosted assets, set the `RANSOM_TEXT_ASSET_URL` environment variable to the base URL of your letter directory:

```
RANSOM_TEXT_ASSET_URL=https://your-cdn.example.com/letters/
```

The URL must end with a trailing slash. Images are expected at `{RANSOM_TEXT_ASSET_URL}{LETTER}/{index}.png` (e.g. `letters/A/0.png`).

## Accessibility

Each rendered word has an `aria-label` with the original text, and the visible letter images are marked `aria-hidden` to avoid redundant screen reader output.

## License

MIT
