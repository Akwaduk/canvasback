import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import ".";

const meta = {
  title: "Layout/Footer",
  tags: ["autodocs"],
  render: () => html`
    <cv-footer>&copy; 2025 Canvasback. All rights reserved.</cv-footer>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
