import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../dist/custom-elements.json"; // Ensure this path is correct

import '../src/styles/global.css';

setCustomElementsManifest(customElements);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};