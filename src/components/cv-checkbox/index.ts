import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

let uniqueIdCounter = 0;

@customElement('cv-checkbox')
export class CvCheckbox extends LitElement {
  private _uniqueId = `cv-checkbox-${uniqueIdCounter++}`;

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  label = '';

  @property({ type: String })
  value = ''; // Optional value for the checkbox

  @property({ type: String })
  name = ''; // Optional name for form submission

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      font-family: var(--cv-font-family, sans-serif);
      font-size: var(--cv-font-size-medium, 1rem);
      color: var(--cv-text-color-primary, #333);
      gap: var(--cv-spacing-small, 8px);
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: var(--cv-disabled-opacity, 0.6);
    }

    .checkbox-container {
      display: inline-flex; /* Aligns SVG and input correctly */
      position: relative;
      width: 1.25em; /* Size based on font-size */
      height: 1.25em;
    }

    input[type="checkbox"] {
      opacity: 0; /* Hide actual checkbox */
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: inherit;
    }

    .visual-checkbox {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border: 2px solid var(--cv-border-color-strong, #555);
      border-radius: var(--cv-border-radius-small, 2px);
      background-color: var(--cv-background-color, #fff);
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    input[type="checkbox"]:focus-visible + .visual-checkbox {
      outline: 2px solid var(--cv-focus-ring-color, #007bff);
      outline-offset: 2px;
    }

    /* Checked state */
    input[type="checkbox"]:checked + .visual-checkbox {
      background-color: var(--cv-primary-color, #007bff);
      border-color: var(--cv-primary-color, #007bff);
    }

    /* Indeterminate state */
    input[type="checkbox"]:indeterminate + .visual-checkbox {
      background-color: var(--cv-primary-color, #007bff);
      border-color: var(--cv-primary-color, #007bff);
    }

    .icon {
      display: none;
      fill: var(--cv-background-color, #fff);
      width: 0.75em;
      height: 0.75em;
    }

    input[type="checkbox"]:checked + .visual-checkbox .icon.check-icon,
    input[type="checkbox"]:indeterminate + .visual-checkbox .icon.indeterminate-icon {
      display: block;
    }

    label {
      cursor: inherit;
      user-select: none; /* Prevent text selection on click */
    }
  `;

  private _handleChange(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.indeterminate = false; // Clear indeterminate state on change
    this.dispatchEvent(new CustomEvent('cv-change', {
      detail: { checked: this.checked, value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <label for=${this._uniqueId}>
        <span class="checkbox-container">
          <input
            type="checkbox"
            id=${this._uniqueId}
            .checked=${this.checked}
            ?disabled=${this.disabled}
            .indeterminate=${this.indeterminate}
            value=${ifDefined(this.value || undefined)}
            name=${ifDefined(this.name || undefined)}
            @change=${this._handleChange}
            aria-checked=${this.indeterminate ? 'mixed' : (this.checked ? 'true' : 'false')}
            aria-label=${this.label || 'checkbox'}
          />
          <span class="visual-checkbox" aria-hidden="true">
            <svg class="icon check-icon" viewBox="0 0 16 16">
              <path d="M13.707 4.293a1 1 0 00-1.414 0L6 10.586 3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
            </svg>
            <svg class="icon indeterminate-icon" viewBox="0 0 16 16">
              <path d="M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z"/>
            </svg>
          </span>
        </span>
        <span class="label-text"><slot>${this.label}</slot></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-checkbox': CvCheckbox;
  }
}
