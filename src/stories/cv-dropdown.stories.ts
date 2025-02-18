import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "../components/cv-dropdown";

const meta: Meta = {
  title: "Components/Canvasback Dropdown",
  component: "cv-dropdown",
  decorators: [
    (story) => html`<div style="padding: 20px; background: #f4f4f4">${story()}</div>`,
  ],
  argTypes: {
    label: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<{ label: string }>;

export const Default: Story = {
  args: {
    label: "Select an option:",
  },
  render: ({ label }) => html`
    <cv-dropdown>
      <span slot="label">${label}</span>
      <option>Option 1</option>
      <option>Option 2</option>
    </cv-dropdown>
  `,
};
