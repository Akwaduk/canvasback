import { html } from 'lit';
import './index';
import '../../forms/cv-button/index';

// Define the story metadata
export default {
  title: 'Components/cv-card',
  component: 'cv-card',
  parameters: {
    // Enhanced documentation
    componentSubtitle: 'A versatile card component for displaying content in a structured format',
    docs: {
      description: {
        component: `
## Card Component

The \`cv-card\` component creates a flexible container for displaying content in a structured format.
Cards are commonly used for presenting information, products, or actions in a consistent and visually
appealing way.

### Features
- Flexible content structure with dedicated areas for media, title, content, and actions
- Automatic hover effects with elevation changes
- Responsive design that adapts to different screen sizes
- Customizable through CSS variables

### Basic Usage
\`\`\`html
<cv-card>
  <cv-card-title>Card Title</cv-card-title>
  <cv-card-content>
    Card content goes here
  </cv-card-content>
  <cv-card-actions>
    <cv-button variant="primary">Action</cv-button>
  </cv-card-actions>
</cv-card>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    // No direct properties to control since cv-card uses slotted content
  },
};

/**
 * Basic Default Card
 */
export const Default = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Default Card Example</h3>
    <p>
      The default card provides a simple implementation with a title and content area.
    </p>
    
    <cv-card>
      <cv-card-title>Card Title</cv-card-title>
      <cv-card-content>
        This is the default content for the card. Cards are flexible containers for displaying
        related content and actions about a single subject.
      </cv-card-content>
    </cv-card>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-card&gt;
  &lt;cv-card-title&gt;Card Title&lt;/cv-card-title&gt;
  &lt;cv-card-content&gt;
    This is the default content for the card. Cards are flexible containers for displaying
    related content and actions about a single subject.
  &lt;/cv-card-content&gt;
&lt;/cv-card&gt;
      </pre>
    </div>
  </div>
`;

/**
 * Card with action buttons
 */
export const WithActions = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Card With Actions</h3>
    <p>
      Cards often include action buttons that allow users to interact with the card content.
      These actions can be placed at the bottom of the card using the <code>cv-card-actions</code> element.
    </p>
    
    <cv-card>
      <cv-card-title>Card With Actions</cv-card-title>
      <cv-card-content>
        This card includes action buttons in the footer area. Actions are positioned at the bottom
        of the card and can include multiple buttons with different variants.
      </cv-card-content>
      <cv-card-actions>
        <cv-button variant="secondary">Cancel</cv-button>
        <cv-button variant="primary">Submit</cv-button>
      </cv-card-actions>
    </cv-card>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-card&gt;
  &lt;cv-card-title&gt;Card With Actions&lt;/cv-card-title&gt;
  &lt;cv-card-content&gt;
    This card includes action buttons in the footer area. Actions are positioned at the bottom
    of the card and can include multiple buttons with different variants.
  &lt;/cv-card-content&gt;
  &lt;cv-card-actions&gt;
    &lt;cv-button variant="secondary"&gt;Cancel&lt;/cv-button&gt;
    &lt;cv-button variant="primary"&gt;Submit&lt;/cv-button&gt;
  &lt;/cv-card-actions&gt;
&lt;/cv-card&gt;
      </pre>
    </div>
  </div>
`;

/**
 * Card with media, content and actions
 */
export const WithImageAndActions = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Card With Media</h3>
    <p>
      Cards can include media content such as images or videos using the <code>cv-card-media</code> element.
      Media is typically displayed at the top of the card, followed by the title, content, and actions.
    </p>
    
    <cv-card>
      <cv-card-media>
        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22360%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20360%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22360%22%20height%3D%22200%22%20fill%3D%22%23868e96%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.5%22%20y%3D%22108.1%22%3ECard%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Placeholder Image">
      </cv-card-media>
      <cv-card-title>Card With Image</cv-card-title>
      <cv-card-content>
        This card has an image at the top, followed by a title, content, and action buttons.
        Media content spans the full width of the card and automatically adapts to the card's dimensions.
      </cv-card-content>
      <cv-card-actions>
        <cv-button variant="secondary">Share</cv-button>
        <cv-button variant="primary">Learn More</cv-button>
      </cv-card-actions>
    </cv-card>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-card&gt;
  &lt;cv-card-media&gt;
    &lt;img src="image.jpg" alt="Card image"&gt;
  &lt;/cv-card-media&gt;
  &lt;cv-card-title&gt;Card With Image&lt;/cv-card-title&gt;
  &lt;cv-card-content&gt;
    This card has an image at the top, followed by a title, content, and action buttons.
  &lt;/cv-card-content&gt;
  &lt;cv-card-actions&gt;
    &lt;cv-button variant="secondary"&gt;Share&lt;/cv-button&gt;
    &lt;cv-button variant="primary"&gt;Learn More&lt;/cv-button&gt;
  &lt;/cv-card-actions&gt;
&lt;/cv-card&gt;
      </pre>
    </div>
  </div>
`;

/**
 * Minimal card with just content
 */
export const Simple = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Simple Card</h3>
    <p>
      A minimal card can contain just content without a title or actions,
      providing a clean and simple container for information.
    </p>
    
    <cv-card>
      <cv-card-content>
        This is a simple card with just content. It's useful for displaying short messages,
        notifications, or information that doesn't require additional context or actions.
      </cv-card-content>
    </cv-card>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-card&gt;
  &lt;cv-card-content&gt;
    This is a simple card with just content. It's useful for displaying short messages,
    notifications, or information that doesn't require additional context or actions.
  &lt;/cv-card-content&gt;
&lt;/cv-card&gt;
      </pre>
    </div>
  </div>
`;

/**
 * Card with hover interaction
 */
export const HoverInteraction = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Interactive Card</h3>
    <p>
      Cards can be made interactive with hover effects. This example demonstrates
      the built-in elevation change when hovering over a card.
    </p>
    
    <p style="font-style: italic;">Hover over the card to see the effect</p>
    
    <cv-card style="cursor: pointer;">
      <cv-card-media>
        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22360%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20360%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22360%22%20height%3D%22200%22%20fill%3D%22%23868e96%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.5%22%20y%3D%22108.1%22%3ECard%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Interactive Card Image">
      </cv-card-media>
      <cv-card-title>Interactive Card</cv-card-title>
      <cv-card-content>
        This card demonstrates the built-in hover effect that increases the elevation shadow.
        Hover over the card to see the change in appearance.
      </cv-card-content>
      <cv-card-actions>
        <cv-button variant="primary">Explore</cv-button>
      </cv-card-actions>
    </cv-card>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-card style="cursor: pointer;"&gt;
  &lt;cv-card-media&gt;
    &lt;img src="image.jpg" alt="Interactive Card Image"&gt;
  &lt;/cv-card-media&gt;
  &lt;cv-card-title&gt;Interactive Card&lt;/cv-card-title&gt;
  &lt;cv-card-content&gt;
    This card demonstrates the built-in hover effect that increases the elevation shadow.
  &lt;/cv-card-content&gt;
  &lt;cv-card-actions&gt;
    &lt;cv-button variant="primary"&gt;Explore&lt;/cv-button&gt;
  &lt;/cv-card-actions&gt;
&lt;/cv-card&gt;
      </pre>
    </div>
  </div>
`;

/**
 * Multiple cards layout
 */
export const CardLayout = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
    <h3>Card Layout</h3>
    <p>
      Cards can be arranged in various layouts using CSS grid or flexbox. 
      Here's an example of a responsive grid of cards.
    </p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
      <cv-card>
        <cv-card-media>
          <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22360%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20360%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22360%22%20height%3D%22200%22%20fill%3D%22%23868e96%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.5%22%20y%3D%22108.1%22%3ECard%201%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card Image 1">
        </cv-card-media>
        <cv-card-title>First Card</cv-card-title>
        <cv-card-content>
          Content for the first card in this grid layout.
        </cv-card-content>
        <cv-card-actions>
          <cv-button variant="primary">View</cv-button>
        </cv-card-actions>
      </cv-card>
      
      <cv-card>
        <cv-card-media>
          <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22360%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20360%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22360%22%20height%3D%22200%22%20fill%3D%22%23868e96%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.5%22%20y%3D%22108.1%22%3ECard%202%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card Image 2">
        </cv-card-media>
        <cv-card-title>Second Card</cv-card-title>
        <cv-card-content>
          Content for the second card in this grid layout.
        </cv-card-content>
        <cv-card-actions>
          <cv-button variant="primary">View</cv-button>
        </cv-card-actions>
      </cv-card>
      
      <cv-card>
        <cv-card-media>
          <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22360%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20360%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22360%22%20height%3D%22200%22%20fill%3D%22%23868e96%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.5%22%20y%3D%22108.1%22%3ECard%203%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card Image 3">
        </cv-card-media>
        <cv-card-title>Third Card</cv-card-title>
        <cv-card-content>
          Content for the third card in this grid layout.
        </cv-card-content>
        <cv-card-actions>
          <cv-button variant="primary">View</cv-button>
        </cv-card-actions>
      </cv-card>
    </div>
    
    <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      <h4>Code Example:</h4>
      <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;"&gt;
  &lt;cv-card&gt;
    &lt;cv-card-media&gt;
      &lt;img src="image1.jpg" alt="Card Image 1"&gt;
    &lt;/cv-card-media&gt;
    &lt;cv-card-title&gt;First Card&lt;/cv-card-title&gt;
    &lt;cv-card-content&gt;Content for the first card&lt;/cv-card-content&gt;
    &lt;cv-card-actions&gt;
      &lt;cv-button variant="primary"&gt;View&lt;/cv-button&gt;
    &lt;/cv-card-actions&gt;
  &lt;/cv-card&gt;
  
  &lt;!-- Additional cards... --&gt;
&lt;/div&gt;
      </pre>
    </div>
  </div>
`;
