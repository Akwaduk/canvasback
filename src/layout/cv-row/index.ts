// src/components/layout/cv-row/cv-row.ts
import { LitElement, html, css, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Row component for horizontal layouts within a grid system
 * 
 * @element cv-row
 * @slot - Default slot for row content
 * @cssprop --cv-row-gap - Gap between row items (default: 1rem)
 */
export class CvRow extends LitElement {
  /**
   * Horizontal alignment of row items
   * Options: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
   */
  @property({ type: String }) align: string = 'start';
  
  /**
   * Vertical alignment of row items
   * Options: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
   */
  @property({ type: String }) valign: string = 'center';
  
  /**
   * Gap between row items
   */
  @property({ type: String }) gap: string | null = null;
  
  /**
   * Whether row should wrap items
   */
  @property({ type: Boolean }) wrap: boolean = false;
  
  /**
   * Responsive behavior
   * Options: 'stack' | 'none'
   */
  @property({ type: String }) responsive: string = 'stack';

  static get styles() {
    return css`
      :host {
        --row-gap: var(--cv-row-gap, 1rem);
        
        display: flex;
        width: 100%;
        box-sizing: border-box;
      }
      
      :host([wrap]) {
        flex-wrap: wrap;
      }
      
      @media (max-width: 768px) {
        :host([responsive="stack"]) {
          flex-direction: column;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('align') || changedProperties.has('valign') || changedProperties.has('gap')) {
      this._updateRowStyles();
    }
  }

  private _updateRowStyles(): void {
    // Map alignment values to flex properties
    const alignMap = {
      'start': 'flex-start',
      'center': 'center',
      'end': 'flex-end',
      'space-between': 'space-between',
      'space-around': 'space-around',
      'space-evenly': 'space-evenly'
    };
    
    const valignMap = {
      'start': 'flex-start',
      'center': 'center',
      'end': 'flex-end',
      'stretch': 'stretch',
      'baseline': 'baseline'
    };
    
    this.style.justifyContent = alignMap[this.align as keyof typeof alignMap] || 'flex-start';
    this.style.alignItems = valignMap[this.valign as keyof typeof valignMap] || 'center';
    
    // Set gap if provided
    if (this.gap) {
      this.style.gap = this.gap;
    } else {
      this.style.gap = 'var(--row-gap)';
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('cv-row', CvRow);