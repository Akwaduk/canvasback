import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index'; // Import the component definition

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Forms/Input',
  component: 'canvasback-input', // The custom element tag
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    error: { control: 'boolean' }, // Control for the error state
    // Define arg types for slots if needed
  },
  render: (args) => html`
    <canvasback-input
      .value=${args.value}
      ?error=${args.error}
      @input-change=${(e: CustomEvent) => console.log('Input changed:', e.detail)}
    >
    </canvasback-input>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Default: Story = {
  args: {
    value: 'Some text',
    error: false,
  },
};

export const WithLabel: Story = {
    render: (args) => html`
      <canvasback-input
        .value=${args.value}
        ?error=${args.error}
        @input-change=${(e: CustomEvent) => console.log('Input changed:', e.detail)}
      >
        <span slot="label">Enter Your Name:</span>
      </canvasback-input>
    `,
    args: {
      value: 'Default Value',
      error: false,
    },
};

export const ErrorState: Story = {
  args: {
    value: 'Invalid input',
    error: true,
  },
};

export const ErrorWithLabel: Story = {
    render: (args) => html`
      <canvasback-input
        .value=${args.value}
        ?error=${args.error}
        @input-change=${(e: CustomEvent) => console.log('Input changed:', e.detail)}
      >
        <span slot="label">Password (Error):</span>
      </canvasback-input>
    `,
    args: {
      value: 'wrongpassword',
      error: true,
    },
};
