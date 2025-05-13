import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index'; // Import the component definition

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Forms/Dropdown',
  component: 'cv-dropdown', // The custom element tag
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'A customizable dropdown selection control',
    docs: {
      description: {
        component: `
## Dropdown Component

The \`cv-dropdown\` component provides a customizable dropdown selection control.
It supports labels, default selection, and can be populated with any options you need.

### Features
- Custom styling that adapts to theme variables
- Event handling with cv-dropdown-change event
- Support for disabled options and preselected values
- Ability to add a descriptive label
- Support for option groups

### Basic Usage
\`\`\`html
<cv-dropdown label="Select option:">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</cv-dropdown>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    selectedValue: { control: 'text', description: 'The current selected value of the dropdown' },
    label: { control: 'text', description: 'Label text for the dropdown' },
    disabled: { control: 'boolean', description: 'Whether the dropdown is disabled' }
  },
};

export default meta;
type Story = StoryObj;

/**
 * Basic dropdown with default options
 */
export const Default = () => {
  // Create a function to log changes
  const handleChange = (e: CustomEvent) => {
    console.log('Selected value:', e.detail);
    // You can also update a display element to show the selection
    const resultElement = document.getElementById('default-result');
    if (resultElement) {
      resultElement.textContent = `Selected: ${e.detail}`;
    }
  };

  return html`
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
      <h3>Default Dropdown</h3>
      <p>
        The default dropdown provides a simple selection control with basic options.
        Try selecting an option to see the event handling in action.
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">
        <cv-dropdown @cv-dropdown-change=${handleChange}>
          <option value="" disabled selected>Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </cv-dropdown>
        
        <div id="default-result" style="margin-top: 10px; font-style: italic; color: #666;">
          No option selected
        </div>
      </div>
      
      <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h4>Code Example:</h4>
        <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-dropdown @cv-dropdown-change=${(e: CustomEvent) => console.log('Selected value:', e.detail)}&gt;
  &lt;option value="" disabled selected&gt;Select an option&lt;/option&gt;
  &lt;option value="option1"&gt;Option 1&lt;/option&gt;
  &lt;option value="option2"&gt;Option 2&lt;/option&gt;
  &lt;option value="option3"&gt;Option 3&lt;/option&gt;
&lt;/cv-dropdown&gt;
        </pre>
      </div>
    </div>
  `;
};

/**
 * Dropdown with a descriptive label
 */
export const WithLabel = () => {
  // Create a function to log changes and update display
  const handleChange = (e: CustomEvent) => {
    console.log('Selected value:', e.detail);
    const resultElement = document.getElementById('label-result');
    if (resultElement) {
      resultElement.textContent = `Selected: ${e.detail}`;
    }
  };

  return html`
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
      <h3>Dropdown With Label</h3>
      <p>
        Dropdowns can include a descriptive label to provide context for the selection.
        This example demonstrates how to add a label using the <code>label</code> property.
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">
        <cv-dropdown 
          label="Choose Wisely:"
          selectedValue="option2" 
          @cv-dropdown-change=${handleChange}>
          <option value="" disabled>Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </cv-dropdown>
        
        <div id="label-result" style="margin-top: 10px; font-style: italic; color: #666;">
          Selected: option2
        </div>
      </div>
      
      <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h4>Code Example:</h4>
        <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-dropdown 
  label="Choose Wisely:"
  selectedValue="option2" 
  @cv-dropdown-change=${(e: CustomEvent) => console.log('Selected value:', e.detail)}&gt;
  &lt;option value="" disabled&gt;Select an option&lt;/option&gt;
  &lt;option value="option1"&gt;Option 1&lt;/option&gt;
  &lt;option value="option2"&gt;Option 2&lt;/option&gt;
  &lt;option value="option3"&gt;Option 3&lt;/option&gt;
&lt;/cv-dropdown&gt;
        </pre>
      </div>
    </div>
  `;
};

/**
 * Dropdown with country options
 */
export const Countries = () => {
  const handleChange = (e: CustomEvent) => {
    console.log('Country selected:', e.detail);
    const resultElement = document.getElementById('country-result');
    if (resultElement) {
      resultElement.textContent = `Selected country code: ${e.detail}`;
    }
  };

  return html`
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
      <h3>Country Selection Dropdown</h3>
      <p>
        This example shows how to create a dropdown with a list of country options.
        It's commonly used in forms that require country selection, such as shipping addresses or user profiles.
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">
        <cv-dropdown 
          label="Select Country:"
          @cv-dropdown-change=${handleChange}>
          <option value="" disabled selected>Choose a country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="au">Australia</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
          <option value="jp">Japan</option>
          <option value="br">Brazil</option>
          <option value="in">India</option>
          <option value="cn">China</option>
        </cv-dropdown>
        
        <div id="country-result" style="margin-top: 10px; font-style: italic; color: #666;">
          No country selected
        </div>
      </div>
      
      <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h4>Code Example:</h4>
        <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-dropdown 
  label="Select Country:"
  @cv-dropdown-change=${(e: CustomEvent) => console.log('Country selected:', e.detail)}&gt;
  &lt;option value="" disabled selected&gt;Choose a country&lt;/option&gt;
  &lt;option value="us"&gt;United States&lt;/option&gt;
  &lt;option value="ca"&gt;Canada&lt;/option&gt;
  &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
  &lt;!-- Additional countries... --&gt;
&lt;/cv-dropdown&gt;
        </pre>
      </div>
    </div>
  `;
};

/**
 * Dropdown with grouped options
 */
export const GroupedOptions = () => {
  const handleChange = (e: CustomEvent) => {
    console.log('Item selected:', e.detail);
    const resultElement = document.getElementById('group-result');
    if (resultElement) {
      resultElement.textContent = `Selected item: ${e.detail}`;
    }
  };

  return html`
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
      <h3>Grouped Options Dropdown</h3>
      <p>
        Dropdown options can be organized into logical groups using the <code>&lt;optgroup&gt;</code> element.
        This creates a hierarchical structure that makes it easier for users to find relevant options
        when dealing with large option sets.
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">
        <cv-dropdown 
          label="Product Categories:"
          @cv-dropdown-change=${handleChange}>
          <option value="" disabled selected>Select a category</option>
          <optgroup label="Electronics">
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="tablets">Tablets</option>
            <option value="accessories">Accessories</option>
          </optgroup>
          <optgroup label="Clothing">
            <option value="shirts">Shirts</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="accessories-clothing">Accessories</option>
          </optgroup>
          <optgroup label="Home & Kitchen">
            <option value="appliances">Appliances</option>
            <option value="furniture">Furniture</option>
            <option value="kitchenware">Kitchenware</option>
          </optgroup>
        </cv-dropdown>
        
        <div id="group-result" style="margin-top: 10px; font-style: italic; color: #666;">
          No item selected
        </div>
      </div>
      
      <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h4>Code Example:</h4>
        <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-dropdown 
  label="Product Categories:"
  @cv-dropdown-change=${(e: CustomEvent) => console.log('Item selected:', e.detail)}&gt;
  &lt;option value="" disabled selected&gt;Select a category&lt;/option&gt;
  &lt;optgroup label="Electronics"&gt;
    &lt;option value="smartphones"&gt;Smartphones&lt;/option&gt;
    &lt;option value="laptops"&gt;Laptops&lt;/option&gt;
    &lt;option value="tablets"&gt;Tablets&lt;/option&gt;
    &lt;option value="accessories"&gt;Accessories&lt;/option&gt;
  &lt;/optgroup&gt;
  &lt;optgroup label="Clothing"&gt;
    &lt;option value="shirts"&gt;Shirts&lt;/option&gt;
    &lt;option value="pants"&gt;Pants&lt;/option&gt;
    &lt;!-- More clothing options... --&gt;
  &lt;/optgroup&gt;
  &lt;!-- Additional option groups... --&gt;
&lt;/cv-dropdown&gt;
        </pre>
      </div>
    </div>
  `;
};

/**
 * Dropdown with many color options
 */
export const Colors = () => {
  const handleChange = (e: CustomEvent) => {
    console.log('Color selected:', e.detail);
    const resultElement = document.getElementById('color-result');
    if (resultElement) {
      resultElement.textContent = `Selected color: ${e.detail}`;
      // Also update the color preview
      const previewElement = document.getElementById('color-preview');
      if (previewElement) {
        previewElement.style.backgroundColor = e.detail;
      }
    }
  };

  return html`
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
      <h3>Color Selection Dropdown</h3>
      <p>
        This example demonstrates a dropdown with many color options.
        It's useful for applications that need color selection functionality,
        such as design tools, theming options, or product customization.
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">
        <cv-dropdown 
          label="Select Color:"
          @cv-dropdown-change=${handleChange}>
          <option value="" disabled selected>Choose a color</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="brown">Brown</option>
          <option value="teal">Teal</option>
          <option value="navy">Navy</option>
          <option value="maroon">Maroon</option>
        </cv-dropdown>
        
        <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
          <div id="color-preview" style="width: 20px; height: 20px; border: 1px solid #ccc; border-radius: 50%;"></div>
          <div id="color-result" style="font-style: italic; color: #666;">
            No color selected
          </div>
        </div>
      </div>
      
      <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h4>Code Example:</h4>
        <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;cv-dropdown 
  label="Select Color:"
  @cv-dropdown-change=${(e: CustomEvent) => console.log('Color selected:', e.detail)}&gt;
  &lt;option value="" disabled selected&gt;Choose a color&lt;/option&gt;
  &lt;option value="red"&gt;Red&lt;/option&gt;
  &lt;option value="orange"&gt;Orange&lt;/option&gt;
  &lt;option value="yellow"&gt;Yellow&lt;/option&gt;
  &lt;!-- Additional colors... --&gt;
&lt;/cv-dropdown&gt;
        </pre>
      </div>
    </div>
  `;
};

/**
 * Multiple dropdowns in a form layout
 */
export const FormLayout = () => {
  const handleCountryChange = (e: CustomEvent) => {
    console.log('Country selected:', e.detail);
    const resultElement = document.getElementById('form-result');
    if (resultElement) {
      const stateElement = document.getElementById('state-dropdown') as any;
      const yearElement = document.getElementById('year-dropdown') as any;
      
      resultElement.textContent = `Form values: Country=${e.detail || 'none'}, State=${stateElement?.selectedValue || 'none'}, Year=${yearElement?.selectedValue || 'none'}`;
    }
  };

  const handleStateChange = (e: CustomEvent) => {
    console.log('State selected:', e.detail);
    const resultElement = document.getElementById('form-result');
    if (resultElement) {
      const countryElement = document.getElementById('country-dropdown') as any;
      const yearElement = document.getElementById('year-dropdown') as any;
      
      resultElement.textContent = `Form values: Country=${countryElement?.selectedValue || 'none'}, State=${e.detail || 'none'}, Year=${yearElement?.selectedValue || 'none'}`;
    }
  };

  const handleYearChange = (e: CustomEvent) => {
    console.log('Year selected:', e.detail);
    const resultElement = document.getElementById('form-result');
    if (resultElement) {
      const countryElement = document.getElementById('country-dropdown') as any;
      const stateElement = document.getElementById('state-dropdown') as any;
      
      resultElement.textContent = `Form values: Country=${countryElement?.selectedValue || 'none'}, State=${stateElement?.selectedValue || 'none'}, Year=${e.detail || 'none'}`;
    }
  };

  return html`
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-width: 800px;">
      <h3>Dropdown Form Layout</h3>
      <p>
        This example demonstrates how multiple dropdowns can be used together in a form layout.
        Each dropdown can have its own label and set of options, creating a complete form experience.
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; border: 1px solid #e0e0e0; padding: 20px; border-radius: 4px;">
        <cv-dropdown 
          id="country-dropdown"
          label="Country:" 
          @cv-dropdown-change=${handleCountryChange}>
          <option value="" disabled selected>Select country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="au">Australia</option>
        </cv-dropdown>
        
        <cv-dropdown 
          id="state-dropdown"
          label="State/Province:" 
          @cv-dropdown-change=${handleStateChange}>
          <option value="" disabled selected>Select state</option>
          <option value="al">Alabama</option>
          <option value="ak">Alaska</option>
          <option value="az">Arizona</option>
          <option value="ca">California</option>
          <option value="co">Colorado</option>
          <option value="fl">Florida</option>
          <option value="ny">New York</option>
          <option value="tx">Texas</option>
        </cv-dropdown>
        
        <cv-dropdown 
          id="year-dropdown"
          label="Year:" 
          @cv-dropdown-change=${handleYearChange}>
          <option value="" disabled selected>Select year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </cv-dropdown>
      </div>
      
      <div id="form-result" style="margin-top: 10px; font-style: italic; color: #666;">
        Form values: Country=none, State=none, Year=none
      </div>
      
      <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h4>Code Example:</h4>
        <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto;">
&lt;div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;"&gt;
  &lt;cv-dropdown 
    label="Country:" 
    @cv-dropdown-change=${(e: CustomEvent) => console.log('Country selected:', e.detail)}&gt;
    &lt;option value="" disabled selected&gt;Select country&lt;/option&gt;
    &lt;option value="us"&gt;United States&lt;/option&gt;
    &lt;!-- Additional countries... --&gt;
  &lt;/cv-dropdown&gt;
  
  &lt;cv-dropdown 
    label="State/Province:" 
    @cv-dropdown-change=${(e: CustomEvent) => console.log('State selected:', e.detail)}&gt;
    &lt;option value="" disabled selected&gt;Select state&lt;/option&gt;
    &lt;option value="al"&gt;Alabama&lt;/option&gt;
    &lt;!-- Additional states... --&gt;
  &lt;/cv-dropdown&gt;
  
  &lt;cv-dropdown 
    label="Year:" 
    @cv-dropdown-change=${(e: CustomEvent) => console.log('Year selected:', e.detail)}&gt;
    &lt;option value="" disabled selected&gt;Select year&lt;/option&gt;
    &lt;option value="2025"&gt;2025&lt;/option&gt;
    &lt;!-- Additional years... --&gt;
  &lt;/cv-dropdown&gt;
&lt;/div&gt;
        </pre>
      </div>
    </div>
  `;
};
