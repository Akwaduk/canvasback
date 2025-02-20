import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import ".";

const meta = {
  title: "Layout/Nav",
  tags: ["autodocs"],
  render: () => html`
    <cv-nav>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </cv-nav>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
