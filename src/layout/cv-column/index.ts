// src/components/layout/cv-column/cv-column.ts
import { LitElement, html, css, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Column component for vertical layouts within a grid system
 * 
 * @element cv-column
 * @slot - Default slot for column content
 */
export class CvColumn extends LitElement {
  /**
   * Column span (1-12)
   */
  @property({ type: Number }) span: number = 1;
  
  /**
   * Offset before column (0-11)
   */
  @property({ type: Number }) offset: number = 0;
  
  /**
   * Responsive span sizes in format "xs:12 sm:6 md:4 lg:3"
   */
  @property({ type: String }) responsive: string = '';
  
  /**
   * Horizontal alignment of column content
   * Options: 'start' | 'center' | 'end'
   */
  @property({ type: String }) align: 'start' | 'center' | 'end' = 'start';
  
  /**
   * Vertical alignment of column content
   * Options: 'start' | 'center' | 'end' | 'stretch'
   */
  @property({ type: String }) valign: string = 'start';

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        grid-column: span var(--column-span, 1);
        margin-left: calc(var(--column-offset, 0) * 8.333%);
        box-sizing: border-box;
      }
    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('span') || changedProperties.has('offset') || 
        changedProperties.has('responsive') || changedProperties.has('align') || 
        changedProperties.has('valign')) {
      this._updateColumnStyles();
    }
  }

  private _updateColumnStyles(): void {
    // Handle column span
    this.style.setProperty('--column-span', this.span.toString());
    
    // Handle column offset
    this.style.setProperty('--column-offset', this.offset.toString());
    
    // Handle alignment
    const alignMap = {
      'start': 'flex-start',
      'center': 'center',
      'end': 'flex-end'
    };
    
    const valignMap = {
      'start': 'flex-start',
      'center': 'center',
      'end': 'flex-end',
      'stretch': 'stretch'
    };
    
    this.style.alignItems = alignMap[this.align] || 'flex-start';
    this.style.justifyContent = valignMap[this.valign as keyof typeof valignMap] || 'flex-start';
    
    // Process responsive attributes
    if (this.responsive) {
      const breakpoints = {
        'xs': '0px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px'
      };
      
      const responsiveStyles = this.responsive.split(' ');
      
      responsiveStyles.forEach(style => {
        const [breakpoint, value] = style.split(':') as [keyof typeof breakpoints, string];
        
        if (breakpoints[breakpoint] && !isNaN(parseInt(value))) {
          // Add media query as CSS variable to be used in grid-column
          this.style.setProperty(`--column-span-${breakpoint}`, value);
          
          const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[breakpoint]})`);
          
          // Fix the parameter type to MediaQueryListEvent
          const handleBreakpointChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
              this.style.setProperty('--column-span', value);
            }
          };
          
          // For modern browsers
          mediaQuery.addEventListener('change', handleBreakpointChange);
          
          // For older browsers (fallback)
          if (!('addEventListener' in mediaQuery)) {
            // @ts-ignore - Using deprecated property for backward compatibility
            mediaQuery.addListener(handleBreakpointChange);
          }
          
          // Initial check (fix parameter here too)
          handleBreakpointChange(mediaQuery as unknown as MediaQueryListEvent);
        }
      });
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('cv-column', CvColumn);