// src/components/layout/cv-column/cv-column.stories.ts
import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './index.ts';
import '../cv-grid';

const meta: Meta = {
  title: 'Layout/Column',
  component: 'cv-column',
  tags: ['autodocs'],
  argTypes: {
    span: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Column span (1-12)'
    },
    offset: {
      control: { type: 'number', min: 0, max: 11 },
      description: 'Offset before column (0-11)'
    },
    responsive: {
      control: { type: 'text' },
      description: 'Responsive span sizes in format "xs:12 sm:6 md:4 lg:3"'
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      description: 'Horizontal alignment of column content'
    },
    valign: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Vertical alignment of column content'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Column component for vertical layouts within a grid system'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create column content
const createColumnContent = (content: string, color: string = '#f0f0f0', height: string = '80px') => html`
  <div style="background-color: ${color}; height: ${height}; display: flex; align-items: center; justify-content: center; color: ${isLightColor(color) ? 'black' : 'white'}; border-radius: 4px; width: 100%;">
    ${content}
  </div>
`;

// Helper function to determine if a color is light (for text contrast)
function isLightColor(color: string): boolean {
  return ['#f0f0f0', '#ffffff', '#f5f5f5', '#eeeeee'].includes(color.toLowerCase());
}

export const Default: Story = {
  args: {
    span: 6,
    offset: 0,
    align: 'start',
    valign: 'start'
  },
  render: (args) => html`
    <cv-grid columns="12" gap="1rem" style="background-color: #f8f8f8; padding: 1rem; border-radius: 4px;">
      <cv-column 
        span="${args.span}"
        offset="${args.offset}"
        align="${args.align}"
        valign="${args.valign}">
        ${createColumnContent(`Span ${args.span}, Offset ${args.offset}`, '#4A90E2')}
      </cv-column>
    </cv-grid>
  `
};

export const SpanExamples: Story = {
  render: () => html`
    <cv-grid columns="12" gap="1rem">
      <cv-column span="12">
        ${createColumnContent('span="12"', '#4A90E2')}
      </cv-column>
      
      <cv-column span="6">
        ${createColumnContent('span="6"', '#50E3C2')}
      </cv-column>
      <cv-column span="6">
        ${createColumnContent('span="6"', '#50E3C2')}
      </cv-column>
      
      <cv-column span="4">
        ${createColumnContent('span="4"', '#F5A623')}
      </cv-column>
      <cv-column span="4">
        ${createColumnContent('span="4"', '#F5A623')}
      </cv-column>
      <cv-column span="4">
        ${createColumnContent('span="4"', '#F5A623')}
      </cv-column>
      
      <cv-column span="3">
        ${createColumnContent('span="3"', '#D0021B')}
      </cv-column>
      <cv-column span="3">
        ${createColumnContent('span="3"', '#D0021B')}
      </cv-column>
      <cv-column span="3">
        ${createColumnContent('span="3"', '#D0021B')}
      </cv-column>
      <cv-column span="3">
        ${createColumnContent('span="3"', '#D0021B')}
      </cv-column>
    </cv-grid>
  `
};

export const OffsetExamples: Story = {
  render: () => html`
    <cv-grid columns="12" gap="1rem">
      <cv-column span="6" offset="6">
        ${createColumnContent('span="6" offset="6"', '#4A90E2')}
      </cv-column>
      
      <cv-column span="4" offset="4">
        ${createColumnContent('span="4" offset="4"', '#50E3C2')}
      </cv-column>
      <cv-column span="4">
        ${createColumnContent('span="4"', '#50E3C2')}
      </cv-column>
      
      <cv-column span="3" offset="3">
        ${createColumnContent('span="3" offset="3"', '#F5A623')}
      </cv-column>
      <cv-column span="3" offset="3">
        ${createColumnContent('span="3" offset="3"', '#F5A623')}
      </cv-column>
    </cv-grid>
  `
};

export const NestedColumns: Story = {
  render: () => html`
    <cv-grid columns="12" gap="1rem">
      <cv-column span="6">
        ${createColumnContent('Parent Column 1', '#4A90E2')}
        
        <cv-grid columns="12" gap="0.5rem" style="margin-top: 0.5rem;">
          <cv-column span="6">
            ${createColumnContent('Nested 6', '#9013FE', '60px')}
          </cv-column>
          <cv-column span="6">
            ${createColumnContent('Nested 6', '#9013FE', '60px')}
          </cv-column>
        </cv-grid>
      </cv-column>
      
      <cv-column span="6">
        ${createColumnContent('Parent Column 2', '#50E3C2')}
        
        <cv-grid columns="12" gap="0.5rem" style="margin-top: 0.5rem;">
          <cv-column span="4">
            ${createColumnContent('Nested 4', '#9013FE', '60px')}
          </cv-column>
          <cv-column span="4">
            ${createColumnContent('Nested 4', '#9013FE', '60px')}
          </cv-column>
          <cv-column span="4">
            ${createColumnContent('Nested 4', '#9013FE', '60px')}
          </cv-column>
        </cv-grid>
      </cv-column>
    </cv-grid>
  `
};

export const Responsive: Story = {
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
        ${createColumnContent('Responsive Column', '#4A90E2')}
      </cv-column>
      <cv-column responsive="xs:12 sm:6 md:4 lg:3">
        ${createColumnContent('Responsive Column', '#50E3C2')}
      </cv-column>
      <cv-column responsive="xs:12 sm:6 md:4 lg:3">
        ${createColumnContent('Responsive Column', '#F5A623')}
      </cv-column>
      <cv-column responsive="xs:12 sm:6 md:4 lg:3">
        ${createColumnContent('Responsive Column', '#D0021B')}
      </cv-column>
    </cv-grid>
  `
};

export const Alignment: Story = {
  render: () => html`
    <div style="display: grid; gap: 2rem;">
      <div>
        <h3 style="margin-top: 0;">align="start", valign="start"</h3>
        <cv-grid columns="3" gap="1rem" style="background-color: #f8f8f8; padding: 1rem; border-radius: 4px; height: 150px;">
          <cv-column align="start" valign="start">
            ${createColumnContent('Text\nAlign Start', '#4A90E2', '80px')}
          </cv-column>
          <cv-column>
            ${createColumnContent('Default', '#50E3C2', '80px')}
          </cv-column>
          <cv-column>
            ${createColumnContent('Default', '#F5A623', '80px')}
          </cv-column>
        </cv-grid>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">align="center", valign="center"</h3>
        <cv-grid columns="3" gap="1rem" style="background-color: #f8f8f8; padding: 1rem; border-radius: 4px; height: 150px;">
          <cv-column align="center" valign="center">
            ${createColumnContent('Text\nAlign Center', '#4A90E2', '80px')}
          </cv-column>
          <cv-column>
            ${createColumnContent('Default', '#50E3C2', '80px')}
          </cv-column>
          <cv-column>
            ${createColumnContent('Default', '#F5A623', '80px')}
          </cv-column>
        </cv-grid>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">align="end", valign="end"</h3>
        <cv-grid columns="3" gap="1rem" style="background-color: #f8f8f8; padding: 1rem; border-radius: 4px; height: 150px;">
          <cv-column align="end" valign="end">
            ${createColumnContent('Text\nAlign End', '#4A90E2', '80px')}
          </cv-column>
          <cv-column>
            ${createColumnContent('Default', '#50E3C2', '80px')}
          </cv-column>
          <cv-column>
            ${createColumnContent('Default', '#F5A623', '80px')}
          </cv-column>
        </cv-grid>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">Mixed alignment</h3>
        <cv-grid columns="3" gap="1rem" style="background-color: #f8f8f8; padding: 1rem; border-radius: 4px; height: 150px;">
          <cv-column align="start" valign="start">
            ${createColumnContent('Start', '#4A90E2', '80px')}
          </cv-column>
          <cv-column align="center" valign="center">
            ${createColumnContent('Center', '#50E3C2', '80px')}
          </cv-column>
          <cv-column align="end" valign="end">
            ${createColumnContent('End', '#F5A623', '80px')}
          </cv-column>
        </cv-grid>
      </div>
      
      <div>
        <h3 style="margin-top: 0;">valign="stretch" (full height)</h3>
        <cv-grid columns="3" gap="1rem" style="background-color: #f8f8f8; padding: 1rem; border-radius: 4px; height: 150px;">
          <cv-column valign="stretch">
            <div style="background-color: #4A90E2; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px; width: 100%; height: 100%;">
              Full Height
            </div>
          </cv-column>
          <cv-column>
            ${createColumnContent('Default', '#50E3C2', '80px')}
          </cv-column>
          <cv-column>
            ${createColumnContent('Default', '#F5A623', '80px')}
          </cv-column>
        </cv-grid>
      </div>
    </div>
  `
};

export const ComplexLayout: Story = {
  render: () => html`
    <div style="padding: 1rem; background-color: #f8f8f8; border-radius: 4px; margin-bottom: 1rem;">
      <p style="margin-top: 0;">Example of a complex layout using the grid and column system</p>
    </div>
    
    <cv-grid columns="12" gap="1rem">
      <!-- Header -->
      <cv-column span="12">
        ${createColumnContent('Header', '#4A90E2', '60px')}
      </cv-column>
      
      <!-- Sidebar -->
      <cv-column span="3">
        ${createColumnContent('Sidebar', '#9013FE', '200px')}
      </cv-column>
      
      <!-- Main Content -->
      <cv-column span="9">
        <cv-grid columns="12" gap="1rem">
          <!-- Content Header -->
          <cv-column span="12">
            ${createColumnContent('Content Header', '#50E3C2', '60px')}
          </cv-column>
          
          <!-- Main Cards -->
          <cv-column span="8">
            ${createColumnContent('Main Content Area', '#F5A623', '120px')}
          </cv-column>
          
          <cv-column span="4">
            ${createColumnContent('Sidebar Right', '#D0021B', '120px')}
          </cv-column>
          
          <!-- Footer Cards -->
          <cv-column span="4">
            ${createColumnContent('Card 1', '#4A90E2', '80px')}
          </cv-column>
          
          <cv-column span="4">
            ${createColumnContent('Card 2', '#50E3C2', '80px')}
          </cv-column>
          
          <cv-column span="4">
            ${createColumnContent('Card 3', '#F5A623', '80px')}
          </cv-column>
          
          <!-- Content Footer -->
          <cv-column span="12">
            ${createColumnContent('Content Footer', '#50E3C2', '60px')}
          </cv-column>
        </cv-grid>
      </cv-column>
      
      <!-- Footer -->
      <cv-column span="12">
        ${createColumnContent('Footer', '#4A90E2', '60px')}
      </cv-column>
    </cv-grid>
  `
};

export const ColumnOffsetAndResponsive: Story = {
  render: () => html`
    <div style="padding: 1rem; background-color: #f8f8f8; border-radius: 4px; margin-bottom: 1rem;">
      <p style="margin-top: 0;">Combining offset and responsive behavior</p>
    </div>
    
    <cv-grid columns="12" gap="1rem">
      <cv-column span="10" offset="1" responsive="xs:12 sm:10 md:8 lg:6">
        ${createColumnContent('Centered, Responsive Column', '#4A90E2')}
      </cv-column>
      
      <cv-column span="5" offset="1" responsive="xs:12 sm:10 md:5 lg:5">
        ${createColumnContent('Column 1', '#50E3C2')}
      </cv-column>
      
      <cv-column span="5" offset="0" responsive="xs:12 sm:10 md:5 lg:5">
        ${createColumnContent('Column 2', '#F5A623')}
      </cv-column>
    </cv-grid>
  `
};