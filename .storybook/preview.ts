import type { Preview } from "@storybook/react";
// import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const MY_VIEWPORTS = {
  Mobile: {
    name: "Mobile",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  Tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  Desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: "1024px",
    },
  }
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: MY_VIEWPORTS
    }, 
    designToken: {
      defaultTab: 'Colors'
    },
  },
};

export default preview;
