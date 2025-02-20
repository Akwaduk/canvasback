import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cv-container")
export class CvContainer extends LitElement {
  @property({ type: String }) gap = "16px";
  @property({ type: Number }) columns = 3; // Default to 3 columns
  @property({ type: Boolean }) inner = false; // Determines if the container is inner

  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap; /* Ensures items wrap if they exceed container width */
      gap: var(--cv-gap, 16px);
      padding: 16px;
      background-color: var(--cv-white, #f0ead6);
      color: var(--cv-black, #1a1a1a);
    }

    :host([inner]) {
      padding: 8px; /* Inner containers have smaller padding */
      background-color: var(--cv-light-gray, #e0e0e0);
    }

    ::slotted(*) {
      flex: 1 1 calc((100% / 12) * var(--cv-columns, 3)); /* Assigns flex based on columns */
      min-width: 0; /* Prevents flex items from overflowing */
    }
  `;

  updated() {
    this.style.setProperty("--cv-gap", this.gap);
    this.style.setProperty("--cv-columns", this.columns.toString());
  }

  render() {
    return html`<slot></slot>`;
  }
}
