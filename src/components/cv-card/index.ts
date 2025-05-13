import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cv-card')
export class CvCard extends LitElement {
  static styles = css`
    :host {
      display: flex; /* CHANGED: Use flexbox for layout */
      flex-direction: column; /* CHANGED: Stack children vertically */
      border: 1px solid var(--cv-border-color, #ccc);
      border-radius: var(--cv-border-radius, 4px);
      padding: var(--cv-spacing-medium, 16px); /* Host padding */
      background-color: var(--cv-background-color, #fff);
      box-shadow: var(--cv-shadow-small, 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24));
      transition: box-shadow 0.3s ease-in-out;
      max-width: var(--cv-card-max-width, 360px);
      overflow: hidden; /* Ensures children like media respect border-radius */
    }

    :host(:hover) {
      box-shadow: var(--cv-shadow-medium, 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23));
    }

    /* Media: If it's the first child, use negative margins to make it flush with card edges */
    ::slotted(cv-card-media:first-child) {
      margin: calc(-1 * var(--cv-spacing-medium, 16px)) /* top */
              calc(-1 * var(--cv-spacing-medium, 16px)) /* horizontal */
              var(--cv-spacing-medium, 16px) /* bottom (space before next element) */
              calc(-1 * var(--cv-spacing-medium, 16px)); /* horizontal */
    }
    /* If media is the ONLY child in the card */
    ::slotted(cv-card-media:first-child:last-child) {
      margin-bottom: calc(-1 * var(--cv-spacing-medium, 16px)); /* Also flush bottom */
    }

    ::slotted(cv-card-title) {
      margin-top: 0; /* Reset any default */
      margin-bottom: var(--cv-spacing-small, 8px);
      font-size: var(--cv-font-size-large, 1.25rem);
      font-weight: bold;
      color: var(--cv-text-color-primary, #333);
    }

    ::slotted(cv-card-content) {
      font-size: var(--cv-font-size-medium, 1rem);
      color: var(--cv-text-color-primary, #333);
      flex-grow: 1; /* CHANGED: Allows content to expand and push actions down */
      margin-bottom: var(--cv-spacing-medium, 16px); /* Space before actions or bottom padding */
    }
    /* If content is the last visible element (no actions follow or actions are hidden) */
    ::slotted(cv-card-content:last-child) {
      margin-bottom: 0; /* Remove margin if it's truly the last item within host padding */
    }

    ::slotted(cv-card-actions) {
      margin-top: auto; /* CHANGED: Pushes actions to the bottom of the flex container */
      /* To make actions area visually distinct and edge-to-edge for its border/bg: */
      margin-left: calc(-1 * var(--cv-spacing-medium, 16px));
      margin-right: calc(-1 * var(--cv-spacing-medium, 16px));
      margin-bottom: calc(-1 * var(--cv-spacing-medium, 16px)); /* Flush with bottom of host padding */

      padding: var(--cv-spacing-medium, 16px); /* Internal padding for action items */
      border-top: 1px solid var(--cv-border-color-light, #eee);
      display: flex;
      gap: var(--cv-spacing-small, 8px);
      align-items: center; /* Vertically align items in the actions row */
      /* background-color: var(--cv-background-color-offset, #f8f9fa); Optional: slight bg for actions */
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('cv-card-media')
export class CvCardMedia extends LitElement {
  static styles = css`
    :host {
      display: block; /* Ensures it takes up width */
      line-height: 0; /* Avoids extra space if slotted img is treated as inline */
    }
    ::slotted(img),
    ::slotted(video) {
      display: block; /* Remove any default inline spacing */
      width: 100%;    /* Fill the host component */
      height: auto;   /* Maintain aspect ratio by default */
      object-fit: cover; /* Good for ensuring the media covers the area, might crop */
                         /* Card's overflow:hidden will clip to card's border-radius */
    }
  `;
  render() {
    return html`<slot></slot>`;
  }
}

// Define elements for slotted content to allow for specific styling if needed
@customElement('cv-card-title')
export class CvCardTitle extends LitElement {
  render() { return html`<slot></slot>`; }
}

@customElement('cv-card-content')
export class CvCardContent extends LitElement {
  render() { return html`<slot></slot>`; }
}

@customElement('cv-card-actions')
export class CvCardActions extends LitElement {
  static styles = css`
    :host {
      display: flex;
      gap: var(--cv-spacing-small, 8px);
    }

    ::slotted(*:hover) {
      cursor: pointer;
    }
  `;
  render() { return html`<slot></slot>`; }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-card': CvCard;
    'cv-card-title': CvCardTitle;
    'cv-card-content': CvCardContent;
    'cv-card-actions': CvCardActions;
    'cv-card-media': CvCardMedia; // Added cv-card-media
  }
}
