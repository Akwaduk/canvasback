// src/components/layout/cv-grid/cv-grid.stories.ts
import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './index.ts';
import '../cv-column';

const meta: Meta = {
  title: 'Layout/Grid',
  component: 'cv-grid',
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '6', '12', 'auto', '1fr', 'repeat(3, 1fr)'],
      description: 'Grid column template'
    },
    gap: {
      control: { type: 'text' },
      description: 'Grid gap'
    },
    responsive: {
      control: { type: 'select' },
      options: ['stack', 'shrink'],
      description: 'Responsive behavior'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Grid container component for creating responsive layouts'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create colored grid cells
const createGridCell = (content: string, color: string = '#f0f0f0') => html`
  <div style="background-color: ${color}; padding: 1rem; text-align: center; border-radius: 4px; color: ${isLightColor(color) ? 'black' : 'white'}">
    ${content}
  </div>
`;

// Helper function to determine if a color is light (for text contrast)
function isLightColor(color: string): boolean {
  // Simple approximation - default to false to ensure readability
  return ['#f0f0f0', '#ffffff', '#f5f5f5', '#eeeeee'].includes(color.toLowerCase());
}

export const Default: Story = {
  args: {
    columns: '3',
    gap: '1rem',
    responsive: 'stack'
  },
  render: (args) => html`
    <cv-grid columns="${args.columns}" gap="${args.gap || ''}" responsive="${args.responsive}">
      ${createGridCell('Column 1', '#4A90E2')}
      ${createGridCell('Column 2', '#50E3C2')}
      ${createGridCell('Column 3', '#F5A623')}
    </cv-grid>
  `
};

export const TwoColumns: Story = {
  args: {
    columns: '2',
    gap: '1rem',
    responsive: 'stack'
  },
  render: (args) => html`
    <cv-grid columns="${args.columns}" gap="${args.gap || ''}" responsive="${args.responsive}">
      ${createGridCell('Column 1', '#4A90E2')}
      ${createGridCell('Column 2', '#50E3C2')}
    </cv-grid>
  `
};

export const FourColumns: Story = {
  args: {
    columns: '4',
    gap: '1rem',
    responsive: 'stack'
  },
  render: (args) => html`
    <cv-grid columns="${args.columns}" gap="${args.gap || ''}" responsive="${args.responsive}">
      ${createGridCell('Column 1', '#4A90E2')}
      ${createGridCell('Column 2', '#50E3C2')}
      ${createGridCell('Column 3', '#F5A623')}
      ${createGridCell('Column 4', '#D0021B')}
    </cv-grid>
  `
};

export const CustomGridTemplate: Story = {
  args: {
    columns: 'repeat(2, 1fr) 2fr',
    gap: '1rem',
    responsive: 'stack'
  },
  render: (args) => html`
    <cv-grid columns="${args.columns}" gap="${args.gap || ''}" responsive="${args.responsive}">
      ${createGridCell('1fr', '#4A90E2')}
      ${createGridCell('1fr', '#50E3C2')}
      ${createGridCell('2fr', '#F5A623')}
    </cv-grid>
  `
};

export const WithColumns: Story = {
  render: () => html`
    <cv-grid columns="12" gap="1rem">
      <cv-column span="6">
        ${createGridCell('Span 6', '#4A90E2')}
      </cv-column>
      <cv-column span="6">
        ${createGridCell('Span 6', '#50E3C2')}
      </cv-column>
      <cv-column span="4">
        ${createGridCell('Span 4', '#F5A623')}
      </cv-column>
      <cv-column span="4">
        ${createGridCell('Span 4', '#D0021B')}
      </cv-column>
      <cv-column span="4">
        ${createGridCell('Span 4', '#9013FE')}
      </cv-column>
      <cv-column span="3">
        ${createGridCell('Span 3', '#4A90E2')}
      </cv-column>
      <cv-column span="9">
        ${createGridCell('Span 9', '#50E3C2')}
      </cv-column>
    </cv-grid>
  `
};

export const ColumnOffset: Story = {
  render: () => html`
    <cv-grid columns="12" gap="1rem">
      <cv-column span="6">
        ${createGridCell('Span 6', '#4A90E2')}
      </cv-column>
      <cv-column span="6">
        ${createGridCell('Span 6', '#50E3C2')}
      </cv-column>
      <cv-column span="4">
        ${createGridCell('Span 4', '#F5A623')}
      </cv-column>
      <cv-column span="4" offset="4">
        ${createGridCell('Span 4, Offset 4', '#D0021B')}
      </cv-column>
      <cv-column span="3" offset="3">
        ${createGridCell('Span 3, Offset 3', '#9013FE')}
      </cv-column>
      <cv-column span="3" offset="3">
        ${createGridCell('Span 3, Offset 3', '#4A90E2')}
      </cv-column>
    </cv-grid>
  `
};

export const ResponsiveColumns: Story = {
  render: () => html`
    <div>
      <p style="margin-top: 0;">Resize the browser window to see responsive behavior:</p>
      <ul>
        <li>xs: Full width (12/12)</li>
        <li>sm: Half width (6/12)</li>
        <li>md: One-third width (4/12)</li>
        <li>lg: One-quarter width (3/12)</li>
      </ul>
    </div>
    
    <cv-grid columns="12" gap="1rem">
      <cv-column responsive="xs:12 sm:6 md:4 lg:3">
        ${createGridCell('Responsive Column', '#4A90E2')}
      </cv-column>
      <cv-column responsive="xs:12 sm:6 md:4 lg:3">
        ${createGridCell('Responsive Column', '#50E3C2')}
      </cv-column>
      <cv-column responsive="xs:12 sm:6 md:4 lg:3">
        ${createGridCell('Responsive Column', '#F5A623')}
      </cv-column>
      <cv-column responsive="xs:12 sm:6 md:4 lg:3">
        ${createGridCell('Responsive Column', '#D0021B')}
      </cv-column>
    </cv-grid>
  `
};