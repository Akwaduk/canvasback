// src/components/layout/cv-grid/cv-grid.ts
import { LitElement, html, css, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Grid container component for creating responsive layouts
 * 
 * @element cv-grid
 * @slot - Default slot for grid items
 * @cssprop --cv-grid-gap - Grid gap (default: 1rem)
 * @cssprop --cv-grid-padding - Grid padding (default: 0)
 */
export class CvGrid extends LitElement {
  /**
   * Grid column template
   * Options: 'auto' | '1fr' | number of columns (1-12) | custom template
   */
  @property({ type: String }) columns: string = '1';
  
  /**
   * Grid gap
   */
  @property({ type: String }) gap: string | null = null;
  
  /**
   * Responsive behavior strategy
   * Options: 'stack' (stack on mobile) | 'shrink' (reduce column width)
   */
  @property({ type: String }) responsive: string = 'stack';

  static get styles() {
    return css`
      :host {
        --grid-gap: var(--cv-grid-gap, 1rem);
        --grid-padding: var(--cv-grid-padding, 0);
        
        display: grid;
        padding: var(--grid-padding);
        width: 100%;
        box-sizing: border-box;
      }
      
      :host([responsive="stack"]) {
        @media (max-width: 768px) {
          grid-template-columns: 1fr !important;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('columns') || changedProperties.has('gap')) {
      this._updateGridStyles();
    }
  }

  private _updateGridStyles(): void {
    // Handle column templates
    let columnTemplate;
    
    if (this.columns === 'auto') {
      columnTemplate = 'auto';
    } else if (this.columns === '1fr') {
      columnTemplate = '1fr';
    } else if (!isNaN(parseInt(this.columns)) && parseInt(this.columns) > 0) {
      const numColumns = parseInt(this.columns);
      columnTemplate = `repeat(${numColumns}, 1fr)`;
    } else {
      // Assume it's a custom template string
      columnTemplate = this.columns;
    }
    
    this.style.gridTemplateColumns = columnTemplate;
    
    // Set gap if provided
    if (this.gap) {
      this.style.gap = this.gap;
    } else {
      this.style.gap = 'var(--grid-gap)';
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('cv-grid', CvGrid);