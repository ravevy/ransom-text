import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    config.define = {
      ...config.define,
      "process.env.RANSOM_TEXT_ASSET_URL": JSON.stringify(
        process.env.RANSOM_TEXT_ASSET_URL || null,
      ),
    };
    return config;
  },
};

export default config;
