import { html } from 'lit';
import './index';
import '../../forms/cv-button/index'; // Corrected path

export default {
  title: 'Components/cv-card',
  component: 'cv-card',
  argTypes: {
    // Define any properties of cv-card here if it had them
  },
};

const Template = ({ slot }) => html`<cv-card>${slot}</cv-card>`;

export const Default = Template.bind({});
Default.args = {
  slot: html`
    <cv-card-title>Card Title</cv-card-title>
    <cv-card-content>
      This is the content of the card. It can be any HTML or other components.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </cv-card-content>
  `,
};

export const WithActions = Template.bind({});
WithActions.args = {
  slot: html`
    <cv-card-title>Card With Actions</cv-card-title>
    <cv-card-content>
      This card includes action buttons in the footer.
    </cv-card-content>
    <cv-card-actions>
      <cv-button variant="primary">Primary Action</cv-button>
      <cv-button>Secondary Action</cv-button>
    </cv-card-actions>
  `,
};

export const WithImageAndActions = Template.bind({});
WithImageAndActions.args = {
  slot: html`
    <cv-card-media>
      <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22360%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20360%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22360%22%20height%3D%22200%22%20fill%3D%22%23868e96%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.5%22%20y%3D%22108.1%22%3ECard%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Placeholder Image">
    </cv-card-media>
    <cv-card-title>Card With Image</cv-card-title>
    <cv-card-content>
      This card has an image at the top, followed by content and actions.
    </cv-card-content>
    <cv-card-actions>
      <cv-button variant="primary">Read More</cv-button>
      <cv-button>Share</cv-button>
    </cv-card-actions>
  `,
};

export const Simple = Template.bind({});
Simple.args = {
  slot: html`
    <cv-card-content>
      A simple card with just content.
    </cv-card-content>
  `,
};
