import type { StorybookConfig } from "@storybook/react-webpack5";
import { configureSort } from "storybook-multilevel-sort";

configureSort({
  storyOrder: {
    Documentation: null,
    Foundation: null,
    // assets: null, 
    Core: {
      Core: {

      },
      Other: {

      },
    },
    Features: {
      'Cart & Checkout': {
        '*': {'Abandoned Cart': null}
      },
    },
    '**': { default: null }
  }
})

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
    "@storybook/addon-themes",
    "storybook-multilevel-sort",
    "@storybook/addon-knobs",
    { name: 'storybook-design-token', options: {preserveCSSVars: true} }, 
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        jsxOptions: {},
        csfPluginOptions: null,
        mdxPluginOptions: {},
        configureJSX: true,
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  //staticDirs: ["..\\public"],
  // currently ommitted and will prevent Storybook from serving any static assets
  staticDirs: [],
};
export default config;
