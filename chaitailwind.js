/**
 * ChaiTailwind - Lightweight Utility-First CSS Engine
 * Scans DOM for chai-* classes and applies corresponding inline styles
 * @version 1.0.0
 */

class ChaiTailwind {
  constructor(options = {}) {
    this.prefix = options.prefix || 'chai-';
    this.debug = options.debug || false;
    this.utilities = this.buildUtilityMap();
  }

  /**
   * Build the utility map that defines chai-* patterns and their CSS values
   */
  buildUtilityMap() {
    return {
      // Padding utilities
      'p': (value) => ({ padding: `${value}px` }),
      'px': (value) => ({ paddingLeft: `${value}px`, paddingRight: `${value}px` }),
      'py': (value) => ({ paddingTop: `${value}px`, paddingBottom: `${value}px` }),
      'pt': (value) => ({ paddingTop: `${value}px` }),
      'pb': (value) => ({ paddingBottom: `${value}px` }),
      'pl': (value) => ({ paddingLeft: `${value}px` }),
      'pr': (value) => ({ paddingRight: `${value}px` }),

      // Margin utilities
      'm': (value) => ({ margin: `${value}px` }),
      'mx': (value) => ({ marginLeft: `${value}px`, marginRight: `${value}px` }),
      'my': (value) => ({ marginTop: `${value}px`, marginBottom: `${value}px` }),
      'mt': (value) => ({ marginTop: `${value}px` }),
      'mb': (value) => ({ marginBottom: `${value}px` }),
      'ml': (value) => ({ marginLeft: `${value}px` }),
      'mr': (value) => ({ marginRight: `${value}px` }),

      // Width and Height
      'w': (value) => ({ width: isNaN(value) ? value : `${value}px` }),
      'h': (value) => ({ height: isNaN(value) ? value : `${value}px` }),
      'min-w': (value) => ({ minWidth: isNaN(value) ? value : `${value}px` }),
      'min-h': (value) => ({ minHeight: isNaN(value) ? value : `${value}px` }),
      'max-w': (value) => ({ maxWidth: isNaN(value) ? value : `${value}px` }),
      'max-h': (value) => ({ maxHeight: isNaN(value) ? value : `${value}px` }),

      // Display and Positioning
      'flex': () => ({ display: 'flex' }),
      'grid': () => ({ display: 'grid' }),
      'block': () => ({ display: 'block' }),
      'inline-block': () => ({ display: 'inline-block' }),
      'inline': () => ({ display: 'inline' }),
      'hidden': () => ({ display: 'none' }),
      'absolute': () => ({ position: 'absolute' }),
      'relative': () => ({ position: 'relative' }),
      'fixed': () => ({ position: 'fixed' }),

      // Flexbox
      'flex-row': () => ({ flexDirection: 'row' }),
      'flex-col': () => ({ flexDirection: 'column' }),
      'justify-start': () => ({ justifyContent: 'flex-start' }),
      'justify-center': () => ({ justifyContent: 'center' }),
      'justify-end': () => ({ justifyContent: 'flex-end' }),
      'justify-between': () => ({ justifyContent: 'space-between' }),
      'items-start': () => ({ alignItems: 'flex-start' }),
      'items-center': () => ({ alignItems: 'center' }),
      'items-end': () => ({ alignItems: 'flex-end' }),

      // Gap
      'gap': (value) => ({ gap: `${value}px` }),

      // Colors - Background
      'bg-red': () => ({ backgroundColor: '#ff6b6b' }),
      'bg-blue': () => ({ backgroundColor: '#4ecdc4' }),
      'bg-green': () => ({ backgroundColor: '#52b788' }),
      'bg-yellow': () => ({ backgroundColor: '#ffd93d' }),
      'bg-purple': () => ({ backgroundColor: '#a78bfa' }),
      'bg-pink': () => ({ backgroundColor: '#ff69b4' }),
      'bg-orange': () => ({ backgroundColor: '#ff8c42' }),
      'bg-gray': () => ({ backgroundColor: '#e0e0e0' }),
      'bg-dark': () => ({ backgroundColor: '#1a1a1a' }),
      'bg-white': () => ({ backgroundColor: '#ffffff' }),
      'bg-black': () => ({ backgroundColor: '#000000' }),

      // Colors - Text
      'text-red': () => ({ color: '#ff6b6b' }),
      'text-blue': () => ({ color: '#4ecdc4' }),
      'text-green': () => ({ color: '#52b788' }),
      'text-yellow': () => ({ color: '#ffd93d' }),
      'text-purple': () => ({ color: '#a78bfa' }),
      'text-pink': () => ({ color: '#ff69b4' }),
      'text-orange': () => ({ color: '#ff8c42' }),
      'text-gray': () => ({ color: '#666666' }),
      'text-dark': () => ({ color: '#1a1a1a' }),
      'text-white': () => ({ color: '#ffffff' }),
      'text-black': () => ({ color: '#000000' }),

      // Typography
      'text-xs': () => ({ fontSize: '12px' }),
      'text-sm': () => ({ fontSize: '14px' }),
      'text-base': () => ({ fontSize: '16px' }),
      'text-lg': () => ({ fontSize: '18px' }),
      'text-xl': () => ({ fontSize: '20px' }),
      'text-2xl': () => ({ fontSize: '24px' }),
      'text-3xl': () => ({ fontSize: '30px' }),
      'text-4xl': () => ({ fontSize: '36px' }),

      'font-light': () => ({ fontWeight: '300' }),
      'font-normal': () => ({ fontWeight: '400' }),
      'font-medium': () => ({ fontWeight: '500' }),
      'font-semibold': () => ({ fontWeight: '600' }),
      'font-bold': () => ({ fontWeight: '700' }),

      'text-center': () => ({ textAlign: 'center' }),
      'text-left': () => ({ textAlign: 'left' }),
      'text-right': () => ({ textAlign: 'right' }),
      'text-justify': () => ({ textAlign: 'justify' }),

      // Border
      'border': () => ({ border: '1px solid #ddd' }),
      'border-none': () => ({ border: 'none' }),
      'border-2': () => ({ border: '2px solid #ddd' }),
      'border-red': () => ({ borderColor: '#ff6b6b' }),
      'border-blue': () => ({ borderColor: '#4ecdc4' }),
      'border-green': () => ({ borderColor: '#52b788' }),

      // Border Radius
      'rounded': () => ({ borderRadius: '4px' }),
      'rounded-md': () => ({ borderRadius: '8px' }),
      'rounded-lg': () => ({ borderRadius: '12px' }),
      'rounded-xl': () => ({ borderRadius: '16px' }),
      'rounded-full': () => ({ borderRadius: '9999px' }),

      // Shadow
      'shadow': () => ({ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }),
      'shadow-md': () => ({ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }),
      'shadow-lg': () => ({ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }),

      // Opacity
      'opacity': (value) => ({ opacity: value / 100 }),

      // Others
      'cursor-pointer': () => ({ cursor: 'pointer' }),
      'cursor-default': () => ({ cursor: 'default' }),
      'truncate': () => ({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }),
      'overflow-hidden': () => ({ overflow: 'hidden' }),
      'overflow-auto': () => ({ overflow: 'auto' }),
    };
  }

  /**
   * Parse a chai-* class name and extract utility and value
   * @param {string} className - The class name to parse (e.g., 'chai-p-2')
   * @returns {Object} { utility, value } or null if invalid
   */
  parseClassName(className) {
    if (!className.startsWith(this.prefix)) {
      return null;
    }

    const withoutPrefix = className.slice(this.prefix.length);
    
    // Try to match pattern: utility-value or utility
    const match = withoutPrefix.match(/^([a-z-]+)(?:-(\d+|[a-z0-9%]+))?$/);
    
    if (!match) {
      return null;
    }

    const [, utility, value] = match;
    return { utility, value: value || null };
  }

  /**
   * Apply styles to an element based on parsed utility
   * @param {Element} element - The DOM element
   * @param {string} utility - The utility name
   * @param {string|null} value - The value associated with the utility
   */
  applyStyle(element, utility, value) {
    let styleObj = null;

    // Check if utility exists in the map
    if (this.utilities[utility]) {
      const utilityFn = this.utilities[utility];
      styleObj = value ? utilityFn(value) : utilityFn();
    }

    // If no exact match, try combining hyphenated utilities (e.g., 'justify-center')
    if (!styleObj) {
      // Find matching utility with hyphens
      for (const key in this.utilities) {
        if (utility.startsWith(key)) {
          const remaining = utility.slice(key.length + 1); // +1 for hyphen
          if (remaining) {
            // Reconstruct with value
            styleObj = this.utilities[key](value || remaining);
          }
          break;
        }
      }
    }

    if (styleObj) {
      Object.assign(element.style, styleObj);
      if (this.debug) {
        console.log(`Applied ${utility}${value ? `-${value}` : ''} to`, element, styleObj);
      }
    } else if (this.debug) {
      console.warn(`Unknown utility: ${utility}`);
    }
  }

  /**
   * Scan the DOM and apply all chai-* classes
   */
  scan() {
    const allElements = document.querySelectorAll('[class*="' + this.prefix + '"]');
    
    allElements.forEach(element => {
      const classes = element.className.split(' ');
      const chaiClasses = classes.filter(cls => cls.startsWith(this.prefix));

      chaiClasses.forEach(chaiClass => {
        const parsed = this.parseClassName(chaiClass);
        
        if (parsed) {
          this.applyStyle(element, parsed.utility, parsed.value);
        }

        // Remove the chai-* class from the element
        element.classList.remove(chaiClass);
      });
    });

    if (this.debug) {
      console.log(`ChaiTailwind scan complete. Processed ${allElements.length} elements`);
    }
  }

  /**
   * Initialize ChaiTailwind on DOM ready
   */
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.scan());
    } else {
      this.scan();
    }

    if (this.debug) {
      console.log('ChaiTailwind initialized');
    }
  }

  /**
   * Add custom utility to the map
   * @param {string} name - The utility name (without prefix)
   * @param {Function} fn - Function that returns style object
   */
  addUtility(name, fn) {
    this.utilities[name] = fn;
  }

  /**
   * Add multiple custom utilities
   * @param {Object} utilities - Object with utility names as keys and functions as values
   */
  addUtilities(utilities) {
    Object.assign(this.utilities, utilities);
  }

  /**
   * Re-scan the DOM (useful if DOM changes dynamically)
   */
  rescan() {
    this.scan();
  }
}

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChaiTailwind;
}

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
  window.ChaiTailwind = ChaiTailwind;
  // Auto-init on page load
  const chaiTailwind = new ChaiTailwind({ debug: false });
  chaiTailwind.init();
}
