import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './index';
import '../../forms/cv-button/index'; // Corrected path

export default {
  title: 'Components/cv-modal',
  component: 'cv-modal',
  argTypes: {
    open: { control: 'boolean' },
    heading: { control: 'text' },
    onCvClose: { action: 'cv-close' }, // To log the close event in Storybook
  },
};

const Template = ({ open, heading, slotContent, slotHeader, slotFooter, onCvClose }) => html`
  <cv-button label="Open Modal" @click=${() => {
    const modal = document.querySelector('cv-modal');
    if (modal) modal.show();
  }}></cv-button>

  <cv-modal
    ?open=${open}
    heading=${ifDefined(heading || undefined)}
    @cv-close=${(e) => {
      // Simulate closing the modal in Storybook UI when event fires
      const modal = e.target as any;
      if (modal) modal.open = false;
      onCvClose(e);
    }}
  >
    ${slotHeader ? slotHeader : ''}
    ${slotContent}
    ${slotFooter ? slotFooter : ''}
  </cv-modal>
`;

export const Default = Template.bind({});
Default.args = {
  open: false,
  heading: 'Default Modal Heading',
  slotContent: html`<p>This is the default content for the modal. You can put any HTML here.</p>`,
};

export const WithCustomHeader = Template.bind({});
WithCustomHeader.args = {
  open: false,
  // No heading property, as slot will override
  slotHeader: html`<div slot="header" style="display:flex; align-items:center; gap:8px;">
    <img src="https://via.placeholder.com/30" alt="icon" style="border-radius:4px;" />
    <h3>Custom Header Slot</h3>
  </div>`,
  slotContent: html`<p>This modal uses a custom header via the <code>header</code> slot.</p>`,
};

export const WithActions = Template.bind({});
WithActions.args = {
  open: false,
  heading: 'Modal With Actions',
  slotContent: html`<p>This modal has action buttons in the footer.</p>`,
  slotFooter: html`
    <div slot="footer">
      <cv-button label="Cancel" variant="secondary" @click=${() => (document.querySelector('cv-modal[open]') as any)?.hide()}></cv-button>
      <cv-button label="Confirm" variant="primary" @click=${() => alert('Confirmed!')}></cv-button>
    </div>
  `,
};

export const InitiallyOpen = Template.bind({});
InitiallyOpen.args = {
  open: true,
  heading: 'Initially Open Modal',
  slotContent: html`<p>This modal was opened by default by setting the <code>open</code> attribute.</p>`,
  slotFooter: html`
    <div slot="footer">
      <cv-button label="Close Me" @click=${() => (document.querySelector('cv-modal[open]') as any)?.hide()}></cv-button>
    </div>
  `,
};

// Story to demonstrate opening programmatically
export const ProgrammaticOpen = (args) => html`
  <cv-button label="Open Programmatically" id="openModalBtn"></cv-button>
  <cv-modal id="programmaticModal" heading=${args.heading} @cv-close=${args.onCvClose}>
    <p>This modal was opened by JavaScript.</p>
    <div slot="footer">
      <cv-button label="Close" @click=${() => (document.getElementById('programmaticModal') as any)?.hide()}></cv-button>
    </div>
  </cv-modal>
  <script>
    // Ensure script runs after elements are in DOM
    setTimeout(() => {
      const btn = document.getElementById('openModalBtn');
      const modal = document.getElementById('programmaticModal');
      if (btn && modal) {
        btn.addEventListener('click', () => (modal as any).show());
      }
    }, 0);
  </script>
`;
ProgrammaticOpen.args = {
  heading: 'Programmatic Modal',
};
