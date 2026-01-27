import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("cv-dropdown")
export class CvDropdown extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 16px;
    }
    
    .dropdown-container {
      position: relative;
    }
    
    select {
      appearance: none;
      border: 1px solid var(--canvasback-border, #ccc);
      padding: 10px 32px 10px 12px;
      border-radius: 4px;
      font-size: 14px;
      width: 100%;
      background-color: var(--canvasback-background, #f0ead6);
      color: var(--canvasback-text, #1a1a1a);
      font-family: var(--canvasback-font, 'Nunito Sans', sans-serif);
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      
      /* Paper texture effect */
      background-image: linear-gradient(
        to bottom,
        rgba(255,255,255,0.1) 0%,
        rgba(255,255,255,0) 100%
      );
    }
    
    /* Custom dropdown arrow */
    .dropdown-arrow {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      pointer-events: none;
      transition: transform 0.2s ease;
      color: var(--canvasback-text, #1a1a1a);
      opacity: 0.6;
    }
    
    select:hover {
      border-color: var(--canvasback-primary, #555ab9);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transform: translateY(-1px);
    }
    
    select:active {
      transform: translateY(0px);
    }

    /* Selected dropdown with open arrow */
    select:focus + .dropdown-arrow {
      transform: translateY(-50%) rotate(180deg);
    }
    
    label {
      font-family: var(--canvasback-font, 'Nunito Sans', sans-serif);
      color: var(--canvasback-text, #1a1a1a);
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      transition: color 0.2s ease;
    }
    
    /* Add focus state styling for better accessibility */
    select:focus {
      outline: none;
      border: 1px solid var(--canvasback-primary, #555ab9);
      box-shadow: 0 0 0 2px rgba(85, 90, 185, 0.2);
    }
    
    /* Disabled state */
    select:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background-image: none;
      box-shadow: none;
    }
    
    select:disabled + .dropdown-arrow {
      opacity: 0.3;
    }
    
    /* Subtle ripple effect on click */
    @keyframes ripple {
      0% {
        box-shadow: 0 0 0 0 rgba(85, 90, 185, 0.2);
      }
      100% {
        box-shadow: 0 0 0 6px rgba(85, 90, 185, 0);
      }
    }
    
    select:active {
      animation: ripple 0.6s ease-out;
    }
  `;

  @property({ type: String }) selectedValue = "";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) label = "";

  // Option content is directly managed in light DOM
  constructor() {
    super();
    this.addEventListener('change', this._handleChange);
  }

  // Handle change event
  private _handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement && selectElement.tagName === 'SELECT') {
      this.selectedValue = selectElement.value;
      this.dispatchEvent(new CustomEvent("cv-dropdown-change", { 
        detail: this.selectedValue,
        bubbles: true,
        composed: true
      }));
    }
  }

  // Sync slotted options to the shadow DOM select element
  private _syncOptions() {
    const select = this.renderRoot.querySelector('select');
    if (!select) return;

    // Clear existing options in shadow DOM select
    select.innerHTML = '';

    // Get all slotted option and optgroup elements
    const slottedElements = Array.from(this.children).filter(
      (child) => child.tagName === 'OPTION' || child.tagName === 'OPTGROUP'
    );

    // Clone and append each element to shadow DOM select
    slottedElements.forEach((element) => {
      const clonedElement = element.cloneNode(true);
      select.appendChild(clonedElement);
    });

    // Update selected value after options are synced
    if (this.selectedValue) {
      select.value = this.selectedValue;
    }
  }

  // Update selected value when attribute changes
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'selectedvalue' && oldValue !== newValue) {
      this._updateSelectedValue();
    }
  }

  // Update selected value in the DOM
  private _updateSelectedValue() {
    if (this.selectedValue) {
      // Wait for next render cycle
      setTimeout(() => {
        const select = this.renderRoot.querySelector('select');
        if (select) {
          select.value = this.selectedValue;
        }
      }, 0);
    }
  }

  // Make sure selectedValue is set when component is first connected
  connectedCallback() {
    super.connectedCallback();
    // Sync options from light DOM to shadow DOM
    this.updateComplete.then(() => {
      this._syncOptions();
      this._updateSelectedValue();
    });
  }

  // Also sync options when component is updated
  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    // Re-sync options if children change
    this._syncOptions();
  }

  render() {
    return html`
      ${this.label ? html`<label for="dropdown">${this.label}</label>` : ''}
      <div class="dropdown-container">
        <select 
          id="dropdown"
          ?disabled=${this.disabled}
          .value=${this.selectedValue || ''}
          aria-label=${this.label || 'Select an option'}>
        </select>
        <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-dropdown': CvDropdown;
  }
}
