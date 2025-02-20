import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cv-footer")
export class CvFooter extends LitElement {
  static styles = css`
    footer {
      background-color: var(--cv-black, #1a1a1a);
      color: var(--cv-white, #f0ead6);
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
