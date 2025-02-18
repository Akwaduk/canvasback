import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('canvasback-input')
export class CanvasbackInput extends LitElement {
  static styles = css`
    input {
      border: 1px solid #ccc;
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      width: 100%;
    }
    :host([error]) input {
      border-color: red;
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
