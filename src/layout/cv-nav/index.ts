import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cv-nav")
export class CvNav extends LitElement {
  static styles = css`
    nav {
      display: flex;
      background-color: var(--canvasback-text); /* Use text color for background */
      padding: 16px;
    }
    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }
    li {
      margin-right: 24px;
    }
    a {
      color: var(--canvasback-background); /* Use background color for text */
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <nav>
        <ul>
          <slot></slot>
        </ul>
      </nav>
    `;
  }
}
