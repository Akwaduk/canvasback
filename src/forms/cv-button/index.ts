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
    border: 1px solid var(--canvasback-border, #ccc); /* Consistent border */
    border-radius: 4px; /* Consistent border-radius */
    font-weight: 500; /* Adjusted font-weight */
    line-height: 1.5; /* Adjusted line-height for better readability */
    font-family: var(--canvasback-font, 'Nunito Sans', sans-serif); /* Use theme font */
    transition: all 0.2s ease; /* Smooth transitions for all properties */
    box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* Subtle shadow */

    /* Paper texture effect */
    background-image: linear-gradient(
      to bottom,
      rgba(255,255,255,0.1) 0%,
      rgba(255,255,255,0) 100%
    );
  }
  .storybook-button--primary {
    background-color: var(--canvasback-background, #f0ead6); /* Muted background */
    color: var(--canvasback-text, #1a1a1a); /* Muted text color */
    border-color: var(--canvasback-border, #ccc);
  }
  .storybook-button--primary:hover {
    border-color: var(--canvasback-primary-hover-border, #a0a0a0); /* Darker border on hover */
    background-color: var(--canvasback-background-hover, #e6e0c8); /* Slightly darker background on hover */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transform: translateY(-1px); /* Micro-animation on hover */
  }
  .storybook-button--primary:focus {
    outline: none;
    border-color: var(--canvasback-primary-focus-border, #555ab9); /* Keep focus distinct but not overly colorful */
    box-shadow: 0 0 0 2px rgba(85, 90, 185, 0.2); /* Subtle focus ring */
  }

  .storybook-button--secondary {
    background-color: transparent;
    color: var(--canvasback-text, #1a1a1a);
    border: 1px solid var(--canvasback-border, #ccc);
  }
  .storybook-button--secondary:hover {
    background-color: rgba(0,0,0,0.03); /* Subtle background on hover */
    border-color: var(--canvasback-secondary-hover-border, #a0a0a0);
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    transform: translateY(-1px);
  }
  .storybook-button--secondary:focus {
    outline: none;
    border-color: var(--canvasback-secondary-focus-border, #555ab9);
    box-shadow: 0 0 0 2px rgba(85, 90, 185, 0.15);
  }

  /* Add focus state styling for better accessibility - ripple for primary */
  .storybook-button--primary:focus:not(:active) {
    animation: ripple 0.6s ease-out;
  }

  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(85, 90, 185, 0.2);
    }
    100% {
      box-shadow: 0 0 0 6px rgba(85, 90, 185, 0);
    }
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
        ${this.label || html`<slot></slot>`}
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
