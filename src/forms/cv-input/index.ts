import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('canvasback-input')
export class CanvasbackInput extends LitElement {
  static styles = css`
    input {
      border: 1px solid var(--canvasback-border); /* Use theme border color */
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      width: 100%;
      background-color: var(--canvasback-background); /* Use theme background */
      color: var(--canvasback-text); /* Use theme text */
      font-family: var(--canvasback-font); /* Use theme font */
    }
    :host([error]) input {
      border-color: red; /* Keep error state distinct */
    }
    label {
        font-family: var(--canvasback-font); /* Ensure label uses theme font */
        color: var(--canvasback-text); /* Ensure label uses theme text */
    }
  `;

  @property({ type: String }) value = '';

  private _handleInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('input-change', { detail: this.value }));
  }

  render() {
    return html`
      <label>
        <slot name="label"></slot>
        <input type="text" .value=${this.value} @input=${this._handleInput} />
      </label>
    `;
  }
}
