import type { Meta, StoryObj } from "@storybook/react";

import RansomText from "./RansomText";

const meta = {
  title: "RansomText",
  component: RansomText,
} satisfies Meta<typeof RansomText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Test Ransom Text!",
    size: 40,
  },
};
