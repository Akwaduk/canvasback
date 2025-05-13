import { html } from 'lit';
import './index';
import '../../forms/cv-button/index';

// Define the story metadata
export default {
  title: 'Components/cv-modal',
  component: 'cv-modal',
  parameters: {
    // Enhanced documentation
    componentSubtitle: 'A versatile modal dialog component for displaying content in an overlay',
    docs: {
      description: {
        component: `
## Modal Component

The \`cv-modal\` component displays content in an overlay that appears above the page content.
It's useful for focusing user attention, confirming actions, or displaying information without
navigating away from the current page.

### Features
- Custom headers via slots
- Optional footer with action buttons
- Backdrop click to dismiss
- Accessible keyboard navigation
- Programmatic open/close methods

### Basic Usage
\`\`\`html
<cv-button @click=${() => document.querySelector('#my-modal').show()}>
  Open Modal
</cv-button>

<cv-modal id="my-modal" heading="My Modal">
  <p>Modal content goes here</p>
  <div slot="footer">
    <cv-button @click=${() => document.querySelector('#my-modal').hide()}>
      Close
    </cv-button>
  </div>
</cv-modal>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    heading: { 
      control: 'text',
      description: 'The heading text displayed at the top of the modal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    open: { 
      control: 'boolean',
      description: 'Whether the modal is displayed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
  },
};

/**
 * Basic Default Modal
 */
export const Default = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Default Modal Example</h3>
    <p>
      The default modal provides a simple implementation with a header, content area, and footer.
      Click the button below to see it in action.
    </p>
    
    <cv-button 
      variant="primary"
      size="large"
      @click=${() => {
        const modal = document.querySelector('#default-modal');
        if (modal) (modal as any).show();
      }}
    >Open Default Modal</cv-button>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-button @click=${'{() => document.querySelector(\'#my-modal\').show()}'}&gt;
  Open Modal
&lt;/cv-button&gt;

&lt;cv-modal id="my-modal" heading="Default Modal"&gt;
  &lt;p&gt;This is the content for the modal.&lt;/p&gt;
  &lt;div slot="footer"&gt;
    &lt;cv-button @click=${'{() => document.querySelector(\'#my-modal\').hide()}'}&gt;Close&lt;/cv-button&gt;
  &lt;/div&gt;
&lt;/cv-modal&gt;
      </pre>
    </div>
    
    <cv-modal id="default-modal" heading="Default Modal">
      <p>This is the default content for the modal. You can put any HTML here.</p>
      <p>Modals are useful for displaying content that requires user attention or interaction.</p>
      <div slot="footer">
        <cv-button 
          variant="secondary" 
          @click=${() => {
            const modal = document.querySelector('#default-modal');
            if (modal) (modal as any).hide();
          }}
        >Close</cv-button>
      </div>
    </cv-modal>
  </div>
`;

/**
 * Modal with custom header
 */
export const WithCustomHeader = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Custom Header Modal</h3>
    <p>
      You can replace the default header with custom content using the <code>header</code> slot.
      This allows for more complex header designs with images, icons, or custom styling.
    </p>
    
    <cv-button 
      variant="primary"
      size="large"
      @click=${() => {
        const modal = document.querySelector('#custom-header-modal');
        if (modal) (modal as any).show();
      }}
    >Open Modal with Custom Header</cv-button>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-modal id="custom-header-modal"&gt;
  &lt;div slot="header" style="display:flex; align-items:center; gap:8px;"&gt;
    &lt;img src="icon.png" alt="icon" style="border-radius:4px;" /&gt;
    &lt;h3&gt;Custom Header Slot&lt;/h3&gt;
  &lt;/div&gt;
  &lt;p&gt;Modal content here...&lt;/p&gt;
&lt;/cv-modal&gt;
      </pre>
    </div>
    
    <cv-modal id="custom-header-modal">
      <div slot="header" style="display:flex; align-items:center; gap:8px;">
        <img src="https://via.placeholder.com/30" alt="icon" style="border-radius:4px;" />
        <h3>Custom Header Slot</h3>
      </div>
      <p>This modal uses a custom header via the <code>header</code> slot.</p>
      <p>Custom headers are useful for creating more visually distinctive modals or for including branding elements.</p>
      <div slot="footer">
        <cv-button 
          variant="secondary" 
          @click=${() => {
            const modal = document.querySelector('#custom-header-modal');
            if (modal) (modal as any).hide();
          }}
        >Close</cv-button>
      </div>
    </cv-modal>
  </div>
`;

/**
 * Modal with action buttons
 */
export const WithActions = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Modal with Multiple Actions</h3>
    <p>
      Modals often require users to make decisions or confirm actions.
      You can add multiple buttons to the footer to provide different action options.
    </p>
    
    <cv-button 
      variant="primary"
      size="large"
      @click=${() => {
        const modal = document.querySelector('#actions-modal');
        if (modal) (modal as any).show();
      }}
    >Open Modal with Actions</cv-button>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-modal id="actions-modal" heading="Modal With Actions"&gt;
  &lt;p&gt;This modal has action buttons in the footer.&lt;/p&gt;
  &lt;div slot="footer"&gt;
    &lt;cv-button variant="secondary" @click=${'{hideModal}'}&gt;Cancel&lt;/cv-button&gt;
    &lt;cv-button variant="primary" @click=${'{confirmAction}'}&gt;Confirm&lt;/cv-button&gt;
  &lt;/div&gt;
&lt;/cv-modal&gt;
      </pre>
    </div>
    
    <cv-modal id="actions-modal" heading="Modal With Actions">
      <p>This modal has action buttons in the footer.</p>
      <p>Use primary and secondary buttons to indicate the importance of different actions.</p>
      <div slot="footer">
        <cv-button 
          variant="secondary" 
          @click=${() => {
            const modal = document.querySelector('#actions-modal');
            if (modal) (modal as any).hide();
          }}
        >Cancel</cv-button>
        <cv-button 
          variant="primary" 
          @click=${() => {
            alert('Confirmed!');
            const modal = document.querySelector('#actions-modal');
            if (modal) (modal as any).hide();
          }}
        >Confirm</cv-button>
      </div>
    </cv-modal>
  </div>
`;

/**
 * Initially open modal
 */
export const InitiallyOpen = () => {
  // Use setTimeout to avoid the template string array issue
  setTimeout(() => {
    const modal = document.querySelector('#initially-open-modal');
    if (modal) (modal as any).open = true;
  }, 0);

  return html`
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
      <h3>Initially Open Modal</h3>
      <p>
        You can make a modal appear automatically when the page loads by setting
        the <code>open</code> attribute to <code>true</code>.
      </p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h4>Code Example:</h4>
        <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-modal id="my-modal" heading="Initially Open Modal" open&gt;
  &lt;p&gt;This modal appears automatically when the page loads.&lt;/p&gt;
&lt;/cv-modal&gt;
        </pre>
      </div>
      
      <cv-modal id="initially-open-modal" heading="Initially Open Modal">
        <p>This modal was opened by default by setting the <code>open</code> attribute.</p>
        <p>This is useful for scenarios where you need to immediately capture user attention,
           such as important announcements or required inputs.</p>
        <div slot="footer">
          <cv-button 
            variant="secondary" 
            @click=${() => {
              const modal = document.querySelector('#initially-open-modal');
              if (modal) (modal as any).hide();
            }}
          >Close</cv-button>
        </div>
      </cv-modal>
    </div>
  `;
};

/**
 * Programmatically opened modal
 */
export const ProgrammaticControl = () => {
  // Use requestAnimationFrame to avoid the template string array issue
  requestAnimationFrame(() => {
    const openBtn = document.querySelector('#open-programmatic-btn');
    const closeBtn = document.querySelector('#close-programmatic-btn');
    const modal = document.querySelector('#programmatic-modal');
    
    if (openBtn && closeBtn && modal) {
      openBtn.addEventListener('click', () => {
        (modal as any).show();
      });
      
      closeBtn.addEventListener('click', () => {
        (modal as any).hide();
      });
    }
  });
  
  return html`
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
      <h3>Programmatic Modal Control</h3>
      <p>
        Modals can be controlled programmatically using the <code>show()</code> and <code>hide()</code>
        methods. This gives you more flexibility in managing when and how modals appear.
      </p>
      
      <div style="display: flex; gap: 10px;">
        <cv-button 
          id="open-programmatic-btn"
          variant="primary"
          size="large"
        >Open Modal</cv-button>
        
        <cv-button 
          id="close-programmatic-btn"
          variant="secondary"
          size="large"
        >Close Modal</cv-button>
      </div>
      
      <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h4>Code Example:</h4>
        <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
// Get references to the modal and buttons
const modal = document.getElementById('my-modal');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// Add event listeners
openBtn.addEventListener('click', () => modal.show());
closeBtn.addEventListener('click', () => modal.hide());
        </pre>
      </div>
      
      <cv-modal id="programmatic-modal" heading="Programmatically Controlled Modal">
        <p>This modal is opened and closed using JavaScript methods.</p>
        <p>The <code>show()</code> and <code>hide()</code> methods can be called from anywhere
           in your code, allowing for complex interactions and workflows.</p>
        <div slot="footer">
          <cv-button 
            @click=${() => {
              const modal = document.querySelector('#programmatic-modal');
              if (modal) (modal as any).hide();
            }}
          >Close</cv-button>
        </div>
      </cv-modal>
    </div>
  `;
};
