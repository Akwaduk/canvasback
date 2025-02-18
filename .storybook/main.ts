import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  framework: "@storybook/web-components-vite",
  stories: ["../src/stories/**/*.stories.ts"],
  addons: ["@storybook/addon-essentials"],
  core: { builder: "@storybook/builder-vite" },
};

export default config;