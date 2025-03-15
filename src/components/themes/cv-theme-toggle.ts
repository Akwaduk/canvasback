// src/components/theme/cv-theme-toggle.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { initThemeToggle } from '../../utils/theme-toggle';

@customElement('cv-theme-toggle')
export class CvThemeToggle extends LitElement {
  @property({ type: String }) theme = 'light';
  
  private themeUtils = initThemeToggle();
  
  static styles = css`
    :host {
      display: inline-block;
    }
    
    button {
      background: transparent;
      border: 1px solid var(--canvasback-border);
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--canvasback-text);
      transition: all 0.2s ease;
    }
    
    button:hover {
      opacity: 0.8;
    }
  `;
  
  firstUpdated() {
    this.theme = this.themeUtils.getCurrentTheme();
  }
  
  toggleTheme() {
    this.themeUtils.toggleTheme();
    this.theme = this.themeUtils.getCurrentTheme();
    
    // Dispatch event for other components to react
    this.dispatchEvent(new CustomEvent('theme-changed', {
      detail: { theme: this.theme },
      bubbles: true,
      composed: true
    }));
  }
  
  render() {
    return html`
      <button @click=${this.toggleTheme}>
        ${this.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    `;
  }
}