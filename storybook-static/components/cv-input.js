var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
let CanvasbackInput = class CanvasbackInput extends LitElement {
    constructor() {
        super(...arguments);
        this.value = '';
    }
    static { this.styles = css `
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
  `; }
    _handleInput(event) {
        this.value = event.target.value;
        this.dispatchEvent(new CustomEvent('input-change', { detail: this.value }));
    }
    render() {
        return html `
      <label>
        <slot name="label"></slot>
        <input type="text" .value=${this.value} @input=${this._handleInput} />
      </label>
    `;
    }
};
__decorate([
    property({ type: String })
], CanvasbackInput.prototype, "value", void 0);
CanvasbackInput = __decorate([
    customElement('canvasback-input')
], CanvasbackInput);
export { CanvasbackInput };
