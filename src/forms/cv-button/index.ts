import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import './index.css';

// CSS styles are now embedded directly
const buttonStyles = css`
  .storybook-button {
    display: inline-block;
    cursor: pointer;
    border: 0;
    border-radius: 3em;
    font-weight: 700;
    line-height: 1;
    font-family: var(--canvasback-font); /* Use theme font */
  }
  .storybook-button--primary {
    background-color: #555ab9;
    color: white;
  }
  .storybook-button--secondary {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    background-color: transparent;
    color: var(--cv-button-secondary-text-color, #333333);
    border: 1px solid var(--canvasback-border);
  }
  .storybook-button--small {
    padding: 10px 16px;
    font-size: 12px;
  }
  .storybook-button--medium {
    padding: 11px 20px;
    font-size: 14px;
  }
  .storybook-button--large {
    padding: 12px 24px;
    font-size: 16px;
  }
`;

@customElement('cv-button')
export class CvButton extends LitElement {
  static styles = [
    buttonStyles,
    css`
      :host([disabled]) .storybook-button {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `
  ];

  @property({ type: String }) label = '';
  @property({ type: String }) variant: 'primary' | 'secondary' = 'secondary';
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) backgroundColor?: string; // For explicit background color override

  render() {
    const mode = this.variant === 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary';
    const buttonClasses = {
      'storybook-button': true,
      [`storybook-button--${this.size}`]: true,
      [mode]: true,
    };
    
    // Apply backgroundColor if provided, otherwise variant styles take effect
    const buttonStylesMap = this.backgroundColor ? { backgroundColor: this.backgroundColor } : {};

    return html`
      <button
        type="button"
        class=${classMap(buttonClasses)}
        style=${styleMap(buttonStylesMap)}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        ${this.label}
      </button>
    `;
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault(); // Prevent default action and stop propagation if disabled
      event.stopPropagation();
      return;
    }
    // The native click event will bubble up.
    // No need to dispatch a custom event unless specifically required for other reasons.
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-button': CvButton;
  }
}
