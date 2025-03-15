import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cv-container")
export class CvContainer extends LitElement {
  @property({ type: String }) gap = "16px";
  @property({ type: Number }) columns = 3; // Default to 3 columns
  @property({ type: Boolean }) inner = false; // Determines if the container is inner
  @property({ type: Boolean, attribute: 'has-border' }) hasBorder = false;
  @property({ type: String, attribute: 'border-color' }) borderColor = "#d0d0d0";

  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap; /* Ensures items wrap if they exceed container width */
      gap: var(--cv-gap, 16px);
      padding: 16px;
      background-color: #ffffff; /* White background */
      color: var(--cv-black, #1a1a1a);
      border-radius: 4px; /* Slightly rounded corners for a modern look */
    }

    :host([has-border]) {
      border: 1px solid var(--cv-border-color, #d0d0d0);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
    }

    :host([inner]) {
      padding: 8px; /* Inner containers have smaller padding */
      background-color: #f7f7f7; /* Subtle gray for inner containers */
    }

    ::slotted(*) {
      flex: 1 1 calc((100% / 12) * var(--cv-columns, 3)); /* Assigns flex based on columns */
      min-width: 0; /* Prevents flex items from overflowing */
    }
  `;

  updated() {
    this.style.setProperty("--cv-gap", this.gap);
    this.style.setProperty("--cv-columns", this.columns.toString());
    this.style.setProperty("--cv-border-color", this.borderColor);
  }

  render() {
    return html`<slot></slot>`;
  }
}