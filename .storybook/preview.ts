import { setCustomElementsManifest } from "@storybook/web-components";

setCustomElementsManifest(customElements);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
