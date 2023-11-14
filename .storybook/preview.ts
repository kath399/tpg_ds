import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import "../src/components/color-scheme.css"
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
    docs: {
      
    },
    a11y: {
      // Optional selector to inspect
      element: '#storybook-root',
      config: {
        reporter: [
          
        ],
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      // Axe's options parameter
      options: {
        storySort: (story1, story2) => globalThis['storybook-multilevel-sort:storySort'](story1, story2)
      },
      // Optional flag to prevent the automatic check
      manual: false,
    },
  },
};

//export default preview;
export default {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'light',
    }),
  ],

  ...preview,
};



