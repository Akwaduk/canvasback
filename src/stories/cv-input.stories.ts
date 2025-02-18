import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../components/cv-input";

export default {
  title: "Components/Canvasback Input",
  component: "cv-input",
  argTypes: {
    value: { control: "text" },
  },
} as Meta;

const Template = ({ value }: { value: string }) => html`
  <cv-input value="${value}">
    <span slot="label">Enter Name:</span>
  </cv-input>
`;

export const Default: StoryObj = {
    args: {
        render: Template,
        args: { value: "Hello World" },
    }
};
