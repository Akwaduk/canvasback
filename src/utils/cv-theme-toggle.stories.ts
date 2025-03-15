// src/components/theme/cv-theme-toggle.stories.ts
import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './index.ts';

const meta: Meta = {
  title: 'Theme/ThemeToggle',
  component: 'cv-theme-toggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A toggle button to switch between light and dark themes'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div>
      <h2>Theme Toggle</h2>
      <p>Click the button below to toggle between light and dark themes.</p>
      <cv-theme-toggle></cv-theme-toggle>
    </div>
  `
};