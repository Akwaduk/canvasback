import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('cv-modal')
export class CvModal extends LitElement {
  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  heading = '';

  static styles = css`
    :host {
      display: none; /* Hidden by default */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Overlay */
      z-index: var(--cv-z-index-modal, 1000);
      justify-content: center;
      align-items: center;
    }

    :host([open]) {
      display: flex; /* Shown when open attribute is true */
    }

    .modal-dialog {
      background-color: var(--cv-background-color, #fff);
      padding: var(--cv-spacing-large, 24px);
      border-radius: var(--cv-border-radius-medium, 8px);
      box-shadow: var(--cv-shadow-large, 0 5px 15px rgba(0,0,0,0.3));
      min-width: 300px;
      max-width: 80%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--cv-spacing-medium, 16px);
      border-bottom: 1px solid var(--cv-border-color-light, #eee);
      padding-bottom: var(--cv-spacing-small, 8px);
    }

    .modal-header ::slotted([slot="header"]),
    .modal-header h2 {
      margin: 0;
      font-size: var(--cv-font-size-xlarge, 1.5rem);
      font-weight: bold;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--cv-text-color-secondary, #666);
    }
    .close-button:hover {
      color: var(--cv-text-color-primary, #333);
    }

    .modal-content {
      margin-bottom: var(--cv-spacing-medium, 16px);
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--cv-spacing-small, 8px);
      margin-top: var(--cv-spacing-medium, 16px);
      border-top: 1px solid var(--cv-border-color-light, #eee);
      padding-top: var(--cv-spacing-medium, 16px);
    }

    ::slotted([slot="footer"]) {
      display: flex;
      justify-content: flex-end;
      gap: var(--cv-spacing-small, 8px);
    }
  `;

  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('cv-close', { bubbles: true, composed: true }));
  }

  private _handleOverlayClick(event: MouseEvent) {
    if (event.target === this) { // Clicked on the overlay itself
      this.hide();
    }
  }

  render() {
    return html`
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
        <div class="modal-header">
          <slot name="header">
            <h2 id="modal-heading">${this.heading}</h2>
          </slot>
          <button class="close-button" @click=${this.hide} aria-label="Close dialog">&times;</button>
        </div>
        <div class="modal-content">
          <slot></slot> <!-- Default slot for content -->
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }

  // Handle clicks on the host (overlay) to close the modal
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._handleOverlayClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleOverlayClick);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-modal': CvModal;
  }
}
