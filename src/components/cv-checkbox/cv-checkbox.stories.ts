import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './index';

export default {
  title: 'Components/cv-checkbox',
  component: 'cv-checkbox',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    value: { control: 'text' },
    name: { control: 'text' },
    onCvChange: { action: 'cv-change' },
  },
};

const Template = ({ label, checked, disabled, indeterminate, value, name, slotContent, onCvChange }) => html`
  <cv-checkbox
    .label=${label}
    ?checked=${checked}
    ?disabled=${disabled}
    ?indeterminate=${indeterminate}
    value=${ifDefined(value || undefined)}
    name=${ifDefined(name || undefined)}
    @cv-change=${onCvChange}
  >
    ${slotContent ? slotContent : ''}
  </cv-checkbox>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
  checked: false,
  disabled: false,
  indeterminate: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Checkbox',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Checkbox',
  checked: false,
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: 'Disabled & Checked',
  checked: true,
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: 'Indeterminate State',
  indeterminate: true,
};

export const WithValueAndName = Template.bind({});
WithValueAndName.args = {
  label: 'Option 1',
  value: 'option1',
  name: 'options',
};

export const WithSlottedLabel = Template.bind({});
WithSlottedLabel.args = {
  checked: true,
  slotContent: html`<strong>Rich <em>Label</em> Content</strong>`,
};

export const MultipleCheckboxes = (args) => html`
  <cv-checkbox name="group" label="Option A" value="a" @cv-change=${args.onCvChange}></cv-checkbox>
  <br />
  <cv-checkbox name="group" label="Option B" value="b" checked @cv-change=${args.onCvChange}></cv-checkbox>
  <br />
  <cv-checkbox name="group" label="Option C (Indeterminate)" value="c" indeterminate @cv-change=${args.onCvChange}></cv-checkbox>
  <br />
  <cv-checkbox name="group" label="Option D (Disabled)" value="d" disabled @cv-change=${args.onCvChange}></cv-checkbox>
`;
MultipleCheckboxes.args = {
  onCvChange: (e) => console.log('Checkbox changed:', e.detail),
};
