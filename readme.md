# Canvasback UI Library Documentation

## Introduction
Canvasback is a UI component library built using Web Components and Lit, designed to provide reusable and lightweight elements for modern web applications.

## Installation
To install and set up Canvasback in your project, run:
```sh x64
bun install
```
```sh arm
yarn install
```

## Development Environment
To work with Canvasback effectively, ensure you have the following tools installed:
- **Node.js** or **Yarn** or **Deno** or **Bun** or **SHE'S JUST THE FLAVOR OF THE WEEK** (LTS version)
- **Vite** (for fast builds)
- **Storybook** (for visual UI testing)
- **Vitest** (for unit testing)
- **Playwright** (for browser testing)

### Required Packages
To install development dependencies, run:
```sh
npm install -D vite typescript lit vite-plugin-dts rollup eslint prettier eslint-plugin-lit vitest playwright storybook

yarn add -D vite typescript lit vite-plugin-dts rollup eslint prettier eslint-plugin-lit vitest playwright storybook

bun install -D vite typescript lit vite-plugin-dts rollup eslint prettier eslint-plugin-lit vitest playwright storybook
```

## Project Structure
```
canvasback/
│── .storybook/              # Storybook configuration
│   │── main.ts              # Main Storybook config (uses Vite)
│   │── preview.ts           # Global decorators & styles
│── src/                     # Main source folder
│   │── components/          # Web Components (Lit)
│   │   │── cv-input.ts
│   │   │── cv-dropdown.ts
│   │   │── cv-table.ts
│   │   │── index.ts         # Imports all components
│   │── stories/             # Storybook stories
│   │   │── cv-input.stories.ts
│   │   │── cv-dropdown.stories.ts
│── dist/                    # Compiled output
│   │── components/
│   │   │── cv-input.js
│   │   │── cv-dropdown.js
│── tsconfig.json            # TypeScript configuration
│── vite.config.ts           # Vite config for building
│── package.json             # Project metadata & scripts
│── README.md                # Documentation
```

## Components
### 1️⃣ cv-input
A custom input field component.
#### Usage:
```html
<cv-input @cv-input-change="console.log(event.detail)">
  <span slot="label">Enter Text:</span>
</cv-input>
```

### 2️⃣ cv-dropdown
A dropdown component with a label.
#### Usage:
```html
<cv-dropdown @cv-dropdown-change="console.log(event.detail)">
  <span slot="label">Select an option:</span>
  <option>Option 1</option>
  <option>Option 2</option>
</cv-dropdown>
```

### 3️⃣ cv-table
A simple table component.
#### Usage:
```html
<cv-table>
  <thead slot="header">
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody slot="body">
    <tr><td>John</td><td>30</td></tr>
    <tr><td>Jane</td><td>25</td></tr>
  </tbody>
</cv-table>
```

## Storybook Integration
To preview components using Storybook, ensure you have it installed and run:
```sh
npm run storybook
```

```sh yarn
yarn run storybook
```

### Example: `cv-input.stories.ts`
```ts
import "../components/cv-input";

export default {
  title: "Components/CvInput",
  component: "cv-input",
  argTypes: {
    value: { control: "text" },
  },
};

const Template = ({ value }) => `
  <cv-input value="${value}">
    <span slot="label">Enter Name:</span>
  </cv-input>
`;

export const Default = Template.bind({});
Default.args = { value: "Hello World" };
```

# Generating `custom-elements.json` for Canvasback Web Components

## **📌 What is `custom-elements.json`?**
The `custom-elements.json` file is a **metadata file** that documents Web Components, making them compatible with **Storybook, VS Code, and other tooling**.

This is the command to run to generate the manifest.
```
npx @custom-elements-manifest/analyzer analyze --litelement --outdir dist
```sh

Once run, it will generate a file in the following folder.
```
dist/custom-elements.json
```

To develop you'll also want to use Visual Studio Code as well as the lit-plugin.
