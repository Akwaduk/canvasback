import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index'; // Import the component definition

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Forms/Dropdown',
  component: 'cv-dropdown', // The custom element tag
  tags: ['autodocs'],
  argTypes: {
    selectedValue: { control: 'text' },
    // Define arg types for slots if needed, though controlling slots via args is complex
  },
  render: (args) => html`
    <cv-dropdown .selectedValue=${args.selectedValue} @cv-dropdown-change=${(e: CustomEvent) => console.log('Dropdown changed:', e.detail)}>
      <option value="" disabled selected>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </cv-dropdown>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Default: Story = {
  args: {
    selectedValue: '',
  },
};

export const WithLabel: Story = {
    render: (args) => html`
      <cv-dropdown .selectedValue=${args.selectedValue} @cv-dropdown-change=${(e: CustomEvent) => console.log('Dropdown changed:', e.detail)}>
        <span slot="label">Choose Wisely:</span>
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </cv-dropdown>
    `,
    args: {
      selectedValue: 'option2',
    },
};
