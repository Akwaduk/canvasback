import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cv-footer")
export class CvFooter extends LitElement {
  static styles = css`
    footer {
      background-color: var(--canvasback-text); /* Use text color for background */
      color: var(--canvasback-background); /* Use background color for text */
      text-align: center;
      padding: 16px;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  `;

  render() {
    return html`<footer><slot></slot></footer>`;
  }
}
