# ChaiTailwind 🎨

A lightweight utility-first CSS engine built with JavaScript that transforms simple class names into inline styles.

## Overview

ChaiTailwind is a DOM manipulation library that allows you to style HTML elements using intuitive class names following the pattern `chai-*` (e.g., `chai-p-2`, `chai-bg-red`, `chai-text-center`). 

Instead of writing traditional CSS, your script scans the DOM, reads these class names, converts them into corresponding inline styles, and applies them dynamically.

**Live Demo:** https://my-chai-tailwind.netlify.app/

## Features

✨ **Lightweight** - No dependencies, small file size (~10KB)  
🎨 **Intuitive** - Class naming similar to Tailwind CSS  
⚡ **Fast** - Efficient DOM scanning and style application  
🔧 **Customizable** - Add your own utilities easily  
📱 **Responsive-Ready** - Works with any responsive pattern  
🚀 **Easy to Use** - Just include the script and start using chai-* classes

## Installation

### Option 1: Direct Script Tag
```html
<script src="https://your-domain.com/chaitailwind.js"></script>
```

### Option 2: NPM
```bash
npm install chaitailwind
```

### Option 3: Local File
Download `chaitailwind.js` and include it in your project:
```html
<script src="./chaitailwind.js"></script>
```

## Quick Start

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChaiTailwind Demo</title>
</head>
<body>
    <div class="chai-p-20 chai-bg-blue chai-rounded-lg chai-text-white chai-text-center">
        <h1 class="chai-text-3xl chai-font-bold">Hello ChaiTailwind!</h1>
        <p class="chai-text-lg">Beautiful styling with simple class names</p>
    </div>

    <script src="chaitailwind.js"></script>
</body>
</html>
```

## Class Reference

### Spacing

#### Padding
- `chai-p-*` - Padding on all sides
- `chai-px-*` - Horizontal padding (left & right)
- `chai-py-*` - Vertical padding (top & bottom)
- `chai-pt-*` - Top padding
- `chai-pb-*` - Bottom padding
- `chai-pl-*` - Left padding
- `chai-pr-*` - Right padding

Example: `chai-p-10` → `padding: 10px`

#### Margin
- `chai-m-*` - Margin on all sides
- `chai-mx-*` - Horizontal margin (left & right)
- `chai-my-*` - Vertical margin (top & bottom)
- `chai-mt-*` - Top margin
- `chai-mb-*` - Bottom margin
- `chai-ml-*` - Left margin
- `chai-mr-*` - Right margin

Example: `chai-m-5` → `margin: 5px`

### Colors

#### Background Colors
- `chai-bg-red`, `chai-bg-blue`, `chai-bg-green`
- `chai-bg-yellow`, `chai-bg-purple`, `chai-bg-pink`
- `chai-bg-orange`, `chai-bg-gray`, `chai-bg-dark`
- `chai-bg-white`, `chai-bg-black`

#### Text Colors
- `chai-text-red`, `chai-text-blue`, `chai-text-green`
- `chai-text-yellow`, `chai-text-purple`, `chai-text-pink`
- `chai-text-orange`, `chai-text-gray`, `chai-text-dark`
- `chai-text-white`, `chai-text-black`

### Typography

#### Font Sizes
- `chai-text-xs` - 12px
- `chai-text-sm` - 14px
- `chai-text-base` - 16px
- `chai-text-lg` - 18px
- `chai-text-xl` - 20px
- `chai-text-2xl` - 24px
- `chai-text-3xl` - 30px
- `chai-text-4xl` - 36px

#### Font Weights
- `chai-font-light` - 300
- `chai-font-normal` - 400
- `chai-font-medium` - 500
- `chai-font-semibold` - 600
- `chai-font-bold` - 700

#### Text Alignment
- `chai-text-left`
- `chai-text-center`
- `chai-text-right`
- `chai-text-justify`

### Layout

#### Display
- `chai-flex` - Flexbox display
- `chai-grid` - CSS Grid display
- `chai-block` - Block display
- `chai-inline-block` - Inline-block display
- `chai-inline` - Inline display
- `chai-hidden` - Display none

#### Flexbox
- `chai-flex-row` - Flex direction row
- `chai-flex-col` - Flex direction column
- `chai-justify-start` - Justify content flex-start
- `chai-justify-center` - Justify content center
- `chai-justify-end` - Justify content flex-end
- `chai-justify-between` - Justify content space-between
- `chai-items-start` - Align items flex-start
- `chai-items-center` - Align items center
- `chai-items-end` - Align items flex-end
- `chai-gap-*` - Gap between flex items (in pixels)

#### Positioning
- `chai-absolute` - Absolute positioning
- `chai-relative` - Relative positioning
- `chai-fixed` - Fixed positioning

### Sizing

- `chai-w-*` - Width (in pixels or other units)
- `chai-h-*` - Height (in pixels or other units)
- `chai-min-w-*` - Min width
- `chai-min-h-*` - Min height
- `chai-max-w-*` - Max width
- `chai-max-h-*` - Max height

Example: `chai-w-200` → `width: 200px`

### Borders & Radius

#### Border
- `chai-border` - 1px solid border
- `chai-border-2` - 2px solid border
- `chai-border-none` - No border
- `chai-border-red`, `chai-border-blue`, etc. - Border colors

#### Border Radius
- `chai-rounded` - 4px border radius
- `chai-rounded-md` - 8px border radius
- `chai-rounded-lg` - 12px border radius
- `chai-rounded-xl` - 16px border radius
- `chai-rounded-full` - 9999px (circle)

### Shadows

- `chai-shadow` - Small shadow
- `chai-shadow-md` - Medium shadow
- `chai-shadow-lg` - Large shadow

### Other Utilities

- `chai-opacity-*` - Opacity (0-100)
- `chai-cursor-pointer` - Pointer cursor
- `chai-cursor-default` - Default cursor
- `chai-truncate` - Text truncate with ellipsis
- `chai-overflow-hidden` - Overflow hidden
- `chai-overflow-auto` - Overflow auto

## Advanced Usage

### Initialize with Options

```javascript
const chai = new ChaiTailwind({
    prefix: 'chai-',  // Custom prefix
    debug: true       // Enable debug logging
});

chai.init();
```

### Add Custom Utilities

```javascript
const chai = new ChaiTailwind();

// Add single custom utility
chai.addUtility('custom-shadow', () => ({
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)'
}));

// Add multiple custom utilities
chai.addUtilities({
    'custom-bg': () => ({ backgroundColor: '#1a1a1a' }),
    'custom-text': () => ({ color: '#fff' })
});

chai.init();
```

### Dynamic DOM Updates

If your DOM changes after initialization, rescan to apply ChaiTailwind styles to new elements:

```javascript
// Add new element to DOM
const newElement = document.createElement('div');
newElement.className = 'chai-p-10 chai-bg-blue chai-text-white';
document.body.appendChild(newElement);

// Rescan to apply styles
chai.rescan();
```

### Module Usage (Node.js/Webpack)

```javascript
const ChaiTailwind = require('chaitailwind');

const chai = new ChaiTailwind({ debug: true });
chai.init();
```

## How It Works

1. **Scan**: ChaiTailwind scans the DOM after page load
2. **Parse**: Identifies all classes starting with `chai-`
3. **Extract**: Extracts utility name and value from class names
4. **Apply**: Converts to inline styles and applies them
5. **Clean**: Removes the original chai-* classes from elements

Example transformation:
```
Class: "chai-p-20 chai-bg-blue chai-text-white"
↓
Parsed: 
  - p → 20 → padding: 20px
  - bg → blue → backgroundColor: #4ecdc4
  - text → white → color: #ffffff
↓
Applied: style="padding: 20px; background-color: #4ecdc4; color: #ffffff;"
```

## Performance Tips

1. **Minimize redundant classes** - Don't repeat utilities
2. **Use rescan() wisely** - Only call when necessary for DOM updates
3. **Combine utilities** - Use multiple utility classes for compound effects
4. **Disable debug mode** - Remove debug: true in production

## Browser Support

- Chrome/Edge (all versions)
- Firefox (all versions)
- Safari (all versions)
- IE11 (with polyfills for Object.assign)

## Examples

### Card Component

```html
<div class="chai-p-15 chai-bg-white chai-rounded-lg chai-shadow-md">
    <h3 class="chai-text-xl chai-font-bold chai-mb-10">Card Title</h3>
    <p class="chai-text-base chai-text-gray chai-mb-15">Card content goes here</p>
    <button class="chai-p-10 chai-bg-blue chai-text-white chai-rounded chai-cursor-pointer">
        Click Me
    </button>
</div>
```

### Responsive Layout

```html
<div class="chai-flex chai-gap-20">
    <div class="chai-flex-1 chai-p-15 chai-bg-blue chai-text-white chai-rounded">
        Column 1
    </div>
    <div class="chai-flex-1 chai-p-15 chai-bg-green chai-text-white chai-rounded">
        Column 2
    </div>
</div>
```

### Header Navigation

```html
<nav class="chai-flex chai-justify-between chai-items-center chai-p-15 chai-bg-dark chai-text-white">
    <h1 class="chai-text-2xl chai-font-bold">Logo</h1>
    <div class="chai-flex chai-gap-10">
        <a href="#" class="chai-text-white chai-cursor-pointer">Home</a>
        <a href="#" class="chai-text-white chai-cursor-pointer">About</a>
        <a href="#" class="chai-text-white chai-cursor-pointer">Contact</a>
    </div>
</nav>
```

## Comparison with Tailwind CSS

| Feature | ChaiTailwind | Tailwind CSS |
|---------|-------------|------------|
| File Size | ~10KB | ~70KB+ |
| Dependencies | None | PostCSS, NPM build |
| Runtime | Yes | Build-time |
| Learning Curve | Very Easy | Easy |
| Customization | Simple | More complex |
| Production Ready | Yes | Yes |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

## Changelog

### v1.0.0 (2026-05-10)
- Initial release
- Complete utility-first CSS engine
- 100+ built-in utilities
- Custom utility support
- Debug mode
- Full documentation

## Author

Built during the ChaiCode WebDev Cohort 2026

---

**Made with ❤️ using JavaScript**
