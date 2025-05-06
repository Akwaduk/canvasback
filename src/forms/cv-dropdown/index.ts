import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("cv-dropdown")
export class CvDropdown extends LitElement {
  static styles = css`
    select {
      border: 1px solid var(--canvasback-border); /* Use theme border color */
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      width: 100%;
      background-color: var(--canvasback-background); /* Use theme background */
      color: var(--canvasback-text); /* Use theme text */
      font-family: var(--canvasback-font); /* Use theme font */
    }
    label {
        font-family: var(--canvasback-font); /* Ensure label uses theme font */
        color: var(--canvasback-text); /* Ensure label uses theme text */
    }
  `;

  @property({ type: String }) selectedValue = "";

  private _handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedValue = selectElement.value;
    this.dispatchEvent(new CustomEvent("cv-dropdown-change", { detail: this.selectedValue }));
  }

  render() {
    return html`
      <label>
        <slot name="label"></slot>
        <select @change=${this._handleChange}>
          <slot></slot>
        </select>
      </label>
    `;
  }
}
