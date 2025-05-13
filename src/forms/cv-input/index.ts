import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('canvasback-input')
export class CanvasbackInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 16px;
    }

    .input-container {
      position: relative;
    }
    
    input {
      border: 1px solid var(--canvasback-border, #ccc);
      padding: 10px 12px;
      border-radius: 4px;
      font-size: 14px;
      width: 100%;
      background-color: var(--canvasback-background, #f0ead6);
      color: var(--canvasback-text, #1a1a1a);
      font-family: var(--canvasback-font, 'Nunito Sans', sans-serif);
      box-sizing: border-box;
      transition: all 0.2s ease;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      
      /* Paper texture effect */
      background-image: linear-gradient(
        to bottom,
        rgba(255,255,255,0.1) 0%,
        rgba(255,255,255,0) 100%
      );
    }
    
    input:hover {
      border-color: var(--canvasback-primary, #555ab9);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transform: translateY(-1px);
    }
    
    /* Add focus state styling for better accessibility */
    input:focus {
      outline: none;
      border-color: var(--canvasback-primary, #555ab9);
      box-shadow: 0 0 0 2px rgba(85, 90, 185, 0.2);
      transform: translateY(-1px);
    }
    
    /* Error state */
    :host([error]) input {
      border-color: #e53935;
      box-shadow: 0 0 0 1px rgba(229, 57, 53, 0.2);
    }
    
    :host([error]) .error-message {
      color: #e53935;
      font-size: 12px;
      margin-top: 4px;
      display: block;
      font-family: var(--canvasback-font, 'Nunito Sans', sans-serif);
    }
    
    label {
      font-family: var(--canvasback-font, 'Nunito Sans', sans-serif);
      color: var(--canvasback-text, #1a1a1a);
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      transition: color 0.2s ease;
    }
    
    /* Disabled state */
    input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background-image: none;
      box-shadow: none;
    }
    
    /* Subtle ripple effect on focus */
    @keyframes ripple {
      0% {
        box-shadow: 0 0 0 0 rgba(85, 90, 185, 0.2);
      }
      100% {
        box-shadow: 0 0 0 6px rgba(85, 90, 185, 0);
      }
    }
    
    input:focus {
      animation: ripple 0.6s ease-out;
    }
    
    /* Placeholder styling */
    input::placeholder {
      color: var(--canvasback-text, #1a1a1a);
      opacity: 0.4;
    }
  `;

  @property({ type: String }) value = '';
  @property({ type: String }) label = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type = 'text';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: String }) errorMessage = '';
  @property({ type: String }) name = '';

  private _handleInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: { 
        value: this.value,
        name: this.name
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      ${this.label ? html`<label for="input">${this.label}</label>` : ''}
      <div class="input-container">
        <input 
          id="input"
          type="${this.type}"
          .value=${this.value}
          placeholder="${this.placeholder}"
          ?disabled=${this.disabled}
          name="${this.name}"
          @input=${this._handleInput}
          aria-invalid="${this.error ? 'true' : 'false'}"
          aria-describedby="${this.error ? 'error-message' : ''}"
        />
      </div>
      ${this.error && this.errorMessage ? 
        html`<span id="error-message" class="error-message">${this.errorMessage}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'canvasback-input': CanvasbackInput;
  }
}
