# ransom-text

A React component that renders text as ransom letter-style cut-out images.

## Installation

```bash
npm install ransom-text
```

React 17 or later is required as a peer dependency.

## Demo

Try the component in the [Storybook playground](https://ravevy.github.io/ransom-text/).

## Usage

```tsx
import { RansomText } from "ransom-text";

export default function App() {
  return <RansomText text="Hello World" size={48} />;
}
```

## Props

| Prop               | Type                           | Default   | Description                                                    |
| ------------------ | ------------------------------ | --------- | -------------------------------------------------------------- |
| `text`             | `string`                       | —         | The text to render as ransom letters                           |
| `size`             | `number`                       | `40`      | Width and height of each letter in pixels                      |
| `align`            | `"start" \| "center" \| "end"` | `"start"` | Horizontal alignment of the text within the wrapper            |
| `wrapperClassName` | `string`                       | —         | Optional class name applied to the wrapper `div`               |
| `assetUrl`         | `string`                       | —         | Base URL for letter images. Overrides the built-in default CDN |

### Supported characters

Letters `A–Z`, digits `0–9`, spaces, and the following special characters:

`!` `#` `%` `&` `(` `)` `*` `+` `,` `-` `:` `?` `@` `[` `]` `^`

Accented characters are normalized to their base form (e.g. `é` → `E`). Unsupported characters are silently dropped.

## Default asset library

Letter images are served from the [ransom-text-assets](https://ravevy.github.io/ransom-text-assets/) library by default. Visit the page for more information about the included assets, available variants, and image counts per character.

## Custom asset URL

Letter images are loaded from the default asset library mentioned above by default. To use your own hosted assets, pass the `assetUrl` prop:

```tsx
<RansomText text="Hello" assetUrl="https://your-cdn.example.com/letters/" />
```

The URL must end with a trailing slash. Images are expected at `{assetUrl}{LETTER}/{index}.webp` (e.g. `letters/A/0.webp`).

### Special character folder names

Special characters are not used directly as folder names. They map to the following named folders instead:

| Character | Folder name |
| --------- | ----------- |
| `!`       | `bang`      |
| `#`       | `num`       |
| `%`       | `pct`       |
| `&`       | `amp`       |
| `(`       | `lparen`    |
| `)`       | `rparen`    |
| `*`       | `star`      |
| `+`       | `plus`      |
| `,`       | `comma`     |
| `-`       | `dash`      |
| `:`       | `colon`     |
| `?`       | `quest`     |
| `@`       | `at`        |
| `[`       | `lbracket`  |
| `]`       | `rbracket`  |
| `^`       | `caret`     |

For example, `?` resolves to `{assetUrl}quest/0.webp`.

## Accessibility

The wrapper `div` has `role="img"` and an `aria-label` with the original text. The visible letter images are marked `aria-hidden` to avoid redundant screen reader output.

## License

MIT
