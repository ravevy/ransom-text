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

export const AlignedCenter: Story = {
  args: {
    text: "this is a center aligned text",
    align: "center",
    size: 40,
  },
};

export const AlignedLeft: Story = {
  args: {
    text: "this is a left aligned text",
    align: "start",
    size: 40,
  },
};

export const AlignedRight: Story = {
  args: {
    text: "this is a right aligned text",
    align: "end",
    size: 40,
  },
};

export const Alphabet: Story = {
  args: {
    text: "A A A A A A A A A A B B B B B B B C C C C C D D D D D E E E E E E E E E E F F F F F F F G G G G G H H H H H H I I I I I I I I I I J J J J J J J K K K K K K L L L L L L L L L L M M M M M M M M M M N N N N N N N N N N O O O O O O O O O O P P P P P P P Q Q Q Q Q R R R R R R R R R R S S S S S S S S S S S S S S S S S S S T T T T T T T T T T",
    size: 40,
  },
};

export const Numbers: Story = {
  args: {
    text: "0 0 0 0 0 0 0 1 1 1 1 2 2 2 2 2 2 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 8 9 9 9 9 9 ",
    size: 40,
  },
};

export const SpecialCharacters: Story = {
  args: {
    text: "+ + + + - - - - % % % % & & & & ? ? ? ? ! ! ! ! , , , , , , : : : : : ( ) ( ) ( ) ( ) [ ] [ ] [ ] [ ] [ ] @ @ @ @ @ * * * * * # # # # ^ ^ ^ ^",
    size: 40,
  },
};
