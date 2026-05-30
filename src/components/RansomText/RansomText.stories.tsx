import type { Meta, StoryObj } from "@storybook/react-vite";

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

export const Gallery: Story = {
  args: {
    text: "A A A A A A A A A A B B B B B B B C C C C C D D D D D E E E E E E E E E E F F F F F F F G G G G G H H H H H H I I I I I I I I I I J J J J J J J K K K K K K L L L L L L L L L L M M M M M M M M M M N N N N N N N N N N O O O O O O O O O O P P P P P P P Q Q Q Q Q R R R R R R R R R R S S S S S S S S S S S S S S S S S S S T T T T T T T T T T",
    size: 40,
  },
};
