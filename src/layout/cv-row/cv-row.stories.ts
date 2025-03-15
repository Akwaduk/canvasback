// src/components/layout/cv-row/cv-row.stories.ts
import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './index.ts';

const meta: Meta = {
  title: 'Layout/Row',
  component: 'cv-row',
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
      description: 'Horizontal alignment of items'
    },
    valign: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Vertical alignment of items'
    },
    gap: {
      control: { type: 'text' },
      description: 'Gap between row items'
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'Whether items should wrap'
    },
    responsive: {
      control: { type: 'select' },
      options: ['stack', 'none'],
      description: 'Responsive behavior'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Row component for horizontal layouts within a grid system'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create row items
const createRowItem = (content: string, color: string = '#f0f0f0', width: string = '100px', height: string = '80px') => html`
  <div style="background-color: ${color}; width: ${width}; height: ${height}; display: flex; align-items: center; justify-content: center; color: ${isLightColor(color) ? 'black' : 'white'}; border-radius: 4px;">
    ${content}
  </div>
`;

// Helper function to determine if a color is light (for text contrast)
function isLightColor(color: string): boolean {
  return ['#f0f0f0', '#ffffff', '#f5f5f5', '#eeeeee'].includes(color.toLowerCase());
}

export const Default: Story = {
  args: {
    align: 'start',
    valign: 'center',
    gap: '1rem',
    wrap: false,
    responsive: 'stack'
  },
  render: (args) => html`
    <cv-row 
      align="${args.align}" 
      valign="${args.valign}"
      gap="${args.gap || ''}"
      ?wrap="${args.wrap}"
      responsive="${args.responsive}">
      ${createRowItem('Item 1', '#4A90E2')}
      ${createRowItem('Item 2', '#50E3C2')}
      ${createRowItem('Item 3', '#F5A623')}
    </cv-row>
  `
};

export const Alignment: Story = {
  render: () => html`
    <div style="display: grid; gap: 2rem;">
      <div>
        <h3 style="margin-top: 0;">align="start"</h3>
        <cv-row align="start" gap="1rem">
          ${createRowItem('Item 1', '#4A90E2')}
          ${createRowItem('Item 2', '#50E3C2')}
          ${createRowItem('Item 3', '#F5A623')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">align="center"</h3>
        <cv-row align="center" gap="1rem">
          ${createRowItem('Item 1', '#4A90E2')}
          ${createRowItem('Item 2', '#50E3C2')}
          ${createRowItem('Item 3', '#F5A623')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">align="end"</h3>
        <cv-row align="end" gap="1rem">
          ${createRowItem('Item 1', '#4A90E2')}
          ${createRowItem('Item 2', '#50E3C2')}
          ${createRowItem('Item 3', '#F5A623')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">align="space-between"</h3>
        <cv-row align="space-between" gap="1rem">
          ${createRowItem('Item 1', '#4A90E2')}
          ${createRowItem('Item 2', '#50E3C2')}
          ${createRowItem('Item 3', '#F5A623')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">align="space-around"</h3>
        <cv-row align="space-around" gap="1rem">
          ${createRowItem('Item 1', '#4A90E2')}
          ${createRowItem('Item 2', '#50E3C2')}
          ${createRowItem('Item 3', '#F5A623')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">align="space-evenly"</h3>
        <cv-row align="space-evenly" gap="1rem">
          ${createRowItem('Item 1', '#4A90E2')}
          ${createRowItem('Item 2', '#50E3C2')}
          ${createRowItem('Item 3', '#F5A623')}
        </cv-row>
      </div>
    </div>
  `
};

export const VerticalAlignment: Story = {
  render: () => html`
    <div style="display: grid; gap: 2rem;">
      <div>
        <h3 style="margin-top: 0;">valign="start"</h3>
        <cv-row valign="start" gap="1rem" style="height: 120px; background-color: #f8f8f8; padding: 1rem; border-radius: 4px;">
          ${createRowItem('Item 1', '#4A90E2', '100px', '60px')}
          ${createRowItem('Item 2', '#50E3C2', '100px', '80px')}
          ${createRowItem('Item 3', '#F5A623', '100px', '100px')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">valign="center"</h3>
        <cv-row valign="center" gap="1rem" style="height: 120px; background-color: #f8f8f8; padding: 1rem; border-radius: 4px;">
          ${createRowItem('Item 1', '#4A90E2', '100px', '60px')}
          ${createRowItem('Item 2', '#50E3C2', '100px', '80px')}
          ${createRowItem('Item 3', '#F5A623', '100px', '100px')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">valign="end"</h3>
        <cv-row valign="end" gap="1rem" style="height: 120px; background-color: #f8f8f8; padding: 1rem; border-radius: 4px;">
          ${createRowItem('Item 1', '#4A90E2', '100px', '60px')}
          ${createRowItem('Item 2', '#50E3C2', '100px', '80px')}
          ${createRowItem('Item 3', '#F5A623', '100px', '100px')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">valign="stretch"</h3>
        <cv-row valign="stretch" gap="1rem" style="height: 120px; background-color: #f8f8f8; padding: 1rem; border-radius: 4px;">
          ${createRowItem('Item 1', '#4A90E2', '100px', 'auto')}
          ${createRowItem('Item 2', '#50E3C2', '100px', 'auto')}
          ${createRowItem('Item 3', '#F5A623', '100px', 'auto')}
        </cv-row>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">valign="baseline"</h3>
        <cv-row valign="baseline" gap="1rem" style="height: 120px; background-color: #f8f8f8; padding: 1rem; border-radius: 4px;">
          <div style="background-color: #4A90E2; width: 100px; padding: 20px 0; text-align: center; color: white; border-radius: 4px;">
            <span style="font-size: 14px;">Small</span>
          </div>
          <div style="background-color: #50E3C2; width: 100px; padding: 20px 0; text-align: center; color: black; border-radius: 4px;">
            <span style="font-size: 20px;">Medium</span>
          </div>
          <div style="background-color: #F5A623; width: 100px; padding: 20px 0; text-align: center; color: black; border-radius: 4px;">
            <span style="font-size: 28px;">Large</span>
          </div>
        </cv-row>
      </div>
    </div>
  `
};

export const Wrapping: Story = {
  args: {
    align: 'start',
    valign: 'center',
    gap: '1rem',
    wrap: true
  },
  render: (args) => html`
    <div style="max-width: 350px; border: 1px dashed #ccc; padding: 1rem; border-radius: 4px;">
      <cv-row 
        align="${args.align}" 
        valign="${args.valign}"
        gap="${args.gap || ''}"
        ?wrap="${args.wrap}">
        ${createRowItem('Item 1', '#4A90E2')}
        ${createRowItem('Item 2', '#50E3C2')}
        ${createRowItem('Item 3', '#F5A623')}
        ${createRowItem('Item 4', '#D0021B')}
        ${createRowItem('Item 5', '#9013FE')}
      </cv-row>
    </div>
  `
};

export const ResponsiveStacking: Story = {
  args: {
    align: 'center',
    gap: '1rem',
    responsive: 'stack'
  },
  render: (args) => html`
    <div style="padding: 1rem; background-color: #f8f8f8; border-radius: 4px; margin-bottom: 1rem;">
      <p style="margin-top: 0;">Resize the browser window below 768px to see items stack vertically.</p>
    </div>
    
    <cv-row 
      align="${args.align}" 
      gap="${args.gap || ''}"
      responsive="${args.responsive}">
      ${createRowItem('Item 1', '#4A90E2', '150px')}
      ${createRowItem('Item 2', '#50E3C2', '150px')}
      ${createRowItem('Item 3', '#F5A623', '150px')}
    </cv-row>
  `
};