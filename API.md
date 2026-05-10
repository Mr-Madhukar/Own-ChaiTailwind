# ChaiTailwind API Documentation

Complete API reference for ChaiTailwind.

## Constructor

### `new ChaiTailwind(options)`

Creates a new ChaiTailwind instance.

**Parameters:**
- `options` (Object, optional)
  - `prefix` (String): Class name prefix (default: `'chai-'`)
  - `debug` (Boolean): Enable debug logging (default: `false`)

**Example:**
```javascript
const chai = new ChaiTailwind({ 
  prefix: 'chai-',
  debug: true 
});
```

---

## Methods

### `init()`

Initialize ChaiTailwind on DOM ready and scan the page.

**Returns:** `void`

**Example:**
```javascript
const chai = new ChaiTailwind();
chai.init();
```

**Behavior:**
- Waits for DOM ready if document is still loading
- Calls `scan()` automatically
- Safe to call multiple times

---

### `scan()`

Scan DOM and apply all chai-* styles.

**Returns:** `void`

**Example:**
```javascript
const chai = new ChaiTailwind();
chai.scan();  // Immediate scan
```

**Behavior:**
- Finds all elements with chai-* classes
- Parses class names
- Applies inline styles
- Removes original chai-* classes
- Logs to console in debug mode

---

### `rescan()`

Re-scan the DOM (useful for dynamic content).

**Returns:** `void`

**Example:**
```javascript
// Add new elements to DOM
const el = document.createElement('div');
el.className = 'chai-p-10 chai-bg-blue';
document.body.appendChild(el);

// Re-apply ChaiTailwind styles
chai.rescan();
```

**Behavior:**
- Same as `scan()` but called manually
- Use when DOM changes after initialization

---

### `addUtility(name, fn)`

Add a single custom utility.

**Parameters:**
- `name` (String): Utility name (without prefix)
- `fn` (Function): Function returning style object
  - Receives value parameter (if any)
  - Returns object with CSS properties

**Returns:** `void`

**Example:**
```javascript
chai.addUtility('custom-shadow', () => ({
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
}));

// Usage: class="chai-custom-shadow"
```

**With parameters:**
```javascript
chai.addUtility('blur', (value) => ({
  backdropFilter: `blur(${value}px)`
}));

// Usage: class="chai-blur-10"
```

---

### `addUtilities(utilities)`

Add multiple custom utilities at once.

**Parameters:**
- `utilities` (Object): Object with utility names as keys
  - Keys: utility names (without prefix)
  - Values: functions returning style objects

**Returns:** `void`

**Example:**
```javascript
chai.addUtilities({
  'gradient-sunset': () => ({
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white'
  }),
  'card-shadow': () => ({
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  }),
  'spacing': (value) => ({
    padding: `${value}px`,
    margin: `${value}px`
  })
});
```

---

### `parseClassName(className)`

Parse a class name and extract utility and value.

**Parameters:**
- `className` (String): The class name to parse

**Returns:** `Object|null`
- `utility` (String): The utility name
- `value` (String|null): The value (if any)
- Returns `null` if not a valid chai-* class

**Example:**
```javascript
const result = chai.parseClassName('chai-p-10');
// { utility: 'p', value: '10' }

const result2 = chai.parseClassName('chai-flex');
// { utility: 'flex', value: null }

const invalid = chai.parseClassName('normal-class');
// null
```

---

### `applyStyle(element, utility, value)`

Apply a style to an element based on utility.

**Parameters:**
- `element` (HTMLElement): The DOM element
- `utility` (String): The utility name
- `value` (String|null): The value (if any)

**Returns:** `void`

**Example:**
```javascript
const el = document.querySelector('div');
chai.applyStyle(el, 'p', '10');      // padding: 10px
chai.applyStyle(el, 'bg', 'red');    // backgroundColor: #ff6b6b
chai.applyStyle(el, 'flex', null);   // display: flex
```

---

## Properties

### `utilities`

Object containing all available utilities.

**Type:** `Object`

**Example:**
```javascript
console.log(chai.utilities);
// {
//   'p': [Function],
//   'px': [Function],
//   'py': [Function],
//   ...
// }

// Check if utility exists
if (chai.utilities['custom-utility']) {
  console.log('Found!');
}

// List all utilities
Object.keys(chai.utilities).forEach(name => {
  console.log(name);
});
```

---

### `prefix`

The class name prefix used by this instance.

**Type:** `String`

**Example:**
```javascript
const chai = new ChaiTailwind({ prefix: 'tw-' });
console.log(chai.prefix);  // 'tw-'
```

---

### `debug`

Debug mode flag.

**Type:** `Boolean`

**Example:**
```javascript
const chai = new ChaiTailwind({ debug: true });
console.log(chai.debug);  // true
```

---

## Built-in Utilities

### Spacing
- Padding: `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr`
- Margin: `m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr`

### Display & Layout
- `flex`, `grid`, `block`, `inline-block`, `inline`, `hidden`
- `absolute`, `relative`, `fixed`

### Flexbox
- `flex-row`, `flex-col`
- `justify-start`, `justify-center`, `justify-end`, `justify-between`
- `items-start`, `items-center`, `items-end`
- `gap`

### Sizing
- `w`, `h`, `min-w`, `min-h`, `max-w`, `max-h`

### Colors
- Background: `bg-red`, `bg-blue`, `bg-green`, `bg-yellow`, `bg-purple`, `bg-pink`, `bg-orange`, `bg-gray`, `bg-dark`, `bg-white`, `bg-black`
- Text: `text-red`, `text-blue`, `text-green`, etc. (same colors)

### Typography
- Font sizes: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`
- Font weights: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- Alignment: `text-left`, `text-center`, `text-right`, `text-justify`

### Borders & Radius
- Borders: `border`, `border-none`, `border-2`
- Border colors: `border-red`, `border-blue`, `border-green`, etc.
- Radius: `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-full`

### Shadows
- `shadow`, `shadow-md`, `shadow-lg`

### Others
- `opacity`
- `cursor-pointer`, `cursor-default`
- `truncate`
- `overflow-hidden`, `overflow-auto`

---

## Events

ChaiTailwind doesn't emit events, but you can listen for DOM changes:

```javascript
const chai = new ChaiTailwind();

// Listen for DOM changes
const observer = new MutationObserver(() => {
  chai.rescan();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
```

---

## Global Access

When included in browser, ChaiTailwind is available globally:

```javascript
// Already initialized instance
window.ChaiTailwind

// Create new instance
const myInstance = new window.ChaiTailwind({
  prefix: 'custom-',
  debug: true
});
```

---

## Error Handling

ChaiTailwind handles errors gracefully:

```javascript
// Invalid utility - warning in console (debug mode)
// No error thrown, styles simply not applied

// Missing values handled
chai.applyStyle(el, 'p', undefined);  // Treats as no value

// Unknown utilities ignored
// &lt;div class="chai-unknown-utility"&gt;
// Warning logged in debug mode, element unchanged
```

---

## Performance Notes

- Initial `scan()` is O(n) where n = number of DOM elements
- Parsing each class is O(1)
- Applying styles is O(m) where m = number of chai-* classes
- `rescan()` is more expensive than initial `scan()`
- Batch DOM updates and call `rescan()` once for best performance

---

## Browser Compatibility

- Modern browsers: Fully compatible
- IE11: Requires Object.assign polyfill

---

## Examples

### Complete Setup

```javascript
// Create and initialize
const chai = new ChaiTailwind({ 
  prefix: 'chai-',
  debug: false 
});

// Add custom utilities
chai.addUtilities({
  'my-gradient': () => ({
    background: 'linear-gradient(45deg, blue, red)'
  }),
  'my-shadow': () => ({
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
  })
});

// Initialize
chai.init();

// Handle dynamic content
document.addEventListener('click', (e) => {
  if (e.target.id === 'add-element') {
    const el = document.createElement('div');
    el.className = 'chai-p-20 chai-my-gradient';
    document.body.appendChild(el);
    chai.rescan();
  }
});
```

### React Hook

```javascript
import { useEffect } from 'react';
import ChaiTailwind from 'chaitailwind';

export function useChaiTailwind() {
  useEffect(() => {
    const chai = new ChaiTailwind({ debug: false });
    chai.init();
    
    const observer = new MutationObserver(() => {
      chai.rescan();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => observer.disconnect();
  }, []);
}

// Usage in component
export default function App() {
  useChaiTailwind();
  
  return (
    &lt;div className="chai-p-20 chai-bg-blue chai-text-white"&gt;
      Hello World!
    &lt;/div&gt;
  );
}
```

---

Last Updated: May 10, 2026
