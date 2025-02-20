import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "./index.ts";

const meta: Meta = {
  component: "cv-container",
  title: "Layout/Container",
  tags: ["autodocs"],
  argTypes: {
    gap: { control: "text" },
    columns: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const SingleRow: Story = {
  render: (args) => html`
    <cv-container gap="${args.gap}" columns="3">
      <div style="background: #d3d3d3; padding: 20px;">Item 1</div>
      <div style="background: #a9a9a9; padding: 20px;">Item 2</div>
      <div style="background: #777777; padding: 20px;">Item 3</div>
    </cv-container>
  `,
  args: { gap: "16px" },
};

export const MultiRow: Story = {
  render: (args) => html`
    <cv-container gap="${args.gap}" columns="2">
      <div style="background: #d3d3d3; padding: 20px;">Item 1</div>
      <div style="background: #a9a9a9; padding: 20px;">Item 2</div>
      <div style="background: #777777; padding: 20px;">Item 3</div>
      <div style="background: #555555; padding: 20px;">Item 4</div>
    </cv-container>
  `,
  args: { gap: "16px" },
};
