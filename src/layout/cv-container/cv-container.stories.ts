import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "./index.ts";

const meta: Meta = {
  component: "cv-container",
  title: "Layout/Container",
  tags: ["autodocs"],
  argTypes: {
    gap: { control: "text" },
    columns: { control: { type: "number", min: 1, max: 12 } },
    inner: { control: "boolean" },
    hasBorder: { control: "boolean" },
    borderColor: { control: "color" }
  },
};

export default meta;
type Story = StoryObj;

export const SingleRow: Story = {
  render: (args) => html`
    <cv-container 
      gap="${args.gap}" 
      columns="${args.columns}"
      ?inner="${args.inner}"
      ?has-border="${args.hasBorder}"
      border-color="${args.borderColor || ''}"
    >
      <div style="background: #d3d3d3; padding: 20px;">Item 1</div>
      <div style="background: #a9a9a9; padding: 20px;">Item 2</div>
      <div style="background: #777777; padding: 20px;">Item 3</div>
    </cv-container>
  `,
  args: { 
    gap: "16px",
    columns: 3,
    inner: false,
    hasBorder: true,
    borderColor: "#d0d0d0"
  },
};

export const MultiRow: Story = {
  render: (args) => html`
    <cv-container 
      gap="${args.gap}" 
      columns="${args.columns}"
      ?inner="${args.inner}"
      ?has-border="${args.hasBorder}"
      border-color="${args.borderColor || ''}"
    >
      <div style="background: #d3d3d3; padding: 20px;">Item 1</div>
      <div style="background: #a9a9a9; padding: 20px;">Item 2</div>
      <div style="background: #777777; padding: 20px;">Item 3</div>
      <div style="background: #555555; padding: 20px;">Item 4</div>
    </cv-container>
  `,
  args: { 
    gap: "16px",
    columns: 2,
    inner: false,
    hasBorder: true,
    borderColor: "#d0d0d0"
  },
};

export const NoBorder: Story = {
  render: (args) => html`
    <cv-container 
      gap="${args.gap}" 
      columns="${args.columns}"
      ?inner="${args.inner}"
      ?has-border="${args.hasBorder}"
    >
      <div style="background: #d3d3d3; padding: 20px;">Item 1</div>
      <div style="background: #a9a9a9; padding: 20px;">Item 2</div>
      <div style="background: #777777; padding: 20px;">Item 3</div>
    </cv-container>
  `,
  args: { 
    gap: "16px",
    columns: 3,
    inner: false,
    hasBorder: false
  },
};

export const CustomBorder: Story = {
  render: (args) => html`
    <cv-container 
      gap="${args.gap}" 
      columns="${args.columns}"
      ?has-border="${args.hasBorder}"
      border-color="${args.borderColor}"
    >
      <div style="background: #d3d3d3; padding: 20px;">Item 1</div>
      <div style="background: #a9a9a9; padding: 20px;">Item 2</div>
      <div style="background: #777777; padding: 20px;">Item 3</div>
    </cv-container>
  `,
  args: { 
    gap: "16px",
    columns: 3,
    hasBorder: true,
    borderColor: "#007bff"
  },
};

export const InnerContainer: Story = {
  render: (args) => html`
    <cv-container 
      gap="16px" 
      columns="1"
      ?has-border="${true}"
    >
      <div style="padding: 20px;">
        <h3>Outer Container</h3>
        <cv-container 
          gap="8px" 
          columns="2"
          ?inner="${true}"
          ?has-border="${args.hasBorder}"
          border-color="${args.borderColor || ''}"
        >
          <div style="background: #d3d3d3; padding: 20px;">Inner Item 1</div>
          <div style="background: #a9a9a9; padding: 20px;">Inner Item 2</div>
        </cv-container>
      </div>
    </cv-container>
  `,
  args: { 
    hasBorder: true,
    borderColor: "#e0e0e0"
  },
};